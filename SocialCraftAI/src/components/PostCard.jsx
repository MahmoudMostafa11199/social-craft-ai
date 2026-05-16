import { useEffect, useState } from 'react';
import { extractHashtags } from '../utils/helpers';
import CheckIcon from './icons/CheckIcon';
import CopyIcon from './icons/CopyIcon';

export default function PostCard({ platform, icon, text, accentClass, delay }) {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const { clean, tags } = extractHashtags(text);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      //
    }
  }

  return (
    <article className={`post-card ${visible ? 'post-card--visible' : ''}`}>
      {/* Card header */}
      <div className="post-card__header">
        <div className={`post-card__icon ${accentClass}`}>{icon}</div>
        <div>
          <div className="post-card__platform">{platform}</div>
          <div className="post-card__label">Generated post</div>
        </div>
        <button
          onClick={handleCopy}
          className={`post-card__copy ${copied ? 'post-card__copy--copied' : ''}`}
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <CheckIcon /> Copied!
            </>
          ) : (
            <>
              <CopyIcon /> Copy
            </>
          )}
        </button>
      </div>

      {/* Post body */}
      <div className="post-card__body">
        <p className="post-card__text">{clean}</p>
        {tags.length > 0 && (
          <div className="post-card__tags">
            {tags.map((tag, i) => (
              <span key={i} className={`post-card__tag ${accentClass}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
