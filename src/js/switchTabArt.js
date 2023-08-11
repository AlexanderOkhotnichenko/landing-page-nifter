function switchTabArt() {
  const tabs = document.querySelectorAll('.art-tab');

  tabs.forEach((tab) => tab.addEventListener("click", getDataTab));

  function getDataTab(event) {
    const target = event.target.closest('.art-tab');

    document.querySelector('.art-tab.is-active')?.classList.remove('is-active');
    target.classList.add('is-active');
  }
}

switchTabArt();