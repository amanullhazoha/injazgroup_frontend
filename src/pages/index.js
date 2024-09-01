import SignInPage from "./SignInPage";
import SignUpPage from "./SingUpPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/sign-in",
        element: <SignInPage />,
    },
    {
        path: "/sign-up",
        element: <SignUpPage />,
    },
])

export default router;