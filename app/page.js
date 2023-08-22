"use client";

import React from "react";
import AppContextProvider from "../context/AppContextProvider";
import Form from "../components/Form";

export default function Home({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Form {...pageProps} />
    </AppContextProvider>
  );
}
