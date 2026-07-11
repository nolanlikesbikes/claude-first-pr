import React from 'react';

const SIZES = {
  md: { height: 56, padding: '0 24px', fontSize: 18 },
  lg: { height: 64, padding: '0 32px', fontSize: 20 },
};

const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-text-on-accent)',
    border: '1px solid transparent',
  },
  secondary: {
    background: 'var(--color-secondary)',
    color: 'var(--color-text-on-accent)',
    border: '1px solid transparent',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-text)',
    border: '1px solid var(--color-border-strong)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text)',
    border: '1px solid transparent',
  },
};

const HOVER_BG = {
  primary: 'var(--color-primary-hover)',
  secondary: 'var(--color-secondary-hover)',
  outline: 'var(--n-20)',
  ghost: 'var(--n-20)',
};

/**
 * Button — primary interactive control. Bouncy press feedback by default.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: s.height,
        padding: s.padding,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: s.fontSize,
        borderRadius: 'var(--radius-full)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: `transform var(--duration-fast) var(--ease-press), background var(--duration-normal) var(--ease-standard), box-shadow var(--duration-normal) var(--ease-standard)`,
        transform: active ? 'scale(0.96)' : hover ? 'translateY(-2px)' : 'none',
        boxShadow: hover && !disabled ? 'var(--shadow-md)' : 'none',
        ...v,
        background: hover && !disabled ? HOVER_BG[variant] : v.background,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
