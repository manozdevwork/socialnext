function findPosition(obj) {
  let currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
  }
  return currenttop; // Return the number directly, not an array
}

const scrolldiv = (divName) => {
  window.scroll(0, findPosition(document?.getElementById(divName)));
};

export default scrolldiv;
