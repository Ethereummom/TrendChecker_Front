import React, { useEffect, useRef, memo } from 'react';
import {Link, useLocation} from "react-router-dom";


function TradingViewWidgetTicker(){
    const container = useRef();

    useEffect(
        () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
            "symbols": [
              {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500"
              },
              {
                "proName": "FOREXCOM:NSXUSD",
                "title": "미국 100"
              },
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "비트코인"
              },
              {
                "proName": "BITSTAMP:ETHUSD",
                "title": "이더리움"
              },
              {
                "description": "삼성전자",
                "proName": "KRX:005930"
              },
              {
                "description": "애플",
                "proName": "NASDAQ:AAPL"
              },
              {
                "description": "코스피",
                "proName": "KRX:KOSPI"
              },
              {
                "description": "코스닥",
                "proName": "KRX:KOSDAQ"
              },
              {
                "description": "환율",
                "proName": "FX_IDC:USDKRW"
              }
            ],
            "colorTheme": "light",
            "isTransparent": false,
            "showSymbolLogo": true,
            "locale": "kr"
          }`;
        container.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      );

}
export default memo (TradingViewWidgetTicker);
