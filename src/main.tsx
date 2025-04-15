import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeContext.tsx'
import { HeadProvider } from 'react-head'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/apoloIXcode/'>
    <HeadProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HeadProvider>
  </BrowserRouter>
)
