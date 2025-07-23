import sections from './data/section.js';
import renderHeader from './header.js';
import renderAboutMe from './main/about-me.js';
import renderCV from './main/cv.js';
import renderContact from './main/contact.js';
import renderFooter from './footer.js';
import { init } from './main/projects.js';
import { addProject } from './data/project.js';

//================ Render Header (Header - Section) ================//
renderHeader();

//================ Render About Me (About Me - Section) ================//
renderAboutMe();

//================ Render CV (CV - Section) ================//
renderCV();

//================ Render Contact (Contact - Section) ================//
renderContact();

//================ Render Footer (Footer - Section) ================//
renderFooter();

//================ Overlay Text (About me - Section) ================//
//window.addEventListener('resize', adjustFontSize);

//================ CV Entries (CV - Section) ================//

//================ Project Displayer (Projects - Section) ================//
import parsedJsonProjectData from '../json/projects.json' with { type: 'json' };

Object.values(parsedJsonProjectData).forEach((value) => { addProject(value.name, value.timespan, value.description, value.github, value.website, value.youtube) });

init();

//================ Button Scroll (All Sections) ================//
function addScrollEventListeners()
{
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
}

addScrollEventListeners();