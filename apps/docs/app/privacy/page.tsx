export default function PrivacyPage() {
  return (
    <article className="section legal stack">
      <p className="eyebrow">Legal</p>
      <h1>Privacy Policy</h1>

      <h2>1. Information we collect</h2>
      <p>
        We collect account details, workspace settings, and repository metadata required to deliver maintainer intelligence features.
      </p>

      <h2>2. How we use information</h2>
      <p>
        Data is used to classify issues, detect duplicates, generate documentation-backed responses, and improve reliability.
      </p>

      <h2>3. Retention and deletion</h2>
      <p>
        Data is retained for the minimum period needed to provide services, comply with legal obligations, and resolve disputes.
      </p>

      <h2>4. Data sharing</h2>
      <p>
        We do not sell customer data. We may rely on subprocessors that support infrastructure, observability, and security operations.
      </p>

      <h2>5. User rights</h2>
      <p>
        Customers may request export or deletion of account data subject to applicable legal and contractual constraints.
      </p>
    </article>
  );
}
