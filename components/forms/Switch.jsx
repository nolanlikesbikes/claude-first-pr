import React from 'react';

/**
 * Switch — on/off toggle with a bouncy thumb slide.
 */
export function Switch({ label, checked = false, onChange, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 14, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--color-text)', ...style }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
      />
      <span
        style={{
          width: 56,
          height: 32,
          borderRadius: 'var(--radius-full)',
          background: checked ? 'var(--color-primary)' : 'var(--n-30)',
          position: 'relative',
          flexShrink: 0,
          transition: `background var(--duration-normal) var(--ease-standard)`,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 3,
            left: checked ? 27 : 3,
            width: 26,
            height: 26,
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-sm)',
            transition: `left var(--duration-normal) var(--ease-bounce)`,
          }}
        />
      </span>
      {label}
    </label>
  );
}
