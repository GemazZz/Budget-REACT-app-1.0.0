import { styled } from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  color: #222222;
  margin-top: 150px;
  margin-left: 20px;
  background-color: #373737;
  height: 350px;
  width: 450px;
  border-radius: 15px;
`;

export const StyledCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  transition: 0.2s;
  &:hover {
    scale: 1.2;
  }
`;

export const StyledTransactionH1 = styled.h1`
  position: relative;
  bottom: 20px;
  color: #d1d1d1;
`;

export const StyledGreenLabel = styled.label`
  color: #66fe66;
`;
export const StyledRedLabel = styled.label`
  color: #fa6262;
  padding-left: 10px;
`;
export const StyledLabel = styled.label`
  color: #d1d1d1;
`;
export const StyledAmountLabel = styled.label`
  position: relative;
  left: 5px;
  color: #d1d1d1;
`;
export const StyledDateLabel = styled.label`
  position: relative;
  left: -5px;
  color: #d1d1d1;
`;

export const StyledSelect = styled.select`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 15px;
  font-family: "Times New Roman", Times, serif;
  width: 130px;
  border: none;
  border-radius: 5px;
  background-color: #373737;
  height: 30px;
  outline: 1px solid #bdbdbd;
  color: #d1d1d1;
`;

export const StyledRadioInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
`;

export const StyledDateInput = styled.input`
  position: relative;
  left: -5px;
  width: 130px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #373737;
  height: 30px;
  outline: 1px solid #bdbdbd;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
`;

export const StyledNumberInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  position: relative;
  left: 5px;
  width: 130px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #373737;
  height: 30px;
  outline: 1px solid #bdbdbd;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledSubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 10px;
  font-family: "Times New Roman", Times, serif;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.25s;
  outline: 1px solid #bdbdbd;
  color: #d1d1d1;
  background-color: #764920;
  &:hover {
    scale: 1.1;
  }
`;
