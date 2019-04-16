var Palletes = [['#3B74B3', '#1E1D1E', '#EAEAEA'], ['#305A65', '#1DBE60', '#F7F9F8'],
['#F3CB2B', '#101010', '#E9E9E8'], ['#F89895', '#EAEAEA', '#224761'],
['#F0D9D7', '#2E2B26', '#769079'], ['#DA643C', '#1E1D1E', '#EAEAEA'],
['#BC4B3C', '#151515', '#F0EEEF'], ['#180B10', '#EFD6C5', '#F5537F'],
['#181818', '#CECECE', '#6A6A6A'], ['#2A2D2D', '#E9C8C8', '#D45F62']];

var n = Math.floor(Math.random() * Palletes.length);
changeColor(n);

function changeColor(n) {
    if (n > Palletes.length - 1) {
        n = 0;
    }
    document.documentElement.style.setProperty('--background', Palletes[n][0]);
    document.documentElement.style.setProperty('--main', Palletes[n][1]);
    document.documentElement.style.setProperty('--shadow', Palletes[n][2]);
}

function nPlus() {
    n++;
    if (n > Palletes.length - 1) {
        n = 0;
    }
    changeColor(n);
}

function nMinus() {
    n--;
    if (n < 0) {
        n = Palletes.length - 1;
    }
    changeColor(n);
}

/*
<div class="buttons">
        <button onclick="nPlus()"> </button>
        <button onclick="nMinus()"> </button>
    </div>
    <svg viewbox="0 0 1000 1000">
        <text x="500" y="250" class="title">PALMOOZA</text>
        <rect x="100" y="360" class="back"></rect>
        <text x="500" y="450" style="font-size: 94px; text-anchor: middle;">LITTLE JESUS</text>
        <text x="500" y="500" style="font-size: 45px; text-anchor: middle; letter-spacing: .4;">CHILDISH GAMBINO • J.COLE</text>
        <text x="500" y="540" style="font-size: 30px; text-anchor: middle; letter-spacing: .6;">CHANCE THE RAPPER • KENDRICK LAMAR</text>
        <text x="500" y="570" style="font-size: 22px; text-anchor: middle; letter-spacing: .2;">THE WAR ON DRUGS • ROY BLAIR • TAME IMPALA • FELLY</text>
        <text x="500" y="600" style="font-size: 20px; text-anchor: middle; letter-spacing: .8;">CLUBZ • EL MATO A UN POLICIA MOTORIZADO • A$AP ROCKY</text>
        <text x="500" y="630" style="font-size: 19px; text-anchor: middle; letter-spacing: .4;">BON IVER • BAD BUNNY • JOJI • PAULO LONDRA • YOUNG TENDER</text>
        <text x="500" y="655" style="font-size: 18px; text-anchor: middle; letter-spacing: .6;">FLUME • JADEN SMITH • NO SOMOS MARINEROS • THE GUADALOOPS</text>
        <text x="500" y="820" class="logo">ジえゴ</text>
        <text x="500" y="900" class="date">24 MAYO</text>
    </svg>
*/
