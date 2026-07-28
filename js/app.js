window.addEventListener("load", () => {

    if (typeof TradingView !== "undefined") {

        new TradingView.widget({

            container_id: "tradingview_chart",

            autosize: true,

            symbol: "OANDA:XAUUSD",

            interval: "15",

            timezone: "Africa/Nairobi",

            theme: "dark",

            style: "1",

            locale: "en",

            toolbar_bg: "#111827",

            enable_publishing: false,

            hide_top_toolbar: false,

            hide_legend: false,

            save_image: true,

            withdateranges: true

        });

    }

});
