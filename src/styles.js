import styled from "styled-components";

export const Container = styled.div`
  height: 100%; // 100% height of the screen (100% height of the window)
  display: flex; // flex-direction: column
  justify-content: center; // center the content horizontally
  align-items: center; // align-items: center; aligns the items vertically in the middle of the container (flex-start, flex-end, center, baseline, stretch)
`;

export const Content = styled.div`
  width: 100%; // 100% of the width of the screen (window)
  max-width: 400px; // 400px is the max width of the screen (400px is the width of the screen)
  margin: 30px; // 30px margin on each side of the screen (30px on each side)
  background: #e0f8d0; // is the color of the background
  border-radius: 4px; // 4px border radius (rounded corners)
  padding: 30px; // 30px padding on each side of the screen (30px on each side)
`;
