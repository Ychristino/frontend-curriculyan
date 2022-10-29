import ApiCurriculo from "../api/ApiCurriculo";
import APIROUTES from "../consts/ApiRoutes";
import ProjetoModel from "../models/ProjetoModel"

export default class ProjetoService{

    listarProjeto(){
        return ApiCurriculo.get(`${APIROUTES.Projetos}`)
        .then(e=> {
            return e.data
        })
        .catch(err=> {
            throw err
        })
    }
    
    cadastrarProjeto(projeto = ProjetoModel){
        return ApiCurriculo.post(APIROUTES.Projetos, projeto, 
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

    atualizarProjeto({projeto = ProjetoModel}){
        return ApiCurriculo.put(APIROUTES.Projetos, projeto, 
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

    deletarProjeto(id = null){
        return ApiCurriculo.delete(APIROUTES.Projetos, id, 
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