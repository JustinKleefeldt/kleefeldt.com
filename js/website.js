import { addEventListeners } from "./nav.js";
import renderCV from "./main/cv.js";
import { init } from "./main/projects.js";
import { addProject } from "./data/project.js";

let cvEntries = undefined;

//================ Render Header (Header - Section) ================//
loadHTML("header", "../html/header.html");

//================ Render Nav (Nav - Section) ================//
loadHTML("nav", "../html/nav.html", addEventListeners);

//================ Render About Me (About Me - Section) ================//
loadHTML("about-me-section", "../html/about-me.html");

//================ Render CV (CV - Section) ================//
loadCV(renderCV);

//================ Render Projects (Projects - Section) ================//
loadProjects();
loadHTML("projects-section", "../html/projects.html", init);

//================ Render Contact (Contact - Section) ================//
loadHTML("contact-section", "../html/contact.html");

//================ Render Footer (Footer - Section) ================//
loadHTML("footer", "../html/footer.html");

async function loadHTML(id, url, initFunc = null) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;

    if (typeof initFunc === "function") {
      initFunc();
    }
  } catch (error) {
    console.error("Fehler beim Laden der HTML-Daten: ", error);
  }
}

async function loadCV(initFunc = null) {
  try {
    const response = await fetch("../json/cvEntries.json");
    cvEntries = await response.json();

    if (typeof initFunc === "function") {
      initFunc(cvEntries);
    }
  } catch (error) {
    console.error("Fehler beim Laden der Lebenslauf-Daten: ", error);
  }
}

//================ Project Displayer (Projects - Section) ================//
async function loadProjects() {
  try {
    const response = await fetch("../json/projects.json");
    const parsedJsonProjectData = await response.json();
    Object.values(parsedJsonProjectData).forEach((value) => {
      addProject(
        value.name,
        value.timespan,
        value.description,
        value.github,
        value.website,
        value.youtube
      );
    });
  } catch (error) {
    console.error("Fehler beim Laden der Projekt-Daten: ", error);
  }
}
