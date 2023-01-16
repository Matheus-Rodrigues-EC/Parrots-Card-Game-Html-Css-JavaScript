let Min = 0;
let Seg = 0;
let Contador = 0;
let Quant_Cartas = 4;
QuantCards();

function QuantCards(){
    Quant_Cartas = prompt("Digite a quantidade, em pares, de cartas que deseja jogar.");
    if((Quant_Cartas % 2 === 0) && (Quant_Cartas >= 4) && (Quant_Cartas <= 14)){
        CreateCards(Quant_Cartas);
        Min = 0;
        Seg = 0;
        Contador = 0;
    }else{
        alert('Valor inválido. Digite um número par.')
        QuantCards();
    }
}

let CardList = [];

function CreateCards(Quant_Cartas){
    const GameGrid = document.querySelector('.GameGrid')

    let CardsList_id = [];
    for(let i=1; i<=Quant_Cartas; i++){
        CardsList_id.push(i);
    }

    CardsList_id.sort(Compare);

    for(let i=0; i<Quant_Cartas; i++){
        if((CardsList_id[i] === 1) || (CardsList_id[i] === 2)){
            GameGrid.innerHTML += ` <li class="Card Card${CardsList_id[i]}" onclick ="ShowVerse(this, ${CardsList_id[i]})" data-test="card">
                                        <img class="Parrot" data-test="face-down-image" src="./Img/back.png">
                                        <img class="img_Verse" data-test="face-up-image" src="./Img/bobrossparrot.gif">
                                    </li>`;
        }else if((CardsList_id[i] === 3) || (CardsList_id[i] === 4)){
            GameGrid.innerHTML += ` <li class="Card Card${CardsList_id[i]}" onclick ="ShowVerse(this, ${CardsList_id[i]})" data-test="card">
                                        <img class="Parrot" data-test="face-down-image" src="./Img/back.png">
                                        <img class="img_Verse" data-test="face-up-image" src="./Img/explodyparrot.gif">
                                    </li>`;
        }else if((CardsList_id[i] === 5) || (CardsList_id[i] === 6)){
            GameGrid.innerHTML += ` <li class="Card Card${CardsList_id[i]}" onclick ="ShowVerse(this, ${CardsList_id[i]})" data-test="card">
                                        <img class="Parrot" data-test="face-down-image" src="./Img/back.png">
                                        <img class="img_Verse" data-test="face-up-image" src="./Img/fiestaparrot.gif">
                                    </li>`;
        }else if((CardsList_id[i] === 7) || (CardsList_id[i] === 8)){
            GameGrid.innerHTML += ` <li class="Card Card${CardsList_id[i]}" onclick ="ShowVerse(this, ${CardsList_id[i]})" data-test="card">
                                        <img class="Parrot" data-test="face-down-image" src="./Img/back.png">
                                        <img class="img_Verse" data-test="face-up-image" src="./Img/metalparrot.gif">
                                    </li>`;
        }else if((CardsList_id[i] === 9) || (CardsList_id[i] === 10)){
            GameGrid.innerHTML += ` <li class="Card Card${CardsList_id[i]}" onclick ="ShowVerse(this, ${CardsList_id[i]})" data-test="card">
                                        <img class="Parrot" data-test="face-down-image" src="./Img/back.png">
                                        <img class="img_Verse" data-test="face-up-image" src="./Img/revertitparrot.gif">
                                    </li>`;
        }else if((CardsList_id[i] === 11) || (CardsList_id[i] === 12)){
            GameGrid.innerHTML += ` <li class="Card Card${CardsList_id[i]}" onclick ="ShowVerse(this, ${CardsList_id[i]})" data-test="card">
                                        <img class="Parrot" data-test="face-down-image" src="./Img/back.png">
                                        <img class="img_Verse" data-test="face-up-image" src="./Img/tripletsparrot.gif">
                                    </li>`;
        }else if((CardsList_id[i] === 13) || (CardsList_id[i] === 14)){
            GameGrid.innerHTML += ` <li class="Card Card${CardsList_id[i]}" onclick ="ShowVerse(this, ${CardsList_id[i]})" data-test="card">
                                        <img class="Parrot" data-test="face-down-image" src="./Img/back.png">
                                        <img class="img_Verse" data-test="face-up-image" src="./Img/unicornparrot.gif">
                                    </li>`;
        }
    }    
}



let QuantClicks = 0;
let Previous_Id = 0;
let Current_Id = 0;
let ThirdCard = 0;
let QuantPairs = 0;


function ShowVerse(carta, id_atual){

    // se a carta ja estiver virada, não faz nada
    if(carta.classList.contains('Show_Verse')){ 

    // se a carta não estiver virada
    }else{
        // vira a carta
        carta.classList.add('Show_Verse')
        QuantClicks++;

        // se a segunda for carta revelada
        if(QuantClicks % 2 === 0){
            Current_Id = id_atual;
            // se formar o par
            if(((Previous_Id % 2 === 0) && (id_atual % 2 !== 0) && (Previous_Id - id_atual === 1)) || ((Previous_Id % 2 !== 0) && (id_atual % 2 === 0) && (id_atual - Previous_Id === 1))){ 
                setFinded();
                // se todas as cartas já foram viradas
                QuantPairs++;
                if(QuantPairs === Quant_Cartas/2){
                    alert(`Você ganhou em ${QuantClicks} jogadas! A duração do jogo foi de ${Contador} segundos`)
                    RestartGame(

                    )
                }

    
            }else{ // se não formar o par
                
                setTimeout(desvirarCarta, 1000);

            }
    
        // a primeira carta revelada --> guarda seu id
        }else{
            Previous_Id = id_atual;
        }
    }

    function setFinded(){

        let FirstCard = document.querySelector(".Card"+Previous_Id)
        FirstCard.classList.add('Finded');
        FirstCard.classList.remove('Show_Verse')

        let SecondCard = document.querySelector(".Card"+Current_Id)
        SecondCard.classList.add('Finded');
        SecondCard.classList.remove('Show_Verse')

//        const FindedCard = document.querySelectorAll('.Show_Verse');
//        FindedCard.forEach((card) => {
//            card.classList.add('Finded');
//            card.classList.remove('Show_Verse');
//        })
    }


    function desvirarCarta(){
        const testeDesvirar = document.querySelectorAll('.Card', 'Show_Verse');

        testeDesvirar.forEach((card) => {
            card.classList.remove('Show_Verse');
        })
        console.log(Current_Id);
        console.log(Previous_Id);
        Previous_Id = 0;
        Current_Id = 0;
        console.log(Current_Id);
        console.log(Previous_Id);

//        let FirstCard = document.querySelector(".Card"+Previous_Id)
//        FirstCard.classList.remove('Show_Verse')
//
//        let SecondCard = document.querySelector(".Card"+Current_Id)
//        SecondCard.classList.remove('Show_Verse')
    }

}

function Compare() { 
	return Math.random() - 0.5; 
}

function RestartGame(){
    const Answer = prompt("Digite 'sim' caso deseje recomeçar o jogo?")

    if(Answer === "sim"){
        // falta zerar tudo
        (document.querySelector('.GameGrid')).innerHTML = "";
        QuantClicks = 0;
        Previous_Id = 0;
        Current_Id = 0;
        QuantPairs = 0;

        QuantCards()
    }else{
        alert("Obrigada por jogar")
    }
}


setInterval(Cronometer, 1000);  
let CronSeg = document.querySelector('.Seg');
let CronMin = document.querySelector('.Min');


function Cronometer(){
    Seg++;
    Contador ++;
    if(Seg == 60){
        Seg = 0;
        Min++;
    }

    CronSeg.innerHTML = `<span>${Seg}</span>`;
    CronMin.innerHTML = `<span>${Min}</span>`;

}