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