import styled from 'styled-components';

export const RefreshRequestFarms = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  align-items: flex-end;
`;

export const CardFarmSelect = styled.div`
  width: 250px;
  padding: 13px;
  display: flex;
  border-radius: 9px;
  align-items: center;
  padding-inline: 20px;
  
  &.active {
    background-color: #f7fafc;
  }
}
`;

export const DescriptionFarm = styled.div`
  display: flex;
  flex-direction: column;
`;
