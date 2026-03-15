export const authAction = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Simple validation
    if (!email || !email.includes("@")) {
        return { error: "Email ပုံစံ မှားယွင်းနေပါတယ်ခင်ဗျာ။" };
    }

    if (password.length < 6) {
        return { error: "Password က အနည်းဆုံး ၆ လုံး ရှိရပါမယ်။" };
    }

    // Authentication simulation
    const username = email.split('@')[0];

    // Return username so the Login component can call the Context's login
    return { username };
};
