async function generateAdvice() {
    const url = "https://api.adviceslip.com/advice";

    try {
        const response = await axios.get(url)
        const data = response.data.slip;
        console.log(data)
        adviceID.textContent =  `ADVICE #${String(data.id)}`;
        adviceText.textContent = `"${data.advice}"`;
        } catch (e) {
        console.log(e);
    }
}

diceButton.addEventListener('click', () => {generateAdvice()});
