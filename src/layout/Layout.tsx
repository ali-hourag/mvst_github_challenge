import { Outlet } from "react-router-dom"
import Header from "../components/header/Header";


const Layout = () => {
    return (
        <>
            {/* // Add a static header */}
            <Header />
            {/* // Show child routes when rendered */}
            <Outlet />
        </>
    )
}

export default Layout;