import React, { useState } from "react";
import Router from "./Router";
import { MantineProvider } from "@mantine/core";
import { theme } from "./Utils";
import { AuthProvider } from "./Utils/AuthContext/AuthContext";

const App: React.FC = () => {
  return (
    <MantineProvider withNormalizeCSS theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
