"use client";

import { useUserAgent } from "@/src/user-agent-provider";

function AppRouterPageExample() {
  const { userAgent } = useUserAgent();

  return (
    <main>
      <h1>App Router</h1>
      <div>{JSON.stringify(userAgent)}</div>
    </main>
  );
}

export default AppRouterPageExample;
