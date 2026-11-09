import React, { useState, type CSSProperties, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './index.css';

const INSTALL_COMMAND = 'npm install -g @axisparkjs/cli';

function InstallCommand(): ReactNode {
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(INSTALL_COMMAND);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="ax-install glass">
            <span className="ax-install__prompt" aria-hidden="true">
                $
            </span>
            <code>{INSTALL_COMMAND}</code>
            <button type="button" onClick={copy} aria-live="polite">
                {copied ? 'Copied' : 'Copy'}
            </button>
        </div>
    );
}

/**
 * The logo of static/img/icon.png as a piece of frosted glass: the PNG's alpha cuts a blurred pane, the logo
 * itself tints it with its colors, and a highlight runs across the surface. All the layers share the same
 * square box as the PNG, so they line up whatever the size of the hero.
 */
function GlassLogo(): ReactNode {
    const icon = useBaseUrl('/img/icon.png');

    return (
        <div className="ax-logo" style={{ '--ax-logo-mask': `url(${icon})` } as CSSProperties} aria-hidden="true">
            <div className="ax-logo__glow" />
            <img className="ax-logo__layer ax-logo__tint" src={icon} alt="" />
        </div>
    );
}

function CodeWindow(): ReactNode {
    return (
        <div className="ax-window glass">
            <div className="ax-window__bar">
                <span className="ax-window__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </span>
                <span>app.ts</span>
            </div>
            <pre className="ax-code">
                <code>
                    <span className="t-key">import</span> {'{ '}
                    <span className="t-fn">AxiSparkFactory</span>
                    {' } '}
                    <span className="t-key">from</span> <span className="t-str">'@axisparkjs/core'</span>;{'\n'}
                    <span className="t-key">import</span> {'{ '}
                    <span className="t-fn">HttpPlugin</span>
                    {' } '}
                    <span className="t-key">from</span> <span className="t-str">'@axisparkjs/http'</span>;{'\n'}
                    <span className="t-key">import</span> {'{ '}
                    <span className="t-fn">HttpPluginOptionsFactory</span>
                    {' } '}
                    <span className="t-key">from</span> <span className="t-str">'@axisparkjs/http-express'</span>;{'\n'}
                    {'\n'}
                    <span className="t-key">export const</span> <span className="t-var">app</span> <span className="t-op">=</span>{' '}
                    <span className="t-fn">AxiSparkFactory</span>.<span className="t-fn">create</span>();{'\n'}
                    {'\n'}
                    <span className="t-var">app</span>.<span className="t-fn">use</span>({'\n'}
                    {'    '}
                    <span className="t-fn">HttpPlugin</span>,{'\n'}
                    {'    '}
                    <span className="t-fn">HttpPluginOptionsFactory</span>.<span className="t-fn">create</span>({'{'}
                    {'\n'}
                    {'        '}
                    <span className="t-prop">basePath</span>: <span className="t-str">'/api'</span>
                    {'\n'}
                    {'    '}
                    {'})'}
                    {'\n'});
                </code>
            </pre>
        </div>
    );
}

function Terminal(): ReactNode {
    return (
        <div className="ax-window ax-terminal glass">
            <div className="ax-window__bar">
                <span className="ax-window__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </span>
                <span>terminal</span>
            </div>
            <pre className="ax-code">
                <code>
                    <span className="t-prompt">$</span> npm install -g @axisparkjs/cli{'\n'}
                    <span className="t-prompt">$</span> axispark create my-app{'\n'}
                    <span className="t-ok">✓</span> Project created{'\n'}
                    <span className="t-ok">✓</span> Dependencies installed{'\n'}
                    <span className="t-ok">✓</span> Configuration ready{'\n'}
                    {'\n'}
                    <span className="t-dim">Local:</span> Application started{'\n'}
                    <span className="t-cursor" aria-hidden="true">
                        ▍
                    </span>
                </code>
            </pre>
        </div>
    );
}

function HomePage(): ReactNode {
    return (
        <div className="ax-home">
            <section className="ax-hero">
                <div className="ax-hero__copy">
                    <p className="ax-pill glass">The Ultimate Node.js Framework</p>
                    <h1 className="ax-hero__title">AxiSpark.js</h1>
                    <p className="ax-hero__claim">
                        Build faster.
                        <br />
                        Think sharper.
                    </p>
                    <p className="ax-lead">AxiSpark.js is a modern framework for building fast, scalable applications without unnecessary complexity.</p>
                    <div className="ax-actions">
                        <Link className="ax-button ax-button--primary" to="/docs/category/getting-started">
                            Get started
                        </Link>
                        <Link className="ax-button ax-button--glass glass" to="/docs/intro">
                            Read the docs
                        </Link>
                    </div>
                    <InstallCommand />
                </div>
                <GlassLogo />
            </section>

            <section className="ax-split">
                <div className="ax-split__copy">
                    <p className="ax-kicker">A familiar experience</p>
                    <h2>JavaScript without the friction.</h2>
                    <p>If you know JavaScript or TypeScript, you already know most of what you need to start building with AxiSpark.js.</p>
                    <Link className="ax-link" to="/docs/category/getting-started">
                        Start building
                    </Link>
                </div>
                <CodeWindow />
            </section>

            <section className="ax-split ax-split--reverse">
                <Terminal />
                <div className="ax-split__copy">
                    <p className="ax-kicker">Zero friction</p>
                    <h2>From zero to running.</h2>
                    <p>Create a project, start the development server and get straight to work.</p>
                    <ol className="ax-steps">
                        <li>Create</li>
                        <li>Build</li>
                        <li>Ship</li>
                    </ol>
                </div>
            </section>

            <section className="ax-principles">
                <p className="ax-kicker">The AxiSpark way</p>
                <h2>The framework should remove complexity. Not add it.</h2>
                <div className="ax-principles__slab glass">
                    <div>
                        <h3>Stay close to the platform</h3>
                        <p>Use the web platform instead of hiding it behind layers of unnecessary abstraction.</p>
                    </div>
                    <div>
                        <h3>Make the common path easy</h3>
                        <p>Sensible defaults make simple things simple while keeping advanced use cases possible.</p>
                    </div>
                    <div>
                        <h3>Keep the core small</h3>
                        <p>A focused foundation is easier to learn, maintain and extend.</p>
                    </div>
                </div>
            </section>

            <section className="ax-cta glass">
                <h2>Your next project starts here.</h2>
                <p>No configuration maze. Create a project and start writing your application.</p>
                <div className="ax-actions">
                    <Link className="ax-button ax-button--primary" to="/docs/category/getting-started">
                        Get started
                    </Link>
                    <Link className="ax-button ax-button--glass glass" href="https://github.com/axisparkjs/axispark">
                        View on GitHub
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="AxiSpark.js is a Node.js framework for building fast, scalable applications with HTTP, WebSocket, messaging, data and scheduling plugins."
        >
            <main>
                <HomePage />
            </main>
        </Layout>
    );
}
