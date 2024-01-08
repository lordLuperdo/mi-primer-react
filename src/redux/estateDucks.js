import axios from "axios"

const dataInicial = {
    estado : {}
}

const GET_ESTADO = 'GET_ESTADO'
const GET_NEGATIVO = 'GET_NEGATIVO'

export default function estadoReduce(state=dataInicial, action ) {
          
       switch(action.type){
          case GET_ESTADO:
            return {...state, estado:action.peyload}
        
          case GET_NEGATIVO:
            return {...state, estado:action.peyload}

            default:
                return 'paila'
       }
}


export const getEstado =  ()=> async (dispatch , getState)=> {
    try {
        const {data} = await axios.get('https://api.clubvision.com.co/booking-manager/services/enabled')
         dispatch({
            type: GET_ESTADO,
            peyload: data

         })
    } catch (error) {
        if (error.response) {
            dispatch({
                type: GET_NEGATIVO,
                peyload:{code:error.response.data.code, message:"BadRequest",httpCode:error.response.data.httpCode}
            })
        } else {
            dispatch({
                type : 1,
                peyload: 'paila'
                
            })
        }
    }
}