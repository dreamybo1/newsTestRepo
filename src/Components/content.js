import { Typography } from "@mui/material";




export function PageContent ({children,variant = "h1"}){
    return(
        <>
            <Typography variant={variant}>
                {children}
            </Typography>
            
        </>
    )
    
}