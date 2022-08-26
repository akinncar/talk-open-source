import React from "react";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";
import QRCode from "qrcode.react";

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Root = styled.div([], {
  width: "50vw",
  height: "70vh",
});

const Text = styled.span`
  font-size: 50px;
  color: #ffffff;
`;

const Link = styled.a`
  font-size: 50px;
  color: #388bfd;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;

export const Sponsor = () => (
  <Root>
    <Center>
      <Text>Sponsor Me</Text>
    </Center>
    <Center mt={60} mb={60}>
      <QRCode value="https://github.com/sponsors/akinncar/" size={256} />
    </Center>
    <Center>
      <Link href="https://github.com/sponsors/akinncar/" target={"_blank"}>
        https://github.com/sponsors/akinncar/
      </Link>
    </Center>
  </Root>
);