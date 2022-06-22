import { Layout } from '../components'
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <ToastContainer />
    <NextNProgress color='rgb(52 211 153 / 1)'/>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
