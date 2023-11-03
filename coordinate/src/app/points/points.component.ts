import { AfterViewInit, Component } from '@angular/core';
import { PointsService } from '../_services/points.service';
import { Point } from '../_models/point';
import * as L from 'leaflet';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements AfterViewInit {
  private map!: L.Map;
  selectedPoint!: Point;

  points: Point[] = [];
  marker: any;

  constructor(private pointService: PointsService) { }

  ngOnInit(): void {
    this.loadPoints();
  }

  loadPoints() {
    this.pointService.getPoints().subscribe(
      (points) => {
        console.log('Response Data:', points);
        this.points = points.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
      },
      (error) => {
        console.error('Error in component:', error);
      }
    );
  }
  

  ngAfterViewInit(): void {
    this.initMap();
  }
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    tiles.addTo(this.map);
  }

  goToPoint(point: Point) {
    this.map.setView([point.lat, point.lng]);
    
    L.marker([point.lat, point.lng]).addTo(this.map);
  }
  

  deletePoint(id: number): void {
    this.pointService.deletePoint(id).subscribe(() => {
      this.points = this.points.filter(point => point.id !== id);
    });
  }


  savePoint(): void {
    const center = this.map.getCenter();
    const point = {
      lat: center.lat,
      lng: center.lng,
      created: new Date().toISOString()
    };
  
    this.pointService.addPoint(point).subscribe(() => {
      this.loadPoints();
    });
  }
  
  onMarkerClick(point: Point): void {
    this.selectedPoint = point;

    if (this.marker) {
      this.marker.setLatLng([point.lat, point.lng]);
    } else {
      this.marker = L.marker([point.lat, point.lng]).addTo(this.map);
    }
  }
  
  downloadSelectedPoint(): void {
    const json = JSON.stringify(this.selectedPoint);
    const blob = new Blob([json], {type: 'application/json'});
    const url= window.URL.createObjectURL(blob);
  
    var a = document.createElement('a');
    a.href = url;
    a.download = 'point.json';
    a.click();
  }
}

