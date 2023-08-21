"use client";
import AppContext from "../context/AppContext";

import Form from "../components/Form";

export default function Home() {
  return (
    <AppContext.Provider>
      <div>
        <Form />
      </div>
    </AppContext.Provider>
  );
}
