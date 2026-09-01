import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Drift product page.
 * Facts remain inline so Track can connect product changes to this surface.
 */
export default function Drift() {
  useEffect(() => {
    document.title = "Drift — Embedded key-value store | Polaris Labs";
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
              <li><Link className="is-active" aria-current="page" to="/drift">Drift</Link></li>
              <li><a href="https://polaris-labs.thally.app/guides/using-namespaces">Docs</a></li>
              <li><a href="https://github.com/kenny-io/driftkv">GitHub ↗</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="page-hero container drift-page-hero">
          <div className="page-hero-copy">
            <p className="version">Drift · v0.4.0 · MIT</p>
            <h1>A typed key-value store that lives inside your process.</h1>
            <p>
              Drift is an ESM package for Node.js with TTL expiry, bounded LRU
              storage, capacity snapshots, namespaces, lifecycle events, batch
              helpers, and optional JSON persistence. It has zero runtime
              dependencies and no server to operate.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="https://polaris-labs.thally.app/guides/using-namespaces">Read the docs</a>
              <a className="text-link" href="https://github.com/kenny-io/driftkv">View source ↗</a>
            </div>
          </div>
          <figure className="hero-command">
            <figcaption className="code-panel-title"><span>Install</span><span>Node.js 18+ · ESM</span></figcaption>
            <pre><code>{`npm install driftkv

import { createStore } from "driftkv";

const store = createStore<string>();
store.set("status", "ready");`}</code></pre>
          </figure>
        </section>

        <section className="fact-strip drift-fact-strip" aria-label="Drift release facts">
          <div className="container fact-strip-inner">
            <div><strong>0</strong><span>runtime dependencies</span></div>
            <div><strong>19</strong><span>store methods</span></div>
            <div><strong>4</strong><span>lifecycle events</span></div>
            <div><strong>1</strong><span>optional JSON snapshot</span></div>
          </div>
        </section>

        <section className="section" aria-labelledby="store-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">The store</p>
                <h2 id="store-title" className="section-title">More structure than a Map, less machinery than a server</h2>
              </div>
              <p className="section-lede">
                <code>createStore&lt;T&gt;()</code> carries one value type through
                the API and fails invalid configuration immediately at startup.
              </p>
            </div>
            <div className="feature-grid feature-grid-four">
              <article className="feature drift-feature">
                <span className="feature-number">01</span>
                <h3>TTL controls</h3>
                <p>
                  Set a store-wide default or override it per entry. Expiry is
                  lazy but never observable; <code>sweep()</code> eagerly
                  reclaims expired entries when you need bounded memory.
                </p>
              </article>
              <article className="feature drift-feature">
                <span className="feature-number">02</span>
                <h3>Bounded LRU storage</h3>
                <p>
                  <code>maxEntries</code> caps live data. Reads and writes
                  refresh recency, while <code>peek()</code> and
                  <code>has()</code> inspect without changing eviction order.
                  A stats() call returns store-wide capacity counters without
                  perturbing recency.
                </p>
              </article>
              <article className="feature drift-feature">
                <span className="feature-number">03</span>
                <h3>Scoped namespaces</h3>
                <p>
                  <code>store.namespace("users")</code> returns a typed view
                  over the same data. Views isolate keys but share limits, LRU
                  order, events, and persistence.
                </p>
              </article>
              <article className="feature drift-feature">
                <span className="feature-number">04</span>
                <h3>Lifecycle events</h3>
                <p>
                  Subscribe to <code>set</code>, <code>delete</code>,
                  <code>expire</code>, and <code>evict</code>. Listeners run
                  synchronously, and listener errors cannot break store work.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="writes-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Related writes</p>
              <h2 id="writes-title" className="section-title">Batch first, commit once</h2>
              <p className="section-lede">
                Drift exports two helpers for grouping writes without adding an
                asynchronous runtime or external coordinator.
              </p>
            </div>
            <div className="code-cols">
              <article className="code-panel">
                <div className="code-panel-title"><span>Batch</span><span>queued writes</span></div>
                <pre><code>{`import { createBatch } from "driftkv";

const result = createBatch(store)
  .set("user:1", "ada")
  .set("user:2", "grace")
  .delete("user:0")
  .commit();

result.written; // ["user:1", "user:2"]`}</code></pre>
              </article>
              <article className="code-panel">
                <div className="code-panel-title"><span>Transaction</span><span>read your writes</span></div>
                <pre><code>{`import { transaction } from "driftkv";

const next = transaction(store, (tx) => {
  const current = tx.get("counter") ?? 0;
  tx.set("counter", current + 1);
  return tx.get("counter");
});

// A thrown body discards every pending write.`}</code></pre>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="api-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">API map</p>
                <h2 id="api-title" className="section-title">One synchronous store interface</h2>
              </div>
              <p className="section-lede">
                All methods are synchronous. Persistence uses Node.js file APIs
                and <code>flush()</code> returns <code>void</code>.
              </p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Area</th><th>Members</th><th>Contract</th></tr></thead>
                <tbody>
                  <tr>
                    <td>Read</td>
                    <td><code>get</code>, <code>peek</code>, <code>has</code>, <code>ttl</code></td>
                    <td>Read live data with explicit recency semantics.</td>
                  </tr>
                  <tr>
                    <td>Write</td>
                    <td><code>set</code>, <code>touch</code>, <code>delete</code>, <code>clear</code></td>
                    <td>Mutate values, TTLs, and recency.</td>
                  </tr>
                  <tr>
                    <td>Inspect</td>
                    <td><code>keys</code>, <code>values</code>, <code>entries</code>, <code>size</code>, <code>isEmpty</code></td>
                    <td>Return live entries in least-to-most recent order.</td>
                  </tr>
                  <tr>
                    <td>Maintain</td>
                    <td><code>sweep</code>, <code>flush</code></td>
                    <td>Reclaim expired entries and persist a snapshot.</td>
                  </tr>
                  <tr>
                    <td>Observe</td>
                    <td><code>on</code>, <code>off</code></td>
                    <td>Manage store-wide lifecycle listeners.</td>
                  </tr>
                  <tr>
                    <td>Scope</td>
                    <td><code>namespace</code></td>
                    <td>Create nested typed views over shared storage.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="persistence-title">
          <div className="container principles-grid">
            <div>
              <p className="eyebrow">Persistence</p>
              <h2 id="persistence-title" className="section-title">JSON snapshots with explicit tradeoffs</h2>
            </div>
            <ul className="why-list drift-list">
              <li>
                <strong>Reload on creation.</strong> Point a new store at an
                existing <code>persistPath</code> and live entries load in their
                saved LRU order; expired entries are dropped.
              </li>
              <li>
                <strong>Write atomically.</strong> <code>flush()</code> writes a
                temporary file and renames it over the snapshot so a mid-write
                crash leaves the prior file intact.
              </li>
              <li>
                <strong>Use JSON-compatible values.</strong> Dates, Maps, and
                other identity-bearing values do not round-trip as their
                original runtime types.
              </li>
              <li>
                <strong>Keep it process-local.</strong> A snapshot supports
                restart durability; it does not provide multi-process writes
                or distributed coordination.
              </li>
            </ul>
          </div>
        </section>

        <section className="section quickstart-section" aria-labelledby="drift-quickstart-title">
          <div className="container quickstart-grid">
            <div>
              <p className="eyebrow">Try it</p>
              <h2 id="drift-quickstart-title" className="section-title">A namespaced cache with persistence</h2>
              <p className="section-lede">
                Namespaces are views over one shared store. Calling
                <code>flush()</code> from any view writes the entire store.
              </p>
              <a className="card-link" href="https://github.com/kenny-io/driftkv#quickstart">
                Open the repository quickstart ↗
              </a>
            </div>
            <pre><code>{`import { createStore } from "driftkv";

const store = createStore<string>({
  maxEntries: 500,
  defaultTtlMs: 30_000,
  persistPath: "./data/cache.json",
});

const sessions = store.namespace("sessions");
sessions.set("user-42", "active", { ttlMs: 10_000 });
sessions.get("user-42"); // "active"

store.flush();`}</code></pre>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link className="footer-back" to="/">← Back to Polaris Labs</Link>
          <ul className="footer-links">
            <li><a href="https://polaris-labs.thally.app/guides/using-namespaces">Docs</a></li>
            <li><a href="https://github.com/kenny-io/driftkv">GitHub</a></li>
            <li><Link to="/flagpole">Flagpole</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
