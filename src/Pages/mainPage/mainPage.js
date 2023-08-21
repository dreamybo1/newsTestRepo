import ButtonAppBar from "../../Components/header"
import { pageNames } from "../../Constants/constants"
import { PageContent } from "../../Components/content"




export function MainPage(){
    return(
        <>
            <ButtonAppBar pageName={pageNames.MAIN}/>
            <PageContent>{pageNames.MAIN}</PageContent>
         
            
        </>
           
    )
}