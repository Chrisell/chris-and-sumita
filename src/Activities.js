import React from 'react';
import GoogleMapReact from 'google-map-react';
import ActivityMarker from './ActivityMarker.js'

class Activities extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        center: {
            lat: 39.95,
            lng: -75.16
        },
        zoom: 14
    };
    createMapOptions(map) {
        return {
            panControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            styles: [
                {
                    featureType: 'poi',
                    stylers: [{ visibility: 'off' }]
                },
                { 
                    stylers: [
                        { 'saturation': -100 }, 
                        { 'gamma': 1 }, 
                        { 'lightness': 4 }
                    ] 
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [
                        { 'gamma': 0.7}
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div className="registry">
                <h1>Around Philly</h1>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBR0HqVWE_Pb3iDXH9NuyGRD6VkMLl4x0g' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        options={this.createMapOptions}
                    >
                        <ActivityMarker
                            lat={39.937321}
                            lng={-75.162851}
                            name="Pho 75"
                        />
                        <ActivityMarker
                            lat={39.955821}
                            lng={-75.163156}
                            name="Hotel Monaco"
                        />
                        <ActivityMarker
                            lat={39.949348}
                            lng={-75.148868}
                            name="Hotel Monaco"
                        />
                        <ActivityMarker
                            lat={39.953525}
                            lng={-75.159355}
                            name="Reading Terminal Market"
                        />

                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Activities;