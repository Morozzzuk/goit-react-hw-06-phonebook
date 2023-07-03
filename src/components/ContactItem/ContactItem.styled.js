import styled from '@emotion/styled';

export const Item = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px 5px;
  margin-right: 30px;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  :focus,
  :hover {
    background: #2196f3;
    color: white;
  }
`;
