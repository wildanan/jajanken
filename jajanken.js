// var playerScore = 0
// var computerScore = 0
// const SpanUserScore = document.getElementById('')



function computerRandom () {
    const computer = Math.floor(Math.random() * 3)
    if (computer === 0){
        return 'r'
    }
    
    if (computer === 1){
        return 'p'
    }
    
    if (computer === 2){
        return 's'
    }
    // console.log(computer)
}

function getResult (player, computer) {
    if (player === computer) return 'OKAY WE ARE DRAW. LETS DO IT ONE MORE TIME'
    if (player === 'r') return (computer === 's') ? 'YOU JUST LUCKY!' : 'OOH TOO BAD, LETS TRY AGAIN'
    if (player === 'p') return (computer=== 'r') ? 'YOU ARE GOOD' : 'YOU CAN NOT BEAT ME!'
    if (player === 's') return (computer === 'p') ? 'NICE TRY! LETS DO IT AGAIN' : 'YOU NEED TO PRACTICE MORE, DUDE!'
}

const pRock = document.getElementById("r")
const pPap = document.getElementById("p")
const pSci = document.getElementById("s")

function animation () {
    const computerPic = document.getElementById("enemy")
    const thePicture = ['r', 'p', 's']
    let i = 0
    const start = new Date(). getTime()
    setInterval(function() {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return
        }
        computerPic.setAttribute('src', 'img/' + thePicture[i++] + '.png')
        if (i == thePicture.length) {
            i = 0
        }
    }, 100)
}

const finalCompile = document.querySelectorAll('div img')
finalCompile.forEach(function(compile){
    compile.addEventListener('click', function() {
        const computerOut = computerRandom()
        const playerOut = compile.className
        const result = getResult(playerOut, computerOut)
        
        animation()

        setTimeout(function() {
            const computerPic = document.getElementById("enemy")
            computerPic.setAttribute('src', 'img/' + computerOut + '.png')
            const loseOrWin = document.querySelector('.score')
            loseOrWin.innerHTML = result
        }, 1000);
        console.log('computer : ' + computerOut)
        console.log('player : ' + playerOut)
        console.log(result)
    })
})

// pRock.addEventListener('click', function() {
//     const computerOut = computerRandom()
//     const playerOut = pRock.id
//     const result = getResult(playerOut, computerOut)
//     const computerPic = document.getElementById("enemy")

//     computerPic.setAttribute('src', 'img/' + computerOut + '.png')
//     const loseOrWin = document.querySelector('.score')
//     loseOrWin.innerHTML = result
//     // console.log('computer : ' + computerOut)
//     // console.log('player : ' + playerOut)
//     // console.log(result)
// })