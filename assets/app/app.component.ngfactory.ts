/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './header.component';
import * as import11 from '@angular/router/src/directives/router_outlet';
import * as import12 from './errors/error.component';
import * as import13 from './header.component.ngfactory';
import * as import14 from '@angular/router/src/router_outlet_map';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
import * as import16 from './errors/error.component.ngfactory';
import * as import17 from './errors/error.service';
var renderType_AppComponent_Host:import0.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AppComponent_0_4:import3.AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-app',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new import3.AppComponent();
    this._appEl_0.initComponent(this._AppComponent_0_4,[],compView_0);
    compView_0.create(this._AppComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import9.ComponentFactory<import3.AppComponent> = new import9.ComponentFactory<import3.AppComponent>('my-app',viewFactory_AppComponent_Host0,import3.AppComponent);
const styles_AppComponent:any[] = [];
var renderType_AppComponent:import0.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import3.AppComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _HeaderComponent_2_4:import10.HeaderComponent;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _RouterOutlet_6_5:import11.RouterOutlet;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _ErrorComponent_9_4:import12.ErrorComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','container');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'app-header',(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import13.viewFactory_HeaderComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._HeaderComponent_2_4 = new import10.HeaderComponent();
    this._appEl_2.initComponent(this._HeaderComponent_2_4,[],compView_2);
    compView_2.create(this._HeaderComponent_2_4,[],(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'hr',(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_0,'router-outlet',(null as any));
    this._appEl_6 = new import2.AppElement(6,0,this,this._el_6);
    this._RouterOutlet_6_5 = new import11.RouterOutlet(this.parentInjector.get(import14.RouterOutletMap),this._appEl_6.vcRef,this.parentInjector.get(import15.ComponentFactoryResolver),(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'app-error',(null as any));
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import16.viewFactory_ErrorComponent0(this.viewUtils,this.injector(9),this._appEl_9);
    this._ErrorComponent_9_4 = new import12.ErrorComponent(this.parentInjector.get(import17.ErrorService));
    this._appEl_9.initComponent(this._ErrorComponent_9_4,[],compView_9);
    compView_9.create(this._ErrorComponent_9_4,[],(null as any));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.HeaderComponent) && (2 === requestNodeIndex))) { return this._HeaderComponent_2_4; }
    if (((token === import11.RouterOutlet) && (6 === requestNodeIndex))) { return this._RouterOutlet_6_5; }
    if (((token === import12.ErrorComponent) && (9 === requestNodeIndex))) { return this._ErrorComponent_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ErrorComponent_9_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterOutlet_6_5.ngOnDestroy();
  }
}
export function viewFactory_AppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('C:/Users/IBM_ADMIN/Documents/Projetos/MEAN-Authentication/assets/app/app.component.html',0,import8.ViewEncapsulation.None,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}