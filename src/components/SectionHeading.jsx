// Reusable eyebrow + title + optional subtitle block.
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-3xl font-bold sm:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base ${light ? 'text-white/70' : 'text-slatey'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
