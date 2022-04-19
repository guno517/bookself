import React from "react";
import styled from "@emotion/styled";
import { Ability, Color, Type } from "../types";

interface IAbout {
  isLoading: boolean;
  color?: Color;
  growthRate?: string;
  flavorText?: string;
  genderRate?: number;
  isLegendary?: boolean;
  isMythical?: boolean;
  types?: Array<Type>;
  weight?: number;
  height?: number;
  baseExp?: number;
  abilities?: Array<Ability>;
}

const About: React.FC<IAbout> = ({
  isLoading,
  color,
  growthRate,
  flavorText,
  genderRate,
  isLegendary,
  isMythical,
  types,
  weight,
  height,
  baseExp,
  abilities,
}) => {
  return (
    <Base>
      <FlavorText></FlavorText>
      <TypeList>
        <TypeWrapper>
          <TypeImage />
          <TypeLabel></TypeLabel>
        </TypeWrapper>
      </TypeList>
      <InfoContainerWrapper>
        <Title>Pokedex Data</Title>
        <InfoContainer>
          <InfoItem>
            <InfoItemLabel></InfoItemLabel>
            <InfoItemValue></InfoItemValue>
          </InfoItem>
        </InfoContainer>
      </InfoContainerWrapper>
    </Base>
  );
};

export default About;

const Base = styled.div``;

const FlavorText = styled.p``;

const TypeWrapper = styled.div``;

const TypeList = styled.div``;

const TypeImage = styled.img``;

const TypeLabel = styled.div``;

const ImageWrapper = styled.div``;

const Image = styled.img``;

const InfoContainerWrapper = styled.div``;

const Title = styled.h4``;

const InfoContainer = styled.div``;

const InfoItem = styled.div``;

const InfoItemLabel = styled.span``;

const InfoItemValue = styled.span``;
