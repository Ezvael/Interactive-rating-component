const valuation = document.querySelector('#valuation');
const gratitude = document.querySelector('#gratitude');
const submitBtn = document.querySelector('#submit-btn');
const one = document.querySelector('#rate-one');
const two = document.querySelector('#rate-two');
const three = document.querySelector('#rate-three');
const four = document.querySelector('#rate-four');
const five = document.querySelector('#rate-five');

// Rating feature
one.addEventListener('click', () => {
    document.getElementById('your-rating').innerHTML = 1;
    document.querySelector('#submit-btn').disabled = false;
})

two.addEventListener('click', () => {
    document.getElementById('your-rating').innerHTML = 2;
    document.querySelector('#submit-btn').disabled = false;
})

three.addEventListener('click', () => {
    document.getElementById('your-rating').innerHTML = 3;
    document.querySelector('#submit-btn').disabled = false;
})

four.addEventListener('click', () => {
    document.getElementById('your-rating').innerHTML = 4;
    document.querySelector('#submit-btn').disabled = false;
})

five.addEventListener('click', () => {
    document.getElementById('your-rating').innerHTML = 5;
    document.querySelector('#submit-btn').disabled = false;
})

// Change valuation to gratitude
function changeContainer() {
    valuation.classList.add('hidden');
    gratitude.classList.remove('hidden');
}

submitBtn.addEventListener('click', () => {
    changeContainer();
});
