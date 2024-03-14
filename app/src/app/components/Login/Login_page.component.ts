// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Login_page',
  templateUrl: './Login_page.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Login_pageComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_QDFF6T8RzRMBg9GD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_QDFF6T8RzRMBg9GD(bh) {
    try {
      bh = this.sd_8Vijll1HoU6icyfH(bh);
      //appendnew_next_sd_QDFF6T8RzRMBg9GD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QDFF6T8RzRMBg9GD');
    }
  }

  login(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_8piGg3eSnQvSr4ce(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TxtnvKFmPqUq2akN');
    }
  }
  //appendnew_flow_Login_pageComponent_start

  sd_8Vijll1HoU6icyfH(bh) {
    try {
      bh = this.sd_ZvSaBBcWVo2ZWEzr(bh);
      //appendnew_next_sd_8Vijll1HoU6icyfH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Vijll1HoU6icyfH');
    }
  }

  sd_ZvSaBBcWVo2ZWEzr(bh) {
    try {
      const page = this.page;
      if (!page.system.oauthService.isLoggedIn) {
        return;
      }
      bh = this.sd_UdaljMuDoJlSUa0Y(bh);
      //appendnew_next_sd_ZvSaBBcWVo2ZWEzr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZvSaBBcWVo2ZWEzr');
    }
  }

  async sd_UdaljMuDoJlSUa0Y(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(null);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_UdaljMuDoJlSUa0Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UdaljMuDoJlSUa0Y');
    }
  }

  sd_8piGg3eSnQvSr4ce(bh) {
    try {
      const page = this.page;
      page.system.oauthService.login();
      //appendnew_next_sd_8piGg3eSnQvSr4ce
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8piGg3eSnQvSr4ce');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_Login_pageComponent_Catch
}
