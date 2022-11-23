import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppPortafolio } from './AppPortafolio'
import { AppRouter } from './routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <AppPortafolio/>
      <hr />
      <AppRouter/>

  </React.StrictMode>
)
