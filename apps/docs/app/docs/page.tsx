import { DocsSidebar } from "../../components/DocsSidebar";
import { SearchInput } from "../../components/SearchInput";
import { docsSections } from "../../lib/constant/site-data";

export default function DocsPage() {
  return (
    <div className="docs-layout">
      <DocsSidebar />
      <article className="docs-content">
        <header>
          <p className="eyebrow">Documentation</p>
          <h1>Maintania AI docs</h1>
          <p>Install, configure, and scale maintainer intelligence workflows.</p>
          <SearchInput />
        </header>

        {docsSections.map((section) => (
          <section id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>
    </div>
  );
}
