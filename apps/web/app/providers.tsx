"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider, theme } from "antd";

import type { ReactNode } from "react";
import { AuthProvider } from "../lib/context/AuthContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
     <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#1677ff",
            borderRadius: 10,
          },
        }}  
      >
        <App>{children}</App>
      </ConfigProvider>
     </AntdRegistry>
    </AuthProvider>
  );
}
