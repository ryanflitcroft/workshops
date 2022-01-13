export function renderParticipant(participant) {
    const participantsEl = document.createElement('span');
    participantsEl.textContent = participant.name;

    participantsEl.classList.add('participant');

    return participantsEl;
}