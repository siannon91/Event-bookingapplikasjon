const movies = [
    //  UKE 1: Hollywood-legender
    {
        id: "morocco",
        title: "Morocco",
        originalTitle: "Morocco",
        year: 1930,
        date: "Fredag 2. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 14,
            "21:15": 32
        },
        week: 1,
        hall: "Sal 1",
        genre: "Romantikk, Drama",
        duration: "1 tim 32 min",
        ageLimit: "12 år",
        director: "Josef von Sternberg",
        cast: "Marlene Dietrich, Gary Cooper, Adolphe Menjou",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/morocco.jpg",
        description: "En blendende kabaretsangerinne og en kynisk fremmedlegjonær møtes i Nord-Afrika. Mellom dem oppstår en intens tiltrekning, men begge må velge mellom kjærligheten og sine egne uavhengige liv."
    },
    {
        id: "casablanca",
        title: "Casablanca",
        originalTitle: "Casablanca",
        year: 1942,
        date: "Lørdag 3. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 10,
            "21:15": 22
        },
        week: 1,
        hall: "Sal 1",
        genre: "Romantikk, Drama, Krig",
        duration: "1 tim 42 min",
        ageLimit: "12 år",
        director: "Michael Curtiz",
        cast: "Humphrey Bogart, Ingrid Bergman, Paul Henreid",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/casablanca.jpg",
        description: "I det okkuperte Marokko under andre verdenskrig må den kyniske kafeeieren Rick Blaine velge mellom sin egen trygghet og å hjelpe sin tidligere elskede Ilsa og hennes ektemann med å flykte fra nazistene."
    },
    {
        id: "roman",
        title: "Roman Holiday",
        originalTitle: "Roman Holiday",
        year: 1953,
        date: "Søndag 4. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 12,
            "21:15": 20
        },
        week: 1,
        hall: "Sal 1",
        genre: "Romantikk, Komedie",
        duration: "1 tim 58 min",
        ageLimit: "Tillatt for alle",
        director: "William Wyler",
        cast: "Audrey Hepburn, Gregory Peck, Eddie Albert",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/roman.jpg",
        description: "En ung europeisk prinsesse rømmer fra sine strenge plikter under et statsbesøk i Roma. Hun møter en amerikansk journalist som gir henne en uforglemmelig dag i den evige stad."
    },

    //  UKE 2: Klassiske Komedier
    {
        id: "philadelphia",
        title: "The Philadelphia Story",
        originalTitle: "The Philadelphia Story",
        year: 1940,
        date: "Fredag 9. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 23,
            "21:15": 30
        },
        week: 2,
        hall: "Sal 1",
        genre: "Komedie, Romantikk",
        duration: "1 tim 52 min",
        ageLimit: "Tillatt for alle",
        director: "George Cukor",
        cast: "Cary Grant, Katharine Hepburn, James Stewart",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/philadelphia.jpg",
        description: "En rik og stolt kvinne skal gifte seg på nytt, men bryllupsplanene snus på hodet når hennes eksmann og en sjarmerende magasinjournalist dukker opp samtidig."
    },
    {
        id: "fjols",
        title: "Fjols til fjells",
        originalTitle: "Fjols til fjells",
        year: 1957,
        date: "Lørdag 10. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 9,
            "21:15": 15
        },
        week: 2,
        hall: "Sal 1",
        genre: "Komedie, Klassiker",
        duration: "1 tim 32 min",
        ageLimit: "Tillatt for alle",
        director: "Edith Carlmar",
        cast: "Leif Juster, Unni Bernhoft, Frank Robert",
        language: "Norsk tale",
        poster: "images/fjols.jpg",
        description: "Klassisk norsk komedie fra Hurumhei Høyfjellshotell der hotelldirektør Poppe løper beina av seg i et villnis av forvekslinger og gjestemissforståelser."
    },
    {
        id: "somelike",
        title: "Some Like It Hot",
        originalTitle: "Some Like It Hot",
        year: 1959,
        date: "Søndag 11. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 17,
            "21:15": 26
        },
        week: 2,
        hall: "Sal 1",
        genre: "Komedie, Musikk",
        duration: "2 tim 01 min",
        ageLimit: "12 år",
        director: "Billy Wilder",
        cast: "Marilyn Monroe, Tony Curtis, Jack Lemmon",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/somelike.jpg",
        description: "To musikere på flukt fra mafiaen kler seg ut som kvinner og blir med i et kvinnelig orkester på vei til Florida, med elleville forvekslinger som resultat."
    },

    //  UKE 3: Intense Dramaer og Noir
    {
        id: "gilda",
        title: "Gilda",
        originalTitle: "Gilda",
        year: 1946,
        date: "Fredag 16. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 18,
            "21:15": 24
        },
        week: 3,
        hall: "Sal 1",
        genre: "Film Noir, Drama",
        duration: "1 tim 50 min",
        ageLimit: "12 år",
        director: "Charles Vidor",
        cast: "Rita Hayworth, Glenn Ford, George Macready",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/gilda.jpg",
        description: "I Buenos Aires havner en gambler i et farlig trekantdrama når hans mektige sjef vender tilbake med en ny kone som tilfeldigvis er gamblerens tidligere elskede."
    },
    {
        id: "desire",
        title: "A Streetcar Named Desire",
        originalTitle: "A Streetcar Named Desire",
        year: 1951,
        date: "Lørdag 17. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 16,
            "21:15": 30
        },
        week: 3,
        hall: "Sal 1",
        genre: "Drama",
        duration: "2 tim 02 min",
        ageLimit: "12 år",
        director: "Elia Kazan",
        cast: "Marlon Brando, Vivien Leigh, Kim Hunter",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/desire.jpg",
        description: "Den skjøre sørstatsskjønnheten Blanche DuBois flytter inn hos sin søster i New Orleans og havner i en intens psykologisk maktkamp med sin brutale svoger Stanley."
    },
    {
        id: "ciociara",
        title: "La Ciociara",
        originalTitle: "La Ciociara (Two Women)",
        year: 1960,
        date: "Søndag 18. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 19,
            "21:15": 27
        },
        week: 3,
        hall: "Sal 1",
        genre: "Drama, Krig",
        duration: "1 tim 40 min",
        ageLimit: "15 år",
        director: "Vittorio De Sica",
        cast: "Sophia Loren, Jean-Paul Belmondo, Eleonora Brown",
        language: "Italiensk tale, Norsk tekst",
        poster: "images/ciociara.jpg",
        description: "En mor kjemper en innbitt kamp for å beskytte sin unge datter fra krigens grusomheter på den italienske landsbygda under andre verdenskrig."
    },

    //  UKE 4: Eventyr og Western
    {
        id: "highnoon",
        title: "High Noon",
        originalTitle: "High Noon",
        year: 1952,
        date: "Fredag 23. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 26,
            "21:15": 17
        },
        week: 4,
        hall: "Sal 1",
        genre: "Western, Drama",
        duration: "1 tim 25 min",
        ageLimit: "12 år",
        director: "Fred Zinnemann",
        cast: "Gary Cooper, Grace Kelly, Thomas Mitchell",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/highnoon.jpg",
        description: "En nygift sheriff må velge mellom plikt og kjærlighet når han oppdager at en farlig forbryter han arresterte kommer tilbake til byen på middagstoget."
    },
    {
        id: "sierra",
        title: "The Treasure of the Sierra Madre",
        originalTitle: "The Treasure of the Sierra Madre",
        year: 1948,
        date: "Lørdag 24. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 20,
            "21:15": 32
        },
        week: 4,
        hall: "Sal 1",
        genre: "Eventyr, Drama",
        duration: "2 tim 06 min",
        ageLimit: "12 år",
        director: "John Huston",
        cast: "Humphrey Bogart, Walter Huston, Tim Holt",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/sierra.jpg",
        description: "Tre blakkede gullgravere drar inn i de meksikanske fjellene. Mistenksomhet og paranoisk grådighet tærer på gruppen etter hvert som gullet strømmer på."
    },
    {
        id: "stage",
        title: "Stagecoach",
        originalTitle: "Stagecoach",
        year: 1939,
        date: "Søndag 25. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 28,
            "21:15": 25
        },
        week: 4,
        hall: "Sal 1",
        genre: "Western, Action",
        duration: "1 tim 36 min",
        ageLimit: "12 år",
        director: "John Ford",
        cast: "John Wayne, Claire Trevor, Andy Devine",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/stage.jpg",
        description: "En broket forsamling fremmede legger ut på en farefull reise med diligence gjennom et ugjestmildt territorium der apasjekrigere truer reisen."
    },

    //  UKE 5: Halloween Special (Skrekkfilm-helg)
    {
        id: "dracula",
        title: "Dracula",
        originalTitle: "Dracula",
        year: 1931,
        date: "Fredag 30. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 22,
            "21:15": 8
        },
        week: 5,
        hall: "Sal 1",
        genre: "Skrekk, Gotisk",
        duration: "1 tim 15 min",
        ageLimit: "15 år",
        director: "Tod Browning",
        cast: "Bela Lugosi, Helen Chandler, David Manners",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/dracula.jpg",
        description: "Grev Dracula ankommer London fra Transylvania og begynner å forføre unge kvinner i nattens mørke, før professor Van Helsing tar opp kampen."
    },
    {
        id: "frank",
        title: "Young Frankenstein",
        originalTitle: "Young Frankenstein",
        year: 1974,
        date: "Lørdag 31. oktober 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 17,
            "21:15": 21
        },
        week: 5,
        hall: "Sal 1",
        genre: "Skrekkkomedie, Parodi",
        duration: "1 tim 46 min",
        ageLimit: "12 år",
        director: "Mel Brooks",
        cast: "Gene Wilder, Peter Boyle, Marty Feldman",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/frank.jpg",
        description: "Barnebarnet til Dr. Frankenstein arver slottet i Transylvania og prøver motvillig å vekke til live sitt eget monster i denne hysterisk morsomme parodien."
    },
    {
        id: "psycho",
        title: "Psycho",
        originalTitle: "Psycho",
        year: 1960,
        date: "Søndag 1. november 2026",
        time: ["19:00", "21:15"],
        availableSeats: {
            "19:00": 26,
            "21:15": 11
        },
        week: 5,
        hall: "Sal 1",
        genre: "Skrekk, Thriller",
        duration: "1 tim 49 min",
        ageLimit: "15 år",
        director: "Alfred Hitchcock",
        cast: "Anthony Perkins, Janet Leigh, Vera Miles",
        language: "Engelsk tale, Norsk tekst",
        poster: "images/psycho.jpg",
        description: "En sekretær på flukt sjekker inn på det isolerte Bates Motel, som drives av den rolige men uvanlige Norman Bates og hans dominerende mor."
    }
];


let filmMostrati = 4;
let currentMovieId = null;
let filmSelezionatoPerAcquisto = null;
let orarioSelezionatoPerAcquisto = null;
const PrezzoBiglietto = 140;

function mostraFilm() {
    const grigliaElemento = document.getElementById('film-griglia');
    if (!grigliaElemento) return;

    grigliaElemento.innerHTML = ''; // Puliamo la griglia

    // 1. Definiamo la variabile DENTRO la funzione
    const filmDaMostrare = movies.slice(0, filmMostrati);

    // 2. Il ciclo for...of deve stare DENTRO la funzione mostraFilm
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

        // Evento click per aprire la modale
        filmCard.addEventListener('click', function() {
            apriModaleFilm(film.id);
        });

        grigliaElemento.appendChild(filmCard);
    }

    // Gestione del pulsante Vis flere filmer
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

    // Chiude la modale cliccando sullo sfondo scuro esterno
    const modalOverlay = document.getElementById('film-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                chiudiModaleFilm();
            }
        });
    }

    const checkoutModalOverlay = document.getElementById('checkout-modal');
    if (checkoutModalOverlay) {
        checkoutModalOverlay.addEventListener('click', function(e) {
            if (e.target === checkoutModalOverlay) {
                chiudiModaleAcquisto();
            }
        });
    }

}



document.addEventListener('DOMContentLoaded', inizializzaPagina);



// per aprire la modale con i dettagli del film selezionato
function apriModaleFilm(filmId) {
    currentMovieId = filmId;

    // Cerca film nell'array
    const film = movies.find(function(m) {
        return m.id === filmId;
    });

    if (!film) return;

    // Dati del film
    document.getElementById('modal-poster').src = film.poster;
    document.getElementById('modal-poster').alt = film.title;
    document.getElementById('modal-title').textContent = film.title;
    document.getElementById('modal-meta').textContent = film.year + ' • ' + (film.duration);
    document.getElementById('modal-genre').textContent = film.genre;
    document.getElementById('modal-description').textContent = film.description;
    document.getElementById('modal-director').textContent = film.director;
    document.getElementById('modal-cast').textContent = film.cast;


// Impostiamo la data del film
const dateElement = document.getElementById('modal-date');
if (dateElement) {
    dateElement.textContent = film.date ? film.date : 'Dato ikke tilgjengelig';
}

// Pulsanti per gli orari
const timeSlotsContainer = document.getElementById('modal-time-slots');
if (timeSlotsContainer) {
    timeSlotsContainer.innerHTML = ''; // Puliamo eventuali orari precedenti

    if (film.time && Array.isArray(film.time)) {
        for (const orario of film.time) {
            const timeBtn = document.createElement('button');
            timeBtn.className = 'time-btn';
            timeBtn.textContent = orario;

            // Gestione del click sull'orario
            timeBtn.addEventListener('click', function() {
                const giaSelezionato = timeBtn.classList.contains('selected');

                // Deselezioniamo tutti gli altri pulsanti orario
                const tuttiIBottoniOrario = timeSlotsContainer.querySelectorAll('.time-btn');
                for (const btn of tuttiIBottoniOrario) {
                    btn.classList.remove('selected');
                }

                // Se non era già selezionato, lo selezioniamo
                if (!giaSelezionato) {
                    timeBtn.classList.add('selected');
                }
            });

            timeSlotsContainer.appendChild(timeBtn);
        }
    }
}


    // Mostra modale
    const modal = document.getElementById('film-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Funzione per chiudere la modale
function chiudiModaleFilm() {
    const modal = document.getElementById('film-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}




function filtraPerSettimana(settimana) {
    const bottoni = document.querySelectorAll('.filter-btn');
    for (const btn of bottoni) {
        btn.classList.remove('active');
    }

    if (event && event.target) {
        event.target.classList.add('active');
    }

    const grigliaElemento = document.getElementById('film-griglia');
    if (!grigliaElemento) return;

    grigliaElemento.innerHTML = '';
    let filmFiltrati;
    if (settimana === 'all') {
        filmFiltrati = movies;
    } else {
        filmFiltrati = movies.filter(function(film) {
            return film.week === settimana;
        });
    }

    for (const film of filmFiltrati) {
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

        filmCard.addEventListener('click', function() {
            apriModaleFilm(film.id);
        });

        grigliaElemento.appendChild(filmCard);
    }

    const bottoneVisFlere = document.getElementById('vis-flere-btn');
    if (bottoneVisFlere) {
        if (settimana !== 'all') {
            bottoneVisFlere.style.display = 'none';
        } else {
            bottoneVisFlere.style.display = 'inline-block';
        }
    }
}





function apriModaleAcquisto() {
    if (!currentMovieId) {
        console.error("Ingen film valgt");
        return;
    }

    filmSelezionatoPerAcquisto = movies.find(function(f) {
        return f.id === currentMovieId;
    });

    if (!filmSelezionatoPerAcquisto) return;

    const bottoniOrarioModale = document.querySelectorAll('#modal-time-slots .time-btn');
    orarioSelezionatoPerAcquisto = null;

    for (const btn of bottoniOrarioModale) {
        if (btn.classList.contains('selected')) {
            orarioSelezionatoPerAcquisto = btn.textContent;
            break;
        }
    }

    chiudiModaleFilm();

    document.getElementById('checkout-film-title').textContent = filmSelezionatoPerAcquisto.title;
    document.getElementById('checkout-film-date').textContent = 'Dato: ' + (filmSelezionatoPerAcquisto.date || 'Non specificato');

    document.getElementById('ticket-quantity').value = 1;
    aggiornaTotale();

    preparaOrariCassa();

    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) {
        checkoutModal.classList.add('active');
        checkoutModal.style.display = 'block';
    }
}





function preparaOrariCassa() {
    const container = document.getElementById('checkout-time-slots');
    if (!container) return;

    container.innerHTML = '';

    if (filmSelezionatoPerAcquisto && filmSelezionatoPerAcquisto.time) {
        for (const orario of filmSelezionatoPerAcquisto.time) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'time-btn';
            btn.textContent = orario;

            if (orario === orarioSelezionatoPerAcquisto) {
                btn.classList.add('selected');
            }

            btn.addEventListener('click', function() {
                orarioSelezionatoPerAcquisto = orario;
                
                const tuttiIBottoni = container.querySelectorAll('.time-btn');
                for (const b of tuttiIBottoni) {
                    b.classList.remove('selected');
                }
                btn.classList.add('selected');

                mostraPostiDisponibili();
            });

            container.appendChild(btn);
        }
    }

    mostraPostiDisponibili();
}





function mostraPostiDisponibili() {
    const seatsBox = document.getElementById('checkout-seats-info');
    if (!seatsBox) return;

    if (!orarioSelezionatoPerAcquisto) {
        seatsBox.textContent = 'Velg et tidspunkt for å se ledige plasser.';
        seatsBox.classList.remove('few-seats');
        return;
    }

    // Prendiamo i posti reali dall'oggetto del film
    const postiDisponibili = filmSelezionatoPerAcquisto.availableSeats[orarioSelezionatoPerAcquisto] || 0;

    const inputQuantita = document.getElementById('ticket-quantity');
    if (inputQuantita) {
        inputQuantita.max = postiDisponibili;
        inputQuantita.min = 1;
        if (parseInt(inputQuantita.value) > postiDisponibili) {
            inputQuantita.value = postiDisponibili;
        }
    }

    if (postiDisponibili <= 5) {
        seatsBox.textContent = `Sal 1 — kl. ${orarioSelezionatoPerAcquisto}: Få billetter igjen! (${postiDisponibili} plasser igjen)`;
        seatsBox.classList.add('few-seats');
    } else {
        seatsBox.textContent = `Sal 1 — kl. ${orarioSelezionatoPerAcquisto}: ${postiDisponibili} ledige plasser`;
        seatsBox.classList.remove('few-seats');
    }
}




function aggiornaTotale() {
    const quantitaInput = document.getElementById('ticket-quantity');
    const totaleElemento = document.getElementById('checkout-total-price');
    if (quantitaInput && totaleElemento) {
        const quantita = parseInt(quantitaInput.value) || 1;
        totaleElemento.textContent = quantita * PrezzoBiglietto;
    }
}




function chiudiModaleAcquisto() {
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) {
        checkoutModal.classList.remove('active');
        checkoutModal.style.display = 'none';
    }
    const form = document.getElementById('checkout-form');
    if (form) {
        form.reset();
    }
}



function confermaAcquisto(event) {
    event.preventDefault();

    if (!orarioSelezionatoPerAcquisto) {
        alert('Vennligst velg et tidspunkt før du fullfører kjøpet!');
        return;
    }

    const quantita = parseInt(document.getElementById('ticket-quantity').value, 10) || 1;
    const postiDisponibili = filmSelezionatoPerAcquisto.availableSeats[orarioSelezionatoPerAcquisto] || 0;

    if (quantita > postiDisponibili) {
        alert(`Beklager! Det er bare ${postiDisponibili} ledige plasser igjen for dette tidspunktet.`);
        return;
    }

    if (quantita < 1) {
        alert("Vennligst velg minst 1 billett.");
        return;
    }

    const nomeAcquirente = document.getElementById('buyer-name').value;
    const mailAcquirente = document.getElementById('buyer-mail').value;

    alert(`Takk for kjøpet, ${nomeAcquirente}!\n\nDu har bestilt ${quantita} billett(er) til "${filmSelezionatoPerAcquisto.title}" kl. ${orarioSelezionatoPerAcquisto}.\n\nBillett(er) sendes til ${mailAcquirente}.\n\nGod fornøyelse!`);

    document.getElementById('checkout-form').reset();
    chiudiModaleAcquisto();
}


document.getElementById('billetter-alert').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Hvordan kjøpe billetter:\n\n1. Velg en film fra programmet.\n2. Klikk på filmen eller se mer info.\n3. Velg ønsket tidspunkt og klikk 'Kjøp billett'.");
});
