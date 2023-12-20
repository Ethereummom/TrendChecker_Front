import React, {useEffect, useRef, memo} from 'react';
import {Link, useLocation} from "react-router-dom";

function TradingViewWidgetWhole(){
    const container = useRef();

    useEffect(() => {
        // TradingView 위젯 스크립트를 동적으로 로드하고 위젯을 생성
        
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.async = true;
    
        script.innerHTML = JSON.stringify({
        container_id: 'wdgtSizing',
          "colorTheme": "light",
          "dateRange": "1M",
          "showChart": true,
          "locale": "kr",
          "width": "100%",
          "height": "100%",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "showFloatingTooltip": false,
          "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
          "plotLineColorFalling": "rgba(41, 98, 255, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "rgba(106, 109, 120, 1)",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
          "tabs": [
            {
              "title": "Indices",
              "symbols": [
                {
                  "s": "KRX:KOSPI",
                  "d": "코스피종합"
                },
                {
                  "s": "KRX:KOSDAQ",
                  "d": "코스닥종합"
                },
                {
                  "s": "FX_IDC:KRWUSD",
                  "d": "원/달러 환율"
                },
                {
                  "s": "TVC:DJI",
                  "d": "다우존스종합"
                },
                {
                  "s": "OANDA:NAS100USD",
                  "d": "나스닥100 Futures"
                },
                {
                  "s": "COMEX:GC1!",
                  "d": "금(per 온스)"
                },
                {
                  "s": "KRX:005930",
                  "d": "삼성전자"
                }
              ],
              "originalTitle": "Indices"
            },
            {
              "title": "Futures",
              "symbols": [
                {
                  "s": "CME_MINI:ES1!",
                  "d": "S&P 500"
                },
                {
                  "s": "CME:6E1!",
                  "d": "Euro"
                },
                {
                  "s": "COMEX:GC1!",
                  "d": "Gold"
                },
                {
                  "s": "NYMEX:CL1!",
                  "d": "WTI Crude Oil"
                },
                {
                  "s": "NYMEX:NG1!",
                  "d": "Gas"
                },
                {
                  "s": "CBOT:ZC1!",
                  "d": "Corn"
                }
              ],
              "originalTitle": "Futures"
            },
            {
              "title": "Bonds",
              "symbols": [
                {
                  "s": "CBOT:ZB1!",
                  "d": "T-Bond"
                },
                {
                  "s": "CBOT:UB1!",
                  "d": "Ultra T-Bond"
                },
                {
                  "s": "EUREX:FGBL1!",
                  "d": "Euro Bund"
                },
                {
                  "s": "EUREX:FBTP1!",
                  "d": "Euro BTP"
                },
                {
                  "s": "EUREX:FGBM1!",
                  "d": "Euro BOBL"
                }
              ],
              "originalTitle": "Bonds"
            },
            {
              "title": "Forex",
              "symbols": [
                {
                  "s": "FX:EURUSD",
                  "d": "EUR to USD"
                },
                {
                  "s": "FX:GBPUSD",
                  "d": "GBP to USD"
                },
                {
                  "s": "FX:USDJPY",
                  "d": "USD to JPY"
                },{
                    "s": "FX:USDCHF",
                    "d": "USD to CHF"
                  },
                  {
                    "s": "FX:AUDUSD",
                    "d": "AUD to USD"
                  },
                  {
                    "s": "FX:USDCAD",
                    "d": "USD to CAD"
                  }
              ],
              "originalTitle": "Forex"
            }
          ]
        });
        const container = document.getElementById('wdgtTvWhole');
        if (container) {
        container.appendChild(script);
        }
      
        // 컴포넌트 언마운트 시에 스크립트를 제거
      }, []);
      
      return (
        <div id="wdgtTvWhole">
      {/* 컨테이너 엘리먼트 */}
   
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a href="https://kr.tradingview.com/" rel="noopener nofollow" target="_blank">
              <span className="blue-text">트레이딩뷰에서 모든 시장 추적</span>
            </a>
          </div>
        </div>
        </div>
      );
      };
      
      export default TradingViewWidgetWhole;