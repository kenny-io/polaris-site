import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Flagpole product page — lightweight feature-flag REST API.
 * All marketing copy is authored inline as JSX text so prose edits land here.
 */
export default function Flagpole() {
  useEffect(() => {
    document.title =
      "Flagpole — Lightweight feature-flag REST API | Polaris Labs";
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
              <a href="https://github.com/kenny-io/flagpole-api">GitHub</a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="page-hero container">
          <p className="version">
            Flagpole · v0.1.0 ·{" "}
            <a href="https://github.com/kenny-io/flagpole-api">
              kenny-io/flagpole-api
            </a>
          </p>
          <h1>Feature flags without the platform</h1>
          <p>
            Flagpole is a lightweight REST API for feature flags. Run it next
            to your app, point it at a JSON file, and get a complete flag
            lifecycle — create, list, read, update, delete, evaluate — behind a
            single bearer token.
          </p>
        </section>

        {/* Features */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">What Flagpole v0.1.0 does</h2>
            <div className="feature-grid">
              <div className="feature">
                <h4>Boolean flags</h4>
                <p>
                  Each flag is a{" "}
                  <code>{"{ key, description, enabled }"}</code> record — a
                  stable key, a human-readable description, and an on/off
                  state.
                </p>
              </div>
              <div className="feature">
                <h4>Full CRUD over HTTP</h4>
                <p>
                  Create flags with <code>POST /v1/flags</code>, list them,
                  fetch one by key, toggle or edit with <code>PATCH</code>, and
                  remove with <code>DELETE</code>.
                </p>
              </div>
              <div className="feature">
                <h4>Evaluation endpoint</h4>
                <p>
                  <code>GET /v1/flags/:key/evaluate</code> answers the only
                  question your app cares about at runtime: is this flag on
                  right now?
                </p>
              </div>
              <div className="feature">
                <h4>Bearer-token auth</h4>
                <p>
                  Set <code>FLAGPOLE_API_TOKEN</code> and every request must
                  carry <code>Authorization: Bearer &lt;token&gt;</code>.
                </p>
              </div>
              <div className="feature">
                <h4>JSON-file persistence</h4>
                <p>
                  Flags persist to the file at <code>FLAGPOLE_DATA_FILE</code>.
                  Your flag state is a plain JSON document you can inspect,
                  diff, and back up.
                </p>
              </div>
              <div className="feature">
                <h4>Health check built in</h4>
                <p>
                  <code>GET /health</code> gives load balancers and uptime
                  monitors a first-class probe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Endpoint overview */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Endpoint overview</h2>
            <p className="section-lede">
              The complete API surface of v0.1.0 — seven endpoints.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Path</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="method get">GET</span>
                    </td>
                    <td>
                      <code>/health</code>
                    </td>
                    <td>Health check for the service.</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="method get">GET</span>
                    </td>
                    <td>
                      <code>/v1/flags</code>
                    </td>
                    <td>List all flags.</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="method post">POST</span>
                    </td>
                    <td>
                      <code>/v1/flags</code>
                    </td>
                    <td>
                      Create a flag with <code>key</code>,{" "}
                      <code>description</code>, and <code>enabled</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="method get">GET</span>
                    </td>
                    <td>
                      <code>/v1/flags/:key</code>
                    </td>
                    <td>Fetch a single flag by key.</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="method patch">PATCH</span>
                    </td>
                    <td>
                      <code>/v1/flags/:key</code>
                    </td>
                    <td>
                      Update a flag's <code>description</code> or{" "}
                      <code>enabled</code> state.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="method delete">DELETE</span>
                    </td>
                    <td>
                      <code>/v1/flags/:key</code>
                    </td>
                    <td>Delete a flag.</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="method get">GET</span>
                    </td>
                    <td>
                      <code>/v1/flags/:key/evaluate</code>
                    </td>
                    <td>Evaluate a flag — returns its current enabled state.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quickstart */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Quickstart</h2>
            <p className="section-lede">
              Configure two environment variables, then drive the API with any
              HTTP client.
            </p>
            <div className="code-cols">
              <div>
                <h4>Configure</h4>
                <pre>
                  <code>{`# Auth token required on every request
export FLAGPOLE_API_TOKEN=your-secret-token

# Where flags are persisted as JSON
export FLAGPOLE_DATA_FILE=./flags.json`}</code>
                </pre>
              </div>
              <div>
                <h4>Use the API</h4>
                <pre>
                  <code>{`# Toggle a flag on
curl -X PATCH http://localhost:3000/v1/flags/new-checkout \\
  -H "Authorization: Bearer $FLAGPOLE_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{ "enabled": true }'

# List every flag
curl http://localhost:3000/v1/flags \\
  -H "Authorization: Bearer $FLAGPOLE_API_TOKEN"`}</code>
                </pre>
              </div>
            </div>
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
