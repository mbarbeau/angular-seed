import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import { MapService } from "./map.service";
declare let ol: any;

/*declare var module: {
   id: string;
};*/

@Component({
  moduleId: module.id,
  selector: 'igo-map',
  templateUrl: 'map.component.html'
})

export class MapComponent implements AfterViewInit, OnInit {

  @Input() options: any;

  @Output() mapCreated = new EventEmitter();
  @Output() sidebarToggled = new EventEmitter();

  map: any;
  view: any; // ol.View;
  target: string = 'div-map';
  hasSidebar: boolean;
  zoomDuration: number = 500;
  sidebarCollapsible: boolean = false;

  constructor(private mapService: MapService) {}

  public ngOnInit(): any {
    this.mapService.get()
      .subscribe(
        res => this.initMap(res),
        // error => this.errorMessage = <any>error
      );

  }

  public ngAfterViewInit(): any {

  }

  private initMap(options: any): any {
    this.view = new ol.View({
      projection: options.view.projection || 'EPSG:3857',
      center: options.view.center || ol.proj.fromLonLat([-73.5, 47.168464955013], "EPSG:900913"),
      zoom: options.view.zoom || 7
    });

    let layers = [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      new ol.layer.Image({
        // extent: [-13884991, 2870341, -7455066, 6338219],
        source: new ol.source.ImageWMS({
          url: options.layers[0].url,
          params: {'LAYERS': options.layers[0].name},
          // serverType: 'geoserver'
        })
      })
    ];

    this.map = new ol.Map({
      layers: layers,
      target: this.target,
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }),
      view: this.view
    });
  }


}
