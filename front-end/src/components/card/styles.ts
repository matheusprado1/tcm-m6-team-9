import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.greyScale.whiteFixed};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.greyScale.grey1};
  max-height: 22px;
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 0px 5px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.greyScale.grey2};
  margin: 0px 5px;
`;

export const Figure = styled.figure`
  img {
    height: 150px;
    width: 220px;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IsActive = styled.div`
    display: flex;
    width: 42%;
    margin: 0px 5px;
`;


export const ContainerTags = styled.div`
  display: flex;
  justify-content: space-between;
  width: 42%;
  margin: 0px 5px;
`;

export const Feat = styled.div`
  margin: 2px;
  padding: 8px 2px;
  width: 80px;
  background-color: #EDEAFD;
  border: none;
  color: ${({ theme }) => theme.color.brand.brand1};
  font-weight: 500;
  font-size: 14px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.greyScale.grey1};
  margin-right: 5px;
`;