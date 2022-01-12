const SUPABASE_URL = 'https://xpcwmiycekdmuiqlbpcj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTk0NDEzNSwiZXhwIjoxOTU3NTIwMTM1fQ.s-bg4m-T-UTMJNCRRmHf-cu9OLniJNes00ew6DxKah4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirect() {
    if (await getUser()) {
        location.replace('./workshop');
    }
}

export async function signUpUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

//

export async function getWorkshops() {
    const response = await client
        .from('workshops')
        .select(`*, participants (*)`);
 
    return checkError(response);
}

export async function joinWorkshop(participant) {
    const response = await client
        .from('participants')
        .insert([participant]);

    return checkError(response);
}