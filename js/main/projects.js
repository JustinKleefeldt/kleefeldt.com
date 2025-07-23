import projects from '../data/project.js';

//================ Render Projects (Projects - Section) ================//



//================ Project Displayer (Projects - Section) ================//
let projectDisplayIndex = 0;
const leftArrowButtonElement = document.querySelector('.js-move-left');
const rightArrowButtonElement = document.querySelector('.js-move-right');

const projectDisplayElements =
[
  document.querySelector('.js-project-left-offscreen-element'), //[0] = leftOffscreen
  document.querySelector('.js-project-left-border-element'),    //[1] = leftBorder
  document.querySelector('.js-project-left-side-element'),      //[2] = leftSide
  document.querySelector('.js-project-main-element'),           //[3] = main
  document.querySelector('.js-project-right-side-element'),     //[4] = rightSide
  document.querySelector('.js-project-right-border-element'),   //[5] = rightBorder
  document.querySelector('.js-project-right-offscreen-element') //[6] = rightOffscreen
];

export function init()
{
  for (let offset = -3, index = 0; index < projectDisplayElements.length; offset++, index++)
  {
    updateProjectElement(projects.at(projectDisplayIndex + offset), projectDisplayElements[index]);
  }
  addArrowButtonEventListeners();
}

function moveLeft()
{
  removeArrowButtonEventListeners();
  projectDisplayIndex--;
  animateElements('left');
  setTimeout(moveProjects, 1000);
  setTimeout(addArrowButtonEventListeners, 1000);
}

function moveRight()
{
  removeArrowButtonEventListeners();
  projectDisplayIndex++;
  animateElements('right');
  setTimeout(moveProjects, 1000);
  setTimeout(addArrowButtonEventListeners, 1000);
}

function moveProjects()
{
  if (projectDisplayIndex == projects.length)
    projectDisplayIndex = 0;
  else if (projectDisplayIndex < 0)
    projectDisplayIndex = projects.length - 1;

  for (let offset = -3, index = 0; index < projectDisplayElements.length; offset++, index++)
  {
    let currProjectIndex = projectDisplayIndex + offset;

    if (currProjectIndex >= projects.length)
      currProjectIndex = currProjectIndex % projects.length;

    updateProjectElement(projects.at(currProjectIndex), projectDisplayElements[index]);
  }
}

function updateProjectElement(input, target)
{
  let html = '<div class="project-element-upper-section">';
  html += input.name && `<div class="project-title">${input.name}</div>`;
  html += input.timespan && `<div class="project-timespan">${input.timespan}</div>`;
  if (input.youtube || input.website || input.github)
  {
    html += '<div class="project-links">';
    html += input.youtube && `<a href="${input.youtube}" target="_blank"><img class="project-youtube-image" src="../img/youtube.png"></a>`;
    html += input.website && `<a href="${input.website}" target="_blank"><img class="project-website-image" src="../img/website.png"></a>`;
    html += input.github && `<a href="${input.github}" target="_blank"><img class="project-github-image" src="../img/github.png"></a>`;
    html += '</div>';
  }
  html += '</div><div class="project-spacing-line"></div><div class="project-element-lower-section">';
  html += input.description && `<div class="project-description">${input.description}</div>`;
  html += '</div>';

  target.innerHTML = html;
  return html;
}

function animateElements(direction)
{
  if (direction === 'left')
  {
    projectDisplayElements[0].classList.add('animToLeft-OffscreenToBorder');
    projectDisplayElements[1].classList.add('animToLeft-BorderToSide');
    projectDisplayElements[2].classList.add('animToLeft-SideToMain');
    projectDisplayElements[3].classList.add('animToLeft-MainToSide');
    projectDisplayElements[4].classList.add('animToLeft-SideToBorder');
    projectDisplayElements[5].classList.add('animToLeft-BorderToOffscreen');

    setTimeout(() =>
    {
      projectDisplayElements[0].classList.remove('animToLeft-OffscreenToBorder');
      projectDisplayElements[1].classList.remove('animToLeft-BorderToSide');
      projectDisplayElements[2].classList.remove('animToLeft-SideToMain');
      projectDisplayElements[3].classList.remove('animToLeft-MainToSide');
      projectDisplayElements[4].classList.remove('animToLeft-SideToBorder');
      projectDisplayElements[5].classList.remove('animToLeft-BorderToOffscreen');
    }, 1000)
  }
  if (direction === 'right')
  {
    projectDisplayElements[6].classList.add('animToRight-OffscreenToBorder');
    projectDisplayElements[5].classList.add('animToRight-BorderToSide');
    projectDisplayElements[4].classList.add('animToRight-SideToMain');
    projectDisplayElements[3].classList.add('animToRight-MainToSide');
    projectDisplayElements[2].classList.add('animToRight-SideToBorder');
    projectDisplayElements[1].classList.add('animToRight-BorderToOffscreen');

    setTimeout(() =>
    {
      projectDisplayElements[6].classList.remove('animToRight-OffscreenToBorder');
      projectDisplayElements[5].classList.remove('animToRight-BorderToSide');
      projectDisplayElements[4].classList.remove('animToRight-SideToMain');
      projectDisplayElements[3].classList.remove('animToRight-MainToSide');
      projectDisplayElements[2].classList.remove('animToRight-SideToBorder');
      projectDisplayElements[1].classList.remove('animToRight-BorderToOffscreen');
    }, 1000)
  }
}

function addArrowButtonEventListeners()
{
  leftArrowButtonElement.addEventListener('click', moveLeft);
  leftArrowButtonElement.addEventListener('touchstart', moveLeft);
  rightArrowButtonElement.addEventListener('click', moveRight);
  rightArrowButtonElement.addEventListener('touchstart', moveRight);
}

function removeArrowButtonEventListeners()
{
  leftArrowButtonElement.removeEventListener('click', moveLeft);
  leftArrowButtonElement.removeEventListener('touchstart', moveLeft);
  rightArrowButtonElement.removeEventListener('click', moveRight);
  rightArrowButtonElement.removeEventListener('touchstart', moveRight);
}