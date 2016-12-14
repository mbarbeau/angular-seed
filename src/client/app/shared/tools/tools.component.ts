import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ToolsService } from "./tools.service";

@Component({
  moduleId: module.id,
  selector: 'igo-tools',
  templateUrl: 'tools.component.html',
  styleUrls: ['tools.component.css']
})

export class ToolsComponent implements AfterViewInit, OnInit {

  private contextId: string;
  protected hasLocationTool: boolean = false;

  constructor(private toolsService: ToolsService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => this.contextId = params['id']);
  }

  public ngOnInit(): any {

    this.toolsService.get(this.contextId)
      .subscribe(
        (tools: any) => this.initTools(tools),
          // error => this.errorMessage = <any>error
        );
  }

  public ngAfterViewInit(): any {

  }

  private initTools(tools: any): any {
    if (tools[0] && tools[0].type === "location") {
      this.hasLocationTool = true;
    }
  }

}
