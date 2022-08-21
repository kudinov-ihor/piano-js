const pianoKeys = document.querySelectorAll('.key');
let url;
console.log(pianoKeys)
let number;


function playSound() {
    console.log(url)
    console.log(number)
    new Audio(url).play();
}

pianoKeys.forEach((pianoKey, index) => {
    console.log(index)


    pianoKey.addEventListener('click', () => {

        number = index < 9 ? '0' + (index + 1) : index + 1;
        console.log(number);
        url = 'piano-keys/key' + number + '.mp3';
        new Audio(url).play()
    })

})