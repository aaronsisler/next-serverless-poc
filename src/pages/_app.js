import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import "../styles/app.scss";

class MyApp extends App {
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
