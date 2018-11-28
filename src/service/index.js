import API from '../api'
import http from '../utils/http'


export function getHomeNews(){
    return new Promise((resolve,reject)=>{

        http({
            url:API.HOME_NEWS_API,
            method:'GET',
            data:{
                since_id: -1,
                max_id: -1,
                count: 10,
                category: 105
            }
        })
        .then(({data,status})=>{
            
            console.log(data);
            resolve();
        })
        .catch(()=>{

        })
    })
}