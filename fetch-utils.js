const SUPABASE_URL = 'https://pchmglmquovmuzgjunif.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MjAzMDI0NCwiZXhwIjoxOTU3NjA2MjQ0fQ.wlEkaRcXAnwfYWGskN29UXpUAdpqv8WcXunW0aFQvKs';

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

    // COME BACK TO IT >>
    // await createProfile(email);

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

// COME BACK TO IT >>
// export async function createProfile(email) {
//     const response = await client
//         .from('profiles')
//         .insert([{ email }]);

//     return checkError(response);
// }

export async function getWorkshops() {
    const response = await client
        .from('workshops')
        .select(`*, participants (*)`);
 
    return checkError(response);
}

export async function createParticipant(participant) {
    const response = await client
        .from('participants')
        .insert([participant]);

    return checkError(response);
}

export async function deleteParticipant(id) {
    const response = await client
        .from('participants')
        .delete()
        .match({ id })
        .single();

    return checkError(response);
}

export async function hostWorkshop(workshop) {
    const response = await client
        .from('workshops')
        .insert([workshop]);

    return checkError(response);
}