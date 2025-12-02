import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
// [추가 1] 리액트의 'useEffect' 기능을 가져옵니다.
import { useEffect } from "react"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  // [추가 2] 여기가 '감시자'를 심는 곳입니다.
  useEffect(() => {
    const handleEvent = (e: Event) => {
      e.preventDefault() // 기능 작동 중지
      e.stopPropagation() // 노션한테 신호 전달 막기
      return false
    }

    // 캡처링(true) 모드로 3가지 동작을 감시합니다.
    window.addEventListener("contextmenu", handleEvent, true) // 우클릭
    window.addEventListener("dragstart", handleEvent, true)   // 드래그
    window.addEventListener("selectstart", handleEvent, true) // 선택

    // 페이지를 나갈 때 청소해줍니다.
    return () => {
      window.removeEventListener("contextmenu", handleEvent, true)
      window.removeEventListener("dragstart", handleEvent, true)
      window.removeEventListener("selectstart", handleEvent, true)
    }
  }, [])


  
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
