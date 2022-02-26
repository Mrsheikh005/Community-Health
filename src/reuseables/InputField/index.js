import React from "react";
import { Wrapper, Input, Icon, Loginlabel } from "./styles";
import { Colors } from "../../utils/Styles";

const InputField = ({ ...props }) => {
  return (
    <>
      <Loginlabel error={props.error} style={{ ...props.labelStyle }}>
        {props.error || props.label}
      </Loginlabel>
      <Wrapper
        error={props.error}
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 1,
          ...props.inputContainerStyle,
     
        }}
      >
        {props.icon && <Icon source={props.icon} iconStyle={props.iconStyle} />}
        <Input placeholderTextColor={Colors.gray} {...props} />
      </Wrapper>
    </>
  );
};

export default InputField;
