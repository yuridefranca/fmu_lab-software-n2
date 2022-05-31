const btnCloseChat = document.querySelector('.btn-close-chat');
btnCloseChat.addEventListener('click', function(event) {
    const chatContainer = this.parentNode.parentNode;
    chatContainer.style.display = 'none';
});

const btnOpenChat = document.querySelector('.open-chat');
btnOpenChat.addEventListener('click', function(event) {
    const chatContainer = document.querySelector('.chat');
    chatContainer.style.display = 'block';
});