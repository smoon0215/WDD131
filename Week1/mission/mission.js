document.addEventListener('DOMContentLoaded', function() {
const themeSelector = document.querySelector("#web_mode");// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)

if (themeSelector == null) {
    console.error("The themeSelector element is still nul!!");
    return
};

function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
    const currentValue = themeSelector.value;
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
    const ftrLogo = document.querySelector("footer img");

    if (currentValue == "dark") {
        document.body.classList.add("dark");
        ftrLogo.src = "byui-logo_white.png";
    } else {
        document.body.classList.remove("dark");
        ftrLogo.src = "byui-logo_blue.webp";
    }
}
themeSelector.addEventListener('change', changeTheme);
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
// themeSelector.addEventListener('change', changeTheme);
});