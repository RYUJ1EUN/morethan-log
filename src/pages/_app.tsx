import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
// [추가 1] 리액트의 useEffect 기능을 가져옵니다.
import { useEffect } from "react"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  // [추가 2] 우클릭 방지 코드를 여기에 넣습니다.
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault()
    }
    document.addEventListener("contextmenu", handleContextmenu)
    
    return () => {
      document.removeEventListener("contextmenu", handleContextmenu)
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
