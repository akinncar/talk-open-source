import React from "react";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

import { Img } from "./Img";

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Root = styled.div([], {
  width: "100%",
  height: "70vh",
});

const Title = styled.span`
  font-size: 50px;
  color: #ffffff;
  font-weight: bold;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  ${space}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;


export const PopularOpenSourceProjects = () => (
  <Root>
    <Center mb={60}>
      <Title>Popular Open Source Projects</Title>
    </Center>

    <SpaceBetween>
      <Img src="./img/linux.png" height={180} />
      <Img src="./img/react.png" height={180} />
      <Img src="./img/flutter.png" height={180} />
    </SpaceBetween>
    <SpaceBetween>
      <Img src="./img/laravel.png" height={180} />
      <Img src="./img/spring.png" height={180} />
    </SpaceBetween>
  </Root>
);