/*const introductionElement = document.getElementById('over-top-intro');

const translations = [
        'Hola, mi nombre es Ethan Wallace.',
        'Salut, je m\'appelle Ethan Wallace',
        'Bonjour, je m\'appelle Ethan Wallace.',
        'Hallo, mein Name ist Ethan Wallace.',
        'Ciao, mi chiamo Ethan Wallace.',
        'Olá, meu nome é Ethan Wallace.',
        'こんにちは、私の名前はイーサン・ウォレスです',
        'Привет, меня зовут Итан Уоллес',
        'مرحبًا اسمي إيثان والاس<',
        'Hi, my name is Ethan Wallace.'
    
    ];

let index = 0;
let animationName = 'slideDown1';

function updateIntroduction() {
    introductionElement.textContent = translations[index];
    introductionElement.style.animation = `${animationName} 2s ease-in-out forwards`;

    // Toggle the animation name for the next iteration
    animationName = animationName === 'slideDown1' ? 'slideDown2' : 'slideDown1';

    index++;
    if (index === translations.length) {
        clearInterval(intervalId);  // Stop the interval when all translations have been shown
    }
}

// Adjust the initial position of the text element to match the animation
introductionElement.style.top = '-100%';

const intervalId = setInterval(updateIntroduction, 1500);  // Change text every 2 seconds

// Start the effect when the page loads
window.onload = updateIntroduction;*/

