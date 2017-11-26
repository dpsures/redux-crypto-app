import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { 
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
} from "@angular/material";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
