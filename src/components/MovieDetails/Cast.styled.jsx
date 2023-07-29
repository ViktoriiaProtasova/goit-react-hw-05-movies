import styled from '@emotion/styled';

export const MovieItemWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0px;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Actorcard = styled.li`
  border-radius: 4px 4px 4px 4px;
  -moz-border-radius: 4px 4px 4px 4px;
  -webkit-border-radius: 4px 4px 4px 4px;
  border: 0.5px solid #665fac;
  padding: 5px;
`;

export const ActorName = styled.h4`
  font-size: 12px;
  max-width: 100px;
  margin: 0;
`;

export const ActorRole = styled.p`
  font-size: 12px;
  max-width: 150px;
  margin: 0;
`;

export const ActorItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
