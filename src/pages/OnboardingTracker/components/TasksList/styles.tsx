import styled from 'styled-components';
import { Theme } from '../../../../config/theme';

export const TaskCard = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  background-color: ${Theme.colors.secondary};
  border: 1px solid ${Theme.colors.info};
  transition: 0.3s;
  padding: 15px 10px 15px 10px;
  &:hover {
    background: ${Theme.colors.warning};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CheckBox = styled.input`
  margin-right: 10px;
`;
