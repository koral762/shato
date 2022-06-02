import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const PointOnMap = ({ text }) => <div className="point-on-map">{text}</div>;

export class GoogleMapComp extends Component {

  static defaultProps = {
    center: {
      lat: 32.80339582231158,
      lng: 35.52479987429719
    },
    zoom: 16
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:process.env.REACT_APP_MAP_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <PointOnMap
            lat={32.80339582231158}
            lng={35.52479987429719}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}


//     defaultCenter={{ lat: 32.80339582231158, lng: 35.52479987429719 }}
//       position={{ lat: 32.80339582231158, lng: 35.52479987429719 }}




