testHeader = document.createElement('header');
document.body.append(testHeader);

testDiv = document.createElement('div');
testHeader.append(testDiv);
testDiv.className = 'imagegridHead';

testHead = document.createElement('h1')
testDiv.append(testHead);

testLink = document.createElement('a')
testHead.append(testLink);
testLink.href = "index.html";
testLink.innerHTML = 'Nyl Aurilon';

linkMerv = document.createElement('a');
testDiv.append(linkMerv);
linkMerv.href = 'https://merveilles.town/@nyloire'
mervImg = document.createElement('img')
linkMerv.append(mervImg)
mervImg.src = 'Media/merveilles_white.svg'
mervImg.style.width = '30px'

linkWebring = document.createElement('a');
testDiv.append(linkWebring);
linkWebring.href = "https://webring.xxiivv.com/#random' target='_blank"
webringImg = document.createElement('img')
linkWebring.append(webringImg)
webringImg.src = 'https://webring.xxiivv.com/icon.white.svg'
webringImg.style.width = '30px'
