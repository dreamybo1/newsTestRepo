import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { loggedSetter } from "../../Redux-Toolkit/slice"
import { Link } from "react-router-dom"




export function ValidData(){
    const dispatch = useDispatch()
    return(
        <>
            <Link to={"/newsTest/profile"}>
                <Button onClick={()=>{dispatch(loggedSetter(true))}} variant="contained" color="secondary">ВОЙТИ</Button>
            </Link>
        </>
    )
}