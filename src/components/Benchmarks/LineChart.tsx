import React, { useId, useMemo, useState, type ReactNode } from 'react';

export interface Series {
    /** Stable key of the series: its color follows it, never its position. */
    key: string;
    label: string;
    /** Slot of the categorical palette (0–7), assigned by the caller in a fixed order. */
    slot: number;
    /** Values by category of the x axis; `null` when the series has no value there. */
    values: (number | null)[];
}

interface Props {
    title: string;
    subtitle?: string;
    /** Categories of the x axis (releases), in order. */
    categories: string[];
    series: Series[];
    format: (value: number) => string;
    /** Name of the measure, for the y axis and the table. */
    unit: string;
}

const WIDTH = 560;
const HEIGHT = 250;
const MARGIN = { top: 14, right: 104, bottom: 30, left: 66 };
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom;

function niceTicks(min: number, max: number, log: boolean): number[] {
    if (log) {
        const ticks: number[] = [];
        for (let exp = Math.floor(Math.log10(min)); exp <= Math.ceil(Math.log10(max)); exp++) ticks.push(10 ** exp);
        return ticks.filter((tick) => tick >= min / 1.0001 && tick <= max * 1.0001);
    }
    const span = max - min || max || 1;
    const step = 10 ** Math.floor(Math.log10(span / 4));
    const nice = [1, 2, 2.5, 5, 10].map((m) => m * step).find((s) => span / s <= 5) ?? step * 10;
    const ticks: number[] = [];
    for (let tick = Math.ceil(min / nice) * nice; tick <= max + nice * 1e-9; tick += nice) ticks.push(Number(tick.toPrecision(12)));
    return ticks;
}

/**
 * Line chart of a few series over the releases. A logarithmic y axis is used when the series differ by more than 20×
 * (10 and 500 plugins in the same chart), so every line keeps its shape. Hover a release to read every value.
 */
export default function LineChart({ title, subtitle, categories, series, format, unit }: Props): ReactNode {
    const [hover, setHover] = useState<number | null>(null);
    const [table, setTable] = useState(false);
    const titleId = useId();

    const geometry = useMemo(() => {
        const values = series.flatMap((s) => s.values).filter((v): v is number => v !== null && v > 0);
        if (values.length === 0) return null;
        const rawMin = Math.min(...values);
        const rawMax = Math.max(...values);
        const log = rawMax / rawMin > 20;
        const min = log ? 10 ** Math.floor(Math.log10(rawMin)) : 0;
        const max = log ? 10 ** Math.ceil(Math.log10(rawMax)) : rawMax * 1.12;
        const y = (value: number) =>
            MARGIN.top + PLOT_H - (log ? (Math.log10(value) - Math.log10(min)) / (Math.log10(max) - Math.log10(min)) : (value - min) / (max - min)) * PLOT_H;
        const step = categories.length > 1 ? PLOT_W / (categories.length - 1) : 0;
        const x = (index: number) => MARGIN.left + (categories.length > 1 ? index * step : PLOT_W / 2);
        return { log, y, x, step, ticks: niceTicks(log ? min : 0, max, log) };
    }, [series, categories]);

    if (!geometry) return null;
    const { x, y, ticks, log, step } = geometry;
    const direct = series.length <= 4;
    // Every other label when the releases do not fit.
    const labelEvery = Math.max(1, Math.ceil(categories.length / 10));

    return (
        <figure className="axb-chart glass" aria-labelledby={titleId}>
            <header className="axb-chart__header">
                <div>
                    <h3 id={titleId} className="axb-chart__title">
                        {title}
                    </h3>
                    {subtitle && <p className="axb-chart__subtitle">{subtitle}</p>}
                </div>
                <button type="button" className="axb-chart__toggle" onClick={() => setTable(!table)} aria-pressed={table}>
                    {table ? 'Chart' : 'Table'}
                </button>
            </header>

            {series.length > 1 && (
                <ul className="axb-legend">
                    {series.map((s) => (
                        <li key={s.key}>
                            <span className={`axb-swatch axb-series-${s.slot}`} aria-hidden="true" />
                            {s.label}
                        </li>
                    ))}
                </ul>
            )}

            {table ? (
                <div className="axb-table-wrap">
                    <table className="axb-table">
                        <thead>
                            <tr>
                                <th scope="col">Release</th>
                                {series.map((s) => (
                                    <th key={s.key} scope="col">
                                        {s.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={category}>
                                    <th scope="row">{category}</th>
                                    {series.map((s) => (
                                        <td key={s.key}>{s.values[index] === null ? '—' : format(s.values[index] as number)}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="axb-chart__plot" onMouseLeave={() => setHover(null)}>
                    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={`${title}: ${unit} by release${log ? ', logarithmic scale' : ''}`}>
                        {ticks.map((tick) => (
                            <g key={tick} className="axb-grid">
                                <line x1={MARGIN.left} x2={MARGIN.left + PLOT_W} y1={y(tick)} y2={y(tick)} />
                                <text x={MARGIN.left - 8} y={y(tick)} dy="0.32em" textAnchor="end">
                                    {format(tick)}
                                </text>
                            </g>
                        ))}
                        {categories.map((category, index) =>
                            index % labelEvery === 0 || index === categories.length - 1 ? (
                                <text key={category} className="axb-axis-label" x={x(index)} y={HEIGHT - 10} textAnchor="middle">
                                    {category}
                                </text>
                            ) : null
                        )}
                        {hover !== null && <line className="axb-crosshair" x1={x(hover)} x2={x(hover)} y1={MARGIN.top} y2={MARGIN.top + PLOT_H} />}

                        {series.map((s) => {
                            const points = s.values.map((value, index) => (value === null || value <= 0 ? null : ([x(index), y(value)] as const)));
                            const segments: string[] = [];
                            let current = '';
                            for (const point of points) {
                                if (!point) {
                                    if (current) segments.push(current);
                                    current = '';
                                    continue;
                                }
                                current += `${current ? 'L' : 'M'}${point[0].toFixed(1)},${point[1].toFixed(1)}`;
                            }
                            if (current) segments.push(current);
                            const last = [...points].reverse().find(Boolean);
                            return (
                                <g key={s.key} className={`axb-series axb-series-${s.slot}`}>
                                    {segments.map((d) => (
                                        <path key={d} d={d} className="axb-line" />
                                    ))}
                                    {points.map((point, index) =>
                                        point ? <circle key={index} cx={point[0]} cy={point[1]} r={hover === index ? 5 : 4} className="axb-marker" /> : null
                                    )}
                                    {direct && last && (
                                        <text className="axb-direct-label" x={last[0] + 10} y={last[1]} dy="0.32em">
                                            {s.label.length > 14 ? `${s.label.slice(0, 13)}…` : s.label}
                                        </text>
                                    )}
                                </g>
                            );
                        })}

                        {/* Hit areas: one column per release, wider than the markers. */}
                        {categories.map((category, index) => (
                            <rect
                                key={category}
                                className="axb-hit"
                                x={x(index) - Math.max(step, 24) / 2}
                                y={MARGIN.top}
                                width={Math.max(step, 24)}
                                height={PLOT_H}
                                onMouseEnter={() => setHover(index)}
                                onFocus={() => setHover(index)}
                                tabIndex={0}
                                aria-label={`${category}: ${series.map((s) => `${s.label} ${s.values[index] === null ? 'no data' : format(s.values[index] as number)}`).join(', ')}`}
                            />
                        ))}
                    </svg>

                    {hover !== null && (
                        <div className="axb-tooltip" style={{ left: `${(x(hover) / WIDTH) * 100}%` }} role="status">
                            <strong>{categories[hover]}</strong>
                            {series.map((s) => (
                                <span key={s.key} className="axb-tooltip__row">
                                    <span className={`axb-swatch axb-series-${s.slot}`} aria-hidden="true" />
                                    <span className="axb-tooltip__label">{s.label}</span>
                                    <span className="axb-tooltip__value">{s.values[hover] === null ? '—' : format(s.values[hover] as number)}</span>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {log && <figcaption className="axb-chart__note">Logarithmic scale: the series differ by more than 20×.</figcaption>}
        </figure>
    );
}
