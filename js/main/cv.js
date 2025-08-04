import sections from "../data/section.js";

//================ Render CV (CV - Section) ================//
const cvElement = sections.cv;

export function renderCV(cvEntries) {
  cvElement.innerHTML = generateCvHTML(cvEntries);
}

function generateCvHTML(cvEntries) {
  let html = `
      <div class="cv-container">
        <div class="cv-main-heading-row">
          <div class="cv-main-heading-box"></div>
          <div class="cv-main-heading">
            Lebenslauf
          </div>
        </div>
        <div class="cv-button-row">
          <div class="cv-sub-heading">
            Ausbildung
          </div>
          <!-- <a class="cv-download" href="../downloads/..." download> -->
          <a class="cv-download" download>
            <div class="cv-download-button">
              CV herunterladen
            </div>
          </a>
        </div>
    `;

  Object.values(cvEntries.Ausbildung).forEach((entry) => {
    html += `
        <div class="cv-content-box">
          <div class="cv-box-left-section">
            <div class="cv-box-info">
              <div class="cv-box-timespan">
                ${entry.Zeitraum}
              </div>
              <div class="cv-box-position">
                ${entry.Bezeichnung}
              </div>
              <div class="cv-box-company">
                ${entry.Unternehmen}
              </div>
              <div class="cv-box-location">
                ${entry.Adresse}
              </div>
            </div>
      `;

    if (entry.Fähigkeiten.length) {
      html += `
            <div class="cv-spacing-container">
              <div class="cv-spacing-line-horizontal"></div>
            </div>
            <div class="cv-box-chips">
        `;

      entry.Fähigkeiten.forEach((skill) => {
        html += `
              <div class="cv-chip">${skill}</div>
          `;
      });

      html += `
            </div>
        `;
    }

    html += `
          </div>
          <div class="cv-spacing-container">
            <div class="cv-spacing-line-vertical"></div>
          </div>
          <div class="cv-box-right-section">
            <div class="cv-box-text">
              ${entry.Beschreibung}
      `;

    if (entry.Abschlussnote) {
      html += `
              <br><br>
              <span class="cv-final-grade">
                Abschlussnote: ${entry.Abschlussnote}
              </span>
        `;
    }

    if (entry.Sonstiges == "Link-WeitereTätigkeiten") {
      html += `
              <br><br>
              <button class="cv-link-other-activities js-other-activities-button">
                <a href="#other-activities">
                  &#10149; daraufhin siehe: Weitere T&auml;tigkeiten
                </a>
              </button>
      `;
    }

    html += `
            </div>
          </div>
        </div>
      `;
  });

  html += `
      <div class="cv-sub-heading-row">
        <div class="cv-sub-heading">
          Berufserfahrung
        </div>
      </div>
    `;

  Object.values(cvEntries.Berufserfahrung).forEach((entry) => {
    html += `
        <div class="cv-content-box">
          <div class="cv-box-left-section">
            <div class="cv-box-info">
              <div class="cv-box-timespan">
                ${entry.Zeitraum}
              </div>
              <div class="cv-box-position">
                ${entry.Bezeichnung}
              </div>
              <div class="cv-box-company">
                ${entry.Unternehmen}
              </div>
              <div class="cv-box-location">
                ${entry.Adresse}
              </div>
            </div>
      `;

    if (entry.Fähigkeiten.length > 0) {
      html += `
            <div class="cv-spacing-container">
              <div class="cv-spacing-line-horizontal"></div>
            </div>
            <div class="cv-box-chips">
        `;

      entry.Fähigkeiten.forEach((skill) => {
        html += `
              <div class="cv-chip">${skill}</div>
          `;
      });

      html += `
            </div>
        `;
    }

    html += `
          </div>
          <div class="cv-spacing-container">
            <div class="cv-spacing-line-vertical"></div>
          </div>
          <div class="cv-box-right-section">
            <div class="cv-box-text">
              ${entry.Beschreibung}
            </div>
          </div>
        </div>
      `;
  });

  html += `
      <div id="other-activities" class="cv-sub-heading-row js-other-activities scroll-margin">
        <div class="cv-sub-heading">
          Weitere T&auml;tigkeiten
        </div>
      </div>
    `;

  Object.values(cvEntries.WeitereTätigkeiten).forEach((entry) => {
    html += `
        <div class="cv-content-box">
          <div class="cv-box-left-section">
            <div class="cv-box-info">
              <div class="cv-box-timespan">
                ${entry.Zeitraum}
              </div>
              <div class="cv-box-position">
                ${entry.Bezeichnung}
              </div>
              <div class="cv-box-company">
                ${entry.Unternehmen}
              </div>
              <div class="cv-box-location">
                ${entry.Adresse}
              </div>
            </div>
      `;

    if (entry.Fähigkeiten.length > 0) {
      html += `
            <div class="cv-spacing-container">
              <div class="cv-spacing-line-horizontal"></div>
            </div>
            <div class="cv-box-chips">
        `;

      entry.Fähigkeiten.forEach((skill) => {
        html += `
              <div class="cv-chip">${skill}</div>
          `;
      });

      html += `
            </div>
        `;
    }

    html += `
          </div>
          <div class="cv-spacing-container">
            <div class="cv-spacing-line-vertical"></div>
          </div>
          <div class="cv-box-right-section">
            <div class="cv-box-text">
              ${entry.Beschreibung}
      `;

    if (entry.Sonstiges == "Link-Projekte") {
      html += `
              <br><br>
              <button class="cv-link-projects js-projects-scroll">
                <a href="#projects-section">
                  &#10149; siehe: Projekte
                </a>
              </button>
      `;
    }

    html += `
            </div>
          </div>
        </div>
      `;
  });

  html += `
        <div class="cv-additional-container">
          <div class="cv-additional-upper-section">
            <div class="cv-additional-heading">
              Berufliche Kompetenzen
            </div>
            <div class="cv-additional-grid">
              <div class="cv-additonal-entry">
                <div class="cv-additional-box"></div>
                <div class="cv-additional-text">Zielorientiertes Arbeiten</div>
              </div>
              <div class="cv-additonal-entry">
                <div class="cv-additional-box"></div>
                <div class="cv-additional-text">Schnelle Adaption an neue Aufgaben</div>
              </div>
              <div class="cv-additonal-entry">
                <div class="cv-additional-box"></div>
                <div class="cv-additional-text">Teamf&auml;higkeit & Einf&uuml;hlungsverm&ouml;gen</div>
              </div>
              <div class="cv-additonal-entry">
                <div class="cv-additional-box"></div>
                <div class="cv-additional-text">Flexibilit&auml;t bei der Arbeit</div>
              </div>
            </div>
          </div>
          <div class="cv-additional-lower-section">
            <div class="cv-additional-heading">
              Sprachen
            </div>
            <div class="cv-additional-grid">
              <div class="cv-additonal-entry">
                <div class="cv-additional-box"></div>
                <div class="cv-additional-text">Deutsch (Muttersprache)</div>
              </div>
              <div class="cv-additonal-entry">
                <div class="cv-additional-box"></div>
                <div class="cv-additional-text">Englisch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cv-overlay-text">
        &ltcv&gt
      </div>
    `;

  return html;
}

export default renderCV;
