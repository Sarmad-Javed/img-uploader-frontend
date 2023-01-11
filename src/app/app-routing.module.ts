import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageUploaderComponent } from './uploader/pages/image-uploader/image-uploader.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'uploader',
    pathMatch:'full'
  },
  {
    path: '',
    component: AppComponent,
   
    // canLoad: [AutoLoginPartialRoutesGuard],
    // canActivate: [AutoLoginPartialRoutesGuard],
    children: [
      {
        path: 'uploader', loadChildren: () =>
          import('./uploader/uploader.module').then((m) => m.UpladerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
