// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// Prendo il bottone
const btnPlay = document.querySelector('#btn-play');

// Prendo selettore difficoltà
const difficultySel = document.querySelector('#sel-difficulty');

// Prendo gli elementi
const difficultyElementSel = document.querySelectorAll('#sel-difficulty option');

console.log(difficultyElementSel[1]);


let create = false;

// Prendo il contenitore dei box
const gridContainer = document.querySelector('.container .grid-container');


// Bottone Play Game (crea la griglia)
btnPlay.addEventListener('click', function () {

   if (difficultyElementSel[1]){
    if (!create) {

        for (let i = 1; i < 101; i++) {
            const newBox = makeBox();
            newBox.classList.add('box', 'text-white', 'd-flex', 'justify-content-center', 'align-items-center')

            newBox.innerHTML = i;

            gridContainer.append(newBox);

                // click sul box
                clikElement(newBox, i);
                isClicked = true;
        }
        create = true;
    }


   } else if (difficultyElementSel[2]){

    if (!create) {

        for (let i = 1; i < 82; i++) {
            const newBox = makeBox();
            newBox.classList.add('box-st', 'text-black', 'd-flex', 'justify-content-center', 'align-items-center')

            newBox.innerHTML = i;

            gridContainer.append(newBox);

                // click sul box
                clikElement(newBox, i);
                isClicked = true;
        }
        create = true;
    }


   } else {

    if (!create) {

        for (let i = 1; i < 50; i++) {
            const newBox = makeBox();
            newBox.classList.add('box-h', 'text-black', 'd-flex', 'justify-content-center', 'align-items-center')

            newBox.innerHTML = i;

            gridContainer.append(newBox);

                // click sul box
                clikElement(newBox, i);
                isClicked = true;
        }
        create = true;
    }

   }


})



// Funzione che crea un box
function makeBox() {
    let makeNewBox = document.createElement('div');
    return makeNewBox;
}

// funzione click su box
function clikElement(htmlElement, index) {
    htmlElement.addEventListener('click', function () {
        htmlElement.classList.toggle('box-click')
        console.log(index)
    })
}