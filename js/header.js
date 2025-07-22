//================ Button Scroll (Header - Section) ================//

const sections =
{
  aboutMe: document.querySelector('.about-me-section'),
  cv: document.querySelector('.cv-section'),
  projects: document.querySelector('.projects-section'),
  contact: document.querySelector('.contact-section'),
  otherActivities: document.querySelector('.js-other-activities')
}

export function addScrollEventListeners()
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