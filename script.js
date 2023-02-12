const ADVICE_API = "https://api.adviceslip.com/advice/1"

getAdvice();

async function getAdvice(){
    let response = await fetch(`https://api.adviceslip.com/advice/${Math.ceil(Math.random()*223)}`);
    let advices = await response.json();
    document.getElementById('advice').textContent = `"${advices.slip.advice}"`;
    document.getElementById('adviceNum').textContent = `ADVICE #${advices.slip.id}`;
    console.log(advices.slip.advice);
}

function setSvg(){
        if (window.innerWidth < 375) {
            document.getElementById("divider").src = 'images\pattern-divider-mobile.svg';
        }
        else {
            document.getElementById("divider").src = 'images\pattern-divider-desktop.svg';
        }
}
