document.addEventListener('DOMContentLoaded', function () {
    const chapterInput = document.getElementById('chapterInput');
    const addChapterBtn = document.getElementById('addChapterBtn');
    const chapterList = document.getElementById('chapterList');

    addChapterBtn.addEventListener('click', function () {
        const chapterValue = chapterInput.value.trim();

        if (chapterValue !== '') {
            const listItem = document.createElement('li');
            const deleteButton = document.createElement('button');

            listItem.textContent = chapterValue;
            deleteButton.textContent = '❌';

            listItem.appendChild(deleteButton);
            chapterList.appendChild(listItem);

            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });

            chapterInput.value = '';
            chapterInput.focus();
        } else {
            // If input is blank, provide a message or at least do nothing
            // You can optionally provide a message here
            // console.log('Please enter a chapter.');
        }
    });
});