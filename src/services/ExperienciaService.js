import apiCurriculo from "../api/ApiCurriculo";
import APIROUTES from "../consts/ApiRoutes";
import ExperienciaModel from "../models/ExperienciaModel"

export default class ExperienciaService{

    listarExperiencia(curriculoId = null){
        return apiCurriculo.get(`${APIROUTES.Experiencias}?curriculoId=${curriculoId}`)
        .then(e=> {
            return e.data
        })
        .catch(err=> {
            throw err
        })
    }
    
    cadastrarExperiencia(experiencia = ExperienciaModel){
        return apiCurriculo.post(APIROUTES.Experiencia, experiencia, 
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

    atualizarExperiencia({experiencia = ExperienciaModel}){
        return apiCurriculo.put(APIROUTES.Experiencia, experiencia, 
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

    deletarExperiencia(id = null){
        return apiCurriculo.delete(APIROUTES.Experiencia, id, 
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