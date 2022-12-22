import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home"
import {Counter} from "./pages/Counter/Counter";
import {Modal} from "./pages/Modal/Modal";

import {Layout} from "./components/Layout/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='counter' element={<Counter/>}/>
                    <Route path='modal' element={<Modal/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default App;
