import React from 'react';

/**
 * ProgressBar — streak/completion visualization. Intentional addition:
 * progress tracking is core to the product (daily streaks, level completion).
 */
export function ProgressBar({ value = 0, max = 100, tone = 'primary', label, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const fill = tone === 'secondary' ? 'var(--color-secondary)' : tone === 'info' ? 'var(--accent-sky)' : 'var(--color-primary)';
  return (
    <div style={{ fontFamily: 'var(--font-body)', ...style }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 15, color: 'currentColor', opacity: 0.8, fontWeight: 600 }}>
          <span>{label}</span>
          <span>{value}/{max}</span>
        </div>
      )}
      <div style={{ height: 16, borderRadius: 'var(--radius-full)', background: 'var(--n-20)', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            borderRadius: 'var(--radius-full)',
            background: fill,
            transition: `width var(--duration-slow) var(--ease-out)`,
          }}
        />
      </div>
    </div>
  );
}
