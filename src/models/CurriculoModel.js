import FormacaoModel from "./FormacaoModel";
import AtributoModel from "./AtributoModel";
import ExperienciaModel from "./ExperienciaModel";

export default class CurriculoModel{
    constructor({id, atividadesAtuais, formacoes, atributos, experiencias, atividadesExtras}){
        this.id = id;
        this.atividadesAtuais = atividadesAtuais;
        this.formacoes = formacoes.map(f=> new FormacaoModel(f))
        this.atributos = atributos.map(a=> new AtributoModel(a))
        this.experiencias = experiencias.map(e=> new ExperienciaModel(e))
        this.atividadesExtras = atividadesExtras
    }
}