import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: 'link' | 'dropDown' | 'icon' | 'separator' | 'extLink';
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;  // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  iconMenu: IMenuItem[] = [
    {
      name: 'Dashboard',
      state: 'dashboard/analytics',
      type: 'link',
      icon: 'dashboard',
    },
    
    {
      
      type: 'separator'
    },
    {
      name: 'Landlords',
      state: 'menu/landlords',
      type: 'link',
      icon: 'people_outline',
    },
    {
      name: 'Properties',
      state: 'menu/properties',
      type: 'link',
      icon: 'business',
    },
    {
      name: 'Tenants',
      state: 'menu/tenants',
      type: 'link',
      icon: 'group_add',
    },
    {
      name: 'Leases',
      state: 'menu/leases',
      type: 'link',
      icon: 'gavel',
    },
    {
      name: 'Utilities',
      state: 'menu/utilities',
      type: 'link',
      icon: 'pool',
    },
    {
      name: 'Invoices',
      state: 'menu/invoices',
      type: 'link',
      icon: 'receipt',
    },
    {
      name: 'Payments',
      state: 'menu/payments',
      type: 'link',
      icon: 'payment',
    },
    {
      name: 'Vacate Notice',
      state: 'menu/vacate-notice',
      type: 'link',
      icon: 'lock_open',
    },
    {
      name: 'Settings',
      state: 'menu/settings',
      type: 'link',
      icon: 'settings',
    },
    {
      name: 'Reports',
      state: 'menu/reports',
      type: 'link',
      icon: 'account_tree',
    },
    {
      
      type: 'separator'
    },
    
    
    // {
    //   name: 'PAGES',
    //   type: 'separator'
    // },
    // {
    //   name: 'SESSIONS',
    //   type: 'dropDown',
    //   tooltip: 'Pages',
    //   icon: 'view_carousel',
    //   sub: [
    //     { name: 'SIGNUP', state: 'sessions/signup' },
    //     { name: 'SIGNIN', state: 'sessions/signin' },
    //     { name: 'NOTFOUND', state: 'sessions/404' },
    //   ]
    // },
    // {
    //   name: 'OTHERS',
    //   type: 'dropDown',
    //   tooltip: 'Others',
    //   icon: 'blur_on',
    //   sub: [
    //     { name: 'GALLERY', state: 'others/gallery' },
    //     { name: 'PRICINGS', state: 'others/pricing' },
    //     { name: 'USERS', state: 'others/users' },
    //     { name: 'BLANK', state: 'others/blank' }
    //   ]
    // },
    // {
    //   name: 'Pro',
    //   type: 'extLink',
    //   icon: 'upgrade',
    //   state: 'http://matx-angular.ui-lib.com/'
    // },
    // {
    //   name: 'DOC',
    //   type: 'extLink',
    //   tooltip: 'Documentation',
    //   icon: 'library_books',
    //   state: 'http://demos.ui-lib.com/matx-doc/'
    // }
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
  constructor() { }

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    // switch (menuType) {
    //   case 'separator-menu':
    //     this.menuItems.next(this.separatorMenu);
    //     break;
    //   case 'icon-menu':
    //     this.menuItems.next(this.iconMenu);
    //     break;
    //   default:
    //     this.menuItems.next(this.plainMenu);
    // }
  }
}
