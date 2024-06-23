import GameCard from '@/components/games/game-card';
import NavBar from '@/components/home/nav-bar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-16">
        <NavBar />
        <section className="flex flex-row mt-32">
          <div className="flex flex-1 flex-col items-start gap-6">
            <h4 className="text-5xl">Ctrl+Review: navigate gaming&apos;s universe of reviews</h4>
            <p className="text-lg">Track games you&apos;ve played, save those you want to beat, Tell your friends what&apos;s good (and what&apos;s not). Got a must-play series of games that you want to recommend? this is the place</p>
            <button className="bg-pink-600 py-4 px-16 rounded-md">Get started</button>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-center min-w-36">
                <p>+300</p>
                <p>Games to explore</p>
              </div>
              <div className="flex flex-col items-center min-w-36">
                <p>+200</p>
                <p>Games played</p>
              </div>
              <div className="flex flex-col items-center min-w-36">
                <p>+100</p>
                <p>Games reviewed</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 relative">
            <GameCard
              game="Elden Ring"
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              username="johndoe"
              rating={5}
              className="absolute right-20 bottom-16 z-10"
            />
            <GameCard
              game="Cyberpunk 2077"
              imageUrl="https://wallpapers.com/images/hd/cyberpunk-2077-hd-v-poster-q0o5txv6a3pqp7a9.webp"
              username="janedoe"
              rating={4.5}
              className="absolute right-0 bottom-0 z-0"
            />
          </div>
        </section>
    </main>
  );
}
