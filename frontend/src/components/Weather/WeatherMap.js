import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function WeatherMap() {
    // Set the initial position and zoom level of the map
    const position = [7.851732, 80.098774]; // Example coordinates (latitude, longitude)
    const zoom = 15;

    // This component is a workaround to use Leaflet's map object with functional components
    function SetViewOnClick({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;
    }

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Replace the TileLayer URL above with the OpenWeatherMap tile server URL if available */}
            <SetViewOnClick coords={position} />
        </MapContainer>
    );
}

export default WeatherMap;
