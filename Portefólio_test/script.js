let emptyElement = document.querySelector('.about .empty');
let titleElement = document.querySelector('.about .title');
let figureElements = document.querySelectorAll('.service figure');


const handleMouseMove = (event) => {
    emptyElement.style.flexBasis = event.clientX + 'px';
    titleElement.style.flexBasis = event.clientY / 2 + 'px';
    
    figureElements.forEach(element => {
        element.style.flexBasis = (window.innerWidth - event.clientX) + 'px';
    });
    
};

window.addEventListener('mousemove', handleMouseMove);

/*if(mousemove) {
    emptyElement.style.background = 'red';
    titleElement.style.background = 'orange';

}
*/