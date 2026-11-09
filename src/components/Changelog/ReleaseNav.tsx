import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import './changelog.css';

type Item = {
    /** Anchor of the release heading, e.g. `v1.4.0`. */
    id: string;
    title: string;
    kind: 'unreleased' | 'major' | 'minor' | 'patch';
};

/**
 * Bar of the changelog page to jump to a release. It stays under the navigation bar and marks the release
 * being read.
 */
export default function ReleaseNav({ releases }: { releases: Item[] }): ReactNode {
    const [active, setActive] = useState(releases[0]?.id);
    const listRef = useRef<HTMLOListElement>(null);

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            // The release being read is the last one whose heading has gone above the middle of the bars.
            const line = (listRef.current?.getBoundingClientRect().bottom ?? 0) + 120;
            let current = releases[0]?.id;
            for (const { id } of releases) {
                const heading = document.getElementById(id);
                if (heading && heading.getBoundingClientRect().top <= line) current = id;
            }
            setActive(current);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [releases]);

    // On small screens the bar scrolls sideways: keep the active release in view.
    useEffect(() => {
        const link = listRef.current?.querySelector<HTMLElement>('[aria-current="true"]');
        const list = listRef.current;
        if (link && list && list.scrollWidth > list.clientWidth) {
            list.scrollTo({ left: link.offsetLeft - list.clientWidth / 2 + link.offsetWidth / 2, behavior: 'smooth' });
        }
    }, [active]);

    return (
        <nav className="axc-nav" aria-label="Releases">
            <ol ref={listRef} className="axc-nav__list glass">
                {releases.map((release) => (
                    <li key={release.id}>
                        <a
                            href={`#${release.id}`}
                            className={`axc-nav__link axc-nav__link--${release.kind}`}
                            aria-current={release.id === active ? 'true' : undefined}
                        >
                            {release.title}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
