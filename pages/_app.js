import "pages/styles/global.scss"
import MainLayout from "pages/layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;