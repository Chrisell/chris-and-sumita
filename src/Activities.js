import React from 'react';
import GoogleMapReact from 'google-map-react';
import ActivityMarker from './ActivityMarker.js'

class Activities extends React.Component {
    static defaultProps = {
        center: {
            lat: 39.95,
            lng: -75.16
        },
        zoom: 13
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
                    featureType: 'transit',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    elementType: 'labels',
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
        const markers = []
        const list = []
        const locations = [
            {
                lat: 39.937321,
                lng: -75.162851,
                name: "Pho 75",
                address: "1122 Washington Ave"
            },{
                lat: 39.955821,
                lng: -75.163156,
                name: "Pennsylvania Academy of the Fine Arts",
                address: "118-128 N Broad St"
            }, {
                lat: 39.949348,
                lng: -75.148868,
                name: "Hotel Monaco",
                address: "433 Chestnut St" 
            }, {
                lat: 39.953525,
                lng: -75.159355,
                name: "Reading Terminal Market",
                address: "51 N 12th St" 
            }
        ]
        locations.forEach(el => {
            markers.push(
                <ActivityMarker
                    lat={el.lat}
                    lng={el.lng}
                    name={el.name}
                    address={el.address}
                />
            )
            list.push(<ul>{el.name}</ul>)
        });
        return (
            <div className="registry">
                <h1>Around Philly</h1>
                <div style={{ float:'left', height: '50vh', maxWidth: '30%' }}>
                    <ul>{list}</ul>
                </div>
                <div style={{ float:'right', height: '50vh', maxWidth: '70%', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBR0HqVWE_Pb3iDXH9NuyGRD6VkMLl4x0g' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        options={this.createMapOptions}
                    >
                        {markers}

                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Activities;