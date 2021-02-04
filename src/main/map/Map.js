import React from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

class Map extends React.Component {
    set onClick(handler) {
        this.map.on('click', (event) => {
            handler(event.lngLat);
        });
    }

    addMarker(point) {
        new mapboxgl.Marker({
            color: '#FDBF5A',
            clickTolerance: 10,
        })
            .setLngLat(point)
            .addTo(this.map);
    }

    componentDidMount() {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [37.622504, 55.753215],
            zoom: 10,
        });
    }

    render() {
        return <div id='map' className='Map' data-testid='Map:div'></div>;
    }
}

export default Map;
