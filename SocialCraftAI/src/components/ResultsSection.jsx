import PostCard from './PostCard';
import SkeletonCard from './SkeletonCard';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';

export default function ResultsSection({ loading, result }) {
  if (!loading && !result) return null;

  return (
    <section className="results">
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          <PostCard
            platform="LinkedIn"
            icon={<LinkedInIcon />}
            text={result.linkedin}
            accentClass="accent--linkedin"
            delay={0}
          />
          <PostCard
            platform="Instagram"
            icon={<InstagramIcon />}
            text={result.instagram}
            accentClass="accent--instagram"
            delay={120}
          />
        </>
      )}
    </section>
  );
}
