import GameCard from '@/components/games/game-card';
import NavBar from '@/components/home/nav-bar';
import React from 'react'
import styles from './profile.module.css';

type Props = {}

const Page = async (props: Props) => {
  return (
    <main className={`min-h-screen px-16 pb-10 profile-main ${styles.page}`}>
      <NavBar className={styles.nav}/>
      {/* user info container */}
      <div className={`flex flex-row justify-between items-center ${styles.profile} mb-8`}>
          <div className="flex flex-1 flex-row items-center gap-8">
            <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <h6>iaian</h6>
            <button className="bg-pink-700 py-2 px-4 rounded-md">Edit profile</button>
          </div>
          {/* side info of user  */}
          <div className="flex flex-1 flex-row items-center justify-end gap-2">
            <p>4 games</p>
            <span>|</span>
            <p>4 followers</p>
            <span>|</span>
            <p>4 following</p>
          </div>
        </div>
      <div className={`flex flex-col flex-1 gap-4 ${styles.mainsectin}`}>
        <div className="flex flex-col flex-1 gap-2">
          <h4>Favorite games</h4>
          <hr />
          <div className="flex flex-row gap-4">
            <GameCard
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              plays={1500}
              likes={1337}
            />
            <GameCard
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              plays={1500}
              likes={1337}
            />
            <GameCard
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              plays={1500}
              likes={1337}
            />  
            <GameCard
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              plays={1500}
              likes={1337}
            />  
            </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <h4>Recent played games</h4>
          <hr />
          <div className="flex flex-row gap-4">
            <GameCard
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              plays={1500}
              likes={1337}
            />
            <GameCard
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              plays={1500}
              likes={1337}
            />
            <GameCard
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              plays={1500}
              likes={1337}
            />
            <GameCard
              imageUrl="https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.webp"
              plays={1500}
              likes={1337}
            />  
            </div>
        </div>
      </div>
      <aside className={styles.right}>
        <h4><span>Play</span>list</h4>
        <hr />
      </aside>
    </main>
  )
}

export default Page;
