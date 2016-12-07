import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';

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

  map: any; // Ng2ol3Map;
  view: any; // ol.View;
  target: string = 'div-map';
  hasSidebar: boolean;
  zoomDuration: number = 500;
  sidebarCollapsible: boolean = false;

  constructor() {}

  public ngOnInit(): any {
    /*
    this.hasSidebar = this.options.hasOwnProperty("sidebar");
    this.sidebarCollapsible = (this.hasSidebar && this.options.sidebar.hasOwnProperty("collapsible")) ? this.options.sidebar.collapsible : false;
    this.target = this.options.map.target;
    */
    this.view = new ol.View({
      projection: /*this.options.map.view.projection ||*/ 'EPSG:900913',
      center: /*this.options.map.view.center ||*/ ol.proj.fromLonLat([-73.5, 47.168464955013], "EPSG:900913"),
      zoom: /*this.options.map.view.zoom ||*/ 7
    });
  }

  public ngAfterViewInit(): any {
    this.map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
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
