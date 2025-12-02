import Document, { Html, Head, Main, NextScript } from "next/document"
import { CONFIG } from "site.config"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link rel="icon" href="/whale.ico" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/whale.png"
          ></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}
          {/* naver search advisor */}
          {CONFIG.naverSearchAdvisor.enable === true && (
            <>
              <meta
                name="naver-site-verification"
                content={CONFIG.naverSearchAdvisor.config.siteVerification}
              />
            </>
          )}
        </Head>
        <body>
          // 1. 우클릭 메뉴 금지
          onContextMenu={(e) => e.preventDefault()}
          // 2. 텍스트 드래그(선택) 금지
          onSelectStart={(e) => e.preventDefault()}
          // 3. 이미지/글자 끌어가기 금지
          onDragStart={(e) => e.preventDefault()}
        > //여기까지 추가
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
