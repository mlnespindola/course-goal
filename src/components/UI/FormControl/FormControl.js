import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${(props) =>
      props.invalid ? "rgb(255, 204, 198)" : "trasnparent"};
  }

  & input:focus {
    outline: none;
    background: #fff9fd;
    border-color: ${(props) => (props.invalid ? "red" : " #8b005d")};
  }

  /* &.invalid label {
    color: red;
  }

  &.invalid input {
    border-color: red;
    background-color: rgb(255, 204, 198);
  } */
`;

export default FormControl;
