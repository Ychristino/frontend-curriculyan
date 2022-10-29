import apiCurriculo from "../api/ApiCurriculo";
import APIROUTES from "../consts/ApiRoutes";
import AtributoModel from "../models/AtributoModel"

export default class AtributoService{

    listarAtributos(curriculoId = null){
        return apiCurriculo.get(`${APIROUTES.Atributos}?curriculoId=${curriculoId}`)
        .then(e=> {
            return e.data
        })
        .catch(err=> {
            throw err
        })
    }
    
    cadastrarAtributo(atributo = AtributoModel){
        return apiCurriculo.post(APIROUTES.Atributos, atributo, 
        {
            headers:{
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('TOKEN'))}`
            }
        })
        .then(e=> {
            return e.data
        })
        .catch(err=>{
            throw err
        })
    }

    atualizarAtributo({atributo = AtributoModel}){
        return apiCurriculo.put(APIROUTES.Atributos, atributo, 
            {
                headers:{
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('TOKEN'))}`
                }
            })
            .then(e=> {
                return e.data
            })
            .catch(err=>{
                throw err
            })
        }

    deletarAtributo(id = null){
        return apiCurriculo.delete(APIROUTES.Atributos, id, 
            {
                headers:{
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('TOKEN'))}`
                }
            })
            .then(e=> {
                return e.data
            })
            .catch(err=>{
                throw err
        })
    }
}