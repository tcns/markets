import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'food',
        children: [
          {
            path: '',
            loadChildren: '../main/main.module#MainPageModule'
          }
        ]
      },
      {
        path: 'markets',
        children: [
          {
            path: '',
            loadChildren: '../market-list/market-list.module#MarketListPageModule'
          }
        ]
      },
      {
        path: 'favorite',
        children: [
          {
            path: '',
            loadChildren: '../main/main.module#MainPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/food',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/food',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
