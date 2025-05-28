let userSearchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
const userHistory = document.querySelector('.user-history');
const clearHistoryBtn = document.querySelector('.clear-history-btn');

function displayHistory() {
    if (!userHistory) {
        console.error('Элемент .user-history не найден в DOM');
        return;
    }
    userHistory.innerHTML = '';

    if (userSearchHistory.length === 0) {
        userHistory.innerHTML = '<li class="user-history__empty">No search history</li>';
        return;
    }

    userSearchHistory.reverse().forEach((el, index) => {
        userHistory.insertAdjacentHTML('beforeend', `
            <li class="user-history__item">
                ${el}
                <button class="user-history__delete-btn" data-index="${userSearchHistory.length - 1 - index}">X</button>
            </li>
        `);
    });

    const deleteButtons = document.querySelectorAll('.user-history__delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            userSearchHistory.splice(index, 1); 
            localStorage.setItem('searchHistory', JSON.stringify(userSearchHistory));
            displayHistory();
        });
    });
}

if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', function() {
        userSearchHistory = [];
        localStorage.setItem('searchHistory', JSON.stringify(userSearchHistory)); 
        displayHistory();
    });
}


displayHistory();