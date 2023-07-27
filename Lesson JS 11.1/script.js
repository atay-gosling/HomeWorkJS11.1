const input = document.querySelector("#input")
const button = document.querySelector('#CoverBtn')
const span = document.querySelector('#res')


const handlcheck = () => {
    const parse = parseInt(input.value)
    const randomnumber= Math.floor(Math.random() * 11)
    if (parse === randomnumber){
        return span.innerHTML = `Молодец, наши числа совпали! Мое число было ${randomnumber}`
    }else{
        return span.innerHTML =`Ох, попробуй еще раз моим числом в этот раз было - ${randomnumber}`
    }
}

button.addEventListener('click', (e) => {
    handlcheck()
})