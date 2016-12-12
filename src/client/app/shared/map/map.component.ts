import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import { MapService } from "./map.service";

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
    this.mapService.getView()
      .subscribe(
        (options: any) => {
          this.view = new ol.View({
            projection: options.view.projection || 'EPSG:3857',
            center: options.view.center || ol.proj.fromLonLat([-73.5, 47.168464955013], "EPSG:900913"),
            zoom: options.view.zoom || 7
          });
        },
        // error => this.errorMessage = <any>error
      );

      this.mapService.getLayers()
        .subscribe(
          (layers: ol.layer.Base[]) => this.initMap(layers),
          // error => this.errorMessage = <any>error
        );
  }

  public ngAfterViewInit(): any {

  }

  private initMap(layers: any): any {
    // TODO: garder l'information dans un service
    this.map = new ol.Map({
      layers: layers,
      target: this.target,
      controls: ol.control.defaults({
        attributionOptions: ({
          collapsible: false
        })
      }),
      view: this.view
    });

  }


}
