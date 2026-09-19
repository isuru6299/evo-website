const apiBase = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';

export default function App(){
  return (
    <main className="admin-shell">
      <aside>
        <div className="brand">EVO</div>
        <nav>
          <a className="active" href="#">Dashboard</a>
          <a href="#">Website</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Customers</a>
          <a href="#">Inquiries</a>
          <a href="#">Integrations</a>
        </nav>
      </aside>
      <section>
        <p className="eyebrow">EVO MANAGEMENT SYSTEM · FOUNDATION</p>
        <h1>Admin foundation is ready.</h1>
        <p>This is the future internal control panel for content, services, projects, customers and EVO platform modules.</p>
        <a className="api-link" href={`${apiBase}/docs`} target="_blank" rel="noreferrer">Open API documentation ↗</a>
      </section>
    </main>
  );
}
