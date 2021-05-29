import React, { useEffect, useRef } from 'react'
import { mount as mountMarketingApp } from 'marketing/MarketingApp'
export default () => {
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      mountMarketingApp(ref.current)
    }
  })
  return <div ref={ref}></div>
}
