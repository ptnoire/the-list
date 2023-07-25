import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Listwiser</title>
        <meta name="description" content="Bill Tracking" />
        <meta
          name="keywords"
          content="Payd-2, Payd, Bill Tracking, Bill, Tracker, Simple, Simple Bill Tracking, Bill Tracker, Bills, Finance"
        ></meta>
        <link
          rel="icon"
          media="(prefers-color-scheme: light)"
          href="/ptblack.ico"
        />
        <link
          rel="icon"
          media="(prefers-color-scheme: dark)"
          href="/ptwhite.ico"
        />
      </Head>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            border: "1px solid #00C853",
            background: "#14150b",
            color: "#f5f5dc",
          },
          error: {
            style: { border: "1px solid #e91313" },
          },
        }}
      />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
