import "../styles/globals.css";
import {AuthProvider} from "../context/AuthProvider";
import Layout from "../components/layout/layout";

function MyApp({Component, pageProps}) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
}

export default MyApp;
