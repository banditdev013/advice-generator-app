const randomBtn = document.querySelector('.random-btn')
randomBtn.addEventListener('click', getData)

async function getData() {
    const random_id = Math.floor(Math.random() * 200)
    const slip_id = random_id
    const url = `https://api.adviceslip.com/advice/${slip_id}`
    const response = await fetch(url)
    const data = await response.json()
    showDataToUi(data)
}

function showDataToUi(data) {
    const adviceId = document.getElementById('advice-id')
    const textRandom = document.querySelector('.text-random')

    adviceId.innerText = `#${data.slip.id}`
    textRandom.innerText = `“${data.slip.advice}”`
}