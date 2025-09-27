import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const rootEl = document.getElementById('root')!
createRoot(rootEl).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// Remove splash screen once React has mounted
const splash = document.getElementById('splash-root')
if (splash) splash.remove()
