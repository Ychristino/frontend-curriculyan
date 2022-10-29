import apiCurriculo from "../api/ApiCurriculo";
import APIROUTES from "../consts/ApiRoutes";
import FormacaoModel from "../models/FormacaoModel"

export default class FormacaoService{

    listarFormacao(curriculoId = null){
        return apiCurriculo.get(`${APIROUTES.Formacoes}?curriculoId=${curriculoId}`)
        .then(e=> {
            return e.data
        })
        .catch(err=> {
            throw err
        })
    }
    
    cadastrarFormacao(formacao = FormacaoModel){
        return apiCurriculo.post(APIROUTES.Formacoes, formacao, 
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

    atualizarFormacao({formacao = FormacaoModel}){
        return apiCurriculo.put(APIROUTES.Formacoes, formacao, 
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

    deletarFormacao(id = null){
        return apiCurriculo.delete(APIROUTES.Formacoes, id, 
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