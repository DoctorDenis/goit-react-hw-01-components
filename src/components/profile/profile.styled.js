import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 5px gray;
  border-radius: 5px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ProfileDescription = styled.div`
  width: 100%;
  text-align: center;
  padding: 3rem 0rem 1rem;
  box-sizing: border-box;
`;

export const ProfileAvatar = styled.img`
  width: 50%;
  border-radius: 50%;
`;

export const Username = styled.p`
  font-size: 2.8rem;
  font-weight: 500;
`;

export const Tag = styled(Username)`
  font-size: 1.6rem;
  color: darkgrey;
`;

export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: #efefef;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  border-top: 1px solid lightgrey;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  align-items: center;
  padding: 2.5rem 1rem;
  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
  // outline: 1px solid lightgrey;
`;

export const Label = styled.span`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: darkgrey;
`;

export const Number = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
`;
