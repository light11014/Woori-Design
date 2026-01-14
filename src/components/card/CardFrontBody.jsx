import React from "react";

const CardFrontBody = ({ handleFlip }) => {
    return (
        <div className="absolute inset-0 backface-hidden" onClick={handleFlip}>
            <div className="w-full h-full rounded-[1rem] bg-slate-200 relative shadow-xl overflow-hidden">
                {/* 배경 카드 이미지 */}
                <img
                    src="/card.png"
                    alt="카드 이미지"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* [1] 중앙 상단 - 카드 이름 박스 */}
                <div className="absolute top-[5%] left-0 top-0">
                    <div className="bg-white/90 text-center py-3 px-6 rounded shadow-lg">
                        <p className="font-bold text-sm text-black">
                            신한 카드(9490)
                        </p>
                    </div>
                </div>

                {/* [2] 하단 좌측 - 카드 정보 박스 */}
                <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 text-black py-3 px-5 rounded shadow-lg">
                        <p className="font-bold text-xs">9490-1234-****-****</p>
                        <p className="font-bold text-xs">
                            3333-1234-*******-3123
                        </p>
                    </div>
                </div>

                {/* [3] 하단 우측 - 교통카드/Master 박스 */}
                <div className="absolute bottom-4 right-4 space-y-1.5">
                    {/* 교통카드 */}
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded shadow-md border border-white/50 flex items-center justify-center relative">
                        <img
                            src="/payon.svg"
                            alt="교통카드"
                            className="w-full h-full object-contain"
                        />
                        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black text-[9px] font-bold whitespace-nowrap">
                            후불 교통카드
                        </p>
                    </div>

                    {/* Master */}
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded shadow-md border border-white/50 flex items-center justify-center">
                        <img
                            src="/ma_symbol.svg"
                            alt="마스터카드"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                {/* 뒤집기 버튼 */}
                <button
                    onClick={handleFlip}
                    className="absolute top-4 right-4 text-white w-10 h-10 flex items-center justify-center z-10 hover:bg-[#134a5e] transition-colors"
                >
                    🔄
                </button>
            </div>
        </div>
    );
};

export default CardFrontBody;
