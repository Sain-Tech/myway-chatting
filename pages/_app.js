/* eslint-disable react/prop-types */
import wrapper from '../stores/configureStore';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
