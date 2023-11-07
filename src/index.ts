let mensaje: string = "Hola Mundo"

mensaje = "chanchito feliz"

mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])

let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true
//tipo inferido

function chanchitoFeliz(config: any) {
    return config
}

//inicializamos las variables con un valor o con el tipo. No dejar el "any"

let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//.map itero elementos de arreglo y les aplico una función
//nums.map(x => x.)
//el autocompletado sugiere métodos del tipo de dato

let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchito felipe']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)


const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

//DEFINIR OBJETOS 

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {

    readonly id: number, //no quiero que cambie
    nombre?: string,  //opcional
    talla: Talla,
    direccion: Direccion

}
const objeto: Persona = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
}

const arr: Persona[] = []