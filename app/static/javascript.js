var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'];

var word; //= importera från databas

var guesses = [];
var counter;

//var showLives = document.getElementById('mylives');
var lives;

console.log(alphabet);

// Genererar hela alfabetet som knappar
function buttons() {

    console.log("buttons");
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {

        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);

    }
    
    document.getElementById('start').style.display = 'none'

}

function wordletters() {
    
    correctWord = document.createElement('ul');
    
    for (var i = 0; i < word.length; i++) {
        
        correctWord.setAttribute('id', 'correctWord');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        guess.innerHTML = '_';
        
        guesses.push(guess);
        document.getElementById('hold').appendChild(correctWord);
        correctWord.appendChild(guess);
        
    }
    
}

// Kommenterar vad som händer + avslutar spelet
function comments() {
    
    document.getElementById('myLives').innerHTML = "Du har " + lives + " liv kvar";
    if (lives < 1) {
        document.getElementById('myLives').innerHTML = "Slut på liv!";
        end();
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter === guesses.length) {
            document.getElementById('myLives').innerHTML = "Du vann!";
            end();
        }
    }
    
}

function end() {
    
    document.getElementById('start').style.display = "table";
    
    
}


// Kolla om det bokstav man har valt finns i ordet eller inte
function check() {
    
    list.onclick = function () {
        
        var guess = (this.innerHTML);
        this.setAttribute('class', 'active');
        this.onclick = null;
        
        for (var i = 0; i < word.length; i++) {
            
            if (word[i] === guess) {                
                guesses[i].innerHTML = guess;
                counter += 1;                
            }  
            
        }
        
        var j = (word.indexOf(guess));
        if (j === -1) {
            lives -= 1;
            comments();
            drawArray(lives);
        } else {
            comments();
        }
        
    }
    
}




function draw(fromX, fromY, toX, toY, circle) {
    
    var stickman = document.getElementById('stickman');
    var context = stickman.getContext('2d');
    context.beginPath();
    context.lineWidth = 2;
    
    if (circle == 1) {
        
        context.arc(fromX, fromY, toX, toY, 2 * Math.PI);
        context.stroke();
        
    } else {
        
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
        
    }    
    
}

function drawArray(toDraw) {
    
    switch(toDraw) {
        case 9:
            draw(20, 140, 280, 140, 0);
            break;
        case 8:
            draw(100, 140, 100, 20, 0);
            break;
        case 7:
            draw(100, 20, 200, 20, 0);
            break;
        case 6:
            draw(200, 20, 200, 40, 0);
            break;
        case 5:
            draw(200, 50, 10, 0, 1);
            break;
        case 4:
            draw(200, 60, 200, 100, 0);
            break;
        case 3:
            draw(200, 70, 210, 90, 0);
            break;
        case 2:
            draw(200, 70, 190, 90, 0);
            break;
        case 1:
            draw(200, 100, 210, 120, 0);
            break;
        case 0:
            draw(200, 100, 190, 120, 0);
            break;
            
    }
    
}


function play() {
        
    lives = 10;
    counter = 0;
    
    var wordArray = document.getElementById('wordDB').innerHTML;
    wordArray = wordArray.split(' ');
    word = wordArray[1].toLowerCase();
    
    console.log(word);
    
    buttons();    
    wordletters();
    comments();
    
    document.getElementById('buttons').style.display = 'table';
    document.getElementById('hold').style.display = 'table';
    document.getElementById('myLives').style.display = 'table';
    document.getElementById('stickman').style.display = 'table';
    
    document.getElementById('start').setAttribute('onClick', "restart()");
    document.getElementById('start').innerHTML = "Spela igen";
    
}

function restart() {
    
    letters.parentNode.removeChild(letters);
    correctWord.parentNode.removeChild(correctWord);
    
    play();
    
}
