import { MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatIconModule ,
  MatTabsModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ 
      MatButtonModule, 
      MatCheckboxModule, 
      MatToolbarModule, 
      MatIconModule,
      MatTabsModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule
    ],
  exports: [ 
      MatButtonModule, 
      MatCheckboxModule, 
      MatToolbarModule, 
      MatIconModule,
      MatTabsModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule
     ]
})

export class MaterialModule {

}