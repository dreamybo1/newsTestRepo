import { Button } from "@mui/material"




export function WrongData(){
    return(
        <>
            <Button onClick={()=>{alert("Имя пользователя или пароль введены не верно")}}  variant="contained" color="secondary">ВОЙТИ</Button>
        </>
    )
}