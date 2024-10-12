import React from "react";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (<>
          <header>Global Header</header>
          {children}
          <footer>Global Footer</footer>
          </>   
    );
  }
  