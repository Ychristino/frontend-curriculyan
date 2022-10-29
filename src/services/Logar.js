import apiCurriculo from "../api/ApiCurriculo";
import APIROUTES from "../consts/ApiRoutes";

export default class LoginService{
    
    logar(email, senha){
        return apiCurriculo.post(APIROUTES.Login, {email, senha}, 
        {
            headers:{
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('TOKEN'))}`,
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