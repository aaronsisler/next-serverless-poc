import React from "react";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import "../styles/app.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Next-POC</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
