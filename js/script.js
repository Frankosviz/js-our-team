// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// DATI PER ESERCIZIO
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	        Chief Editor	                angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	        Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	        Developer	                 scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	         barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// BONUS 3:
// Permettere l'aggiunta di un nuovo membro del team
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

// Mio template html
/* 
        <main>
            <div id="wrapper" class="bg-primary">
                <div class="card">Ciao io sono giovanni</div>
                <div class="card">Ciao io sono marco</div>
                <div class="card">Ciao io sono emanuele</div>
                <div class="card">Ciao io sono emilio</div>
                <div class="card">Ciao io sono andrea</div>
                <div class="card">Ciao io sono francesco</div>
            </div>
        </main> */

let workers = [
    {
        nome : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        nome : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        nome : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        nome : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'Barbara-ramos-graphic-designer.jpg'
    }
];

console.log(workers);
const wrapper = document.getElementById('wrapper');

const cardEl = document.getElementById('card');

for(let i = 0; i < workers.length; i++){
    wrapper.classList.add('bg-primary', 'd-flex', 'flex-wrap');
    const divEl = document.createElement('div');
    divEl.classList.add = ('card');
    cardEl.innerHTML = `
    <img src="img/${workers[0].image}"> <h3>${workers[0].nome}</h3> <h4 class="clr-green">${workers[0].role}</h4>
    <img src="img/${workers[1].image}"> <h3>${workers[1].nome}</h3> <h4 class="clr-green">${workers[1].role}</h4>
    <img src="img/${workers[2].image}"> <h3>${workers[2].nome}</h3> <h4 class="clr-green">${workers[2].role}</h4>
    <img src="img/${workers[3].image}"> <h3>${workers[3].nome}</h3> <h4 class="clr-green">${workers[3].role}</h4>
    <img src="img/${workers[4].image}"> <h3>${workers[4].nome}</h3> <h4 class="clr-green">${workers[4].role}</h4>
    <img src="img/${workers[5].image}"> <h3>${workers[5].nome}</h3> <h4 class="clr-green">${workers[5].role}</h4>
    `;
    cardEl.appendChild(divEl);
}


