import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeaturesPageRoutingModule } from './features-routing.module';
import { TabsPage } from './tabs/tabs.page';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FeaturesPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class FeaturesPageModule {}
