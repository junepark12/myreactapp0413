import React from "react";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";

const AboutPage = () => {
  /* 과제 수정 포인트 1: 본인의 실제 역량 및 목표 직무(데이터 분석)에 맞는 기술 스택으로 변경 */
  const skills = [
    "Python (Data Analysis)", 
    "SQL (Database)", 
    "C/C++ (Embedded)", 
    "Java", 
    "React"
  ];

  return (
    <div className="about-container">
      <h2>자기소개</h2>
      
      <ProfileCard />
      
      {/* 과제 수정 포인트 2: 학문적 배경을 강조하는 멘트 추가 */}
      <div className="academic-info" style={{ marginBottom: "20px", color: "#444" }}>
        <p>🎓 <strong>동국대학교 정보통신공학전공 (3학년)</strong></p>
        <p>데이터 기반의 DX(디지털 전환)를 설계하는 엔지니어를 꿈꾸고 있습니다.</p>
      </div>

      <SkillsList skills={skills} />
    </div>
  );
};

export default AboutPage;