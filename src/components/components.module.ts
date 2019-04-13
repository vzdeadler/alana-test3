import { IonicModule } from 'ionic-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { YourAccountComponent } from './your-account/your-account';
import { YourContactComponent } from './your-contact/your-contact';
import { YourDataComponent } from './your-data/your-data';
@NgModule({
	declarations: [YourAccountComponent,
    YourContactComponent,
    YourDataComponent],
    imports: [IonicModule],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	exports: [
        YourAccountComponent,
        YourContactComponent,
        YourDataComponent
    ]
})
export class ComponentsModule {}
