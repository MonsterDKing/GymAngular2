import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [ImagenPipe, FiltroPipe],
  imports: [],
  exports:[
    ImagenPipe,
    FiltroPipe
  ]
})
export class PipesModule { }
