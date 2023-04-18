import { Routes } from "@angular/router";
import { AuthGuard } from "app/shared/services/auth/auth.guard";
import { InvoicesComponent } from "./invoices/invoices.component";
import { LandlordsComponent } from "./landlords/landlords.component";
import { LeasesComponent } from "./leases/leases.component";
import { PaymentsComponent } from "./payments/payments.component";
import { PropertiesComponent } from "./properties/properties.component";
import { ReportsComponent } from "./reports/reports.component";
import { SettingComponent } from "./setting/setting.component";
import { TenantsComponent } from "./tenants/tenants.component";
import { UtilitiesComponent } from "./utilities/utilities.component";
import { VacateNoticeComponent } from "./vacate-notice/vacate-notice.component";



export const MenuRoutes: Routes = [
  
    {
        path: "properties",
        component: PropertiesComponent,
        data: { title: 'Properties', breadcrumb: 'Properties', canActivate:[AuthGuard],roles:['Admin']},
        
      },
      {
        path: "landlords",
        component: LandlordsComponent,
        data: { title: 'Landlords', breadcrumb: 'Landlords', canActivate:[AuthGuard],roles:['Tenant']}
      },
      
      
      {
        path: "invoices",
        component: InvoicesComponent,
        data: { title: 'Invoices', breadcrumb: 'Invoices', canActivate:[AuthGuard],roles:['Admin']}
      },
      {
        path: "payments",
        component: PaymentsComponent,
        data: { title: 'Payments', breadcrumb: 'Payments', canActivate:[AuthGuard],roles:['Tenant']}
      },
      {
        path: "tenants",
        component: TenantsComponent,
        data: { title: 'Tenants', breadcrumb: 'Tenants', canActivate:[AuthGuard],roles:['Admin']}
      },
      {
        path: "leases",
        component: LeasesComponent,
        data: { title: 'Leases', breadcrumb: 'Leases', canActivate:[AuthGuard],roles:['Admin']}
      },
      {
        path: "utilities",
        component: UtilitiesComponent,
        data: { title: 'Utilities', breadcrumb: 'Utilities', canActivate:[AuthGuard],roles:['Admin']}
      },
      {
        path: "vacate-notice",
        component: VacateNoticeComponent,
        data: { title: 'Vacate Notice', breadcrumb: 'Vacate Notice', canActivate:[AuthGuard],roles:['Admin']}
      },
      {
        path: "settings",
        component: SettingComponent,
        data: { title: 'Settings', breadcrumb: 'Settings', canActivate:[AuthGuard],roles:['Admin']}
      },
      {
        path: "reports",
        component: ReportsComponent,
        data: { title: 'Reports', breadcrumb: 'Reports', canActivate:[AuthGuard],roles:['Admin']}
      },
      
];
