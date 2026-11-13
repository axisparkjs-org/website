import React, { useMemo, useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import LineChart from './LineChart';
import { CLASSIFICATIONS, environmentLabel, packageLabel } from './format';
import { METRICS, packages as packageNames, suiteCharts, type Metric } from './series';
import type { BenchData, ReleaseSummary } from './types';
import './benchmarks.css';

interface Props {
    data: BenchData;
    releases: ReleaseSummary[];
}

/** /benchmarks: evolution of every suite, release after release, with filters by environment, package and metric. */
export default function BenchmarksOverview({ data, releases }: Props): ReactNode {
    const [environment, setEnvironment] = useState(data.environments[0]?.id ?? '');
    const [packageName, setPackageName] = useState('scenarios');
    const [metric, setMetric] = useState<Metric>('p50');
    const names = useMemo(() => packageNames(data), [data]);
    const charts = useMemo(() => suiteCharts(data, environment, packageName, metric), [data, environment, packageName, metric]);

    return (
        <div className="axb-content">
            <div className="axb-filters glass" role="group" aria-label="Filters">
                <label>
                    <span>Environment</span>
                    <select value={environment} onChange={(event) => setEnvironment(event.target.value)}>
                        {data.environments.map((env) => (
                            <option key={env.id} value={env.id}>
                                {environmentLabel(env.id)}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    <span>Package</span>
                    <select value={packageName} onChange={(event) => setPackageName(event.target.value)}>
                        {names.map((name) => (
                            <option key={name} value={name}>
                                {packageLabel(name)}
                            </option>
                        ))}
                    </select>
                </label>
                <div className="axb-segmented" role="radiogroup" aria-label="Metric">
                    {(Object.keys(METRICS) as Metric[]).map((key) => (
                        <button key={key} type="button" role="radio" aria-checked={metric === key} onClick={() => setMetric(key)}>
                            {METRICS[key].label}
                        </button>
                    ))}
                </div>
            </div>

            <p className="axb-note">
                Only the results of the same machine and Node.js version are compared.{' '}
                {metric === 'ratio' && 'The ratio is the median time of the task divided by the median time of the same work without AxiSpark.js: 1× is no overhead.'}
                {metric === 'heap' && 'The memory is measured in the boot scenarios: heapUsed retained by the application after init(), after a gc().'}
                {metric === 'p50' && 'Lower is better.'}
            </p>

            {charts.length === 0 ? (
                <p className="axb-empty glass">
                    {packageLabel(packageName)} has no {METRICS[metric].label.toLowerCase()} measurements in this environment.
                </p>
            ) : (
                <div className="axb-charts">
                    {charts.map((chart) => (
                        <LineChart
                            key={chart.suite}
                            title={chart.suite}
                            subtitle={chart.hidden ? `${chart.hidden} more tasks in the release reports` : undefined}
                            categories={data.releases}
                            series={chart.series}
                            format={METRICS[metric].format}
                            unit={METRICS[metric].unit}
                        />
                    ))}
                </div>
            )}

            <h2 className="axb-section-title">Release reports</h2>
            <ul className="axb-releases">
                {releases.map((release) => (
                    <li key={release.version} className="glass">
                        <Link to={`/benchmarks/${release.version}`} className="axb-releases__version">
                            {release.version}
                        </Link>
                        <span className="axb-releases__meta">
                            {release.kind === 'backfill' ? 'Measured later · ' : ''}
                            {release.previous ? `vs ${release.previous}` : 'First measured release'}
                        </span>
                        {release.previous && (
                            <span className="axb-releases__summary">
                                {(['regression', 'warning', 'improvement'] as const).map((key) =>
                                    release.summary[key] ? (
                                        <span key={key} className={`axb-badge axb-badge--${key}`}>
                                            {CLASSIFICATIONS[key].icon} {release.summary[key]} {CLASSIFICATIONS[key].label.toLowerCase()}
                                            {release.summary[key] > 1 ? 's' : ''}
                                        </span>
                                    ) : null
                                )}
                                {!release.summary.regression && !release.summary.warning && !release.summary.improvement && <span className="axb-badge axb-badge--stable">• all stable</span>}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
