


function sayHello() {
    console.log('Hello World')
}

function toggleFontSize() {

    // document = the HTML
    // getElementId = function by document
    // "teenager" = id of element p
    //      - teenager is id of <p id="teenager"></p>
    let text = document.getElementById("teenager");

    // Check the current font size and toggle between 16px and 24px
    // if (text.style.fontSize === "24px") {
    //     text.style.fontSize = "16px"; // Change it back to 16px
    // } else {
    //     text.style.fontSize = "24px"; // Change it to 24px
    // }

    // text = is from document
    // style = css of text
    // fontSize = property of the css of text
    text.style.fontSize = "600px"

}