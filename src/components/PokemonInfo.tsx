import React from "react";
import styled from "@emotion/styled";

import { Color, Type } from "../types";
import { mapColorToHex } from "../utils";

interface IInfo {
  id: string;
  name?: string;
  types?: Array<Type>;
  color?: Color;
}

const PokemonInfo: React.FC<IInfo> = ({ id, name, types, color }) => {
  return (
    <Base color={mapColorToHex(color?.name)}>
      <ImgWrapper>
        <Img src="/assets/poketball.svg" />
      </ImgWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
      </InfoWrapper>
      <TypeList>
        <TypeWrapper>
          <TypeInfo />
        </TypeWrapper>
      </TypeList>
      <ThumbnailWrapper>
        <Thumbnail />
      </ThumbnailWrapper>
    </Base>
  );
};

export default PokemonInfo;

const Base = styled.div``;

const ThumbnailWrapper = styled.div``;

const Thumbnail = styled.img``;

const InfoWrapper = styled.div``;

const Name = styled.div``;

const Index = styled.div``;

const TypeWrapper = styled.div``;

const TypeList = styled.div``;

const TypeInfo = styled.img``;

const ImgWrapper = styled.div``;

const Img = styled.img``;
