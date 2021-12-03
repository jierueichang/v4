let projects = [
    {
        year: "2021",
        projects: [
            {
                name: "USACO",
                description: "Solutions to USACO problems",
                link: "knosmos.github.io/usaco",
                image: "usaco.jpg"
            },
            {
                name: "SudokuGen",
                description: "Sudoku puzzle PDF generator",
                link: "github.com/knosmos/sudoku-gen",
                image: "sudoku2.png"
            },
            {
                name: "TL;DS",
                description: "Too Long Didn't Solve: math solver with handwriting capability",
                link: "github.com/knosmos/tlds",
                image: "tlds.jpg"
            },
            {
                name: "Rhythmvision",
                description: "Rhythm game with pose estimation",
                link: "knosmos.github.io/rhythmvision",
                image: "rhythmvision3.png"
            },
            {
                name: "Scribblebot",
                description: "contour-detecting autodraw bot",
                link: "github.com/knosmos/scribblebot",
                image: "scribblebot.png"
            },
            {
                name: "Mine Captcha",
                description: "CAPTCHA but it's minesweeper",
                link: "knosmos.github.io/mine-captcha",
                image: "mine-captcha.png"
            },
            {
                name: "CMDPXL",
                description: "Terminal-based image editor",
                link: "github.com/knosmos/cmdpxl",
                image: "cmdpxl.png"
            },
            {
                name: "Tres",
                description: "The classic online multiplayer card game ripoff",
                link: "knosmos.github.io/tres",
                image: "tres.png"
            },
            {
                name: "Geometry Street",
                description: "Simple geometry game",
                link: "knosmos.github.io/geometry",
                image: "geometry.png"
            },
            {
                name: "Emotilang",
                description: "Emoji-based esoteric programming language",
                link: "knosmos.github.io/emotilang",
                image: "emotilang.png",
            },
            {
                name: "Wikipedia TUI",
                description: "Terminal-based interface for browsing Wikipedia",
                link: "knosmos.github.io/wikipedia",
                image: "wikipedia.png"
            },
            {
                name: "ReactionMap",
                description: 'Implementation of xkcd\'s "Reaction Maps"',
                link: "knosmos.github.io/reaction-map",
                image: "reaction.jpg"
            },
            {
                name: "JCDOS",
                description: "Simulated desktop interface in web browser",
                link: "knosmos.github.io/jcdos",
                image: "jcdos3.png"
            },
            {
                name: "Turtles Ad Infinitum",
                description: "recursive game where you control a player who controls another player who controls...",
                link: "knosmos.github.io/turtles",
                image: "turtles.jpg"
            }
        ]
    },
    {
        year: "2020",
        projects: [
            {
                name: "Checkers",
                description: "Online multiplayer checkers game",
                link: "knosmos.github.io/checkers",
                image: "checkers.jpg"
            },
            {
                name: "Keymapper",
                description: "Keyboard Heatmap",
                link: "knosmos.github.io/keymapper",
                image: "keymapper.jpg"
            },
            {
                name: "Twarble",
                description: "Convert tweets into jumbles of synonymized meaningless text, because why not",
                link: "devpost.com/software/twarble",
                image: "twarble.png"
            },
            {
                name: "Petridish",
                description: "Evolution simulator",
                link: "knosmos.github.io/petridish",
                image: "petridish.jpg"
            },
            {
                name: "Clearing the Skies",
                description: "Rebuild civilization after nuclear war",
                link: "locus-lab.github.io/insertnamehere",
                image: "clearingskies.jpg"
            }
        ]
    },
    {
        year: "2019",
        projects: [
            {
                name: "Remapper",
                description: "Generate interactive maps of hikes to record great memories of a trip",
                link: "github.com/knosmos/remapper",
                image: "remapper.png"
            }
        ]
    },
    {
        year: "2018",
        projects: [
            {
                name: "Kalictric",
                description: "Digitally connected Kalimba instrument",
                link: "sites.google.com/view/kalictric",
                image: "kalictric.png"
            }
        ]
    },
    {
        year: "2017",
        projects: [
            {
                name: "CricketPi",
                description: "Raspberry Pi MIDI player with voice control",
                link: "sites.google.com/view/cricketpi",
                image: "cricketpi.png"
            }
        ]
    }
];

let elem = document.getElementById("projects-container");
for (let year of projects) {
    let yearHTML = "";
    yearHTML += `<h2>${year.year}</h2><div class=grid>`;
    for (let project of year.projects) {
        yearHTML += `
<div class=card2 onclick='window.open("https:\/\/${project.link}","_blank")'>
    <div class=card-img style='background-image:url(assets/${project.image})'>
    </div>
    <div class=card-body>
        <a>${project.name}</a>
        <p>${project.description}</p>                        
    </div>
</div>`;
    }
    yearHTML += `</div>`;
    elem.innerHTML += yearHTML;
}