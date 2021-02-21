import React from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

const layerId = 'route';
const sourceId = 'coordinates';

class Map extends React.Component {
    drawRoute(coordinates) {
        if (!this.map.getSource(sourceId)) {
            return;
        }
        this.map.getSource(sourceId).setData({
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: coordinates || [],
            },
        });
        if (coordinates) {
            this.map.flyTo({
                center: coordinates[0],
                zoom: 15,
            });
        }
    }

    componentDidMount() {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.314974, 59.934687],
            zoom: 10,
        });

        this.map.on('load', () => {
            this.map.addSource(sourceId, {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: [],
                    },
                },
            });
            this.map.addLayer({
                id: layerId,
                type: 'line',
                source: sourceId,
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#ffc617',
                    'line-width': 8,
                },
            });
        });
    }

    render() {
        return <div id='map' className='Map' data-testid='Map:div'></div>;
    }
}

export default Map;
