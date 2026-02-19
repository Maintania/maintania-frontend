export default function ContactPage() {
  return (
    <section className="section stack contact">
      <div className="section-head">
        <p className="eyebrow">Contact</p>
        <h1>Talk with the Maintania team</h1>
        <p>Tell us your triage volume, repository footprint, and response goals.</p>
      </div>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.com" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Share your workflow, issue volume, and desired automation outcomes"
        />

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}
