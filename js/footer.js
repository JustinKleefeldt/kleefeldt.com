//============================== FOOTER ==============================//
const footerElement = document.querySelector('.js-footer');

export function renderFooter()
{
  footerElement.innerHTML = generateFooterHTML();
}

function generateFooterHTML()
{
  const html =
    `
      <div class="footer-left-section">
        <div class="footer-left-upper-section">
          <div>
            Impressum
          </div>
          <div>
            Datenschutz
          </div>
          <div>
            AGB
          </div>
        </div>
        <div class="footer-left-lower-section">
          <div>
            Justin Kleefeldt.
          </div>
          <div>
            Erstellt mit HTML, CSS, JS.
          </div>
        </div>
      </div>
      <div class="footer-right-section">
        <div class="footer-right-section-element">
          <div class="footer-sub-heading">
            Telefon
          </div>
          <div>
            +49 (0) 1515 0735480
          </div>
        </div>
        <div class="footer-right-section-element">
          <div class="footer-sub-heading">
            E-Mail
          </div>
          <div>
            justin@kleefeldt.com
          </div>
        </div>
        <div class="footer-right-section-element">
          <div class="footer-sub-heading">
            Links           
          </div>
          <div class="footer-links">
            <a href="https://www.linkedin.com/in/justin-kleefeldt-74379b28b" target="_blank">
              <img class="footer-linkedin-icon" src="../img/linkedin-icon.png">
            </a>
            <a href="https://github.com/JustinKleefeldt?tab=repositories" target="_blank">
              <img class="footer-github-icon" src="../img/github-icon.png">
            </a>
          </div>
        </div>
      </div>
    `;

  return html;
}

export default renderFooter;