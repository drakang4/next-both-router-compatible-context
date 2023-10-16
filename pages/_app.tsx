import { UserAgent, UserAgentProvider } from "@/src/user-agent-provider";
import { getUserAgent } from "@/src/get-user-agent/pages";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";

type CustomAppProps = { userAgent: UserAgent };

function CustomApp({
  Component,
  pageProps,
  userAgent,
}: AppProps & CustomAppProps) {
  return (
    <UserAgentProvider userAgent={userAgent}>
      <Component {...pageProps} />
    </UserAgentProvider>
  );
}

CustomApp.getInitialProps = async (
  context: AppContext
): Promise<CustomAppProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return {
    ...ctx,
    userAgent: getUserAgent(context.ctx),
  };
};

export default CustomApp;
