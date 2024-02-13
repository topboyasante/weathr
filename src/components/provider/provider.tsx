import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const client = new QueryClient();

export function Provider({ children }: Props) {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
