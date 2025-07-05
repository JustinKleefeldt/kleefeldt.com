//================ Button Scroll (Header - Section) ================//

const sections =
{
  aboutMe: document.querySelector('.about-me-section'),
  cv: document.querySelector('.cv-section'),
  projects: document.querySelector('.projects-section'),
  contact: document.querySelector('.contact-section'),
  otherActivities: document.querySelector('.js-other-activities')
}

document.querySelectorAll('.js-about-me-scroll').forEach(value =>
  {
    value.addEventListener('click', () => sections.aboutMe.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
    value.addEventListener('touchstart', () => sections.aboutMe.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
  }
);

document.querySelectorAll('.js-cv-scroll').forEach(value =>
  {
    value.addEventListener('click', () => sections.cv.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
    value.addEventListener('touchstart', () => sections.cv.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
  }
);

document.querySelectorAll('.js-projects-scroll').forEach(value =>
  {
    value.addEventListener('click', () => sections.projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
    value.addEventListener('touchstart', () => sections.projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
  }
);

document.querySelectorAll('.js-contact-scroll').forEach(value =>
  {
    value.addEventListener('click', () => sections.contact.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
    value.addEventListener('touchstart', () => sections.contact.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
  }
);

document.querySelector('.js-other-activities-button').addEventListener('click', () => sections.otherActivities.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));
document.querySelector('.js-other-activities-button').addEventListener('touchstart', () => sections.otherActivities.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));

//================ Overlay Text (About me - Section) ================//

const overlayTextContainerElement = document.querySelector('.js-overlay-container');
const overlayTextElement = document.querySelector('.js-overlay-text');

const fontSizeString = getComputedStyle(overlayTextElement).getPropertyValue('font-size');
const defaultFontSize = Number(fontSizeString.substring(0, fontSizeString.length - 2));
let currentFontSize = defaultFontSize;
const factorFontSize = defaultFontSize / overlayTextContainerElement.clientWidth;
let decrementCount = 0;
let decrements = [];

function checkForOverflow(factor) { return overlayTextElement.getBoundingClientRect().left <= (overlayTextContainerElement.clientWidth * factor) ? true : false; }
function checkForUnderflow(factor) { return overlayTextElement.getBoundingClientRect().left >= (overlayTextContainerElement.clientWidth * factor) ? true : false; }

function adjustFontSize()
{
  if (checkForOverflow(0.4))
  {
    decrements[decrementCount] = Math.round(currentFontSize * factorFontSize);
    currentFontSize -= decrements[decrementCount];
    overlayTextElement.style.fontSize = `${currentFontSize}px`;
    decrementCount++;
    adjustFontSize();
  }
  else if (checkForUnderflow(0.5) && decrementCount > 0)
  {
    decrementCount--;
    currentFontSize += decrements[decrementCount];
    overlayTextElement.style.fontSize = `${currentFontSize}px`;
  }
}

window.addEventListener('resize', () =>
{
  adjustFontSize()
});

//================ Overlay Shape (About me - Section) ================//
/*
const overlayShapeContainerElement = document.querySelector('.js-overlay-container');
const overlayShapeElement = document.querySelector('.js-overlay-shape');

const borderSizeString = getComputedStyle(overlayShapeElement).getPropertyValue('border-bottom-width');
const defaultBorderSize = Number(borderSizeString.substring(0, borderSizeString.length - 2));

const maxHeightString = getComputedStyle(document.documentElement).getPropertyValue('--about-me-section-max-height');
const maxHeight = Number(maxHeightString.substring(0, maxHeightString.length - 2));

function adjustBorderSize()
{
  if (defaultBorderSize >= maxHeight)
  {
    overlayShapeElement.style.borderBottomWidth = `${maxHeight}px`;
  }
}

adjustBorderSize();
*/
//================ Project Displayer (Projects - Section) ================//

import parsedJsonProjectData from '../json/projects.json' with { type: 'json' };
const projects = [];
let projectDisplayIndex = 0;

function addProject(name = undefined, timespan = undefined, description = undefined, github = undefined, website = undefined, youtube = undefined)
{
  const currProject = { name, timespan, description, github, website, youtube };
  projects.push(currProject);
  return currProject;
}

Object.values(parsedJsonProjectData).forEach((value) => { addProject(value.name, value.timespan, value.description, value.github, value.website, value.youtube) });

console.log(projects);

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

function init()
{
  for (let offset = -3, index = 0; index < projectDisplayElements.length; offset++, index++)
  {
    updateProjectElement(projects.at(projectDisplayIndex + offset), projectDisplayElements[index]);
  }
}

init();

function moveLeft()
{
  projectDisplayIndex--;
  animateElements('left');
  setTimeout(() => moveProjects(), 1000);
}

document.querySelector('.js-move-left').addEventListener('click', () => moveLeft());
document.querySelector('.js-move-left').addEventListener('touchstart', () => moveLeft());

function moveRight()
{
  projectDisplayIndex++;
  animateElements('right');
  setTimeout(() => moveProjects(), 1000);
}

document.querySelector('.js-move-right').addEventListener('click', () => moveRight());
document.querySelector('.js-move-right').addEventListener('touchstart', () => moveRight());

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

function moveProjects()
{
  checkArrayBoundries();

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
  html += input.name ? `<div class="project-title">${input.name}</div>` : '';
  html += input.timespan ? `<div class="project-timespan">${input.timespan}</div>` : '';
  if (input.youtube || input.website || input.github)
  {
    html += '<div class="project-links">';
    html += input.youtube ? `<a href="${input.youtube}" target="_blank"><img class="project-youtube-image" src="../img/youtube.png"></a>` : '';
    html += input.website ? `<a href="${input.website}" target="_blank"><img class="project-website-image" src="../img/website.png"></a>` : '';
    html += input.github ? `<a href="${input.github}" target="_blank"><img class="project-github-image" src="../img/github.png"></a>` : '';
    html += '</div>';
  }
  html += '</div><div class="project-spacing-line"></div><div class="project-element-lower-section">';
  html += input.description ? `<div class="project-description">${input.description}</div>` : '';
  html += '</div>';

  target.innerHTML = html;
  return html;
}

function checkArrayBoundries()
{
  if (projectDisplayIndex == projects.length)
    projectDisplayIndex = 0;
  else if (projectDisplayIndex < 0)
    projectDisplayIndex = projects.length - 1;
}