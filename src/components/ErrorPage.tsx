import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is a response error (e.g. 404, 500, etc.)
        errorMessage = error.statusText || error.data?.message || "Unknown error";

        if (error.status === 404) {
            errorMessage = "Oops! စာမျက်နှာ ရှာမတွေ့ပါဘူး (404 Page Not Found)";
        }
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "မမျှော်လင့်ထားတဲ့ အမှားတစ်ခု ဖြစ်သွားပါတယ်။";
    }

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', color: '#ff4d4f' }}>Oops!</h1>
            <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>{errorMessage}</p>
            <Link to="/" style={{
                padding: '10px 20px',
                backgroundColor: '#646cff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
            }}>Back to Home</Link>
        </div>
    );
}
