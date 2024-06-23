import { IoGameController, IoHeart, IoChatbubbles, IoStar, IoCalendar, IoFolderOpen, IoChatbox } from 'react-icons/io5';
import GameCard from '@/components/games/game-card';
import GameReviewCard from '@/components/games/game-review-card';
import OverallGameStatsCard from '@/components/games/overall-game-stats-card';
import FeaturesCard from '@/components/home/features-card';
import NavBar from '@/components/home/nav-bar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-16 gap-36 pb-10">
        <NavBar />
        <section className="flex flex-row">
          <div className="flex flex-1 flex-col items-start gap-6">
            <h4 className="text-5xl">Ctrl+Review: navigate gaming&apos;s universe of reviews</h4>
            <p className="text-lg">Track games you&apos;ve played, save those you want to beat, Tell your friends what&apos;s good (and what&apos;s not). Got a must-play series of games that you want to recommend? this is the place</p>
            <button className="bg-pink-700 py-4 px-16 rounded-md">Get started</button>
            <div className="flex flex-row gap-4">
              <OverallGameStatsCard statName="Games to explore" statNumber={300}/>
              <OverallGameStatsCard statName="Games played" statNumber={200}/>
              <OverallGameStatsCard statName="Games reviewed" statNumber={100}/>
            </div>
          </div>
          <div className="flex flex-1 relative">
            <GameReviewCard
              game="Elden Ring"
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              username="johndoe"
              rating={5}
              className="absolute right-20 bottom-16 z-10"
            />
            <GameReviewCard
              game="Cyberpunk 2077"
              imageUrl="https://wallpapers.com/images/hd/cyberpunk-2077-hd-v-poster-q0o5txv6a3pqp7a9.webp"
              username="janedoe"
              rating={4.5}
              className="absolute right-0 bottom-0 z-0"
            />
          </div>
        </section>
        <section className="flex flex-row justify-center gap-8">
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
            <FeaturesCard
              feature="Don't know what to play? Listen to our AI recommendations or ask our GPT bot"
              Icon={IoChatbox}
            />
          </div>
        </section>
    </main>
  );
}
