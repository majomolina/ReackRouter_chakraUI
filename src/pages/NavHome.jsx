
import Home from './Home';
import Users from './Users';
import { Tabs,TabList,Tab,TabPanels,TabPanel,Text } from '@chakra-ui/react'


function NavHome() {

  return (
    <>
    <div >
    <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab >
    <Text
  bgGradient='linear(to-l, #143259, #143d59)'
  bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'
>
  Home
</Text>
    </Tab>
    <Tab>
    <Text
  bgGradient='linear(to-l, #143259, #143d59)'
  bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'
>
  Users
</Text>
    </Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Home/>
    </TabPanel>
    <TabPanel>
      <Users/>
    </TabPanel>
  </TabPanels>
</Tabs>
  
   </div>
    </>
  )
}

export default NavHome
