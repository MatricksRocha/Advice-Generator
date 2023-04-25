// using the [Advice Slip API](https://api.adviceslip.com) to generate the advice
const generateAdvice = async () => {
    const adviceID = document.querySelector('#adviceID');
    const adviceText = document.querySelector('#adviceText');
    const loadingScreen = document.querySelector('#loadingScreen');
    const url = "https://api.adviceslip.com/advice";

    loadingScreen.style.display = "initial";
    try {
        const response = await axios.get(url);
        const data = response.data.slip;
        console.log(data);
        adviceID.textContent = `ADVICE #${data.id}`;
        adviceText.textContent = `"${data.advice}"`;
    } catch (error) {
        console.error(error);
    }
    loadingScreen.style.display = "none";
}

diceButton.addEventListener('click', () => {generateAdvice()});