import { useState, useMemo } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import Card_Back from "./components/card/Card_Back";
import CardFrontBody from "./components/card/CardFrontBody";
import CardHistoryList from "./components/card/CardHistoryList";

const dummyCardInfo = {
  cardId: "card-001",
  cardName: "KREAM Platinum 우리카드",
  company: "우리카드",
  cardType: "CREDIT",
  imageUrl: "/woori-card-kream-platinum.png",
  themeColor: "#1A4FFF",
  maskedCardNumber: "**** **** **** 1234",
  linkedAccount: {
    bankName: "신한",
    maskedAccountNumber: "110-***-****",
  },
};

const dummyHistories = [
  // ... (사용자님이 주신 데이터와 동일)
  {
    id: 1,
    merchantName: "스타벅스 강남점",
    time: "2026-01-14 09:12",
    price: 5800,
    type: "PAYMENT",
  },
  {
    id: 2,
    merchantName: "쿠팡",
    time: "2026-01-13 22:41",
    price: 32900,
    type: "PAYMENT",
  },
  {
    id: 3,
    merchantName: "버스 교통카드",
    time: "2026-01-13 08:03",
    price: 1450,
    type: "TRANSPORT",
  },
  {
    id: 4,
    merchantName: "네이버페이",
    time: "2026-01-12 19:27",
    price: 12000,
    type: "PAYMENT",
  },
  {
    id: 5,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
  {
    id: 6,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
  {
    id: 7,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
  {
    id: 8,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
  {
    id: 9,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
  {
    id: 10,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
  {
    id: 11,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
  {
    id: 12,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
];

function App() {
  // [공통] 뺑글뺑글 도는 회전 상태만 부모가 관리합니다.
  const [rotateDeg, setRotateDeg] = useState(0);
  const handleFlip = () => setRotateDeg((prev) => prev + 180);

  return (
    <DefaultLayout>
      <div className="perspective-1000 w-full flex justify-center py-10">
        <div
          className="relative w-[400px] h-[600px] transition-transform duration-700 preserve-3d"
          style={{ transform: `rotateY(${rotateDeg}deg)` }}
        >
          {/* [앞면] */}
          <CardFrontBody cardInfo={dummyCardInfo} handleFlip={handleFlip} />

          {/* [뒷면] 필터링에 필요한 원본 데이터(histories)만 전달합니다. */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <Card_Back histories={dummyHistories} onFlip={handleFlip} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default App;
