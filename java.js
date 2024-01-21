// sezione per lo spostamento del carosello
// Seleziona tutti gli elementi con classe 'carousel'
let carousels = document.querySelectorAll('.carousel');

// Per ogni carosello nella lista
carousels.forEach((carousel) => {
    // Seleziona tutti gli elementi con classe 'carousel-item' all'interno del carosello
    let slides = carousel.querySelectorAll(".carousel-item");

    // Seleziona il primo elemento del carosello
    let firstSlide = slides[0];

    // Per ogni elemento nel carosello
    slides.forEach((element) => {
        // Numero minimo di cloni per ogni slide
        const minPerSlide = 6;

        // Seleziona l'elemento successivo
        let next = element.nextElementSibling;

        // Clona e aggiungi elementi successivi per raggiungere il numero minimo di cloni
        for (let i = 0; i < minPerSlide; i++) {
            // Se non c'è un elemento successivo, ricomincia dal primo
            if (!next) {
                next = firstSlide;
            }

            // Clona l'elemento successivo e aggiungilo come figlio all'elemento corrente
            let cloneChild = next.cloneNode(true);
            element.appendChild(cloneChild.children[0]);

            // Passa all'elemento successivo
            next = next.nextElementSibling;
        }
    });
});

// per l'effetto ombra allo scorrimento


const intersectionCallback = (entries) => {
  // Per ogni entry nell'array di entries
  for (const entry of entries) { 
      // Verifica se l'elemento è attualmente in vista (intersecting con la viewport)
      if (entry.isIntersecting) { 
          // Aggiungi la classe 'show' all'elemento target
          entry.target.classList.add('show'); 
      }
  }
}

// Crea un'istanza di IntersectionObserver utilizzando la funzione di callback
const observer = new IntersectionObserver(intersectionCallback);

// Seleziona tutti gli elementi con classe 'item'
const items = document.querySelectorAll('.item');

// Per ogni elemento con classe 'item'
for (const item of items) {
  // Osserva l'elemento utilizzando l'IntersectionObserver
  observer.observe(item);
}

