import { styled } from "styled-components";

export const StyledPrintDataDiv = styled.div`
  height: 120px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: ${(props) => (props.value === "Income" ? "#3db03d88" : "#c81d1d72")};
  padding-left: 10px;
  gap: 5px;
  margin-bottom: 12px;
  border-radius: 15px;
  color: #d1d1d1;
`;

export const StyledDataP = styled.p`
  font-family: "Times New Roman", Times, serif;
`;

export const StyledColoredP = styled.p`
  color: ${(props) => (props.value === "Income" ? "rgb(102, 254, 102)" : "#fa6262")};
  font-family: "Times New Roman", Times, serif;
`;

export const StyledPrintDltBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  transition: 0.2s;
  &:hover {
    scale: 1.3;
  }
`;

export const StyledPrintEditBtn = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  transition: 0.2s;
  &:hover {
    scale: 1.3;
  }
`;

export const StyledContentDiv = styled.div`
  margin-top: 20px;
  flex: 2;
  height: min(400px);
`;
