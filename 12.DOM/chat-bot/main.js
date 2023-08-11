const input = document.querySelector('input')
const div = document.querySelector('#contenedor')
const btn = document.querySelector('#btn-send')

const enviarMsj = () =>{
    let text = input.value
    let h1 = document.createElement('p')
    h1.classList.add('text-final')
    h1.textContent = text
    div.appendChild(h1)
    input.value = ''
    checkMsj(text)
}
const checkMsj = (res) => {
    resMin = res.toLowerCase();
    let date = new Date();
    if (resMin === 'hola') {
        let h1 = document.createElement('p')
        h1.classList.add('resp-bot')
        h1.textContent = `Hola, buenos días. espero que tengas un lindo dia`
        div.appendChild(h1)
    }else if (resMin === 'que dia es hoy') {
        let h1 = document.createElement('p')
        h1.classList.add('resp-bot')
        h1.textContent = `${date.getHours()}`
        div.appendChild(h1)
    }else if (resMin === 'tu nombre') {
        let h1 = document.createElement('p')
        h1.classList.add('resp-bot')
        h1.textContent = `Leo`
        div.appendChild(h1)
    }
}

btn.addEventListener('click', enviarMsj)

input.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        event.preventDefault();
        let text = input.value
        let h1 = document.createElement('p')
        h1.classList.add('text-center')
        h1.textContent = text
        div.appendChild(h1)
        input.value = ''
        checkMsj(text)
    }
})
