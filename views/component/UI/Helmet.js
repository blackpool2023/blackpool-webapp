import Head from "next/head";

const Helmet = ({ title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                {/* <meta name="keywords" content="HTML, CSS, JavaScript, next.js" /> */}
                {/* <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"></meta> */}
            </Head>
        </>
    );
};

export default Helmet;