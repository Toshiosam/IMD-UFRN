class Pet{
    constructor(public nome: string){
     this.nome = nome 
    }
 }
 class Livro {
     constructor(public nome: string){
     this.nome = nome 
     }
 }
 
 class Colecao <n>{
     private lista: n[] = [];
 
     public adicionar (elemento: n){
         this.lista.push(elemento)
     }
     
     public mostrarTodos() {
        for (const elemento of this.lista){
         console.log(elemento)
        }
     }
  
 
 }
 
 const meusLivrosPrediletos = new Colecao<Livro>();
 const animais = new Colecao<Pet>();
 
 const dom_quixote = new Livro("Dom Quixote")
 const a_divina_comedia = new Livro("A Divina Comédia")
 
 meusLivrosPrediletos.adicionar(dom_quixote)
 meusLivrosPrediletos.adicionar(a_divina_comedia)
 
 const toto = new Pet("Totó");
 const fofo = new Pet("Fofo");
 
 animais.adicionar(toto);
 animais.adicionar(fofo);
 
 meusLivrosPrediletos.mostrarTodos();
 animais.mostrarTodos();