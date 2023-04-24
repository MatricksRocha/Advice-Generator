// using the [Advice Slip API](https://api.adviceslip.com) to generate the advice
const generateAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";

    await axios.get(url)
        .then(response => {
            const data = response.data.slip;
            console.log(data)
            adviceID.textContent = `ADVICE #${data.id}`;
            adviceText.textContent = `"${data.advice}"`;
        })
        .catch(error => console.error(error))
}

diceButton.addEventListener('click', () => {generateAdvice()});