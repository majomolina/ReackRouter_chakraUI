import { useNavigate } from "react-router-dom"
import { Button,Text } from '@chakra-ui/react'

export default function UserCard({item}) {
  const navigate = useNavigate()
  const handleClick = (id) => {
    
    navigate('/userProfile', {state: {id: id}})
    
  }


  return (
        <div className="userProfile">
        
        <div>
          <Text fontWeight="extrabold" fontSize="2xl">
          {item.name}
      </Text>
        </div>
        <Button onClick={()=>handleClick(item.id)} colorScheme='teal' variant='outline'>
        Show Information
  </Button>
        
      </div>
    )
}