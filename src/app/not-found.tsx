import Link from "next/link";

export default function NotFound() {
  return (
    <div className="main-container" style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>404</h1>
      <p className="tagline" style={{ marginBottom: '2rem' }}>The page you seek has wandered off...</p>
      <div className="star">✦</div>
      <Link
        href="/"
        className="connect-link"
        style={{ marginTop: '2rem' }}
      >
        Return Home
      </Link>
    </div>
  );
}
