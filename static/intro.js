window.onload = function() {
    const introductionElement = document.getElementById('over-top-intro');

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

    function updateIntroduction() {
        introductionElement.textContent = translations[index];
        index = (index + 1) % translations.length;
        

        if (index !== translations.length ) {
            setTimeout(updateIntroduction, 500);
            console.log(index)  // Change text every 2 seconds
        }
    }

    // Start the effect when the page loads
    updateIntroduction();
}