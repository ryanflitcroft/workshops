import { checkAuth, logout, getWorkshops, deleteParticipant } from '../fetch-utils.js';

import { renderParticipant } from '../render-utils.js';

const workshopSection = document.querySelector('#workshop-section');
const joinButton = document.querySelector('#join-button');
const hostButton = document.querySelector('#host-button');

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
    const workshops = await getWorkshops();
    await displayWorkshops(workshops);
});

joinButton.addEventListener('click', () => window.location.href = '../join');

hostButton.addEventListener('click', () => window.location.href = '../host');

async function displayWorkshops(workshops) {
    workshopSection.textContent = '';
    for (let workshop of workshops) {
        const workshopContainerEl = document.createElement('article');
        const workshopNameEl = document.createElement('h2');
        const workshopHostEl = document.createElement('span');
        const participantContainerEl = document.createElement('div');

        workshopNameEl.textContent = `${workshop.name}`;
        workshopHostEl.textContent = `Hosted by ${workshop.host}`;

        workshopHostEl.classList.add('host');

        for (let participant of workshop.participants) {
            const participantsEl = renderParticipant(participant);

            participantsEl.addEventListener('click', async() => {
                await deleteParticipant(participant.id);
                const workshops = await getWorkshops();
                displayWorkshops(workshops);
            });
    
            participantContainerEl.append(participantsEl);
        
        }

        workshopContainerEl.append(workshopNameEl, workshopHostEl, participantContainerEl);
        workshopSection.append(workshopContainerEl);
    }
}