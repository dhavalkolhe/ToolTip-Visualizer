"use client";

import React from "react";
import AppContextProvider from "../context/AppContextProvider";
import Form from "../components/Form";

export default function Home({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div className="h-[90vh] my-auto flex justify-around items-center ">
        <div className="flex justify-center items-center p-4 bg-black bg-opacity-[15%] rounded-xl w-[45%]">
          <Form {...pageProps} />
        </div>
        <div className="border-2">Mobile Screen</div>
      </div>
    </AppContextProvider>
  );
}
