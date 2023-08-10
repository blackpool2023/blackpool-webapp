import Helmet from "views/component/UI/Helmet"
import HomePage from "pages/view/pages/HomePage"

const index = () => {
    return (
        <>
            <Helmet title='Home - Blackpool' description='BlackPool – Poolbauer aus Hannover baut deinen Pool in ganz Niedersachsen ✓ Planung, Bau & Wartung ✓ Hochwertige Betonpools' />
            <HomePage />
        </>
    );
};

export default index; 