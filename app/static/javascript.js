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

// Kommenterar vad som händer
function comments() {
    
    document.getElementById('myLives').innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        document.getElementById('myLives').innerHTML = "Game OVer";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter === guesses.length) {
            document.getElementById('myLives').innerHTML = "You Win!";
        }
    }
    
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
        //    animate();
        } else {
            comments();
        }
        
    }
    
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


function animate() {
    
    
    
}


function restart() {
    
    lives = 10;
    counter = 0;
    
    var wordArray = document.getElementById('wordDB').innerHTML;
    wordArray = wordArray.split(' ');
    word = wordArray[1].toLowerCase();
    
    console.log(word);
    
    buttons();    
    wordletters();
    comments();
    
}
