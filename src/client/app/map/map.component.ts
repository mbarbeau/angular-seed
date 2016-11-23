import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';

declare let ol: any;

/*declare var module: {
   id: string;
};*/

/*
import { Ng2ol3MapService, Ng2ol3SidebarService } from '../../services/@index';
import { Ng2ol3Map, Ng2ol3Config, Ng2ol3View } from '../../models/@index';
*/

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

    /*this.map = new Ng2ol3Map({
        layers: [],
        target: this.target,
        view: this.view
    });*/
    /*
    //register the map in the injectable mapService
    this.mapService.addMap(this.map);

    this.map.addLayersAndLayerGroups(this.options.map.layers);
    this.mapCreated.emit(this.map);
    this.map.updateSize();*/
  }

  /*
      public zoomIn(): void {
          let zoom = ol.animation.zoom({
              duration: this.zoomDuration,
              resolution: this.map.getView().getResolution()
          });
          this.map.beforeRender(zoom);
          this.map.getView().setResolution(this.map.getView().getResolution() * 0.5);
      }

      public zoomOut(): void {
          let zoom = ol.animation.zoom({
              duration: this.zoomDuration,
              resolution: this.map.getView().getResolution()
          });
          this.map.beforeRender(zoom);
          this.map.getView().setResolution(this.map.getView().getResolution() * 2);
      }

      public toggleSidebar(): void {
          this.sidebarToggled.emit();
      }
  */
}
