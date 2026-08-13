import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Home page — Polaris Labs overview.
 * All marketing copy is authored inline as JSX text so prose edits land here.
 */
export default function Home() {
  useEffect(() => {
    document.title = "Polaris Labs — Small, sharp infrastructure tools";
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link className="logo" to="/">
            <span className="star">★</span> Polaris Labs
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/flagpole">Flagpole</Link>
            </li>
            <li>
              <Link to="/drift">Drift</Link>
            </li>
            <li>
              <a href="https://github.com/kenny-io">GitHub</a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero container">
          <h1>
            Small, sharp tools for{" "}
            <span className="gradient">shipping with confidence</span>
          </h1>
          <p>
            Polaris Labs builds focused developer infrastructure: a feature-flag
            API you can run anywhere and an embedded key-value store with zero
            dependencies. No platforms, no lock-in — just tools that do one
            thing well.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/flagpole">
              Explore Flagpole
            </Link>
            <Link className="btn btn-secondary" to="/drift">
              Explore Drift
            </Link>
          </div>
        </section>

        {/* Products */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Two products, one philosophy</h2>
            <p className="section-lede">
              Everything we ship is small enough to read in an afternoon and
              simple enough to operate without a dedicated team.
            </p>

            <div className="product-grid">
              <div className="product-card">
                <span className="tag">Flagpole v0.1.0</span>
                <h3>Flagpole</h3>
                <p>
                  A lightweight feature-flag REST API. Seven endpoints cover the
                  full flag lifecycle — create, list, read, update, delete, and
                  evaluate boolean flags — secured with bearer-token auth and
                  persisted to a single JSON file.
                </p>
                <Link className="card-link" to="/flagpole">
                  Flagpole features →
                </Link>
              </div>

              <div className="product-card">
                <span className="tag indigo">Drift v0.1.0</span>
                <h3>Drift</h3>
                <p>
                  A zero-dependency embedded key-value store for Node.js and
                  TypeScript. In-process reads and writes with TTL expiry, LRU
                  eviction, and optional JSON persistence — no server to run,
                  nothing to install but the package.
                </p>
                <Link className="card-link" to="/drift">
                  Drift features →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">What you get today</h2>
            <p className="section-lede">
              Concrete capabilities, not roadmap promises. This is what ships in
              the current releases.
            </p>

            <div className="feature-grid">
              <div className="feature">
                <h4>7 REST endpoints</h4>
                <p>
                  Flagpole exposes a health check plus full CRUD and evaluation
                  for flags: <code>GET /health</code>,{" "}
                  <code>GET/POST /v1/flags</code>,{" "}
                  <code>GET/PATCH/DELETE /v1/flags/:key</code>, and{" "}
                  <code>GET /v1/flags/:key/evaluate</code>.
                </p>
              </div>
              <div className="feature">
                <h4>Boolean flags with bearer-token auth</h4>
                <p>
                  Every flag is a simple{" "}
                  <code>{"{ key, description, enabled }"}</code> record.
                  Requests are authorized with a bearer token set via{" "}
                  <code>FLAGPOLE_API_TOKEN</code>.
                </p>
              </div>
              <div className="feature">
                <h4>JSON-file persistence</h4>
                <p>
                  Flagpole stores its flags in a single JSON file at the path
                  you choose with <code>FLAGPOLE_DATA_FILE</code>. Back it up
                  with <code>cp</code>, diff it in a PR, restore it in seconds.
                </p>
              </div>
              <div className="feature">
                <h4>TTL + LRU eviction</h4>
                <p>
                  Drift expires entries after a per-entry or store-wide TTL (
                  <code>defaultTtlMs</code>) and evicts the least-recently-used
                  entry once <code>maxEntries</code> is reached.
                </p>
              </div>
              <div className="feature">
                <h4>Zero dependencies</h4>
                <p>
                  Drift ships with an empty dependency tree. What you audit is
                  what you run — no transitive supply chain to worry about.
                </p>
              </div>
              <div className="feature">
                <h4>Durable when you want it</h4>
                <p>
                  Drift is in-memory by default. Pass <code>persistPath</code>{" "}
                  and call <code>flush()</code> to write the store to a JSON
                  file you control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code snippets */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">See it in action</h2>
            <p className="section-lede">
              Real calls against the current releases — copy, paste, run.
            </p>

            <div className="code-cols">
              <div>
                <h4>Flagpole: create and evaluate a flag</h4>
                <pre>
                  <code>{`curl -X POST http://localhost:3000/v1/flags \\
  -H "Authorization: Bearer $FLAGPOLE_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "key": "new-checkout",
    "description": "New checkout flow",
    "enabled": false
  }'

curl http://localhost:3000/v1/flags/new-checkout/evaluate \\
  -H "Authorization: Bearer $FLAGPOLE_API_TOKEN"`}</code>
                </pre>
              </div>

              <div>
                <h4>Drift: cache with TTL and persistence</h4>
                <pre>
                  <code>{`import { createStore } from "driftkv";

const store = createStore({
  maxEntries: 1000,
  defaultTtlMs: 60_000,
  persistPath: "./cache.json",
});

store.set("session:42", { userId: "u_42" });
store.get("session:42"); // { userId: "u_42" }
store.has("session:42"); // true
store.size();            // 1

await store.flush();     // write to ./cache.json`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Why Polaris */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Why teams pick Polaris tools</h2>
            <p className="section-lede">
              Most infrastructure tooling assumes you want a platform. We assume
              you want your afternoon back.
            </p>
            <ul className="why-list">
              <li>
                <strong>No hosted dashboard required.</strong> Flagpole is an
                API you run yourself; your flags live in a JSON file you can
                read, diff, and version.
              </li>
              <li>
                <strong>No client SDK sprawl.</strong> Flagpole speaks plain
                HTTP — any language with an HTTP client is already integrated.
              </li>
              <li>
                <strong>No external cache server.</strong> Drift runs inside
                your Node.js process, so there is no Redis to provision for a
                hot-path cache.
              </li>
              <li>
                <strong>Auditable by design.</strong> Drift has zero runtime
                dependencies, and Flagpole's entire API surface is seven
                endpoints.
              </li>
              <li>
                <strong>Honest versioning.</strong> Both products are at v0.1.0
                — early, focused, and documented exactly as they behave today.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Polaris Labs. Built in the open.</span>
          <ul className="footer-links">
            <li>
              <Link to="/flagpole">Flagpole</Link>
            </li>
            <li>
              <Link to="/drift">Drift</Link>
            </li>
            <li>
              <a href="https://github.com/kenny-io/flagpole-api">
                flagpole-api
              </a>
            </li>
            <li>
              <a href="https://github.com/kenny-io/driftkv">driftkv</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
