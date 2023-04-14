const cardArray = [
    {
        name: 'jenkins',
        img: 'images/1.png'
    },
    {
        name: 'kubernetes',
        img: 'images/2.png'
    },
    {
        name: 'docker',
        img: 'images/3.png'
    },
    {
        name: 'argo',
        img: 'images/4.png'
    },
    {
        name: 'linkerd',
        img: 'images/5.png'
    },
    {
        name: 'gloo',
        img: 'images/6.png'
    },
    {
        name: 'postgresql',
        img: 'images/7.png'
    },
    {
        name: 'kyverno',
        img: 'images/8.png'
    },
    {
        name: 'jenkins_ans',
        img: 'images/9.png'
    },
    {
        name: 'argo_ans',
        img: 'images/10.png'
    },
    {
        name: 'kubernetes_ans',
        img: 'images/11.png'
    },
    {
        name: 'docker_ans',
        img: 'images/12.png'
    },
    {
        name: 'linkerd_ans',
        img: 'images/13.png'
    },
    {
        name: 'gloo_ans',
        img: 'images/14.png'
    },
    {
        name: 'postgresql_ans',
        img: 'images/15.png'
    },
    {
        name: 'kyverno_ans',
        img: 'images/16.png'
    }
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/3000.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match')
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/3000.png')
        cards[optionTwoId].setAttribute('src', 'images/3000.png')
        alert('You have clicked the same image!')
    }
    if (
        (cardsChosen[0] == 'jenkins' && cardsChosen[1] == 'jenkins_ans') || (cardsChosen[1] == 'jenkins' && cardsChosen[0] == 'jenkins_ans') ||
        (cardsChosen[0] == 'kubernetes' && cardsChosen[1] == 'kubernetes_ans') || (cardsChosen[1] == 'kubernetes' && cardsChosen[0] == 'kubernetes_ans') ||
        (cardsChosen[0] == 'docker' && cardsChosen[1] == 'docker_ans') || (cardsChosen[1] == 'docker' && cardsChosen[0] == 'docker_ans') ||
        (cardsChosen[0] == 'argo' && cardsChosen[1] == 'argo_ans') || (cardsChosen[1] == 'argo' && cardsChosen[0] == 'argo_ans') ||
        (cardsChosen[0] == 'linkerd' && cardsChosen[1] == 'linkerd_ans') || (cardsChosen[1] == 'linkerd' && cardsChosen[0] == 'linkerd_ans') ||
        (cardsChosen[0] == 'gloo' && cardsChosen[1] == 'gloo_ans') || (cardsChosen[1] == 'gloo' && cardsChosen[0] == 'gloo_ans') ||
        (cardsChosen[0] == 'postgresql' && cardsChosen[1] == 'postgresql_ans') || (cardsChosen[1] == 'postgresql' && cardsChosen[0] == 'postgresql_ans') ||
        (cardsChosen[0] == 'kyverno' && cardsChosen[1] == 'kyverno_ans') || (cardsChosen[1] == 'kyverno' && cardsChosen[0] == 'kyverno_ans')
    ) {
        // alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/1000.png')
        cards[optionTwoId].setAttribute('src', 'images/1000.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        

    } else {
        cards[optionOneId].setAttribute('src', 'images/3000.png')
        cards[optionTwoId].setAttribute('src', 'images/3000.png')
        // alert('Sorry try again!')
    }

    resultDisplay.textContent = cardsWon.length*20
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == (cardArray.length/2)) {
        resultDisplay.innerHTML = 'Congratulations you found them all!!'
    }
    
}
function flipCard () {
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}