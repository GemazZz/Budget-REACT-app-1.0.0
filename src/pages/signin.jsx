import { hover } from "@testing-library/user-event/dist/hover";
import {
  StyledDiv,
  StyledCloseBtn,
  StyledTransactionH1,
  StyledDateLabel,
  StyledSubmitBtn,
  StyledAmountLabel,
  StyledDateInput,
  StyledNumberInput,
  StyledNew,
  StyledForget,
} from "../components/styles/signStyle";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <StyledDiv>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>Sign in</StyledTransactionH1>
      <div>
        <StyledDateLabel htmlFor="Email">Email: </StyledDateLabel>
        <StyledDateInput type="email" id="Email" />
      </div>
      <div>
        <StyledAmountLabel htmlFor="amount">Password: </StyledAmountLabel>
        <StyledNumberInput type="password" id="amount" />
      </div>
      <Link to={"/forgetpassword"} style={{ textDecorationLine: "none" }}>
        <StyledForget>Forget Password?</StyledForget>
      </Link>
      <Link to={"/"}>
        <StyledSubmitBtn className="submit">Sign in</StyledSubmitBtn>
      </Link>
      <StyledNew>
        Don't have an account?
        <Link to={"/signup"} style={{ textDecorationLine: "#d1d1d1", color: "#764920", marginLeft: "4px" }}>
          Register Here
        </Link>
      </StyledNew>
    </StyledDiv>
  );
};

export default SignIn;
