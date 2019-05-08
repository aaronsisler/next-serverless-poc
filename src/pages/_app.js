import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Next-POC</title>
        </Head>
        <Container>
          <Navbar />
          <Component {...pageProps} />
        </Container>
      </React.Fragment>
    );
  }
}

export default MyApp;
