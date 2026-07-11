import React from 'react';

const CATEGORY_COLORS = {
  memory: { bg: 'var(--accent-terracotta-soft)', color: 'var(--accent-terracotta-strong)' },
  focus: { bg: 'var(--accent-sky-soft)', color: 'var(--accent-sky)' },
  speed: { bg: 'var(--accent-gold-soft)', color: '#7a5a00' },
  language: { bg: 'var(--accent-plum-soft)', color: 'var(--accent-plum)' },
  logic: { bg: 'var(--accent-forest-soft)', color: 'var(--accent-forest-strong)' },
};

/**
 * Tag — category label used on game tiles (color-codes game type).
 */
export function Tag({ children, category = 'memory', style }) {
  const c = CATEGORY_COLORS[category] || CATEGORY_COLORS.memory;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 26,
        padding: '0 12px',
        borderRadius: 'var(--radius-full)',
        background: c.bg,
        color: c.color,
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
