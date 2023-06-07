import { Route, Routes } from 'react-router'

import Public from './layouts/Public'
import path from './utils/path'
import { Home, Playlist } from './page'

function App() {

  return (
    <>
      <div className='max-h-screen bg-slate-500 overflow-hidden'>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route
              path={path.PLAYLIST_TITTLE__PLAYLISTID}
              element={<Playlist />}
            />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
