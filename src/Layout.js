import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

const Layout = ({ search, setSearch, width }) => {
    return (
        <div className="App">
            <DataProvider>
                <Header title="The Wanderer Blog" width={width} />
                <Nav search={search} setSearch={setSearch} />
                <Outlet />
                <Footer />
            </DataProvider>
        </div>
    );
};
export default Layout;
