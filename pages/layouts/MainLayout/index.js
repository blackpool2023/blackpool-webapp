import NavBar from "pages/layouts/MainLayout/NavBar";

const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
