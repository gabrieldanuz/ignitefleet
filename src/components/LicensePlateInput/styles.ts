import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 16px;

  background-color: ${theme.COLORS.GRAY_700};
`;


export const Label = styled.Text`
  background-color: ${theme.COLORS.GRAY_300};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const Input = styled.TextInput`
  background-color: ${theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.XXL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};

  text-align: center;
  margin-top: 16px;
`;