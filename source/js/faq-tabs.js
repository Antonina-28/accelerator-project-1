const accordions = document.querySelectorAll('.faq__sublist');
const tabs = document.querySelectorAll('.faq__link');

const OPENED_STATE = 'faq__button--more-info';
const CLOSED_STATE = 'faq__button--less-info';
const ACTIVE_ACCORDION = 'faq__sublist--current';
const ACTIVE_CLASS = 'active';

let contentBlock = null;

function setAttributes() {
  tabs.forEach((tab, index) => tab.setAttribute('data-tab', index));
  accordions.forEach((accordion, index) => accordion.setAttribute('data-accordion', index));
}

function findHeightContent(content) {
  content.style.maxHeight = content.classList.contains(ACTIVE_CLASS) ? `${content.scrollHeight}px` : '0';
}

function resetTabs() {
  tabs.forEach((tab) => tab.classList.remove(ACTIVE_CLASS));
}

function resetAccordions() {
  accordions.forEach((accordion) => accordion.classList.remove(ACTIVE_ACCORDION));
}

function togglesOfContent(tab, index) {
  const accordion = accordions[index];
  if (accordion.dataset.accordion === tab.dataset.tab) {
    const buttons = accordion.querySelectorAll('.faq__button');
    buttons.forEach((button, i) => {
      contentBlock = button.nextElementSibling;
      if (i === 0) {
        openedFirstContent(contentBlock, button);
      }
    });
  }
}

function openedFirstContent(content, button) {
  content.classList.add(ACTIVE_CLASS);
  button.classList.remove(OPENED_STATE);
  button.classList.add(CLOSED_STATE);
  findHeightContent(content);
}

function toActiveTab(tab, index) {
  tab.classList.add(ACTIVE_CLASS);
  const accordion = accordions[index];
  accordion.classList.add(ACTIVE_ACCORDION);
}

export function initTabs() {
  setAttributes();

  tabs.forEach((tab, index) => {
    const accordion = accordions[index];
    if (accordion.dataset.accordion === tab.dataset.tab) {
      const buttons = accordion.querySelectorAll('.faq__button');
      const li = accordion.querySelectorAll('.faq__box');
      buttons.forEach((button, i) => {
        contentBlock = button.nextElementSibling;

        if (i === 0) {
          openedFirstContent(contentBlock, button);
        }

        li[i].addEventListener('click', () => {

          contentBlock = button.nextElementSibling;

          if (contentBlock.classList.contains(ACTIVE_CLASS)) {
            button.classList.add(OPENED_STATE);
            button.classList.remove(CLOSED_STATE);
            contentBlock.classList.remove(ACTIVE_CLASS);
            findHeightContent(contentBlock);
          } else {
            contentBlock.classList.add(ACTIVE_CLASS);
            button.classList.remove(OPENED_STATE);
            button.classList.add(CLOSED_STATE);
            findHeightContent(contentBlock);
          }

        });
      });
    }

    tab.addEventListener('click', (e) => {
      e.preventDefault();
      resetAccordions();
      resetTabs();
      toActiveTab(e.target, index);
      togglesOfContent(e.target, index);
    });
  });
}
