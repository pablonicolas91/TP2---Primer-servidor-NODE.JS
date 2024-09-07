// Materia TP2
// Curso Yatay- 2-1-A
// Alumno: Pablo Manzur

const mainArray = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]

const condition = "number"

//1
function evaluar(arr, conditionValue) {
    // 2
  const newArr = arr.filter(item => typeof item === conditionValue)
  console.log(newArr)
}

evaluar(mainArray, condition)