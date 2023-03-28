import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="modal-root" /> {/* Next의 모달 루트가 될 포탈! */}
        <NextScript />
      </body>
    </Html>
  );
}
