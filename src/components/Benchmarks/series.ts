import type { Series } from './LineChart';
import type { BenchData, BenchTask } from './types';
import { formatBytes, formatNs, formatRatio } from './format';

export type Metric = 'p50' | 'ratio' | 'heap';

export const METRICS: Record<Metric, { label: string; unit: string; format: (value: number) => string; index: 1 | 2 | 3 }> = {
    p50: { label: 'Time (p50)', unit: 'median latency', format: formatNs, index: 1 },
    ratio: { label: 'Overhead ratio', unit: 'ratio to the reference without the framework', format: formatRatio, index: 2 },
    heap: { label: 'Memory', unit: 'heap retained after init()', format: formatBytes, index: 3 }
};

/** At most 8 series per chart: the categorical palette has 8 slots and is never cycled. */
const MAX_SERIES = 8;

export interface SuiteChart {
    package: string;
    suite: string;
    series: Series[];
    hidden: number;
}

/** One chart per suite of the package, a series per task with values of the metric. */
export function suiteCharts(data: BenchData, environment: string, packageName: string, metric: Metric): SuiteChart[] {
    const values = data.values[environment] ?? {};
    const bySuite = new Map<string, BenchTask[]>();
    for (const task of data.tasks) {
        if (task.package !== packageName) continue;
        bySuite.set(task.suite, [...(bySuite.get(task.suite) ?? []), task]);
    }
    const { index } = METRICS[metric];
    const charts: SuiteChart[] = [];
    for (const [suite, tasks] of bySuite) {
        // The slot follows the position of the task in its suite, so a filter never repaints a series.
        const all = tasks.map((task, slot) => {
            const points = new Map((values[task.id] ?? []).map((point) => [point[0], point[index]]));
            return {
                key: task.id,
                label: task.task,
                slot,
                values: data.releases.map((release) => (points.get(release) ?? null) as number | null)
            };
        });
        const withData = all.filter((s) => s.values.some((value) => value !== null));
        if (withData.length === 0) continue;
        charts.push({ package: packageName, suite, series: withData.slice(0, MAX_SERIES).map((s) => ({ ...s, slot: s.slot % MAX_SERIES })), hidden: Math.max(0, withData.length - MAX_SERIES) });
    }
    return charts;
}

export function packages(data: BenchData): string[] {
    const names = [...new Set(data.tasks.map((task) => task.package))];
    return names.sort((a, b) => (a === 'scenarios' ? -1 : b === 'scenarios' ? 1 : a.localeCompare(b)));
}
