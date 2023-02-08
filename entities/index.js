function createAdvice(advice) {
   const adviceId = document.createElement('span')
   adviceId.textContent = `ADVICE #${advice.slip.id}`
   adviceId.classList.add('advice-title')

   const adviceContent = document.createElement('quote')
   adviceContent.textContent = `"${advice.slip.advice}"`
   adviceContent.classList.add('quotes-advice')

   document.querySelector('#advice-title').append(adviceId)
   document.querySelector('#quotes-advice').append(adviceContent)
}
    
async function getAdvices() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const advices = await response.json()
    
    console.log(advices)
    createAdvice(advices)
}
getAdvices()

document.querySelector('.icon-dice').addEventListener('click', () => {
    window.location.reload();
})
