let widget;

window.addEventListener("load", () => {

    createChart("OANDA:XAUUSD");

    document.querySelectorAll("#marketTable tr").forEach(row => {

        row.addEventListener("click", () => {

            const symbol = row.dataset.symbol;

            createChart(symbol);

        });

    });

});

function createChart(symbol){

    const chart=document.getElementById("tradingview_chart");

    chart.innerHTML="";

    widget=new TradingView.widget({

        container_id:"tradingview_chart",

        autosize:true,

        symbol:symbol,

        interval:"15",

        timezone:"Africa/Nairobi",

        theme:"dark",

        style:"1",

        locale:"en",

        toolbar_bg:"#111827",

        enable_publishing:false,

        withdateranges:true,

        hide_side_toolbar:false,

        allow_symbol_change:false

    });

}
