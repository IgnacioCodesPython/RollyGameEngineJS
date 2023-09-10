/* Animation package required file */

/**
 * Play a animation.
 * 
 * Animations to play:
 * game_intro
 * 
 * @param {string} animation - The animation to play.
 * @param {Document element} where - Where to play the animation.
 */
function play(animation, where) {
    switch (animation) {
        case "game_intro":
            where.innerHTML = `
                <div class="intro_container">
                    <p class="text intro made_with">Made with:</p>
                    <p class="text intro engine_name">  Rolly Game Engine</p>
                </div>
            `
            where.style = `
                div.intro_container {
                    justify-content: center;
                    align-content: center;
                }
                
                p.text .intro .made_with {
                    font: sans-serif;
                    font-size: calc(1rem * .8);
                }
                
                p.text .intro .engine_name {
                    font: sans-serif;
                    font-size: calc(1rem * .20);
                    text-transform: uppercase;
                }
            `
            this.timeo = setTimeout(function() {
                where.style = `
                    div.intro_container {
                        opacity: 100%;
                        animation: fade 5s ease-in-out forwards;
                    }
                    @keyframes fade {
                        from {
                          opacity: 100%;
                        }
                        to {
                          opacity: 0%;
                        }
                    }
                `
                clearTimeout(this.timeo)
            }, 5000);
    }
}