import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../Pages/mainPage/mainPage";
import { NewsPage } from "../Pages/newsPage/newsPage";
import { LoginPage } from "../Pages/loginPage/loginPage";
import { ProfilePage } from "../Pages/profilePage/profilePage";

export const router = createBrowserRouter([
    {
        path:"newsTest",
        element:<MainPage/>
    },
    {
        path:"newsTest/news",
        element:<NewsPage/>
    },
    {
        path:"newsTest/login",
        element:<LoginPage/>
    },
    {
        path:"newsTest/profile",
        element:<ProfilePage/>
    }
])