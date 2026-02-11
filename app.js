/*const sum = document.getElementById('Sum')
const inpTax = document.getElementById('inputTaxes')
const inpMat = document.getElementById('inputMaterials')
const inpSal = document.getElementById('inputSalary')
const Btn = document.getElementById('resuBtn')
const marj = document.getElementById('marginality')  
const country = document.getElementById('countri')

Btn.addEventListener('click',() => {
    const remainder =  Conclusion()
    color(remainder)
})

function Conclusion () {
    const expenses = Number(inpMat.value) + Number(inpSal.value) + Number(inpTax.value)
    const remainder = Number(sum.value)- Number(expenses)
    marj.textContent = `${remainder}$` 
    return remainder
}
function color(remainder) {
    if(remainder > 0) {
     marj.style.color = 'green'}
     else if(remainder < 0){
     marj.style.color = 'red'
     }
    }

country.addEventListener('change' ,() => {
    const persent = Number(country.value)
    const prise = Number(sum.value|| 0)
    const taxValue = prise * persent /100
    inpTax.value = taxValue.toFixed(2)
}) */

    const sum = document.getElementById('Sum')
const inpTax = document.getElementById('inputTaxes')
const inpMat = document.getElementById('inputMaterials')
const inpSal = document.getElementById('inputSalary')
const Btn = document.getElementById('resuBtn')
const marj = document.getElementById('marginality')  
const country = document.getElementById('countri')

// Кнопка "Посчитать"
Btn.addEventListener('click', () => {
    const remainder = Conclusion()
    color(remainder)
})

// Функция расчёта маржи
function Conclusion() {
    const expenses = Number(inpMat.value) + Number(inpSal.value) + Number(inpTax.value)
    const remainder = Number(sum.value) - expenses
    marj.textContent = `${remainder.toFixed(2)}$`
    return remainder
}

// Цвет маржи
function color(remainder) {
    if (remainder > 0) {
        marj.style.color = 'green'
    } else if (remainder < 0) {
        marj.style.color = 'red'
    } else {
        marj.style.color = 'black'
    }
}

// Выбор страны → автоматический налог
country.addEventListener('change', () => {
    const percent = Number(country.value)
    const price = Number(sum.value || 0)
    const taxValue = price * percent / 100
    inpTax.value = taxValue.toFixed(2) 
}) 

const inputs = [sum,inpMat,inpSal,inpTax,country]

inputs.forEach(input => {
    input.addEventListener('input' ,() => {
        localStorage.setItem(input.id,input.value)
    })
})

window.addEventListener('load',() => {
    inputs.forEach(input =>{
        const saved = localStorage.getItem(input.id)
        if (saved) {
            input.value = saved
        }
    })
})
