import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrowComponent } from './arrow/arrow.component';
import { TransferFunctionComponent } from './transfer-function/transfer-function.component';
import { TwoInputOperatorComponent } from './two-input-operator/two-input-operator.component';
import { OneInputOperatorComponent } from './one-input-operator/one-input-operator.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowComponent,
    TransferFunctionComponent,
    TwoInputOperatorComponent,
    OneInputOperatorComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
