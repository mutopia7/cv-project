import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <main className='app'>
        <section className='editor'>
          <div>sdfsdfdsfs</div>
        </section>
        <section className='preview'>
          <Header />
        </section>
        
      </main>
      
  </StrictMode>,
)
