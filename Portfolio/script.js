const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');


const mail = document.getElementsByClassName('email-black');
const linkedIn = document.getElementsByClassName('linkedin-black');
const gitHub = document.getElementsByClassName('github-black');
const instagram = document.getElementsByClassName('instagram-black');

const elements = [...mail, ...linkedIn, ...gitHub, ...instagram];

function showAboutSection() {
    aboutSection.classList.add('show');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    document.body.style.overflow = 'auto';     
    homeSection.style.opacity = 0; 
}

elements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    const randomBackgroundColor = getRandomColor();
    const randomFontColor = getRandomColor();

    element.style.backgroundColor = randomBackgroundColor;
    element.style.color = randomFontColor;
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
  });
});

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};


document.addEventListener('click', showAboutSection);

setTimeout(showAboutSection, 5000);
