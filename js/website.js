import { addScrollEventListeners } from './header.js';
import { adjustFontSize } from './main/about-me.js';
import { init } from './main/projects.js';
import { addProject } from './data/project.js';

//================ Button Scroll (Header - Section) ================//
addScrollEventListeners();

//================ Overlay Text (About me - Section) ================//
window.addEventListener('resize', adjustFontSize);

//================ Project Displayer (Projects - Section) ================//
import parsedJsonProjectData from '../json/projects.json' with { type: 'json' };

Object.values(parsedJsonProjectData).forEach((value) => { addProject(value.name, value.timespan, value.description, value.github, value.website, value.youtube) });

init();