const messages = [
    "Estas segura chiquis?",
    "100% segura??",
    "Super segura?",
    "chiquis...",
    "Porfavor chiquis triquis!",
    "Estare muy triste si dices que no....",
    "Muy muy triste....",
    "Muy muy triste",
    "buneo ya te dejare de preguntar",
    "Broma, jaja voy a seguir preguntando! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}