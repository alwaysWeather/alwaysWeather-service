import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_REPOSITORY } from '@/graphql/country';

const Home = () => {
  const [code, setCode] = useState('BR');
  const { loading, data } = useQuery(GET_REPOSITORY);

  const arr = [
    { code: 'BR', title: '브라질' },
    { code: 'JP', title: '일본' },
    { code: 'KR', title: '대한민국' },
  ];

  useEffect(() => {
    console.log(data);
  }, []);

  if (loading) return <div>loading</div>;
  if (!data) return <div>loading</div>;
  if (!data.country) return <div>loading</div>;

  return (
    <Container>
      <div>아래 국가를 클릭해서 정보를 확인하세요!!!!!!!!!!</div>
      <ButtonContainer>
        {arr.map(({ code, title }) => {
          return (
            <CountryButton
              key={crypto.randomUUID()}
              onClick={() => {
                setCode(code);
              }}
            >
              {title}
            </CountryButton>
          );
        })}
      </ButtonContainer>
      {Object.entries(data.country).map((key, value) => {
        return (
          <div key={crypto.randomUUID()}>
            {key}: {value}
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #111111;
  color: #eaeaea;
  font-size: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CountryButton = styled.button`
  font-size: 50px;
`;

export default Home;
