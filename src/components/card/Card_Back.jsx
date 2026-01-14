// src/components/card/Card_Back.jsx
import React from "react";

const Card_Back = ({
  children,
  totalUsage,
  onFlip,
  filterType,
  setFilterType,
  dateRange,
  isListOpen,
  setIsListOpen,
  monthList,
  setMonthOffset,
  customStart,
  customEnd,
  setCustomStart,
  setCustomEnd,
}) => {
  return (
    // 둥근 테두리와 그림자 다시 적용
    <div className="relative w-full h-full bg-white rounded-[1rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100">
      {/* Reverse 버튼: 상단 고정 */}
      <button
        onClick={onFlip}
        className="absolute top-6 right-6 z-[100] text-gray-300 hover:text-gray-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>

      {/* 상단 정보 영역 (흰색/회색 톤) */}
      <div className="pt-10 pb-4 px-6 border-b border-gray-50">
        <div className="text-center mb-6">
          <p className="text-gray-400 text-[11px] font-medium mb-1">
            이번 달 사용금액
          </p>
          <p className="text-gray-900 text-3xl font-extrabold tracking-tight">
            {totalUsage}
          </p>
        </div>

        {/* 기간 표시 및 드롭다운 */}
        <div className="relative flex flex-col items-center">
          <div
            onClick={() => filterType === "1개월" && setIsListOpen(!isListOpen)}
            className="flex items-center gap-1 cursor-pointer group py-1 px-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            <span className="text-[12px] text-gray-600 font-semibold">
              {dateRange}
            </span>
            {filterType === "1개월" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-4 h-4 text-gray-300 transition-transform ${
                  isListOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          {/* 월별 드롭다운 (흰색 팝업 스타일) */}
          {isListOpen && (
            <div className="absolute top-full mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-xl z-[150] overflow-hidden">
              {monthList.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setMonthOffset(m.offset)}
                  className="w-full px-4 py-3 text-[11px] text-gray-600 hover:bg-gray-50 hover:text-blue-600 text-center border-b border-gray-50 last:border-0 font-medium"
                >
                  {m.label}
                </button>
              ))}
            </div>
          )}

          {/* 조회설정 날짜 입력창 (은은한 회색 배경) */}
          {filterType === "조회설정" && (
            <div className="mt-4 flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100">
              <input
                type="date"
                value={customStart}
                onChange={(e) => setCustomStart(e.target.value)}
                className="bg-transparent text-gray-700 text-[10px] outline-none font-medium"
              />
              <span className="text-gray-300 text-[10px]">~</span>
              <input
                type="date"
                value={customEnd}
                onChange={(e) => setCustomEnd(e.target.value)}
                className="bg-transparent text-gray-700 text-[10px] outline-none font-medium"
              />
            </div>
          )}
        </div>
      </div>

      {/* 중앙 버튼 탭 (구분선으로만 경계 표시) */}
      <div className="flex border-b border-gray-50 bg-white">
        <button
          onClick={() => {
            setFilterType("1개월");
            setIsListOpen(false);
          }}
          className={`flex-1 py-4 text-[12px] font-bold transition-all ${
            filterType === "1개월"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-300"
          }`}
        >
          1개월
        </button>
        <button
          onClick={() => {
            setFilterType("조회설정");
            setIsListOpen(false);
          }}
          className={`flex-1 py-4 text-[12px] font-bold transition-all ${
            filterType === "조회설정"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-300"
          }`}
        >
          조회설정
        </button>
      </div>

      {/* 카드 내역 리스트 영역 (자연스러운 연결) */}
      <div className="flex-1 overflow-hidden bg-white">{children}</div>

      {/* 하단 브랜드 텍스트 */}
      <div className="py-4 text-[10px] text-gray-300 text-center font-bold tracking-widest bg-gray-50/50">
        SHINHANCARD CHECK | DOMESTIC ONLY
      </div>
    </div>
  );
};

export default Card_Back;
