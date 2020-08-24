export interface Village {
    marker: google.maps.Marker;
    population: number;
}   

export interface Position {
    lat: number;
    lng: number;
}

export interface OriginDisplay {
    position: String;
    left: number;
    right: number;
}