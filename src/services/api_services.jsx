import axios from "axios";

export const get_data_api = () => {
   return axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })
}

export const get_user_profile = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
     .then((response) =>{
           if(response.data){
            //filter the json data
            let user_profile = response.data.filter((item)=> item.id === id);
            return user_profile
         }
     })
 }


 export const get_user_profile_single = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
     .then((response) =>{
           if(response.data){
            //filter the json data
            let user_profile = response.data.filter((item)=> item.id === id);
            return user_profile[0];
         }
     })
 }