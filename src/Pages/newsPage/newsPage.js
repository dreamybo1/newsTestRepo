import { useDispatch, useSelector } from "react-redux";
import ButtonAppBar from "../../Components/header";
import { apiKey, pageNames } from "../../Constants/constants";
import { newsFetch } from "../../Redux-Toolkit/fetches";
import NewsCard from "../../Components/newsCard";




export function NewsPage(){
    const dispatch = useDispatch()
    // dispatch(newsFetch(apiKey)) миддлвар

    const newsArray = useSelector(store => store.news.newsArray)
    return(
        <>
            <ButtonAppBar pageName={pageNames.NEWS}/>
            {/* <PageContent>{pageNames.NEWS}</PageContent> */}
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"5px", justifyContent:"center", alignItems:"center"}}>

                {newsArray.map(el=><NewsCard key={el.title} title={el.title} description={el.description}></NewsCard>)}

            </div>
         
            
        </>
           
    )
}