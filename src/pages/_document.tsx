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
          {/* [강력 차단 1] CSS로 드래그/선택 원천 봉쇄 */}
          <style>{`
            html, body, #__next {
              -webkit-user-select: none !important;
              -moz-user-select: none !important;
              -ms-user-select: none !important;
              user-select: none !important;
              -webkit-user-drag: none !important;
            }
            /* 입력창은 풀어줌 */
            input, textarea {
              -webkit-user-select: text !important;
              -moz-user-select: text !important;
              -ms-user-select: text !important;
              user-select: text !important;
            }
          `}</style>
        </Head>
        <body>
          {/* [강력 차단 2] 자바스크립트로 우클릭/드래그 이벤트 삭제 */}
          onContextMenu={(e) => { e.preventDefault(); return false; }}
          onDragStart={(e) => { e.preventDefault(); return false; }}
          onSelectStart={(e) => { e.preventDefault(); return false; }}
          style={{ userSelect: "none", WebkitUserSelect: "none" }} // 인라인 스타일로 한 번 더 잠금
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
