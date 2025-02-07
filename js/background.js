const images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/bg/${chosenImage}')`;
document.body.style.backgroundSize = 'cover'; // 배경을 화면에 꽉 채우기
document.body.style.backgroundRepeat = 'no-repeat'; // 반복되지 않게
document.body.style.backgroundPosition = 'center'; // 중앙 정렬

// 오버레이 div 생성
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(209, 192, 192, 0.5)';
overlay.style.zIndex = '-1'; // 콘텐츠 위로 올라오지 않게 설정
document.body.appendChild(overlay);
