import React from 'react';

/**
 * Tabs — segmented navigation control, pill-style active state.
 */
export function Tabs({ tabs = [], value, onChange, style }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        gap: 4,
        padding: 6,
        background: 'var(--n-20)',
        borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-body)',
        ...style,
      }}
    >
      {tabs.map(tab => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            onClick={() => onChange && onChange(tab.value)}
            style={{
              height: 48,
              padding: '0 22px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontSize: 16,
              fontWeight: 600,
              background: active ? 'var(--color-surface)' : 'transparent',
              color: active ? 'var(--color-text)' : 'var(--color-text-muted)',
              boxShadow: active ? 'var(--shadow-sm)' : 'none',
              transition: `all var(--duration-normal) var(--ease-bounce)`,
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
