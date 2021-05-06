const answers = ['A', 'B', 'A', 'B']
const result = document.querySelector('.result')

const form = document.querySelector('.quiz-form')

form.addEventListener('submit', e => {
    e.preventDefault()
    let score = 0

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((userValue, index) => {
        if (userValue === answers[index]) {
            score += 25
        }
        scrollTo(0, 0)
        result.classList.remove('d-none')


        //animate
        let output = 0

        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`
            if (output === score) {
                clearInterval(timer)
            } else {
                output++
            }
        }, 10)

    })
})

