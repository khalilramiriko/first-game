document.querySelector(".control-bottons span").onclick = function (){

    let  yourName = prompt("Whats Your Name?")

    if (yourName == null || yourName == "") {

    document.querySelector(".name span").innerHTML = 'Unknown'
    
    }else {
        document.querySelector(".name span").innerHTML = yourName;

    }

    document.querySelector(".control-bottons").remove()

};

 let duration = 1000;

 let blocksContainer = document.querySelector(".m-g-c")

 let blocks = Array.from(blocksContainer.children)

 let orderRange = [...Array(blocks.length).keys()]

 shuffle(orderRange);

 blocks.forEach((block, index) => {

    block.style.order = orderRange[index]

    block.addEventListener('click', function (){

        flipBlock(block)
    })
 })

 function flipBlock (selectedBlock){

    selectedBlock.classList.add('is-flipped');

    let allFlippedBlock = blocks.filter(flippedBlock => flippedBlock .classList.contains('is-flipped'));

    if (allFlippedBlock.length===2){
        
        stopClicking()

        chackBlock(allFlippedBlock[0], allFlippedBlock[1]);

    }

 }
 function stopClicking (){

    blocksContainer.classList.add('no-clicking'), 

  setTimeout(() => {

    blocksContainer.classList.remove('no-clicking')

  }, duration)

 }

function chackBlock(firstBlock, secondBlock ) {

    let  triesEl = document.querySelector('.tries span')

    if (firstBlock.dataset.teams === secondBlock.dataset.teams) {

        firstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')


        firstBlock.classList.add('has-match')
        secondBlock.classList.add('has-match')

        document.getElementById('success').play()

    }else {

        triesEl.innerHTML = parseInt(triesEl.innerHTML) + 1;   
        
       setTimeout (() => {

        firstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')

       }, duration)

       document.getElementById('fail').play()

    }

}


 function shuffle(array){

    let current = array.length,
     temp,
    random

    while (current > 0) {
        
        random  =Math.floor(Math.random() * current)

        current--;

        temp = array[current];

        array[current] =array[random];

        array[random] = temp;
        
    }

    return array
 }
