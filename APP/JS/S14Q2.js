function Adicionar_valor(inicial, adicional) {
    if (adicional <= 0) {
        throw new Error("Somente valores positivos devem ser adicionados ao valor adicional");
    }
    return inicial + adicional;
}
try {
    console.log(Adicionar_valor(1, 3));
}
catch (e) {
    console.log(e.message);
}
try {
    Adicionar_valor(3, -4);
}
catch (e) {
    console.log(e.message);
}
