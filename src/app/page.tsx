import { IoGameController, IoHeart, IoChatbubbles, IoStar,IoFolderOpen } from 'react-icons/io5';
import GameCard from '@/components/games/game-card';
import GameReviewCard from '@/components/games/game-review-card';
import OverallGameStatsCard from '@/components/games/overall-game-stats-card';
import FeaturesCard from '@/components/home/features-card';
import NavBar from '@/components/home/nav-bar';
import { API_URL } from '@/utils/env.config';
import { Button } from '@/components/ui/moving-border';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
export default async function Home() {
  let user = null;
  try { 
    const res = await fetch(`${API_URL}/users/profile`, { credentials: 'include', cache: 'no-cache' })
    user = await res?.json() ?? null;
  } catch (err) {
    console.error(err);
  }

  return (
    <main className="flex min-h-screen flex-col px-6 gap-6 pb-10 md:px-32 md:gap-24">
      <NavBar user={user} />
      <section className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-6 md:items-start">
          <h4 className="text-2xl text-center md:text-left md:text-3xl">Ctrl+Review: navigate gaming&apos;s universe of reviews</h4>
          <p className="text-sm text-justify md:text-md font-medium">Track games you&apos;ve played, save those you want to beat, Tell your friends what&apos;s good (and what&apos;s not). Got a must-play series of games that you want to recommend? this is the place</p>
          <Button
            borderRadius="1rem"
            className="bg-[#16141c] text-white border-slate-800"
          >
            Get started
          </Button>
          <div className="flex flex-row gap-4">
            <OverallGameStatsCard statName="Games to explore" statNumber={300}/>
            <OverallGameStatsCard statName="Games played" statNumber={200}/>
            <OverallGameStatsCard statName="Games reviewed" statNumber={100}/>
          </div>
        </div>
        <div className="flex mb-16 flex-row justify-center md:flex-1 md:justify-end md:mb-0">
          <GameReviewCard
            game="Elden Ring"
            imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
            username="johndoe"
            rating={5}
          />

        </div>
      </section>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <section className="flex flex-row gap-8 overflow-scroll">
        <GameCard
          imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
          plays={1500}
          likes={1337}
        />
        <GameCard
          imageUrl="https://wallpapers.com/images/hd/cyberpunk-2077-hd-v-poster-q0o5txv6a3pqp7a9.webp"
          plays={1500}
          likes={1337}
        />
        <GameCard
          imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
          plays={1500}
          likes={1337}
        />
        <GameCard
          imageUrl="https://wallpapers.com/images/hd/cyberpunk-2077-hd-v-poster-q0o5txv6a3pqp7a9.webp"
          plays={1500}
          likes={1337}
        />
        <GameCard
          imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
          plays={1500}
          likes={1337}
        />
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl">With Ctrl+Review you can:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeaturesCard
            feature="Log every game you've played or that you are playing"
            Icon={IoGameController}
          />
          <FeaturesCard
            feature="Rate games you've enjoyed and share your favorites"
            Icon={IoHeart}
          />
          <FeaturesCard
            feature="Write and share reviews, follow your friends and other members"
            Icon={IoChatbubbles}
          />
          <FeaturesCard
            feature="Score games on a 5 star scale to record your experience"
            Icon={IoStar}
          />
          <FeaturesCard
            feature="Create and share game lists on any theme and maintain a wish to play list"
            Icon={IoFolderOpen}
          />
        </div>
      </section>
    </main>
  );
}
