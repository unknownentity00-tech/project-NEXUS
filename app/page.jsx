export default function HomePage() {
  return (
    <div>
      <h1>Campus Super App — Project Nexus</h1>
      <p style={{ maxWidth: "700px", marginTop: "1rem" }}>
        Project Nexus unifies academic life, daily campus updates, and AI-powered
        intelligence into a single platform.
      </p>

      <section style={gridStyle}>
        <Card
          title="Academic Cockpit"
          description="Enroll, drop, and track course status with domain-driven logic."
          link="/academic"
        />

        <Card
          title="Daily Pulse"
          description="AI-powered summarization of college-wide emails."
          link="/dailypulse"
        />

        <Card
          title="Student Exchange"
          description="Marketplace, travel sharing, and collaboration (coming soon)."
          disabled
        />

        <Card
          title="Explorer’s Guide"
          description="Discover campus hotspots and local recommendations (planned)."
          disabled
        />
      </section>
    </div>
  );
}

/* ---------------- components ---------------- */

function Card({ title, description, link, disabled }) {
  return (
    <div style={{ ...cardStyle, opacity: disabled ? 0.5 : 1 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {!disabled && (
        <a href={link} style={buttonStyle}>
          Open
        </a>
      )}
    </div>
  );
}

/* ---------------- styles ---------------- */

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
  marginTop: "2rem",
};

const cardStyle = {
  padding: "1.5rem",
  border: "1px solid #1e293b",
  borderRadius: "12px",
  backgroundColor: "#020617",
};

const buttonStyle = {
  display: "inline-block",
  marginTop: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "6px",
  textDecoration: "none",
};