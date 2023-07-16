import Helmet from "pages/component/UI/Helmet"
import HomePage from "pages/view/pages/HomePage"

const index = () => {
    return (
        <>
            <Helmet title='Home - Blackpool' description='blackpool' />
            <HomePage />
        </>
    );
};

export default index;