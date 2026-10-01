const movies = [
    //  UKE 1: Hollywood-legender
    {
        id: "morocco",
        title: "Morocco",
        originalTitle: "Morocco",
        year: 1930,
        date: "Fredag 2. oktober 2026",
        time: "19:00",
        hall: "Sal 1",
        genre: "Romantikk, Drama",
        duration: "1 tim 32 min",
        ageLimit: "12 år",
        director: "Josef von Sternberg",
        cast: "Marlene Dietrich, Gary Cooper, Adolphe Menjou",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/morocco.jpg",
        trailerUrl: "https://www.youtube.com/embed/VFsU3A_vhpY",
        description: "En blendende kabaretsangerinne og en kynisk fremmedlegjonær møtes i Nord-Afrika. Mellom dem oppstår en intens tiltrekning, men begge må velge mellom kjærligheten og sine egne uavhengige liv."
    },
    {
        id: "casablanca",
        title: "Casablanca",
        originalTitle: "Casablanca",
        year: 1942,
        date: "Lørdag 3. oktober 2026",
        time: "20:00",
        hall: "Sal 1",
        genre: "Romantikk, Drama, Krig",
        duration: "1 tim 42 min",
        ageLimit: "12 år",
        director: "Michael Curtiz",
        cast: "Humphrey Bogart, Ingrid Bergman, Paul Henreid",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/casablanca.jpg",
        trailerUrl: "https://www.youtube.com/embed/S9ID5DHsX8g",
        description: "I det okkuperte Marokko under andre verdenskrig må den kyniske kafeeieren Rick Blaine velge mellom sin egen trygghet og å hjelpe sin tidligere elskede Ilsa og hennes ektemann med å flykte fra nazistene."
    },
    {
        id: "roman",
        title: "Roman Holiday",
        originalTitle: "Roman Holiday",
        year: 1953,
        date: "Søndag 4. oktober 2026",
        time: "19:00",
        hall: "Sal 1",
        genre: "Romantikk, Komedie",
        duration: "1 tim 58 min",
        ageLimit: "Tillatt for alle",
        director: "William Wyler",
        cast: "Audrey Hepburn, Gregory Peck, Eddie Albert",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/roman.jpg",
        trailerUrl: "https://www.youtube.com/embed/X_hyQgdGmU8",
        description: "En ung europeisk prinsesse rømmer fra sine strenge plikter under et statsbesøk i Roma. Hun møter en amerikansk journalist som gir henne en uforglemmelig dag i den evige stad."
    },

    //  UKE 2: Klassiske Komedier
    {
        id: "philadelphia",
        title: "The Philadelphia Story",
        originalTitle: "The Philadelphia Story",
        year: 1940,
        date: "Fredag 9. oktober 2026",
        time: "19:00",
        hall: "Sal 1",
        genre: "Komedie, Romantikk",
        duration: "1 tim 52 min",
        ageLimit: "Tillatt for alle",
        director: "George Cukor",
        cast: "Cary Grant, Katharine Hepburn, James Stewart",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/philadelphia.jpg",
        trailerUrl: "https://www.youtube.com/embed/4f2jCffBrck",
        description: "En rik og stolt kvinne skal gifte seg på nytt, men bryllupsplanene snus på hodet når hennes eksmann og en sjarmerende magasinjournalist dukker opp samtidig."
    },
    {
        id: "fjols",
        title: "Fjols til fjells",
        originalTitle: "Fjols til fjells",
        year: 1957,
        date: "Lørdag 10. oktober 2026",
        time: "19:30",
        hall: "Sal 1",
        genre: "Komedie, Klassiker",
        duration: "1 tim 32 min",
        ageLimit: "Tillatt for alle",
        director: "Edith Carlmar",
        cast: "Leif Juster, Unni Bernhoft, Frank Robert",
        language: "Norsk tale",
        poster: "images/fjols.jpg",
        trailerUrl: "https://www.youtube.com/embed/IXnH5wzSOj0",
        description: "Klassisk norsk komedie fra Hurumhei Høyfjellshotell der hotelldirektør Poppe løper beina av seg i et villnis av forvekslinger og gjestemissforståelser."
    },
    {
        id: "somelike",
        title: "Some Like It Hot",
        originalTitle: "Some Like It Hot",
        year: 1959,
        date: "Søndag 11. oktober 2026",
        time: "19:00",
        hall: "Sal 1",
        genre: "Komedie, Musikk",
        duration: "2 tim 01 min",
        ageLimit: "12 år",
        director: "Billy Wilder",
        cast: "Marilyn Monroe, Tony Curtis, Jack Lemmon",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/somelike.jpg",
        trailerUrl: "https://www.youtube.com/embed/rI_lUHOCcbc",
        description: "To musikere på flukt fra mafiaen kler seg ut som kvinner og blir med i et kvinnelig orkester på vei til Florida, med elleville forvekslinger som resultat."
    },

    //  UKE 3: Intense Dramaer og Noir
    {
        id: "gilda",
        title: "Gilda",
        originalTitle: "Gilda",
        year: 1946,
        date: "Fredag 16. oktober 2026",
        time: "20:00",
        hall: "Sal 1",
        genre: "Film Noir, Drama",
        duration: "1 tim 50 min",
        ageLimit: "12 år",
        director: "Charles Vidor",
        cast: "Rita Hayworth, Glenn Ford, George Macready",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/gilda.jpg",
        trailerUrl: "https://www.youtube.com/embed/9hTdgygrlOg",
        description: "I Buenos Aires havner en gambler i et farlig trekantdrama når hans mektige sjef vender tilbake med en ny kone som tilfeldigvis er gamblerens tidligere elskede."
    },
    {
        id: "desire",
        title: "A Streetcar Named Desire",
        originalTitle: "A Streetcar Named Desire",
        year: 1951,
        date: "Lørdag 17. oktober 2026",
        time: "19:00",
        hall: "Sal 1",
        genre: "Drama",
        duration: "2 tim 02 min",
        ageLimit: "12 år",
        director: "Elia Kazan",
        cast: "Marlon Brando, Vivien Leigh, Kim Hunter",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/desire.jpg",
        trailerUrl: "https://www.youtube.com/embed/HceBnQ80C4c",
        description: "Den skjøre sørstatsskjønnheten Blanche DuBois flytter inn hos sin søster i New Orleans og havner i en intens psykologisk maktkamp med sin brutale svoger Stanley."
    },
    {
        id: "ciociara",
        title: "La Ciociara",
        originalTitle: "La Ciociara (Two Women)",
        year: 1960,
        date: "Søndag 18. oktober 2026",
        time: "18:30",
        hall: "Sal 1",
        genre: "Drama, Krig",
        duration: "1 tim 40 min",
        ageLimit: "15 år",
        director: "Vittorio De Sica",
        cast: "Sophia Loren, Jean-Paul Belmondo, Eleonora Brown",
        language: "Italiensk tale, Norsk tekst",
        poster: "images/ciociara.jpg",
        trailerUrl: "https://www.youtube.com/embed/JG32qgZ54Oo",
        description: "En mor kjemper en innbitt kamp for å beskytte sin unge datter fra krigens grusomheter på den italienske landsbygda under andre verdenskrig."
    },

    //  UKE 4: Eventyr og Western
    {
        id: "highnoon",
        title: "High Noon",
        originalTitle: "High Noon",
        year: 1952,
        date: "Fredag 23. oktober 2026",
        time: "19:00",
        hall: "Sal 1",
        genre: "Western, Drama",
        duration: "1 tim 25 min",
        ageLimit: "12 år",
        director: "Fred Zinnemann",
        cast: "Gary Cooper, Grace Kelly, Thomas Mitchell",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/highnoon.jpg",
        trailerUrl: "https://www.youtube.com/embed/g9CR_tib0CA",
        description: "En nygift sheriff må velge mellom plikt og kjærlighet når han oppdager at en farlig forbryter han arresterte kommer tilbake til byen på middagstoget."
    },
    {
        id: "sierra",
        title: "The Treasure of the Sierra Madre",
        originalTitle: "The Treasure of the Sierra Madre",
        year: 1948,
        date: "Lørdag 24. oktober 2026",
        time: "20:00",
        hall: "Sal 1",
        genre: "Eventyr, Drama",
        duration: "2 tim 06 min",
        ageLimit: "12 år",
        director: "John Huston",
        cast: "Humphrey Bogart, Walter Huston, Tim Holt",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/sierra.jpg",
        trailerUrl: "https://www.youtube.com/embed/vGpvO8JabEc",
        description: "Tre blakkede gullgravere drar inn i de meksikanske fjellene. Mistenksomhet og paranoisk grådighet tærer på gruppen etter hvert som gullet strømmer på."
    },
    {
        id: "stage",
        title: "Stagecoach",
        originalTitle: "Stagecoach",
        year: 1939,
        date: "Søndag 25. oktober 2026",
        time: "18:30",
        hall: "Sal 1",
        genre: "Western, Action",
        duration: "1 tim 36 min",
        ageLimit: "12 år",
        director: "John Ford",
        cast: "John Wayne, Claire Trevor, Andy Devine",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/stage.jpg",
        trailerUrl: "https://www.youtube.com/embed/OE-VWDsdkwM",
        description: "En broket forsamling fremmede legger ut på en farefull reise med diligence gjennom et ugjestmildt territorium der apasjekrigere truer reisen."
    },

    //  UKE 5: Halloween Special (Skrekkfilm-helg)
    {
        id: "dracula",
        title: "Dracula",
        originalTitle: "Dracula",
        year: 1931,
        date: "Fredag 30. oktober 2026",
        time: "21:00",
        hall: "Sal 1",
        genre: "Skrekk, Gotisk",
        duration: "1 tim 15 min",
        ageLimit: "15 år",
        director: "Tod Browning",
        cast: "Bela Lugosi, Helen Chandler, David Manners",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/dracula.jpg",
        trailerUrl: "https://www.youtube.com/embed/VoaMw91MC9k",
        description: "Grev Dracula ankommer London fra Transylvania og begynner å forføre unge kvinner i nattens mørke, før professor Van Helsing tar opp kampen."
    },
    {
        id: "frank",
        title: "Young Frankenstein",
        originalTitle: "Young Frankenstein",
        year: 1974,
        date: "Lørdag 31. oktober 2026",
        time: "21:00",
        hall: "Sal 1",
        genre: "Skrekkkomedie, Parodi",
        duration: "1 tim 46 min",
        ageLimit: "12 år",
        director: "Mel Brooks",
        cast: "Gene Wilder, Peter Boyle, Marty Feldman",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/frank.jpg",
        trailerUrl: "https://www.youtube.com/embed/sO8g8VmFf0M",
        description: "Barnebarnet til Dr. Frankenstein arver slottet i Transylvania og prøver motvillig å vekke til live sitt eget monster i denne hysterisk morsomme parodien."
    },
    {
        id: "psycho",
        title: "Psycho",
        originalTitle: "Psycho",
        year: 1960,
        date: "Søndag 1. november 2026",
        time: "20:00",
        hall: "Sal 1",
        genre: "Skrekk, Thriller",
        duration: "1 tim 49 min",
        ageLimit: "15 år",
        director: "Alfred Hitchcock",
        cast: "Anthony Perkins, Janet Leigh, Vera Miles",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/psycho.jpg",
        trailerUrl: "https://www.youtube.com/embed/Wz719b9QUqY",
        description: "En sekretær på flukt sjekker inn på det isolerte Bates Motel, som drives av den rolige men uvanlige Norman Bates og hans dominerende mor."
    }
];


let filmMostrati = 4;

function mostraFilm() {
    const grigliaElemento = document.getElementById('film-griglia');
    if (!grigliaElemento) return;

    grigliaElemento.innerHTML = ''; // Puliamo la griglia

    const filmDaMostrare = movies.slice(0, filmMostrati);

    for (const film of filmDaMostrare) {
        const filmCard = document.createElement('div');
        filmCard.className = 'film-card';
        filmCard.dataset.id = film.id;

        filmCard.innerHTML = `
            <div class="poster-container">
                <img src="${film.poster}" alt="${film.title}" class="film-poster">
            </div>
            <div class="film-info">
                <h3 class="film-tittel">${film.title} <span class="film-ar">(${film.year})</span></h3>
                <p class="film-sjanger">${film.genre}</p>
            </div>
        `;
        
        grigliaElemento.appendChild(filmCard);
    }

    const bottoneVisFlere = document.getElementById('vis-flere-btn');
    if (bottoneVisFlere) {
        if (filmMostrati >= movies.length) {
            bottoneVisFlere.style.display = 'none';
        } else {
            bottoneVisFlere.style.display = 'inline-block';
        }
    }
}

function gestisciVisFlere() {
    filmMostrati += 4;
    mostraFilm();
}

function inizializzaPagina() {
    mostraFilm();

    const bottoneVisFlere = document.getElementById('vis-flere-btn');
    if (bottoneVisFlere) {
        bottoneVisFlere.addEventListener('click', gestisciVisFlere);
    }
}

document.addEventListener('DOMContentLoaded', inizializzaPagina);
