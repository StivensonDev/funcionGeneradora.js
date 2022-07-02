
function retornaTrue () {
    return true
}

function miAsincrona(){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* genParesID() {
    let id = 0;
    while (true) {
        id ++
        if (id === 2) {
            return id
        }
        yield id +=1
    }
}

const gen = genParesID();

console.log(gen.next().value)
