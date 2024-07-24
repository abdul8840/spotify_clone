import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import { useContext } from "react"
import { PlayerContext } from "./context/PlayerContext"

const App = () => {

  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      {songsData.length !== 0
        ? <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <Player />

        </>
        : null}

      <audio src={track ? track.file : ""} preload="auto" ref={audioRef}></audio>
    </div>

  )
}

export default App
