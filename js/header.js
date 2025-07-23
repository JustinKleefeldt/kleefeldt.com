//============================== HEADER ==============================//
const headerElement = document.querySelector('.js-header');

export function renderHeader()
{
  headerElement.innerHTML = generateHeaderHTML();
}

function generateHeaderHTML()
{
  const html =
    `
      <div class="header-left-section">
        <div class="header-clover-container">
          <img class="header-clover-icon" src="../img/kleeblatt.png">
        </div>
        <div class="header-website-name">
          kleefeldt.com
        </div>
      </div>
      <div class="header-right-section">
        <div class="js-about-me-scroll">
          &Uuml;ber mich
        </div>
        <div class="js-cv-scroll">
          Lebenslauf
        </div>
        <div class="js-projects-scroll">
          Projekte
        </div>
        <div class="js-contact-scroll">
          Kontakt
        </div>
      </div>
    `;

  return html;
}

export default renderHeader;