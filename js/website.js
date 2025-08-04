import { addEventListeners } from './nav.js';
import renderCV from './main/cv.js';
import { init } from './main/projects.js';
import { addProject } from './data/project.js';

//================ Render Header (Header - Section) ================//
loadHTML("header", "../html/header.html");

//================ Render Nav (Nav - Section) ================//
loadHTML("nav", "../html/nav.html", addEventListeners);

//================ Render About Me (About Me - Section) ================//
loadHTML("about-me-section", "../html/about-me.html");

//================ Render CV (CV - Section) ================//
renderCV();

//================ Render Projects (Projects - Section) ================//
loadHTML("projects-section", "../html/projects.html", init);

//================ Render Contact (Contact - Section) ================//
loadHTML("contact-section", "../html/contact.html");

//================ Render Footer (Footer - Section) ================//
loadHTML("footer", "../html/footer.html");

async function loadHTML(id, url, initFunc = null) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;

  if (typeof initFunc === "function") {
    initFunc();
  }
}

//================ Project Displayer (Projects - Section) ================//
import parsedJsonProjectData from '../json/projects.json' with { type: 'json' };

Object.values(parsedJsonProjectData).forEach((value) => { addProject(value.name, value.timespan, value.description, value.github, value.website, value.youtube) });