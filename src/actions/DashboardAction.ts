export const dashboardAction = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const username = formData.get('username');
    if (!username) {
        return { success: false, message: 'Username is required' };
    }
    // API call Simulation (4 seconds as per user's recent edit)
    await new Promise(res => setTimeout(res, 4000));

    localStorage.setItem('username', username as string);
    return { success: true, message: `Name updated to ${username}!` };
};
