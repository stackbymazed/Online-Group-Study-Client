import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Assignments from "../pages/Assignments/Assignments ";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../Contexts/PrivateRoute";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments/MyAttemptedAssignments";
import Error from "../pages/Error/Error";
import UpdateAssignment from "../pages/Assignments/UpdateAssignment";
import ViewAssignment from "../pages/Assignments/ViewAssignment";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<Error></Error>,
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/assignments",
                Component: Assignments
            },
            {
                path: "/signin",
                Component: SignIn
            },
            {
                path: "/signup",
                Component: SignUp
            },
            {
                path: "/main",
                element: <h1>asdf</h1>
            },
            {
                path: "/pendingAssignments",
                element: <PrivateRoute>
                    <PendingAssignments></PendingAssignments>
                </PrivateRoute>
            },
            {
                path: "/createAssignment",
                element: <PrivateRoute>
                    <CreateAssignments></CreateAssignments>
                </PrivateRoute>
            },
            {
                path: "/myAssignments",
                element: <PrivateRoute>
                    <MyAttemptedAssignments></MyAttemptedAssignments>
                </PrivateRoute>
            },
            {
                path: "/assignments/:id",
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments/${params.id}`),
                element: <PrivateRoute>
                    <UpdateAssignment></UpdateAssignment>
                </PrivateRoute>
            },
            {
                path: "/assignments/view/:id",
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments/${params.id}`),
                element: <PrivateRoute>
                    <ViewAssignment></ViewAssignment>
                </PrivateRoute>
            },
        ]
    },
]);
