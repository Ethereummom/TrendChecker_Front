import React, { useEffect,useRef,memo } from 'react';

const TradingViewNewsWidget = () => {
const container = useRef();
  useEffect(() => {
    // TradingView 위젯 스크립트를 동적으로 로드하고 위젯을 생성
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML =
        ({
            "feedMode": "all_symbols",
            "isTransparent": false,
            "displayMode": "adaptive",
            "width": "100%",
            "height": "100%",
            "colorTheme": "light",
            "locale": "kr"
      });
      
    container.current.appendChild(script);

    // 컴포넌트 언마운트 시에 스크립트를 제거
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://kr.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">트레이딩뷰에서 모든 시장 추적</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewNewsWidget;