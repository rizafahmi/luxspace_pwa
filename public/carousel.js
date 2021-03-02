const carouselId = document.getElementById("carousel");
const carouselItems = carouselId?.getElementsByClassName("flex")[0];
const carouselContainer = carouselId?.getElementsByClassName("container")[0];

function carousel_calc_offset(e) {
  const carouselOffset = carouselContainer.getBoundingClientRect().left;

  carouselItems.style.paddingLeft = `${carouselOffset - 16}px`;
  carouselItems.style.paddingRight = `${carouselOffset - 16}px`;
}

function slide(wrapper, items) {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    itemToShow = window.innerWidth < 767 ? 1 : 4,
    slides = items.getElementsByClassName("card"),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName("card")[0].offsetWidth,
    index = 0,
    allowShift = true;

  wrapper.classList.add("loaded");

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);
  items.addEventListener("click", function (event) {
    !allowShift && event.preventDefault();
  });

  // Transition events
  items.addEventListener("transitionend", checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + "px";
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, "drag");
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, "drag");
    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add("transition-all");
    items.classList.add("duration-200");

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        items.style.left = posInitial - slideSize + "px";
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + "px";
        index--;
      }
    }
    // console.log(index);

    allowShift = false;
  }

  function checkIndex() {
    setTimeout(() => {
      items.classList.remove("transition-all");
      items.classList.remove("duration-200");
    }, 200);
    // console.log("index:", index);
    const isMobile = window.innerWidth < 767 ? 0 : -1;
    if (index < 0) {
      // console.log(1);
      items.style.left = "0px";
      index = 0;
    } else if (index >= slidesLength - itemToShow) {
      // console.log(2);
      items.style.left =
        -((slidesLength - itemToShow + isMobile) * slideSize) + "px";
      index = slidesLength - itemToShow;
    } else if (index == slidesLength || index == slidesLength - 1) {
      // console.log(3);
      items.style.left = slidesLength - 1 * slideSize + "px";
      index = slidesLength - 1;
    }

    allowShift = true;
  }
}

if (document.getElementById("carousel")) {
  slide(carouselId, carouselItems);
  window.addEventListener("load", carousel_calc_offset);
  window.addEventListener("resize", carousel_calc_offset);
}
