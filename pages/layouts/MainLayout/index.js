import Header from "pages/layouts/MainLayout/Header";
import Footer from "pages/layouts/MainLayout/Footer";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {/* <main>{children}</main> */}
            <Footer />
        </div>
    );
};

export default MainLayout;
