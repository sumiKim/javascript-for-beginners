const quotes = [
  {
    quote: '강하고 담대하라 두려워하지 말라.',
    verse: '신명기 31:6',
  },
  {
    quote: '내가 네게 명령한 것이 아니냐? 강하고 담대하라 놀라지 말라.',
    verse: '여호수아 1:9',
  },
  {
    quote: '두려워하지 말라 내가 너와 함께 함이니라.',
    verse: '이사야 41:10',
  },
  {
    quote: '너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라.',
    verse: '요한복음 14:1',
  },
  {
    quote:
      '여호와는 네게 복을 주시고 너를 지키시기를 원하며 그의 얼굴을 네게 비추사 은혜 베푸시기를 원하노라.',
    verse: '민수기 6:24-25',
  },
  {
    quote: '평강의 주께서 너희에게 평강을 주시기를 원하노라.',
    verse: '데살로니가후서 3:16',
  },
  {
    quote: '두려워하지 말라 네 하나님 여호와가 너의 가운데 계시니라.',
    verse: '스바냐 3:16-17',
  },
  {
    quote: '여호와를 기뻐하라 그가 네 마음의 소원을 네게 이루어 주시리로다.',
    verse: '시편 37:4',
  },
  {
    quote: '내가 네게 보이리라 크고 비밀한 일을 네게 알려 주리라.',
    verse: '예레미야 33:3',
  },
  {
    quote: '너를 지키시는 자가 졸지도 아니하시리로다.',
    verse: '시편 121:3',
  },
];

const quote = document.querySelector('#quote span:first-child');
const verse = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
verse.innerText = `📖 ${todaysQuote.verse}`;
