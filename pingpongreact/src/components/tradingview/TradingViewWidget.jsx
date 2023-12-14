import React, { useEffect, useRef, memo } from 'react';
import {Link, useLocation} from "react-router-dom";

function TradingViewWidget() {

  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "exchanges": [],
          "dataSource": "AllKR",
          "grouping": "sector",
          "blockSize": "market_cap_basic",
          "blockColor": "change",
          "locale": "kr",
          "symbolUrl": "",
          "colorTheme": "light",
          "hasTopBar": true,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "width": "98%",
          "height": "98%"

        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (

    <div className="tradingview-widget-container" ref={container}>
    <div>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://kr.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">트레이딩뷰에서 모든 시장 추적</span></a></div>
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
