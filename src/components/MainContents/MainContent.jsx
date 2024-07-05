import React from 'react';
import { Paper } from '@mui/material';

const tweets = [
  {
    id: 1,
    content: [
      "【Prime Day】最大80%OFF Kindle本(電子書籍) セール (7/17まで) : 2024-06-28 10:33:41",
      "Pythonではじめるゲーム制作 超入門 知識ゼロからのプログラミング&アルゴリズムと数学",
      "セール価格：¥1,320"
    ]
  },
  {
    id: 2,
    content: [
      "ローソンでビール買った🍺",
      "高くてびっくりした😳",
      "梱包剤がしてくれてるので、やっぱり要らないとも言えず😅",
      "開いてみたらDODで納得😅",
      "可愛いから良き😘"
    ]
  }
];

let repeatedArray = []
for (let i = 0; i <10; i++) {
  repeatedArray.push(...tweets)
}
const MainContent = () => {
  return (
    <div>
      {repeatedArray.map((tweet, num) => (
        <Paper key={num}>
          <div className="tweet">
            {tweet.content.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </Paper>
      ))}
    </div> 
  );
}

export default MainContent;
