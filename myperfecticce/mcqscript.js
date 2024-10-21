function goBack() {
    window.history.back();
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded'); // Add the 'loaded' class to trigger the animation
});

let questionsList = [];

document.querySelectorAll('.question-card').forEach(card => {
    questionsList.push(card.cloneNode(true));
});

function filterQuestions() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const questionsContainer = document.getElementById('questions');

    questionsContainer.innerHTML = '';

    const filteredQuestions = questionsList.filter(card => {
        const questionText = card.querySelector('h3').textContent.toLowerCase();
        return questionText.includes(searchInput);
    });

    filteredQuestions.forEach(card => {
        questionsContainer.appendChild(card);
        const questionText = card.querySelector('h3').textContent.toLowerCase();

        const highlightedQuestion = questionText.replace(new RegExp(`(${searchInput})`, 'gi'), '<span class="highlight">$1</span>');
        card.querySelector('h3').innerHTML = highlightedQuestion;
    });

    if (searchInput === '') {
        questionsList.forEach(card => {
            questionsContainer.appendChild(card);
        });
    }
}

document.getElementById('search').addEventListener('input', filterQuestions);