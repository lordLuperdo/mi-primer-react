
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";


import { Provider } from 'react-redux';
import generateStore from './redux/store';


const store = generateStore();

function App() {

  let [estado,setestado] = useState(null);


  const getdata = async () => {
   
      try {
          const {data} = await axios.get('https://api.clubvision.com.co/booking-manager/services/enabled');
          setestado(data)
      } catch (error) {
        if (error.response) {
          setestado({ code: error.response.data.code, message: error.response.data.message, httpCode: error.response.data.httpCode})
          console.log(error.response);
        } else {
          setestado('paila');
        }
      }
      
  };

  
  
  useEffect(() => {
      getdata()
      })
   
      const store = generateStore()

   return (
   
     

    <Provider store = { store }>
      <h1>
        holi 
      </h1>
      <h1>
      {estado === null ? 'Cargando...' : typeof estado === 'object' 
      ? `Error: ${estado.code} - ${estado.message} - ${estado.httpCode}` :  estado}
       
      </h1>
    

</Provider>

    
  );
}

export default App;
