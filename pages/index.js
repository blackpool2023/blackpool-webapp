import Helmet from "views/component/UI/Helmet"
import HomePage from "pages/view/pages/HomePage"

const index = () => {
    return (
        <>
            <Helmet title='Poolbau in Hannover - Schwimmbadbau von BlackPool' description='Poolbaue aus Hannover - BlackPool baut deinen Pool in ganz Niedersachsen' />
            <HomePage />
        </>
    );
};

export default index; 
