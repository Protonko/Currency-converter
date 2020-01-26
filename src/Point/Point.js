import React from 'react';
import './Point.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

class Point extends React.Component {
  render() {
    return (
		<YMaps>
			<Map width="100%" height="60vh" defaultState={{ center: [55.75, 37.57], zoom: 11 }}>
				<Placemark options={{iconColor: '#1b8'}} defaultGeometry={[55.751594, 37.513896]} />
				<Placemark options={{iconColor: '#1b8'}} defaultGeometry={[55.751574, 37.573856]} />
				<Placemark options={{iconColor: '#1b8'}} defaultGeometry={[55.781574, 37.773856]} />
				<Placemark options={{iconColor: '#1b8'}} defaultGeometry={[55.721574, 37.513856]} />
				<Placemark options={{iconColor: '#1b8'}} defaultGeometry={[55.721574, 37.713856]} />
			</Map>
  		</YMaps>
    );
  }
}

export default Point;