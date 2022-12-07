let x
x = 0
function kepCsere() {   
    var a = document.getElementById('fokep');
    if (x == 0){
        a.className = 'breakingbad';
    }
    if (x == 1){
        a.className = 'gameofthrones'
    }
    if (x == 2){
        a.className = 'thewalkingdead'
    }
    if (x == 3){
        a.className = 'familyguy'
    }
    if (x == 4){
        x = -1
        a.className = 'rickandmorty'
    }
    x += 1
}
function kepCsere2() {   
    var a = document.getElementById('fokep');
    if (x == 0){
        a.className = 'rickandmorty'
    }
    if (x == 1){
        a.className = 'breakingbad';
    }
    if (x == 2){
        a.className = 'gameofthrones'
    }
    if (x == 3){
        a.className = 'thewalkingdead'
    }
    if (x == 4){
        a.className = 'familyguy'
    }
    if (x == 5){
        x = 0
    }
    x -= 1
    if (x < 0){
        x = 0
    }
}