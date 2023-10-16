import { useUserAgent } from "@/src/user-agent-provider";

function PageRouterExample() {
  const { userAgent } = useUserAgent();

  return (
    <main>
      <h1>Page Router</h1>
      <div>{JSON.stringify(userAgent)}</div>
    </main>
  );
}

export default PageRouterExample;
