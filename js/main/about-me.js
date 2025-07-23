import sections from "../data/section.js";

//============================== About me ==============================//
const aboutMeElement = sections.aboutMe;

export function renderAboutMe()
{
  aboutMeElement.innerHTML = generateAboutMeHTML();
}

function generateAboutMeHTML()
{
  const html =
    `
      <div class="about-me-overlay-shape js-overlay-shape"></div>
      <div class="about-me-overlay-text js-overlay-text">
        &ltabout me&gt
      </div>
      <div class="about-me-container">
        <div class="about-me-left-section">
          <div class="about-me-upper-left-section">
            <img class="about-me-picture" src="../img/bewerbungsfoto.jpg">
            <div class="about-me-name">
              <div class="about-me-first-name">
                Justin
              </div>
              <div class="about-me-last-name">
                Kleefeldt
              </div>
            </div>
            <div class="about-me-spacing-line"></div>
            <div class="about-me-job-description">
              Junior Developer
            </div>
          </div>
          <div class="about-me-lower-left-section">
            <a href="https://www.linkedin.com/in/justin-kleefeldt-74379b28b" target="_blank">
              <img class="about-me-linkedin-image" src="../img/linkedin.png">
            </a>
            <a href="https://github.com/JustinKleefeldt?tab=repositories" target="_blank">
              <img class="about-me-github-image" src="../img/github.png">
            </a>
          </div>
        </div>
        <div class="about-me-right-section">
          <div class="about-me-greeting">
            Willkommen :)
          </div>
          <div class="about-me-who-what">
            Wer bin ich & was ich mache
          </div>
          <div class="about-me-buttons">
            <button class="about-me-cv-button js-cv-scroll">
              LEBENSLAUF
            </button>
            <button class="about-me-project-button js-projects-scroll">
              PROJEKTE
            </button>
          </div>
          <div class="about-me-text">
            Mein Name ist Justin Kleefeldt, ich bin 27 Jahre alt und seit 14 Jahren Besitzer eines Jack-Russel-Terriers namens Buddy. In meiner Freizeit unternehme ich gerne etwas mit meinem Hund, treffe mich mit Freunden, programmiere verschiedenste Projekte in verschiedenen Programmiersprachen oder spiele Videospiele aller Art.
            <br><br>
            Aktuell bin ich auf der Suche nach einer Junior Stelle als Frontend-, Backend- oder Full-Stack-Entwickler um erste Berufserfahrung zu sammeln.
            <br><br>
            Auf dieser Portfolio-Website findest du Informationen über mich, meinen Lebenslauf sowie viele meiner bisherigen Projekte.
          </div>
        </div>
      </div>
    `;

  return html;
}

//================ Overlay Text (About me - Section) ================//
/*
const overlayTextContainerElement = document.querySelector('.js-overlay-container');
const overlayTextElement = document.querySelector('.js-overlay-text');

const fontSizeString = getComputedStyle(overlayTextElement).getPropertyValue('font-size');
const defaultFontSize = Number(fontSizeString.substring(0, fontSizeString.length - 2));
let currentFontSize = defaultFontSize;
const factorFontSize = defaultFontSize / overlayTextContainerElement.clientWidth;
let decrementCount = 0;
let decrements = [];

function checkForOverflow(factor)
{
  return overlayTextElement.getBoundingClientRect().left <= (overlayTextContainerElement.clientWidth * factor) ? true : false;
}

function checkForUnderflow(factor)
{
  return overlayTextElement.getBoundingClientRect().left >= (overlayTextContainerElement.clientWidth * factor) ? true : false;
}

export function adjustFontSize()
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
*/
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

export default renderAboutMe;