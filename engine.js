/* Rolly game engine file */

/* Functions to use for later - Importing */

animatione = require("animate.js") /* Animation package */
gamerem = require("game.js")

/* Basic functions */

/**
 * This is a function to show help on a element or even the console.
 * WARNING: CHOOSING A ELEMENT WILL WIPE ALL THE CONTENT OF IT AND REPLACE IT WITH THE HELP DOCUMENTATION.
 * 
 * @param {element or console} showOn - The element to show help on.
 * 
 * 
 */
function help(showOn) {
    game_container.innerHTML = `
        <p></p>
    `
}

/* HTML content functions */

/**
 * 
 * @param {HTML code} HTMLContent 
 * @param {element} where 
 */
function changeContent(HTMLContent, where) {
    where.innerHTML = HTMLContent
}

/* Animation playing functions */

function start() {
    animatione.play("game_intro", "game_container")
}

/* Game functions */

/**
 * This is a function to run a built-in game built function.
 * @param {string function name} torun 
 * @param {list with arguments} arguments 
 */
function run(torun, arguments) {
    switch (torun) {
        case ("ElementCreate"): {

        }
    }
}
gamerem.onload()