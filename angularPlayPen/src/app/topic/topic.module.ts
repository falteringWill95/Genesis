import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentPipe } from './pipes/exponent.pipe';
import { AddPipe } from './pipes/add.pipe';
import { JsonPipePipe } from './pipes/json-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [InputComponent, PipesComponent, ExponentPipe, AddPipe, JsonPipePipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    InputComponent
  ]
})
export class TopicModule { }