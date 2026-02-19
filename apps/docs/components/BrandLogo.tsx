import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link href="/" className="brand-logo" aria-label="Maintania AI home">
      <span className="brand-mark" aria-hidden>
        <i />
      </span>
      {compact ? null : <strong>Maintania AI</strong>}
    </Link>
  );
}
