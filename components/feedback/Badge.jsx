import React from 'react';

const TONES = {
  neutral: { bg: 'var(--n-20)', color: 'var(--n-80)' },
  primary: { bg: 'var(--color-primary-soft)', color: 'var(--accent-terracotta-strong)' },
  secondary: { bg: 'var(--color-secondary-soft)', color: 'var(--accent-forest-strong)' },
  success: { bg: 'var(--status-success-soft)', color: 'var(--status-success)' },
  warning: { bg: 'var(--status-warning-soft)', color: '#7a5a00' },
  danger: { bg: 'var(--status-danger-soft)', color: 'var(--status-danger)' },
};

/**
 * Badge — small status pill, non-interactive.
 */
export function Badge({ children, tone = 'neutral', style }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 28,
        padding: '0 12px',
        borderRadius: 'var(--radius-full)',
        background: t.bg,
        color: t.color,
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 'var(--weight-semibold)',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
