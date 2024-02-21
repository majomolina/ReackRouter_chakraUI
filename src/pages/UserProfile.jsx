import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
import {  get_user_profile_single } from '../services/api_services';
import '../App.css'
import { Card, CardHeader,Heading,CardBody,Text,CardFooter, Image,Stack } from '@chakra-ui/react'


export default function UserProfile() {
  const [user, setUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    let id = location?.state?.id;
    if (id) {
        get_user_profile_single(id).then((data)=>{
           
         setUsers(data)
        });
    }

 }, []);



  return (
       <>

   <>
  
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    className="imageCard"
    objectFit='cover'
    maxW={{ base: '100%', sm: '205px' }}
    src='https://static.thenounproject.com/png/363640-200.png'
  
  />

  <Stack>
    <CardBody className="cardContent">
      <Heading size='lg' textShadow='1px 1px #ff0000' m='6'>User Information</Heading>
<div>
    <Text>Name: {user.name} </Text>
    <Text>Email: {user.email}  </Text>
    <Text>Phone: {user.phone}  </Text>
    <Text>Addess: {user?.address?.zipcode}, {user?.address?.street}, {user?.address?.suite}, {user?.address?.city} </Text>
    <Text>WebSite: {user.website} </Text>
    </div>
    </CardBody>

    <CardFooter>
     
    </CardFooter>
  </Stack>
</Card>

   </>

       </>
    )
}

