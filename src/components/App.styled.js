import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  margin: 40px auto 0;
  padding: 40px;

  background-color: #e6e6fa;
  border-radius: 30px;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.8;
`;
