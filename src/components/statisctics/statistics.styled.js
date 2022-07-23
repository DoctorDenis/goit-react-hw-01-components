import styled from 'styled-components';
import getBrightness from 'getbrightness';

export const StatisticsSection = styled.section`
  width: 600px;
  height: auto;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid transparent;
  padding-top: 0;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  margin: 2rem 0rem;
  box-sizing: border-box;
  color: gray;
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  width: calc(100% / 5);
  background-color: ${props => props.bgcolor};
  color: ${props =>
    getBrightness(props.bgcolor) < 0.5 ? 'lightgrey' : 'black'};
`;

export const Label = styled.span`
  margin-bottom: 0.5rem;
  text-transform: lowercase;
`;

export const Percentage = styled.span`
  text-transform: lowercase;
  font-size: 2rem;
`;
