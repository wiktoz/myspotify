import SpotifyLoginButton from '@/components/SpotifyLoginButton'
import Logged from '@/components/Logged'

export const metadata = {
  title: 'myspotify',
  description: 'Check your top tracks and artists on Spotify',
}

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col items-center justify-center h-screen w-screen text-white px-5">
          <div className={"mx-8"}>
            <div className="mb-10">
              <h1 className="font-bold text-5xl mb-2">Welcome to myspotify</h1>
              <p className="text-stone-400">See your Top Listened Artists and Tracks</p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Logged></Logged>
              <SpotifyLoginButton></SpotifyLoginButton>
            </div>
          </div>
        </div>
      </main>
    </div>

  )
}
