import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewLessonPage } from './new-lesson';

@NgModule({
  declarations: [
    NewLessonPage,
  ],
  imports: [
    IonicPageModule.forChild(NewLessonPage),
  ],
})
export class NewLessonPageModule {}
