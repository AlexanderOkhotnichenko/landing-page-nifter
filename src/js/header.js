function header() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const paddingTop = 50;
  const pointFixed = 200;

  const headerStyleMarginTop = () => {
    return getScrollPageY().height >= pointFixed ? main.style.marginTop = (`${header.offsetHeight + paddingTop}px`) : main.style.marginTop = `0px`;
  }

  const headerLockBody = () => {
    return getScrollPageY().height >= pointFixed ? header.classList.add("fixed") : header.classList.remove("fixed");
  }

  const getScrollPageY = () => {
    const { scrollY: height } = window;
    return {
      height
    }
  }

  headerStyleMarginTop();
  headerLockBody();

  window.addEventListener("scroll", function () {
    headerStyleMarginTop();
    headerLockBody();
  });
}

header();