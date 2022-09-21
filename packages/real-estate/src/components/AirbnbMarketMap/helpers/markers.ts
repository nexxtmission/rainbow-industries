const markers: google.maps.Marker[] = [];

export function addMarker(marker: google.maps.Marker) {
    markers.push(marker);
}

export function removeMarker(marker: google.maps.Marker) {
    marker.setMap(null);
}

export function removeAllMarkers() {
    markers.forEach((marker) => removeMarker(marker));
}
