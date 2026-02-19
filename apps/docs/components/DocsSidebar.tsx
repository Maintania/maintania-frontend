import Link from "next/link";

const docsLinks = [
  { label: "Getting started", href: "#getting-started" },
  { label: "Installation", href: "#installation" },
  { label: "GitHub integration", href: "#github-integration" },
  { label: "Configuration", href: "#configuration" },
  { label: "FAQ", href: "#faq" },
];

export function DocsSidebar() {
  return (
    <aside className="docs-sidebar" aria-label="Docs navigation">
      <h2>Documentation</h2>
      <nav>
        {docsLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
