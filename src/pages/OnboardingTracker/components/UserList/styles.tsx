import styled from '@emotion/styled';
import { Theme } from '../../../../config/theme';

interface IUserCard {
  background?: string;
}

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ background }: IUserCard) =>
    background ? background : Theme.colors.primary};
  cursor: pointer;

  border: 1px solid ${Theme.colors.info};
  transition: 0.3s;
  padding: 15px 10px 15px 10px;
  &:hover {
    background: ${Theme.colors.warning};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
