import Header from "../layout/Header";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp;
