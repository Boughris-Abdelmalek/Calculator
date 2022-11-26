const keyNumber = document.querySelectorAll('.number');
const output = document.getElementById('output');

keyNumber.forEach(e => {
    e.addEventListener('click', num => {
        output.value = num.target.value
    })
})