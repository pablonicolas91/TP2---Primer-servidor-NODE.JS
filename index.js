// Materia TP2
// Curso Yatay- 2-1-A
// Alumno: Pablo Manzur

const fs = require("fs")

const validTypes = ["undefined", "boolean", "number", "string", "bigint", "symbol", "object"]
const mainArray = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]
const condition = "number"

function evaluarElementosDe(arr, conditionValue) {
    if (validTypes.includes(conditionValue)) {                                                           
            let newArr = arr.filter(
                item => typeof item === conditionValue)
                .sort((a,b) => a -b) // sort con funcion para ordenar por valor y no por unicode

            if (newArr.length > 0) {
                const set = new Set(newArr) // Para eliminar duplicado lo paso a un set
                newArr = [... set]
                const file = fs.readFileSync("index.txt", "utf-8")
                const updateFile = fs.writeFileSync("index.txt", newArr.join("\n"))
                console.log(file)
            }
    } else {
        return "La condición no es válida."
    }  
}

console.log(evaluarElementosDe(mainArray, condition))