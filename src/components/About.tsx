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
  const rarity = isLegendary ? "Legendary" : isMythical ? "Mythical" : "Normal";

  return (
    <Base>
      <FlavorText>{flavorText}</FlavorText>
      <TypeList>
        {types?.map(({ type }, idx) => (
          <TypeWrapper key={idx}>
            <TypeImage src={`/assets/${type.name}.svg`} />
            <TypeLabel>{type.name.toUpperCase()}</TypeLabel>
          </TypeWrapper>
        ))}
      </TypeList>
      <InfoContainerWrapper>
        <Title>Pokedex Data</Title>
        <InfoContainer>
          <InfoItem>
            <InfoItemLabel>Height</InfoItemLabel>
            <InfoItemValue>{height}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Weight</InfoItemLabel>
            <InfoItemValue>{weight}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Gender</InfoItemLabel>
            <InfoItemValue>
              {genderRate === -1 ? "Unknown" : "Male / Female"}
            </InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Growth Rate</InfoItemLabel>
            <InfoItemValue>{growthRate}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Base Exp</InfoItemLabel>
            <InfoItemValue>{baseExp}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Rarity</InfoItemLabel>
            <InfoItemValue>{rarity}</InfoItemValue>
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
