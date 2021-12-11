let buttonCreat = document.getElementById("buttonCreer");
let compteur = document.getElementById('compteur');
let marcheArret = document.getElementById('button-M:A')

buttonCreat.addEventListener("click", () => {

    let heure = document.getElementById("heure").value;
    let minute = document.getElementById("minute").value;
    let seconde = document.getElementById("seconde").value;
    let divCreat = document.createElement("div");
    let butPlay = document.createElement("button");
    let butPause = document.createElement("button");
    let reset = document.createElement('button');
    divCreat.style.width = '80%';
    divCreat.style.fontSize = '2.5rem';
    divCreat.style.color = 'white';
    divCreat.style.marginLeft = 'auto';
    divCreat.style.marginRight = 'auto';
    divCreat.style.textAlign = 'center'
    divCreat.style.position = 'relative';
    divCreat.style.top = '3rem';
    divCreat.innerHTML = '00:00:00';
    butPause.innerHTML = "Stop";
    reset.innerHTML = "Reset";
    reset.className = "buttonReset";
    butPause.className = "buttonReset";
    butPlay.className = "buttonReset";
    butPlay.innerHTML = "Play";


    let intervalId = setInterval(test, 1000);
    function test() {
        divCreat.innerHTML = `${heure} : ${minute} : ${seconde}`;
        seconde--;
        if (seconde <= 0) {
            minute--;
            seconde = 59;
        }
        if (minute <= 0 && heure >= 0) {
            heure--;
            minute = 59;
        }
        if (heure === 0 && minute === 0 && seconde === 0) {
            clearInterval(intervalId);
        }

        butPause.addEventListener("click", () => {
            clearInterval(intervalId);
        });

        butPlay.addEventListener("click", () => {
            intervalId = setInterval(test, 1000);
        });
        reset.addEventListener('click' , () => {
            divCreat.remove();
            butPause.remove();
            butPlay.remove();
            reset.remove();
        })
    }



    compteur.append(divCreat);
    marcheArret.append(butPlay);
    marcheArret.append(butPause);
    marcheArret.append(reset);
});