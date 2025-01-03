import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/login');
  };
  return (
    <HomeContainer>
      <Content>
        <Title>PF Platfrom</Title>
        <Description>
          조합의 아파트 단지를 올린다
          <br />
          시공사가 본인들 사업계획안 올리고 조합장이 사업 계획은 선택한다
          <br />
          금융기관이 금리를 입력한다
        </Description>
        <Button onClick={handleLearnMoreClick}>프로젝트 참여하러 가기</Button>
      </Content>
    </HomeContainer>
  );
};

export default Home;

// Styled-components for styling
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Content = styled.div`
  text-align: center;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0051cc;
  }

  &:focus {
    outline: none;
  }
`;
