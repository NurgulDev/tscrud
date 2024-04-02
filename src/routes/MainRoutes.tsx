import { Route, Routes } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import Home from "../components/Home/Home";
import Edit from "../components/edit/Edit";

const MainRoutes = () => {
    const PUBLICK = [
        {link:'/admin', element:<Admin/>, id:1},
        {link:'/', element:<Home/>, id:2},
        {link:'/edit/:id', element:<Edit/>, id:3},


    ]
    return (
        <Routes>
            {
                PUBLICK.map((el)=> (
                    <Route path={el.link} element={el.element} key={el.id}/>
                ))
            }
        </Routes>
    );
};

export default MainRoutes;