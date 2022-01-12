import { checkAuth, getWorkshops, joinWorkshop, logout } from '../fetch-utils.js';

const joinForm = document.querySelector('#join-form');

const workshopSelectEl = document.querySelector('#workshop-select');

console.log(joinForm, workshopSelectEl);

checkAuth();

const redirectWorkshop = document.getElementById('redirect-workshop');

redirectWorkshop.addEventListener('click', () => {
    window.location.href = '../workshop';
});

window.addEventListener('resize', () => {
    if (window.innerHeight > 565) {
        window.scrollTo(0, 0);
    }
});

window.addEventListener('load', async() => {
    // fetch workshop, render and append to workshopSelect
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopOptionEl = document.createElement('option');

        workshopOptionEl.value = workshop.id;
        workshopOptionEl.textContent = workshop.name;

        workshopSelectEl.append(workshopOptionEl);
    }
});

joinForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(joinForm);
    const name = data.get('participant-name');
    const workshop_id = data.get('workshop-select');

    joinForm.reset();

    await joinWorkshop({
        name,
        workshop_id
    });
});