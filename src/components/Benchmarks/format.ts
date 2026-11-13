import type { Classification } from './types';

export function formatNs(ns: number | null | undefined): string {
    if (ns === null || ns === undefined || !Number.isFinite(ns)) return '—';
    if (ns >= 1e9) return `${(ns / 1e9).toFixed(2)} s`;
    if (ns >= 1e6) return `${(ns / 1e6).toFixed(ns >= 1e8 ? 0 : 2)} ms`;
    if (ns >= 1e3) return `${(ns / 1e3).toFixed(ns >= 1e5 ? 0 : 2)} µs`;
    return `${Math.round(ns)} ns`;
}

export function formatOps(ops: number): string {
    if (ops >= 1e6) return `${(ops / 1e6).toFixed(2)} M`;
    if (ops >= 1e3) return `${(ops / 1e3).toFixed(1)} k`;
    return ops.toFixed(0);
}

export function formatBytes(bytes: number | null): string {
    if (bytes === null) return '—';
    if (Math.abs(bytes) >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MiB`;
    return `${(bytes / 1024).toFixed(0)} KiB`;
}

export function formatRatio(ratio: number | null): string {
    if (ratio === null) return '—';
    return `${ratio >= 10 ? ratio.toFixed(0) : ratio.toFixed(2)}×`;
}

export function formatDelta(delta: number | null): string {
    if (delta === null) return '—';
    return `${delta > 0 ? '+' : ''}${delta.toFixed(1)} %`;
}

/** Label and icon of each change: the classification is never shown by color alone. */
export const CLASSIFICATIONS: Record<Classification, { label: string; icon: string }> = {
    improvement: { label: 'Improvement', icon: '▼' },
    stable: { label: 'Stable', icon: '•' },
    warning: { label: 'Warning', icon: '▲' },
    regression: { label: 'Regression', icon: '▲▲' },
    new: { label: 'New', icon: '+' },
    none: { label: '', icon: '' }
};

export function packageLabel(name: string): string {
    return name === 'scenarios' ? 'Scenarios' : name;
}

/** `gh-ubuntu-24.04-4cpu/node-26` → `Node.js 26 · gh-ubuntu-24.04-4cpu` */
export function environmentLabel(id: string): string {
    const [fingerprint, node] = id.split('/node-');
    return `Node.js ${node} · ${fingerprint}`;
}
