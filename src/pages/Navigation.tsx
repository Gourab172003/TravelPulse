import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Navigation as NavigationIcon, MapPin, Phone, Shield, Hospital, Flame } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Navigation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get('service');
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [serviceLocations, setServiceLocations] = useState<any[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with a free tile source
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
          }
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm'
          }
        ]
      },
      center: [77.2090, 28.6139], // Delhi coordinates as default
      zoom: 13
    });

    // Add navigation controls
    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add geolocate control
    const geolocate = new maplibregl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });

    map.current.addControl(geolocate, 'top-right');

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: [number, number] = [position.coords.longitude, position.coords.latitude];
          setUserLocation(coords);
          map.current?.setCenter(coords);
          
          // Add user location marker
          new maplibregl.Marker({ color: '#00BFA6' })
            .setLngLat(coords)
            .addTo(map.current!);

          // Add service locations if service type is specified
          if (serviceType) {
            addServiceLocations(coords, serviceType);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  const startTracking = () => {
    setIsTracking(true);
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const coords: [number, number] = [position.coords.longitude, position.coords.latitude];
          setUserLocation(coords);
          map.current?.setCenter(coords);
        },
        (error) => {
          console.error('Error tracking location:', error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    }
  };

  const addServiceLocations = (userCoords: [number, number], service: string) => {
    // Mock service locations around user's location
    const mockLocations = generateMockLocations(userCoords, service);
    setServiceLocations(mockLocations);

    // Add markers for each service location
    mockLocations.forEach((location, index) => {
      const markerColor = getServiceColor(service);
      const marker = new maplibregl.Marker({ color: markerColor })
        .setLngLat([location.lng, location.lat])
        .addTo(map.current!);

      // Add popup with service information
      const popup = new maplibregl.Popup()
        .setHTML(`
          <div class="p-2">
            <h3 class="font-semibold text-sm">${location.name}</h3>
            <p class="text-xs text-gray-600">${location.address}</p>
            <p class="text-xs text-blue-600 mt-1">Distance: ${location.distance}km</p>
          </div>
        `);
      
      marker.setPopup(popup);
    });
  };

  const generateMockLocations = (userCoords: [number, number], service: string) => {
    const serviceNames = {
      police: ["Central Police Station", "Traffic Police Post", "Cyber Crime Unit", "District HQ"],
      hospital: ["City General Hospital", "Emergency Medical Center", "Apollo Clinic", "Max Healthcare"],
      fire: ["Fire Station No. 1", "Emergency Response Unit", "Rescue Services", "Fire Department HQ"]
    };

    const names = serviceNames[service as keyof typeof serviceNames] || serviceNames.police;
    
    return names.map((name, index) => ({
      name,
      address: `${name} Address, Sector ${index + 1}`,
      lat: userCoords[1] + (Math.random() - 0.5) * 0.02,
      lng: userCoords[0] + (Math.random() - 0.5) * 0.02,
      distance: (Math.random() * 5 + 0.5).toFixed(1)
    }));
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'police': return '#3B82F6';
      case 'hospital': return '#EF4444';
      case 'fire': return '#F97316';
      default: return '#6B7280';
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'police': return Shield;
      case 'hospital': return Hospital;
      case 'fire': return Flame;
      default: return MapPin;
    }
  };

  const getServiceTitle = (service: string) => {
    switch (service) {
      case 'police': return 'Nearest Police Stations';
      case 'hospital': return 'Nearest Hospitals';
      case 'fire': return 'Nearest Fire Stations';
      default: return 'Live Navigation';
    }
  };

  const emergencyCall = () => {
    // In a real app, this would trigger emergency protocols
    alert('Emergency SOS activated! Location shared with emergency services.');
  };

  return (
    <div className="min-h-screen bg-space-cadet flex flex-col">
      {/* Header */}
      <header className="bg-gunmetal-teal/90 backdrop-blur-lg border-b border-onyx/30 shadow-elegant">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="text-teal hover:text-electric-cyan hover:bg-midnight-plum/50"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-2">
                {serviceType ? (
                  <>
                    {React.createElement(getServiceIcon(serviceType), { className: "w-6 h-6 text-teal" })}
                    <span className="text-xl font-bold text-white">{getServiceTitle(serviceType)}</span>
                  </>
                ) : (
                  <>
                    <NavigationIcon className="w-6 h-6 text-teal" />
                    <span className="text-xl font-bold text-white">Live Navigation</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                variant={isTracking ? "default" : "outline"}
                onClick={startTracking}
                className={isTracking 
                  ? "bg-teal hover:bg-teal/80 text-space-cadet font-semibold" 
                  : "border-teal text-teal hover:bg-teal hover:text-space-cadet"
                }
              >
                <MapPin className="w-4 h-4 mr-2" />
                {isTracking ? 'Tracking' : 'Start Tracking'}
              </Button>
              <Button 
                variant="default"
                onClick={emergencyCall}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency SOS
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Map Container */}
      <div className="flex-1 relative">
        <div ref={mapContainer} className="absolute inset-0" />
        
        {/* Status Overlay */}
        <div className="absolute top-4 left-4 bg-midnight-plum/90 backdrop-blur-lg rounded-lg border border-onyx/30 p-4 max-w-sm">
          <h3 className="text-white font-semibold mb-2">
            {serviceType ? `${getServiceTitle(serviceType)}` : 'Location Status'}
          </h3>
          <div className="space-y-2 text-sm">
            {serviceType ? (
              <>
                <div className="flex justify-between">
                  <span className="text-white/70">Found:</span>
                  <span className="text-teal font-medium">{serviceLocations.length} locations</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Nearest:</span>
                  <span className="text-lime font-medium">
                    {serviceLocations[0]?.distance || '0.5'}km
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Status:</span>
                  <span className="text-white/70">Active</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-white/70">Accuracy:</span>
                  <span className="text-teal font-medium">±3m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Signal:</span>
                  <span className="text-lime font-medium">Strong GPS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Emergency:</span>
                  <span className="text-white/70">Ready</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Safety Alerts */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-deep-ocean-blue/90 backdrop-blur-lg rounded-lg border border-onyx/30 p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-lime rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Safe Zone</span>
              <span className="text-white/70 ml-auto">All systems active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;