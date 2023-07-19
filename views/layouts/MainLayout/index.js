import Header from "views/layouts/MainLayout/Header";
import Footer from "views/layouts/MainLayout/Footer";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
