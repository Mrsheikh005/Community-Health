import styled, { css } from "styled-components/native";
import { Colors } from "../../utils/Styles";

export const Wrapper = styled.View`
  border: 0.5px solid
    ${(props) => (props.error ? Colors.red : Colors.PRIMARY_02_4)};
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  
  margin-top: 10px;
  width: 90%;
  height: 45px;
`;

export const Loginlabel = styled.Text`
  font-size: 14px;

  margin-top: 20px;
  ${(props) =>
    props.error
      ? css`
          color: ${Colors.red};
          margin-right: 15px;
          align-self: flex-end;
        `
      : css`
          color: ${Colors.black};
          margin-left: 21px;
        `}
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 5px;
`;

export const Icon = styled.Image`
  ${(props) =>
    props.iconStyle
      ? css`
          width: ${props.iconStyle.width}px;
          height: ${props.iconStyle.height}px;
        `
      : css`
          width: 15px;
          height: 15px;
        `}
`;
