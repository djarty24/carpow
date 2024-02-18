import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'
import Intro from './components/intro/Intro'
import Login from "./components/login/Login";
import Groups from './components/groups/Groups'
import Schedule from './components/schedule/Schedule'
import Book from './components/book/Book'

function App() {
  return (
    <>
    <BrowserRouter>
		<Routes>
            <Route path='/' element={<Intro />}></Route>
            <Route path='/login' element={<Login />}></Route>
			<Route path='/groups' element={<Groups />}></Route>
			<Route path='/schedule' element={<Schedule />}></Route>
			<Route path='/book' element={<Book />}></Route>
		</Routes>
	</BrowserRouter>
    </>
  )
}

export default App