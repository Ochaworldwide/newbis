import './index.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Verification from './pages/Verification';
import Books from './pages/Books';
import SingleBook from './pages/SingleBook';
import Category from './pages/Category';
import ScienceFiction from './pages/ScienceFiction';
import AuthorProfile from './pages/AuthorProfile';
import Email from './pages/Email';
import Email2 from './pages/Email2';
import Cart from './pages/Cart';
import EditorPage from './pages/EditorPage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Landing/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='verification' element={<Verification/>}/>
        <Route path='books' element={<Books/>}/>
        <Route path='books/:bookid' element={<SingleBook/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='sciencefiction' element={<ScienceFiction/>}/>
        <Route path="authorprofile" element={ <AuthorProfile />}/>
        <Route path='email' element={<Email/> }/>
        <Route path='email2' element={<Email2/> }/>
        <Route path='cart' element={<Cart/>}/>
        <Route Path='editor' element={<EditorPage/>}/>


      </Route>
    </Routes>
  )
}

export default App;
