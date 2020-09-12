import React from 'react';
import { PLACE_MARKS } from './placemarksData';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

class Point extends React.Component {
	constructor(props) {
		super(props);

		this.renderPlacemark = this.renderPlacemark.bind(this);
	}

	renderPlacemark(placemark) {
		return (
			<Placemark
				key={placemark.id}
				options={{iconColor: '#1b8'}}
				defaultGeometry={placemark.geometry}
			/>
		);
	}

  render() {
    return (
			<YMaps>
				<Map width="100%" height="60vh" defaultState={{ center: [55.75, 37.57], zoom: 11 }}>
					{PLACE_MARKS.map(this.renderPlacemark)}
				</Map>
  		</YMaps>
    );
  }
}

export default Point;
