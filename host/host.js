import { checkAuth, hostWorkshop } from '../fetch-utils.js';

const hostForm = document.querySelector('#host-form');

console.log(hostForm);

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

hostForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(hostForm);
    const workshopName = data.get('workshop-name');
    const hostName = data.get('host-name');

    await hostWorkshop({
        name: workshopName,
        host: hostName
    });

    // window.location.href = '../workshop';
});