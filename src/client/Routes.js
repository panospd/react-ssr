import App from "./App";
import AdminsListPage from "./pages/AdminsListPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UsersListPage from "./pages/UsersListPage";

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true
            },
            {
                ...AdminsListPage,
                path: "/admins"
            },
            {
                ...UsersListPage,
                path: "/users"
            },
            {
                ...NotFoundPage
            }
        ]
    }
];
