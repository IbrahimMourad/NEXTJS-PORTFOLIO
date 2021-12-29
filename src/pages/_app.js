import Header from '../components/Header/Header';
import Theme from '../styles/theme';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Header />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
