interface Controlavel{
    mover():void;
}

class Jogador implements Controlavel{
    mover():void{
        console.log("[Jogador]: se movendo");
    }
}

class Volante implements Controlavel{
    mover():void{
        console.log("[Volante]: se movendo");
    }
}


let j = new Jogador;
j.mover;

let v = new Volante;
v.mover;   