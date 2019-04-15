window.addEventListener('click', eventHandler);

function eventHandler(e) {
    if (e.target.nodeName === 'A') {        
        document.getElementsByClassName('active')[0].classList.toggle('active');
        e.target.classList.toggle('active');
    }
    if (e.target.nodeName === "I") {
        e.target.innerHTML = `<span>${parseInt(e.target.textContent, 10) + 1}</span>`;
    }
}