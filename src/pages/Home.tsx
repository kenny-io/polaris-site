import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Polaris Labs overview.
 * Product facts intentionally stay inline so connected knowledge surfaces can
 * trace a marketing claim back to the exact page and commit that introduced it.
 */
export default function Home() {
  useEffect(() => {
    document.title = "Polaris Labs — Flagpole and Drift";
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
              <li><Link to="/flagpole">Flagpole</Link></li>
              <li><Link to="/drift">Drift</Link></li>
              <li><a href="https://polaris-labs.thally.app">Docs</a></li>
              <li><a href="https://github.com/kenny-io">GitHub ↗</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Open-source infrastructure, kept small</p>
            <h1>Feature flags over HTTP. An embedded KV store for Node.js.</h1>
            <p className="hero-lede">
              Polaris Labs maintains two focused tools: Flagpole is a
              self-hosted feature-flag REST API, and Drift is a typed,
              in-process key-value store with no runtime dependencies.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="https://polaris-labs.thally.app">
                Read the docs
              </a>
              <a className="text-link" href="https://github.com/kenny-io">
                Browse the source <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="release-board" aria-label="Current releases">
            <div className="release-board-header">
              <span>Current releases</span>
              <span className="status-dot">Source verified</span>
            </div>
            <div className="release-row">
              <div>
                <span className="release-name">flagpole-api</span>
                <strong>1.0.0</strong>
              </div>
              <p>
                31 HTTP routes · rollouts · environments · tags · history ·
                webhook records
              </p>
              <Link to="/flagpole" aria-label="Explore Flagpole">
                View product <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="release-row drift-release">
              <div>
                <span className="release-name">driftkv</span>
                <strong>0.2.0</strong>
              </div>
              <p>
                zero runtime dependencies · namespaces · events · batches ·
                transactions · atomic snapshots
              </p>
              <Link to="/drift" aria-label="Explore Drift">
                View product <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </section>

        <section className="section products-section" aria-labelledby="products-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Two different jobs</p>
                <h2 id="products-title" className="section-title">Start with the primitive you need</h2>
              </div>
              <p className="section-lede">
                Both projects are MIT licensed and designed to run in your own
                environment. They do not require a Polaris account or hosted
                control plane.
              </p>
            </div>

            <div className="product-grid">
              <article className="product-card flagpole-card">
                <div className="product-card-topline">
                  <span className="product-index">01 / Flagpole</span>
                  <span className="tag">v1.0.0</span>
                </div>
                <h3>A feature-flag API you can inspect end to end.</h3>
                <p>
                  Run a Hono server on Node.js 20+, keep flags in memory or a
                  JSON file, and evaluate boolean or percentage rollouts from
                  any client that speaks HTTP.
                </p>
                <ul className="compact-list">
                  <li>Optional bearer-token protection for every /v1 route</li>
                  <li>Environment overrides, tags, history, and pagination</li>
                  <li>Public health and version probes for deploy checks</li>
                </ul>
                <div className="card-actions">
                  <Link className="card-link" to="/flagpole">Explore Flagpole →</Link>
                  <a href="https://github.com/kenny-io/flagpole-api">GitHub ↗</a>
                </div>
              </article>

              <article className="product-card drift-card">
                <div className="product-card-topline">
                  <span className="product-index">02 / Drift</span>
                  <span className="tag indigo">v0.2.0</span>
                </div>
                <h3>A typed store that stays inside your process.</h3>
                <p>
                  Install one ESM package on Node.js 18+ for TTLs, bounded LRU
                  storage, scoped namespaces, lifecycle events, and optional
                  JSON snapshots.
                </p>
                <ul className="compact-list">
                  <li>Per-entry TTLs plus explicit expiry sweeps</li>
                  <li>Batch and transaction helpers for related writes</li>
                  <li>Atomic write-then-rename persistence and reload</li>
                </ul>
                <div className="card-actions">
                  <Link className="card-link" to="/drift">Explore Drift →</Link>
                  <a href="https://github.com/kenny-io/driftkv">GitHub ↗</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="examples-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Use the real interfaces</p>
              <h2 id="examples-title" className="section-title">From clone or install to first result</h2>
              <p className="section-lede">
                These examples match the current product defaults: Flagpole
                listens on port 3333, and Drift is an ESM package.
              </p>
            </div>

            <div className="code-cols">
              <article className="code-panel">
                <div className="code-panel-title"><span>Flagpole / evaluate</span><span>HTTP</span></div>
                <pre>
                  <code>{`git clone https://github.com/kenny-io/flagpole-api.git
cd flagpole-api && npm install && npm run dev

curl -X POST http://localhost:3333/v1/flags \\
  -H 'content-type: application/json' \\
  -d '{"key":"new-checkout","enabled":true}'

curl http://localhost:3333/v1/flags/new-checkout/evaluate`}</code>
                </pre>
                <a href="https://polaris-labs.thally.app/guides/flagpole-api">
                  Read the Flagpole guide →
                </a>
              </article>

              <article className="code-panel">
                <div className="code-panel-title"><span>Drift / create a store</span><span>TypeScript</span></div>
                <pre>
                  <code>{`import { createStore } from "driftkv";

const cache = createStore<string>({
  maxEntries: 1_000,
  defaultTtlMs: 60_000,
});

cache.set("session:42", "active");
cache.get("session:42"); // "active"`}</code>
                </pre>
                <a href="https://polaris-labs.thally.app/guides/using-namespaces">
                  Read the Drift guide →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section principles-section" aria-labelledby="scope-title">
          <div className="container principles-grid">
            <div>
              <p className="eyebrow">Scope, stated plainly</p>
              <h2 id="scope-title" className="section-title">Local primitives, not a managed platform</h2>
            </div>
            <ul className="why-list">
              <li>
                <strong>Flagpole is self-hosted.</strong> There is no bundled
                dashboard or language-specific SDK; clients call its HTTP API.
              </li>
              <li>
                <strong>Drift is process-local.</strong> It does not coordinate
                data across machines and is not a replacement for a shared database.
              </li>
              <li>
                <strong>Persistence is explicit.</strong> Both tools can use
                JSON files you control, with in-memory operation available when
                durability is unnecessary.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Polaris Labs · MIT-licensed developer tools</span>
          <ul className="footer-links">
            <li><a href="https://polaris-labs.thally.app">Docs</a></li>
            <li><a href="https://github.com/kenny-io/flagpole-api">Flagpole</a></li>
            <li><a href="https://github.com/kenny-io/driftkv">Drift</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
