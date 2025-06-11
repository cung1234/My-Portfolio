    // Add text below the spinner
const spinner = document.querySelector('.spinner');
const text = document.createElement('div');
text.style.color = '#fff';
text.style.textAlign = 'center';
text.style.marginTop = '20px';
text.style.marginLeft = '10px';
text.textContent = 'Buffering, please wait...';
spinner.insertAdjacentElement('afterend', text);

    // Redirect after 10 seconds
setTimeout(() => {
    window.location.href = 'main.html';
}, 1000);