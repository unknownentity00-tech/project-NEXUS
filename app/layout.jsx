import "./globals.css";

export const metadata = {
  title: "Project Nexus",
  description: "AI-powered Campus Super App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
          backgroundColor: "#0f172a",
          color: "#e5e7eb",
        }}
      >
        {/* Global App Shell */}
        <header style={headerStyle}>
          <h2>Project Nexus</h2>
          <nav style={navStyle}>
            <a href="/">Dashboard</a>
            <a href="/academic">Academic</a>
            <a href="/dailypulse">Daily Pulse</a>
          </nav>
        </header>

        <main style={mainStyle}>{children}</main>

        <footer style={footerStyle}>
          <p>AI Fusion Hackathon • Built with Next.js</p>
        </footer>
      </body>
    </html>
  );
}

/* ---------------- styles ---------------- */

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  backgroundColor: "#020617",
  borderBottom: "1px solid #1e293b",
};

const navStyle = {
  display: "flex",
  gap: "1.5rem",
};

const mainStyle = {
  padding: "2rem",
  minHeight: "80vh",
};

const footerStyle = {
  textAlign: "center",
  padding: "1rem",
  borderTop: "1px solid #1e293b",
  backgroundColor: "#020617",
};