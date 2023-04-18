import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PropertiesComponent } from "./properties/properties.component";
import { LandlordsComponent } from "./landlords/landlords.component";
import { InvoicesComponent } from "./invoices/invoices.component";
import { PaymentsComponent } from "./payments/payments.component";
import { RouterModule } from "@angular/router";
import { MenuRoutes } from "./menu.routing";
import { TenantsComponent } from "./tenants/tenants.component";
import { LeasesComponent } from "./leases/leases.component";
import { UtilitiesComponent } from "./utilities/utilities.component";
import { VacateNoticeComponent } from "./vacate-notice/vacate-notice.component";
import { SettingComponent } from "./setting/setting.component";
import { ReportsComponent } from "./reports/reports.component";
import { CreateLandlordsComponent } from "./landlords/create-landlords/create-landlords.component";
import { SharedMaterialModule } from "app/shared/shared-material.module";

@NgModule({
  declarations: [
    PropertiesComponent,
    LandlordsComponent,
    InvoicesComponent,
    PaymentsComponent,
    TenantsComponent,
    LeasesComponent,
    UtilitiesComponent,
    VacateNoticeComponent,
    SettingComponent,
    ReportsComponent,
    CreateLandlordsComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(MenuRoutes),
  ],
})
export class MenuModule {}
