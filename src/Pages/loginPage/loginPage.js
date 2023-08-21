import { Paper } from "@mui/material";
import styles from "./index.module.css"
import { PageContent } from "../../Components/content";
import { pageNames } from "../../Constants/constants";
import { TextFieldLogin } from "../../Components/textFieldsLogin/textFieldsLogin";



export function LoginPage (){
    return(
        <>          
            <Paper elevation={3}>
                <div className={styles.loginForm}>
                    <PageContent variant={"h4"}>{pageNames.LOGIN}</PageContent>
                    <TextFieldLogin/>
                </div> 
            </Paper> 
              
        </>
    )
}