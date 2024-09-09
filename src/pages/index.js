import HomePage from "./HomePage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SingUpPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/project/2/log-in",
        element: <SignInPage />,
    },
    {
        path: "/project/2/joinus",
        element: <SignUpPage />,
    },
])

export default router;