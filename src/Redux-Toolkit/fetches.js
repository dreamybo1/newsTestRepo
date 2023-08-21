// import { newsArraySetter } from "./slice"

// export function newsFetch(token){

//     return function(dispatch){
//         try{
//             fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${token}`)
//             .then(response => response.json())
//             .then(json => dispatch(newsArraySetter(json.sources)))
//         }catch(e){
//             console.log(e.message);
//         }
        
//     }
// }

//Тут должен был отрабатывать фетч, но тарифы у апи дорогие, поэтому данные замокал.