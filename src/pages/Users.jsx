import { Text } from '@chakra-ui/react'
import UserCard from '../components/UserCard';
import { useEffect,useState } from 'react';
import { get_data_api } from '../services/api_services';

const Users = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
       get_data_api().then((data)=>{
        setUsers(data)
       });
    }, []);
    return ( 
        <>
         <Text
        bgGradient='linear(to-l, #c98d95, #2b0a0e)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'>
        Users Page
      </Text>
      {users.map((item)=>(
        <UserCard item={item} key={item.id}/>
   
        ))}
        </>
       

    
     );
}
 
export default Users;