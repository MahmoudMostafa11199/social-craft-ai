export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-line skeleton-line--short" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />
      <div className="skeleton-line skeleton-line--mid" />
      <div className="skeleton-tags">
        <div className="skeleton-tag" />
        <div className="skeleton-tag" />
        <div className="skeleton-tag skeleton-tag--long" />
      </div>
    </div>
  );
}
