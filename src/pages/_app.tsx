import { Suspense } from 'react';
import NextApp, { type AppContext, type AppProps } from "next/app";
import { SessionProvider, getSession } from 'next-auth/react';

import { theme, ChakraProvider } from '@/shared/ui';

import type { Session } from "next-auth";

const RootLayout = (props: AppProps<{ session: Session | null }>) => {
  const {
    Component,
    pageProps,
  } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Suspense fallback="Загрузка...">
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
      </SessionProvider>
    </Suspense>
  );
};

RootLayout.getInitialProps = async (ctx: AppContext) => {
  const props = await NextApp.getInitialProps(ctx);

//   const { req, res } = ctx.ctx;
//   const { Component } = ctx;
//   const { auth } = Component;

//   if (req && res) {
//     const session = await getSession({ req });

//     if (auth?.redirectTo && !session?.user) {
//       res.writeHead(307, { Location: auth.redirectTo });
//       res.end();
//     }

//     if (auth?.redirectAuthenticatedTo && session?.user) {
//       res.writeHead(307, { Location: auth.redirectAuthenticatedTo });
//       res.end();
//     }

//     return {
//       ...props,
//       pageProps: {
//         ...props.pageProps,
//         session,
//       },
//     };
//   }

  return props;
};

export default RootLayout;
