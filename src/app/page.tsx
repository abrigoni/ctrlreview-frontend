import Image from "next/image";
import { FaStar } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-16">
        <nav className="flex flex-row py-8">
          <Image
            src="iso_logo.svg"
            alt="Ctrl+Review Logo"
            width={150}
            height={30}
            priority
          />
        </nav>
        <section className="flex flex-row mt-32">
          <div className="flex flex-1 flex-col items-start gap-6">
            <h4 className="text-5xl">Ctrl+Review: Navigate Gaming&apos;s Universe of Reviews</h4>
            <p className="text-lg">Track games you&apos;ve played, save those you want to beat, Tell your friends what&apos;s good (and what&apos;s not). Got a must-play series of games that you want to recommend? this is the place</p>
            <button className="bg-pink-600 py-4 px-16 rounded-md">Start Exploring</button>
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
            <div className="flex flex-col bg-[#00000040] backdrop-blur-md rounded-md border-[1px] border-[#FFFFFF16] px-3 py-4 absolute right-20 bottom-16 z-10">
              <img
                src="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
                alt="eldenring-image"
                className="w-64 h-80 object-cover border-[1px] border-[#FFFFFF16] rounded-md"
              />
              <div className="mt-2 flex flex-col">
                <p>Elden Ring</p>
                <div className="flex flex-row items-center gap-2">
                  <img src="https://picsum.photos/id/1/15/15" alt="user-avatar-1" className="rounded-lg" />
                  <p className="flex-1">Jane.doe</p>
                  <div className="flex flex-row items-center gap-1">
                    <p>5</p>
                    <FaStar width={18} height={18} className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#00000040] backdrop-blur-md rounded-md border-[1px] border-[#FFFFFF16] px-3 py-4 absolute right-0 bottom-0 z-0">
              <img
                src="https://wallpapers.com/images/hd/cyberpunk-2077-hd-v-poster-q0o5txv6a3pqp7a9.webp"
                alt="cyberpunk-image"
                className="w-64 h-80 object-cover border-[1px] border-[#FFFFFF16] rounded-md object-cover"
              />
              <div className="mt-2 flex flex-col">
                <p>Cyberpunk 2077</p>
                <div className="flex flex-row items-center gap-2">
                  <img src="https://picsum.photos/id/1/15/15" alt="user-avatar-1" className="rounded-lg" />
                  <p className="flex-1">Jane.doe</p>
                  <div className="flex flex-row items-center gap-1">
                    <p>4.5</p>
                    <FaStar width={18} height={18} className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
