import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';

const workshopSection = document.querySelector('#workshop-section');
const joinButton = document.querySelector('#join-button');
const hostButton = document.querySelector('#host-button');

console.log(workshopSection, joinButton, hostButton);

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('resize', () => {
    if (window.innerHeight > 565) {
        window.scrollTo(0, 0);
    }
});

window.addEventListener('load', async() => {
    // fetch workshop and participant data, render and append to workshopSection
    const workshops = await getWorkshops();
    console.log(workshops);
    workshopSection.textContent = '';
    for (let workshop of workshops) {
        const workshopNameEl = document.createElement('h2');
        const participantContainerEl = document.createElement('div');

        workshopNameEl.textContent = `${workshop.name}`;

        for (let participant of workshop.participants) {
            console.log('hello' + participant);
            // PROBLEM TO SOLVE: workshop.participants returning 0... hmm??

            // const participantsEl = document.createElement('span');
            // participantsEl.textContent = participant.name;

            // participantContainerEl.append(participantsEl);
        }
        
        workshopSection.append(workshopNameEl, participantContainerEl);
    }
});

joinButton.addEventListener('click', () => window.location.href = '../join');

hostButton.addEventListener('click', () => window.location.href = '../host');