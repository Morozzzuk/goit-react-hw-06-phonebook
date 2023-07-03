import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  width: 200px;
`;

export const Input = styled.input`
  width: 350px;
  margin-bottom: 15px;
  background: white;
  outline: none;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  :focus,
  :hover {
    border-color: #2196f3;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0px;
`;
