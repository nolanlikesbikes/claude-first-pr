import React from 'react';

const CATEGORY_ACCENT = {
  memory: 'var(--accent-terracotta)',
  focus: 'var(--accent-sky)',
  speed: 'var(--accent-gold)',
  language: 'var(--accent-plum)',
  logic: 'var(--accent-forest)',
};

/**
 * GameCard — intentional addition. One tile in the game catalog:
 * icon chip, title, category tag, and a last-played/best stat.
 */
export function GameCard({ icon, title, category = 'memory', stat, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const accent = CATEGORY_ACCENT[category] || CATEGORY_ACCENT.memory;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 220,
        padding: 20,
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: `all var(--duration-normal) var(--ease-bounce)`,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        ...style,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 'var(--radius-md)',
          background: accent,
          color: 'var(--color-text-on-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 26,
        }}
      >
        {icon}
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--color-text)' }}>
        {title}
      </div>
      <span
        style={{
          alignSelf: 'flex-start',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 'var(--tracking-wide)',
          textTransform: 'uppercase',
          color: accent,
        }}
      >
        {category}
      </span>
      {stat && (
        <div style={{ fontSize: 14, color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border)', paddingTop: 12 }}>
          {stat}
        </div>
      )}
    </div>
  );
}
