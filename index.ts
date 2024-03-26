// VARIABLE DECLARATION TYPESCRIPT

let nama = "mustofa"
let address = "purwadhika"
let school: any = "purwadhika"
school = 123
school = true
school = []
let age: boolean = true
let student: [] = []
let student1: {} = []

let studentName
studentName = "mustofa"
studentName = 123

// Array
// Array Biasa: Value didalam array memiliki tipe data yang sama
// [1,2,3,4,5,6,7,8,9]
let number: number[] = [1,2,3,4,5,6,7,8,9]

// Array Tuples: Value didalam array memiliki tipe data yang beragam
let arrData: [string, number, boolean] = ["mustofa",123,true]
arrData.push(123,false,"purwadhika")
console.log(arrData)
let arrData1: any[] = [true, 123, "mustofa", false, "pay"]

// Object
type TobjStudent = {
    name: string,
    age: number,
    address: string
    program?: "JCWD" | "JCDS" | "JCUIUX" | "JCDM"
}

let objStudent: TobjStudent
objStudent = {
    name: "mustofa",
    age: 23,
    address: "purwadhika",
    // program: "JCWD"
}
console.log(objStudent)

// FUNCTION TYPESCRIPT
// With Return
function Greeting(): string{
    return "hello"
}
console.log(Greeting())

// INTERFACE TYPESCRIPT
type Tprogram = "JCWD" | "JCDM"

interface IobjCampusPWD {
    name: string,
    address: string,
    program: Tprogram
}

let objCampusPWD: IobjCampusPWD = {
    name : "BSD",
    address : "GOP-09",
    program : "JCWD"
}

console.log(objCampusPWD)