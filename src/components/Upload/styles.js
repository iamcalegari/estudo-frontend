import styled, { css } from "styled-components";

const dragActive = css`
  //  is a template literal that allows us to write css as a string and interpolate variables into it.
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  // styled.div é um componente que recebe um objeto com as propriedades que serão passadas para o componente DropContainer
  className: "dropzone", // className is used to style the dropzone
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease; /* transition duration */

  ${(props) => props.isDragActive && dragActive};

  ${(props) => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p``;
