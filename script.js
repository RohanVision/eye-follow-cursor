
// pull the eye element and store it into variable
const eyes = document.querySelectorAll(".eye-retina");

window.addEventListener("mousemove", (e) => {

    // position of cursor in the pixel
    const { pageX, pageY } = e;

    // Available area of window
    const { innerWidth, innerHeight } = window;
    console.log(innerWidth)
    //cursor left position in percentage
    let left = (pageX / innerWidth) * 100;

    // cursor top position in percentage
    let top = (pageY / innerHeight) * 100;

    // prevent the eye from getting hidden at the left and right end;
    left = left < 25 ? 25 : left;
    left = left > 75 ? 75 : left;

    // prevent the eye from getting hidden at the top and bottom end;
    top = top < 25 ? 25 : top;
    top = top > 75 ? 75 : top;

    // Move the eye
    eyes.forEach((f) => {
        // if cursor is in the center of both the eyes then keep the eye in the center
        f.style.left = `${left > 45 && left < 55 ? 50 : left}%`;
        f.style.top = `${top > 45 && top < 55 ? 50 : top}%`;
    });
})