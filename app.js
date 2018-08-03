const ramsayBolton = {
    name: 'Ramsay Bolton Crazy',
    craziness: [
        'Normalish',
        'Crazy',
        'PSYCHO'
    ],
    crazinessImgs: [
        'assets/ramsay_and_yara.jpg',
        'assets/gLvMOX5.gif'

    ],
    tolerance: 30,
    annoy: 5,
    anger: 10,
    rage: 20,
    craziness: 0,
}

const ramHealth = {
    name: 'Ramsay Bolton Health',
    health: [
        'Healthy',
        'Ouch',
        'Dog Food'
    ],

    healthImgs: [
        'assets/UnrealisticHideousBeaver.gif',
        'assets/ramsay.jpg',
    ],
    tolerance: 30,
    eyepoke: 5,
    haymaker: 10,
    dogs: 20,
    Health: 100,
}


const crazyImg = document.getElementById('crazy-img')
const healthImg = document.getElementById('health-img')
const name = document.getElementById('name')
const craziness = document.getElementById('craziness')
const health = document.getElementById('health')
const annoyButton = document.getElementById('annoy-button')
const angerButton = document.getElementById('anger-button')
const rageButton = document.getElementById('rage-button')
const eyepokeButton = document.getElementById('eyepoke-button')
const haymakerButton = document.getElementById('haymaker-button')
const dogsButton = document.getElementById('dogs-button')

