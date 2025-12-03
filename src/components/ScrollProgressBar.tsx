// 파일 경로: src/components/ScrollProgressBar.tsx

import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

const ScrollProgressBar = () => {
  const [width, setWidth] = useState(0)

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const scrollPosition = window.scrollY
    const scrollPercent = (scrollPosition / totalHeight) * 100
    setWidth(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <ProgressBar style={{ width: `${width}%` }} />
}

export default ScrollProgressBar

// 스타일 설정
const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 6px; // 바 두께 (원하는 대로 조절 가능)
  background: #c390d4;
  z-index: 9999; // 다른 요소보다 위에 뜨게 설정
  transition: width 0.1s ease-out; // 부드럽게 움직이도록 설정
  border-radius: 0 4px 4px 0;
`
