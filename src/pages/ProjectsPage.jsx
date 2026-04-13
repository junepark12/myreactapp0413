import React from "react";
import ProjectCard from "../components/ProjectCard";
import sampleImage from "../assets/calcu.png";

/**
 * 프로젝트 페이지 컴포넌트
 * [과제 수정 사항]: 신규 Props(tags, date) 적용 및 데이터 구체화
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "React 기반 계산기 서비스",
      description: "입력값에 따른 실시간 연산 기능을 구현한 웹 애플리케이션입니다.",
      image: sampleImage,
      date: "2026.03",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      title: "딥러닝 기반 영상 분류 시스템",
      description: "캡스톤 디자인 프로젝트로, CNN 알고리즘을 활용해 영상을 실시간 분류합니다.",
      date: "2025.09 - 2025.12",
      tags: ["Python", "TensorFlow", "OpenCV"],
    },
    {
      title: "공공데이터 활용 맛집 지도",
      description: "네이버 지도 API와 공공데이터를 결합한 맞춤형 맛집 저장소입니다.",
      link: "https://map.naver.com/p/entry/place/18697937?c=15.00,0,0,0,dh",
      date: "2026.01 - 진행 중",
      tags: ["API", "Data Analysis", "React"],
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            /* 과제 수정 포인트: ProjectCard 컴포넌트에 새롭게 정의한 Props들을 전달함 */
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            date={project.date} // 신규 추가
            tags={project.tags} // 신규 추가
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;