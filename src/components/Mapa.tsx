import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { AuthenticationType } from 'azure-maps-control';
import { useState } from 'react';
import { AzureMap, AzureMapsProvider, IAzureMapOptions } from 'react-azure-maps';
import styled from 'styled-components';

export function Mapa() {
  const [styleMap, setStyleMap] = useState('satellite_road_labels');
  const option: IAzureMapOptions = {
    authOptions: {
      authType: AuthenticationType.subscriptionKey,
      subscriptionKey: 'veuMgxBx0_-2Q-YzvihLE-1Jv-ZjSJdDV8UXORPTCMA',
    },
    center: [-40.47, -20.75],
    zoom: 3,
    view: 'Auto',
    style: styleMap,
    atlas: {
      layers: {
        TileLayer: {
          tileUrl:
            'https://{azMapsDomain}/map/tile?api-version=2.0&tilesetId=microsoft.weather.radar.main&zoom=40&x=30&y=10',
          opacity: 0.9,
          tileSize: 256,
        },
      },
    },
  };

  const MapaArea = styled.div``;

  return (
    <MapaArea style={{ height: '340px' }}>
      <ButtonGroup spacing="3" display="flex" justifyContent="center" zIndex="10" pos="relative">
        <Button
          p="4px"
          h="26px"
          w="108px"
          borderRadius="4px"
          onClick={() => setStyleMap('satellite_road_labels')}
          _hover={{
            color: '#ffffff',
            backgroundColor: 'green.400',
            border: 'none',
          }}
          _focus={{ color: '#ffffff', backgroundColor: 'green.400', outline: 'none' }}
        >
          <Text fontSize="16px" fontWeight="700">
            Propriedade
          </Text>
        </Button>
        <Button
          p="4px"
          h="26px"
          w="108px"
          borderRadius="4px"
          onClick={() => setStyleMap('grayscale_dark')}
          _hover={{
            color: '#ffffff',
            backgroundColor: 'green.400',
            border: 'none',
          }}
          _focus={{ color: '#ffffff', backgroundColor: 'green.400', outline: 'none' }}
        >
          <Text fontSize="16px" fontWeight="700">
            Clima
          </Text>
        </Button>
      </ButtonGroup>
      <AzureMapsProvider>
        <AzureMap options={option} styles={{ borderRadius: '13px', marginTop: '-40px' }}></AzureMap>
      </AzureMapsProvider>
    </MapaArea>
  );
}
