
import ReactDOM from 'react-dom/client'

import './index.css'

 


import StoreContextProvider from './context/StoreContext.jsx'
import App from './app/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

   
     <StoreContextProvider>
    <App/>
     </StoreContextProvider>


)
