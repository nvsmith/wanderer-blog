import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

const Layout = () => {
    return (
        <div className="App">
            <Header title="The Wanderer Blog" />
            <DataProvider>
                <Nav />
                <Outlet />
            </DataProvider>
            <Footer />
        </div>
    );
};
export default Layout;
