
import {Skeleton} from "@mui/material"



export function Skelet (){
    return(
        <>
            
                <Skeleton variant="rectangular" height={"100px"} width={"25%"}/>
                <Skeleton width={"25%"} height={"50px"} animation="wave" />
                <Skeleton width={"25%"} animation={false} />
            
            
        
        
        </>
    )
}