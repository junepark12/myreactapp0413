import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
  const features = [
    {
      title: "소개 (About Me)",
      description: "동국대 정보통신공학도 박준서의 비전과 목표를 소개합니다.",
    },
    {
      title: "프로젝트 (Projects)",
      description: "데이터 분석 및 개발을 통해 문제를 해결한 프로젝트입니다.",
    },
    {
      title: "연락처 (Contact)",
      description: "협업 제안이나 문의 사항은 언제든 환영합니다.",
    },
    /* 과제 수정 포인트: 단순 안내에서 직무 역량 강조 항목으로 변경 */
    {
      title: "데이터 분석 & DX",
      description: "Python과 SQL을 활용한 데이터 기반 솔루션을 탐색합니다.",
    },
  ];

  return (
    <div className="home-container">
      {/* 과제 수정 포인트: 환영 인사를 사용자 맞춤형으로 변경 */}
      <h2>안녕하세요, 박준서의 포트폴리오입니다.</h2>
      <p>정보통신공학 전공을 기반으로 데이터 분석가(Data Analyst)를 꿈꾸는 3학년 박준서입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;