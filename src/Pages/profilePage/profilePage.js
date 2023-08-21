import { Link } from "react-router-dom";
import { PageContent } from "../../Components/content";
import ButtonAppBar from "../../Components/header";
import { pageNames } from "../../Constants/constants";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";




export function ProfilePage(){
    const logged = useSelector(store=>store.login.logged)
    console.log(localStorage.getItem("logged"));
    if(logged === false && localStorage.getItem("logged") === "false" ){
        return(
            <>
                <PageContent>
                    Пожалуйста, авторизируйтесь
                    <Link to={"/newsTest/login"}>
                        <Button>
                            Авторизация
                        </Button>
                    </Link>
                </PageContent>
            </>
    )
        
    }else if(logged === true || localStorage.getItem("logged") === "true"){
        return(
            <>
                <ButtonAppBar pageName={pageNames.PROFILE}/>
                <PageContent variant="h4">тут будет информация о user</PageContent>
                <PageContent variant="h3">тут будет информация о user</PageContent>
                <PageContent variant="h2">тут будет информация о user</PageContent>
                <PageContent variant="h1">тут будет информация о user</PageContent>
                
            </>
               
        )
    }
    
}