import apiCurriculo from "../api/ApiCurriculo";
import APIROUTES from "../consts/ApiRoutes";
import CurriculoModel from "../models/CurriculoModel"

export default class CurriculoService{

    listarCurriculo(id = null){
        return apiCurriculo.get(`${APIROUTES.Curriculo}/${id}`)
        .then(e=> {
            return e.data
        })
        .catch(err=> {
            throw err
        })
    }
    
    cadastrarCurriculo(curriculo = CurriculoModel){
        return apiCurriculo.post(APIROUTES.Curriculo, curriculo, 
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

    atualizarCurriculo({curriculo = CurriculoModel}){
        return apiCurriculo.put(APIROUTES.Curriculo, curriculo, 
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

    deletarCurriculo(id = null){
        return apiCurriculo.delete(APIROUTES.Curriculo, id, 
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