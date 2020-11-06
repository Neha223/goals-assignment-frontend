import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule ,MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ 
      MatButtonModule, 
      MatCheckboxModule, 
      MatToolbarModule, 
      MatIconModule,
      MatTabsModule
    ],
  exports: [ 
      MatButtonModule, 
      MatCheckboxModule, 
      MatToolbarModule, 
      MatIconModule,
      MatTabsModule
     ]
})

export class MaterialModule {

}