var Palletes = [['#3B74B3', '#1E1D1E', '#EAEAEA'], ['#305A65', '#1DBE60', '#F7F9F8'], ['#F3CB2B', '#111', '#E9E9E8'],
['#F89895', '#EAEAEA', '#224761'], ['#F0D9D7', '#2E2B26', '#769079'], ['#DA643C', '#1E1D1E', '#EAEAEA'],
['#2C5370', '#B190C7', '#A14052'], ['#BC4B3C', '#151515', '#F0EEEF'], ['#180B10', '#EFD6C5', '#F5537F'],
['#181818', '#CECECE', '#6A6A6A']];
changeColor(Math.floor(Math.random() * Palletes.length));


function changeColor(n) {
    document.documentElement.style.setProperty('--background', Palletes[n][0]);
    document.documentElement.style.setProperty('--main', Palletes[n][1]);
    document.documentElement.style.setProperty('--shadow', Palletes[n][2]);
}
