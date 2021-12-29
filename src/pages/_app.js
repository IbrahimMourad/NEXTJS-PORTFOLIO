import Header from '../components/Header/Header';
import { Container } from '../components/Layout/LayoutStyles';
import Theme from '../styles/theme';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Container>
          <Header />
        </Container>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
