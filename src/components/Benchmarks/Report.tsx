import React, { useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { CLASSIFICATIONS, environmentLabel, formatBytes, formatDelta, formatNs, formatOps, formatRatio, packageLabel } from './format';
import type { ReportEnvironment } from './types';
import './benchmarks.css';

interface Props {
    version: string;
    docsVersion: string;
    latest: boolean;
    environments: ReportEnvironment[];
}

/** /benchmarks/<version>: a table per package with the change from the previous release of the same environment. */
export default function BenchmarkReport({ version, environments }: Props): ReactNode {
    const [selected, setSelected] = useState(environments[0]?.id);
    const report = environments.find((env) => env.id === selected) ?? environments[0];
    if (!report) return null;
    const { env, summary } = report;

    return (
        <div className="axb-content">
            {environments.length > 1 && (
                <div className="axb-segmented axb-segmented--tabs" role="tablist" aria-label="Environment">
                    {environments.map((item) => (
                        <button key={item.id} type="button" role="tab" aria-selected={item.id === report.id} onClick={() => setSelected(item.id)}>
                            {environmentLabel(item.id)}
                        </button>
                    ))}
                </div>
            )}

            <dl className="axb-env glass">
                <div>
                    <dt>Node.js</dt>
                    <dd>
                        {env.node} (V8 {env.v8})
                    </dd>
                </div>
                <div>
                    <dt>Machine</dt>
                    <dd>
                        {env.fingerprint} · {env.cpu} · {env.cores} cores · {env.memoryGb} GB
                    </dd>
                </div>
                <div>
                    <dt>Run</dt>
                    <dd>
                        {report.runId} · {report.kind === 'backfill' ? 'measured after the release' : 'measured at the release'} · tinybench {env.tinybench}
                    </dd>
                </div>
                <div>
                    <dt>Compared with</dt>
                    <dd>{report.previous ? <Link to={`/benchmarks/${report.previous}`}>{report.previous}</Link> : 'Nothing: first release measured in this environment'}</dd>
                </div>
            </dl>

            {report.previous && (
                <p className="axb-summary">
                    {(['regression', 'warning', 'improvement', 'stable', 'new'] as const).map((key) => (
                        <span key={key} className={`axb-badge axb-badge--${key}`}>
                            {CLASSIFICATIONS[key].icon} {summary[key]} {CLASSIFICATIONS[key].label.toLowerCase()}
                        </span>
                    ))}
                </p>
            )}

            {report.errors.length > 0 && (
                <div className="axb-errors glass">
                    <strong>Suites that could not run in {version}:</strong>
                    <ul>
                        {report.errors.map((error) => (
                            <li key={error.suite}>
                                <code>{error.suite}</code>: {error.message}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {report.packages.map(({ name, rows }) => (
                <section key={name} className="axb-package">
                    <h2 id={name.replace(/[@/]/g, '') || 'scenarios'}>{packageLabel(name)}</h2>
                    <div className="axb-table-wrap glass">
                        <table className="axb-table axb-table--report">
                            <thead>
                                <tr>
                                    <th scope="col">Suite</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">p50</th>
                                    <th scope="col">± rme</th>
                                    <th scope="col">ops/s</th>
                                    <th scope="col" title="p50 of the task / p50 of the same work without AxiSpark.js">
                                        Ratio
                                    </th>
                                    <th scope="col">Heap</th>
                                    {report.previous && <th scope="col">Δ p50</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.id} className={row.reference ? 'axb-row--reference' : undefined}>
                                        <td>{row.suite}</td>
                                        <td>
                                            <code>{row.task}</code>
                                        </td>
                                        <td>{formatNs(row.p50)}</td>
                                        <td>{row.rme.toFixed(1)} %</td>
                                        <td>{formatOps(row.ops)}</td>
                                        <td title={row.baseline ? `vs ${row.baseline}` : undefined}>{formatRatio(row.ratio)}</td>
                                        <td>{formatBytes(row.heap)}</td>
                                        {report.previous && (
                                            <td>
                                                <span className={`axb-change axb-change--${row.classification}`} title={row.previousP50 !== null ? `Before: ${formatNs(row.previousP50)}` : undefined}>
                                                    {CLASSIFICATIONS[row.classification].icon} {row.classification === 'new' ? 'New' : formatDelta(row.delta)}
                                                    <span className="axb-visually-hidden"> {CLASSIFICATIONS[row.classification].label}</span>
                                                </span>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            ))}
        </div>
    );
}
