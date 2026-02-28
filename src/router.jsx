import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import NotFound from '@/pages/Error/NotFound/NotFound'

import History from '@/pages/History/History'
import Home from '@/pages/Home/Home'
import Projects from '@/pages/Projects/Projects'
import Settings from '@/pages/Settings/Settings'
import TTSCloud from '@/pages/TTSCloud/TTSCloud'
import TTSGemini from '@/pages/TTSGemini/TTSGemini'
import Voices from '@/pages/Voices/Voices'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },

      {
        path: "/projects", 
        element: <Projects />,
      },

      {
        path: "/tts-gemini", 
        element: <TTSGemini />,
      },

      {
        path: "/tts-cloud", 
        element: <TTSCloud />,
      },

      {
        path: "/tts-history", 
        element: <History />,
      },

      {
        path: "/tts-voices", 
        element: <Voices />,
      },

      {
        path: '/settings',
        element: <Settings />
      }
    ],
  },
]);

export default router