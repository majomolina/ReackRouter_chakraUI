import './App.css'
import {Routes, Route } from 'react-router-dom';
import GoBack from './components/GoBack';
import UserProfile from './pages/UserProfile';
import NavHome from './pages/NavHome';

function App() {

  return (
    <>
    <div >
   
   </div>
<Routes>
<Route path='/*' element={<NavHome/>}/>
<Route>
  <Route path='/userProfile' element={<UserProfile/>} ></Route>
</Route>

</Routes>

<GoBack/>

    </>
  )
}

export default App
