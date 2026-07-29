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
const buyBtn = document.getElementById("buyBtn");
const sellBtn = document.getElementById("sellBtn");

if (buyBtn) {

buyBtn.addEventListener("click", () => {

createTrade("BUY");

});

}

if (sellBtn) {

sellBtn.addEventListener("click", () => {

createTrade("SELL");

});

}

function createTrade(type){

const symbol=document.getElementById("symbol").value;

const volume=document.getElementById("volume").value;

const sl=document.getElementById("sl").value;

const tp=document.getElementById("tp").value;

const risk=document.getElementById("risk").value;

document.getElementById("positionsList").innerHTML=`

<div style="padding:15px;background:#0f172a;border-radius:10px;margin-top:10px;">

<strong>${type}</strong><br><br>

${symbol}<br>

Volume: ${volume}<br>

SL: ${sl || "-"}<br>

TP: ${tp || "-"}<br>

Risk: ${risk}%<br>

Status: Pending API Connection

</div>

`;

}
