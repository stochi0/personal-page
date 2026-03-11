import Link from "next/link";

export default function NotFound() {
  return (
    <div className="main-container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>404</h1>
      <p className="tagline" style={{ marginBottom: '2rem' }}>The page you seek has wandered off...</p>
      <div className="star">✦</div>
      <div
        className="connect-links"
        style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/" className="connect-link">
          Home
        </Link>
        <Link href="/work" className="connect-link">
          Work
        </Link>
        <Link href="/projects" className="connect-link">
          Projects
        </Link>
        <Link href="/writings" className="connect-link">
          Writings
        </Link>
      </div>
    </div>
  );
}
