import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>연락처 (Contact)</h2>
      
      {/* 과제 수정 포인트: 방문자에게 소통 스타일을 안내하는 섹션 추가 */}
      <div className="contact-intro" style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
        <p>🤝 <strong>함께 성장할 동료를 찾고 있습니다.</strong></p>
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
          데이터 분석 프로젝트 협업이나 기술적인 대화는 언제든 환영합니다.<br />
          평일 오전 9시 ~ 오후 6시 사이에 가장 빠르게 답변을 드릴 수 있습니다.
        </p>
      </div>

      <div className="contact-content-layout" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* 기존 정보 컴포넌트 */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <ContactInfo />
        </div>
        
        {/* 기존 폼 컴포넌트 */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;