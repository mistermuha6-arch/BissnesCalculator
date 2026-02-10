const sum = document.getElementById('Sum')
const inpTax = document.getElementById('inputTaxes')
const inpMat = document.getElementById('inputMaterials')
const inpSal = document.getElementById('inputSalary')
const Btn = document.getElementById('resuBtn')
const marj = document.getElementById('marginality')  

Btn.addEventListener('click',() => {
    const remainder =  Conclusion()
    color(remainder)
})

function Conclusion () {
    const expenses = Number(inpMat.value) + Number(inpSal.value) + Number(inpTax.value)
    const remainder = Number(sum.value)- Number(expenses)
    marj.textContent = `${remainder} $`
    return remainder
}
function color(remainder) {
    if(remainder > 0) {
     marj.style.color = 'green'}
     else if(remainder < 0){
     marj.style.color = 'red'
     }
    }