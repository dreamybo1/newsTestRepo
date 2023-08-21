import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loginSetter, passwordSetter } from "../../Redux-Toolkit/slice";
import { validLogin, validPassword } from "../../Constants/constants";
import { ValidData } from "./validData";
import { WrongData } from "./wrongData";

export function TextFieldLogin (){
    const login = useSelector(store => store.login.login)
    const password = useSelector(store => store.login.password)
    const dispatch = useDispatch()
    return(
        <>

            <div style={{display:"flex", flexDirection:"column", alignItems:"center",gap:"15px",top:"100px",position:"relative"}}>
                <TextField

                    id="filled-required"
                    label="Логин"
                    variant="filled"
                    value={login}
                    onChange={(e)=>{dispatch(loginSetter(e.target.value))}}

                />
                <TextField
                    id="filled-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    value={password}
                    onChange={(e)=>{dispatch(passwordSetter(e.target.value))}}
                />

                {login === validLogin && password === validPassword
                
                ?

                    <ValidData key={"valid"}/>

                :

                    <WrongData key={"wrong"}/>

                }
                
                            
            </div>
            

                


        </>
    )
}