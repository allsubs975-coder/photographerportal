interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <div className="flex items-center gap-4">
        {align === "center" && <span className="h-px w-10 bg-gold-500/50" />}
        <span className="label-kicker">{kicker}</span>
        {align === "center" && <span className="h-px w-10 bg-gold-500/50" />}
      </div>
      <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
