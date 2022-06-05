import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from "../../../../../../Santel/ClientApp/src/app/back-wrapper/components/login/login.component";
import { WebSelectorComponent } from "../../../../../../Santel/ClientApp/src/app/back-wrapper/components/web-selector/web-selector.component";
//import { SharedModule } from "../../../../../../Santel/ClientApp/src/app/shared/shared.module";
import { DomSanitizer , Title} from '@angular/platform-browser';
import { TemplateModule } from "../../../../../../Santel/ClientApp/src/app/template/template.module";
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AntDesignSharedModulesModule } from "../../../../../../Santel/ClientApp/src/app/ant-design-shared-modules/ant-design-shared-modules.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService, SignalRService } from "../../../../../../Santel/ClientApp/src/app/services/auth.service";
import { CommonModule } from '@angular/common';
import { HttpRequestService } from "../../../../../../Santel/ClientApp/src/app/services/http-request.service";
import { WebSiteService } from "../../../../../../Santel/ClientApp/src/app/services/website.service";
import { ThemeService } from "../../../../../../Santel/ClientApp/src/app/services/theme.service";
import { AppInitializerProvider, AppInitializerProvider2 } from '../../../../../../Santel/ClientApp/src/app/services/app-initializer-provider';

const routes: Routes = [
  { path: '', redirectTo: 'webselector', pathMatch: 'full' },
  {
    path: 'AccDB'.toLowerCase(), loadChildren: () => import('../../../../../../Santel/ClientApp/src/app/account-manager/account-manager.module').then(m => m.AccountManagerModule),
    data: {
      key: 'AccDB', label: 'مدیریت کاربران', isAcc: true
    }
  },
  {
    path: 'admin'.toLowerCase(), loadChildren: () => import('./back.module').then(m => m.BackModule),
    data: { key: 'DB', label: ' مدیریت وب سایت' }
  },
  { path: 'webselector', component: WebSelectorComponent },
  { path: 'login', component: LoginComponent }
];





@NgModule({
  declarations: [
    LoginComponent, WebSelectorComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AntDesignSharedModulesModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  providers: [AuthService, NzNotificationService, SignalRService, HttpRequestService, WebSiteService,
    //AppInitializerProvider(),
 
  ]
})
export class BackWrapperModule {
  constructor(wss: WebSiteService, themeService: ThemeService, domSanitizer: DomSanitizer, auth: AuthService, router: Router, titleService:Title) {
    AppInitializerProvider2(themeService, domSanitizer, auth);
    wss.appConfig = {
      showWaterMark:true,
      routes: routes,
      description: '',
      fullName: '',
      logInDesc: 'slicto',
      urlPrefix: '/management/',
    }
    titleService.setTitle("مدیریت - " + 'slicto');
  }

}
