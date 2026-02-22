import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import NotFound from '@/pages/Error/NotFound/NotFound'

import History from '@/pages/History/History'
import Home from '@/pages/Home/Home'
import TTSCloud from '@/pages/TTSCloud/TTSCloud'
import TTSGemini from '@/pages/TTSGemini/TTSGemini'

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
    ],
  },
]);

export default router