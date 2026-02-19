import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">Product</p>
          <Link href="/">Overview</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/security">Security</Link>
        </div>
        <div>
          <p className="footer-title">Docs</p>
          <Link href="/docs">Docs Home</Link>
          <Link href="/docs#installation">Installation</Link>
          <Link href="/docs#faq">FAQ</Link>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="#">Blog</Link>
        </div>
        <div>
          <p className="footer-title">Legal</p>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/security">Trust</Link>
        </div>
        <div>
          <p className="footer-title">Social</p>
          <Link href="#">GitHub</Link>
          <Link href="#">X</Link>
          <Link href="#">LinkedIn</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>�  Maintania AI</p>
      </div>
    </footer>
  );
}
