import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Flagpole product page.
 * Facts remain inline so Track can connect product changes to this surface.
 */
export default function Flagpole() {
  useEffect(() => {
    document.title = "Flagpole — Self-hosted feature-flag API | Polaris Labs";
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="container nav">
          <Link className="logo" to="/" aria-label="Polaris Labs home">
            <span className="star" aria-hidden="true">✦</span>
            Polaris Labs
          </Link>
          <nav aria-label="Primary navigation">
            <ul className="nav-links">
              <li><Link className="is-active" aria-current="page" to="/flagpole">Flagpole</Link></li>
              <li><Link to="/drift">Drift</Link></li>
              <li><a href="https://polaris-labs.thally.app/guides/flagpole-api">Docs</a></li>
              <li><a href="https://github.com/kenny-io/flagpole-api">GitHub ↗</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="page-hero container">
          <div className="page-hero-copy">
            <p className="version">Flagpole · v1.0.0 · MIT</p>
            <h1>Feature flags over HTTP, without a control plane.</h1>
            <p>
              Flagpole is a self-hosted Hono API for boolean flags,
              deterministic percentage rollouts, and per-environment
              overrides. Run it in memory or persist state to one JSON file;
              call it from any language with an HTTP client.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="https://polaris-labs.thally.app/guides/flagpole-api">Read the docs</a>
              <a className="text-link" href="https://github.com/kenny-io/flagpole-api">View source ↗</a>
            </div>
          </div>
          <figure className="hero-command">
            <figcaption className="code-panel-title"><span>Start locally</span><span>Node.js 20+</span></figcaption>
            <pre><code>{`git clone https://github.com/kenny-io/flagpole-api.git
cd flagpole-api
npm install
npm run dev

# listening on http://localhost:3333`}</code></pre>
          </figure>
        </section>

        <section className="fact-strip" aria-label="Flagpole release facts">
          <div className="container fact-strip-inner">
            <div><strong>31</strong><span>HTTP routes</span></div>
            <div><strong>3</strong><span>default environments</span></div>
            <div><strong>200</strong><span>maximum page size</span></div>
            <div><strong>0</strong><span>database services required</span></div>
          </div>
        </section>

        <section className="section" aria-labelledby="flag-model-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">The flag model</p>
                <h2 id="flag-model-title" className="section-title">A small core with rollout controls</h2>
              </div>
              <p className="section-lede">
                Every flag has an immutable key, an enabled master switch,
                timestamps, and an optional description, rollout percentage,
                and set of tags.
              </p>
            </div>
            <div className="feature-grid feature-grid-four">
              <article className="feature">
                <span className="feature-number">01</span>
                <h3>Deterministic rollouts</h3>
                <p>
                  Set <code>rolloutPercentage</code> from 0–100 and evaluate
                  with a stable <code>unit</code>. The same flag and unit stay
                  in the same bucket as the rollout grows.
                </p>
              </article>
              <article className="feature">
                <span className="feature-number">02</span>
                <h3>Environment overrides</h3>
                <p>
                  Development, staging, and production exist by default. Each
                  environment can override enabled state, rollout percentage,
                  or both for one flag.
                </p>
              </article>
              <article className="feature">
                <span className="feature-number">03</span>
                <h3>Tags and discovery</h3>
                <p>
                  Attach up to 10 lowercase kebab-case tags, filter flags by
                  tag, list tag usage counts, retire a tag, or fetch compact
                  key and count summaries.
                </p>
              </article>
              <article className="feature">
                <span className="feature-number">04</span>
                <h3>Change history</h3>
                <p>
                  Creates, updates, and deletes are recorded oldest-first.
                  History survives flag deletion and supports a 1–500 event limit.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="operations-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Operations</p>
              <h2 id="operations-title" className="section-title">Explicit defaults for a service you run</h2>
            </div>
            <div className="detail-grid">
              <article className="detail-block">
                <h3>Auth when you need it</h3>
                <p>
                  Leave <code>FLAGPOLE_API_TOKEN</code> unset for local
                  development. When it is set, every <code>/v1</code> request
                  must provide the matching bearer token. The public probes are
                  <code>/health</code> and <code>/version</code>.
                </p>
              </article>
              <article className="detail-block">
                <h3>Memory or one JSON file</h3>
                <p>
                  Flagpole keeps state in memory by default. Set
                  <code>FLAGPOLE_DATA_FILE</code> to persist flags and history
                  to a human-inspectable file; no Postgres or Redis service is required.
                </p>
              </article>
              <article className="detail-block">
                <h3>Predictable error bodies</h3>
                <p>
                  Every non-2xx response uses the same JSON envelope with an
                  <code>error.code</code> and <code>error.message</code>, so
                  clients can handle failures consistently.
                </p>
              </article>
              <article className="detail-block">
                <h3>Webhook records, not transport</h3>
                <p>
                  Register HTTPS subscriptions and inspect delivery history.
                  Flagpole records the deliveries a sender would attempt; it
                  does not transmit them, leaving transport to your system.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="routes-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">API map</p>
                <h2 id="routes-title" className="section-title">The current route groups</h2>
              </div>
              <p className="section-lede">
                The full request bodies, validation rules, and response shapes
                live in the Flagpole guide and repository README.
              </p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Surface</th><th>Routes</th><th>Purpose</th></tr></thead>
                <tbody>
                  <tr>
                    <td>Probes</td>
                    <td><code>GET /health</code>, <code>GET /version</code></td>
                    <td>Public liveness and running-release checks.</td>
                  </tr>
                  <tr>
                    <td>Flags</td>
                    <td><code>/v1/flags</code>, <code>/v1/flags/:key</code>, <code>/evaluate</code>, <code>/toggle</code></td>
                    <td>CRUD, pagination, status, rollout, and evaluation.</td>
                  </tr>
                  <tr>
                    <td>Environments</td>
                    <td><code>/v1/environments</code>, <code>/v1/flags/:key/environments</code></td>
                    <td>Create environments and set or clear flag overrides.</td>
                  </tr>
                  <tr>
                    <td>Tags</td>
                    <td><code>/v1/tags</code>, <code>/v1/flags/:key/tags</code></td>
                    <td>Discover, attach, detach, filter, and retire tags.</td>
                  </tr>
                  <tr>
                    <td>History</td>
                    <td><code>/v1/flags/:key/history</code></td>
                    <td>Read the durable event trail for a flag key.</td>
                  </tr>
                  <tr>
                    <td>Webhooks</td>
                    <td><code>/v1/webhooks</code>, <code>/v1/webhooks/:id/deliveries</code></td>
                    <td>Manage subscriptions and recorded delivery history.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section quickstart-section" aria-labelledby="flag-quickstart-title">
          <div className="container quickstart-grid">
            <div>
              <p className="eyebrow">Try it locally</p>
              <h2 id="flag-quickstart-title" className="section-title">Create and evaluate a flag</h2>
              <p className="section-lede">
                The development server needs no token. Add one before exposing
                an instance beyond your local machine.
              </p>
              <a className="card-link" href="https://github.com/kenny-io/flagpole-api#quickstart">
                Open the repository quickstart ↗
              </a>
            </div>
            <pre>
              <code>{`curl -X POST http://localhost:3333/v1/flags \\
  -H 'content-type: application/json' \\
  -d '{
    "key": "new-checkout",
    "enabled": true,
    "rolloutPercentage": 25,
    "tags": ["checkout", "beta"]
  }'

curl 'http://localhost:3333/v1/flags/new-checkout/evaluate?unit=user-42'`}</code>
            </pre>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link className="footer-back" to="/">← Back to Polaris Labs</Link>
          <ul className="footer-links">
            <li><a href="https://polaris-labs.thally.app/guides/flagpole-api">Docs</a></li>
            <li><a href="https://github.com/kenny-io/flagpole-api">GitHub</a></li>
            <li><Link to="/drift">Drift</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
