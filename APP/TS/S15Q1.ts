enum Situacao{
    EmPreparo = 'EmPreparo', 
    Finalizada = 'Finalizada'
}
enum TipoPrato{
    Sopa = 'Sopa', 
    Sanduiche = 'Sanduiche', 
    Rabada = 'Rabada'
} 

type Receita ={
    situacao:Situacao,
    tipo_prato:TipoPrato
}

let sanduba:Receita ={
    situacao : Situacao.EmPreparo,
    tipo_prato : TipoPrato.Sanduiche

    }
console.log(sanduba)