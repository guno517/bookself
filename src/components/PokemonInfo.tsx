import React from "react";
import styled from "@emotion/styled";

import { Color, Type } from "../types";
import { mapColorToHex, mapTypeToHex } from "../utils";

interface IInfo {
  id: string;
  name?: string;
  types?: Array<Type>;
  color?: Color;
}

const PokemonInfo: React.FC<IInfo> = ({ id, name, types, color }) => {
  const formatNumber = (index: string): string => {
    return `#${String(index).padStart(3, "0")}`;
  };

  return (
    <Base color={mapColorToHex(color?.name)}>
      <ImgWrapper>
        <Img src="/assets/poketball.svg" />
      </ImgWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Index>{formatNumber(id)}</Index>
      </InfoWrapper>
      <TypeList>
        {types?.map(({ type }, idx) => (
          <TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
            <TypeInfo src={`/assets/${type.name}.svg`} />
          </TypeWrapper>
        ))}
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
