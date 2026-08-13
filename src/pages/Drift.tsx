import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Drift product page — zero-dependency embedded key-value store.
 * All marketing copy is authored inline as JSX text so prose edits land here.
 */
export default function Drift() {
  useEffect(() => {
    document.title =
      "Drift — Zero-dependency embedded key-value store | Polaris Labs";
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
              <a href="https://github.com/kenny-io/driftkv">GitHub</a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="page-hero container">
          <p className="version">
            Drift · v0.1.0 ·{" "}
            <a href="https://github.com/kenny-io/driftkv">kenny-io/driftkv</a>
          </p>
          <h1>A key-value store that lives inside your process</h1>
          <p>
            Drift is a zero-dependency embedded key-value store for Node.js and
            TypeScript. It gives you TTL expiry, LRU eviction, and optional
            JSON persistence — with no server to run and nothing in your
            dependency tree but Drift itself.
          </p>
        </section>

        {/* Features */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">What Drift v0.1.0 does</h2>
            <div className="feature-grid">
              <div className="feature">
                <h4>Zero dependencies</h4>
                <p>
                  Drift's dependency tree is empty. The code you audit is the
                  code you run.
                </p>
              </div>
              <div className="feature">
                <h4>TTL expiry</h4>
                <p>
                  Set a store-wide default with <code>defaultTtlMs</code>;
                  expired entries stop being returned once their time-to-live
                  elapses.
                </p>
              </div>
              <div className="feature">
                <h4>LRU eviction</h4>
                <p>
                  Cap the store with <code>maxEntries</code> and Drift evicts
                  the least-recently-used entry when the cap is hit — memory
                  stays bounded.
                </p>
              </div>
              <div className="feature">
                <h4>JSON persistence</h4>
                <p>
                  Pass <code>persistPath</code> when creating the store and
                  call <code>flush()</code> to write its contents to a JSON
                  file.
                </p>
              </div>
              <div className="feature">
                <h4>TypeScript-first</h4>
                <p>
                  Written for Node.js and TypeScript, with a small functional
                  API created by a single <code>createStore()</code> factory.
                </p>
              </div>
              <div className="feature">
                <h4>Complete, compact API</h4>
                <p>
                  Eight store methods cover everything: <code>get</code>,{" "}
                  <code>set</code>, <code>has</code>, <code>delete</code>,{" "}
                  <code>clear</code>, <code>keys</code>, <code>size</code>, and{" "}
                  <code>flush</code>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API surface */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">API surface</h2>
            <p className="section-lede">Everything a v0.1.0 store can do.</p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>createStore(options)</code>
                    </td>
                    <td>
                      Create a store. Options: <code>maxEntries</code>,{" "}
                      <code>defaultTtlMs</code>, <code>persistPath</code>.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>get(key)</code>
                    </td>
                    <td>Read a value; expired entries are not returned.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>set(key, value)</code>
                    </td>
                    <td>Write a value, subject to TTL and the LRU cap.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>has(key)</code>
                    </td>
                    <td>Check whether a live entry exists for a key.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>delete(key)</code>
                    </td>
                    <td>Remove a single entry.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>clear()</code>
                    </td>
                    <td>Empty the store.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>keys()</code>
                    </td>
                    <td>List the keys of live entries.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>size()</code>
                    </td>
                    <td>Count of live entries.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>flush()</code>
                    </td>
                    <td>
                      Persist the store to the JSON file at{" "}
                      <code>persistPath</code>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Options */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Store options</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>What it controls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>maxEntries</code>
                    </td>
                    <td>
                      Maximum number of entries before the least-recently-used
                      entry is evicted.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>defaultTtlMs</code>
                    </td>
                    <td>Default time-to-live for entries, in milliseconds.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>persistPath</code>
                    </td>
                    <td>
                      File path where <code>flush()</code> writes the store as
                      JSON.
                    </td>
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
              A bounded, expiring, persistable cache in a dozen lines.
            </p>
            <pre>
              <code>{`import { createStore } from "driftkv";

const store = createStore({
  maxEntries: 500,        // LRU-evict past 500 entries
  defaultTtlMs: 30_000,   // entries expire after 30s
  persistPath: "./drift.json",
});

store.set("greeting", "hello");
store.get("greeting");   // "hello"
store.has("greeting");   // true
store.keys();            // ["greeting"]
store.size();            // 1

store.delete("greeting");
store.clear();

await store.flush();     // write the store to ./drift.json`}</code>
            </pre>
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
