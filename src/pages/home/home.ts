import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { NewLessonPage } from '../new-lesson/new-lesson';
import { LessonsService } from '../../services/lessons.service';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public lessonsServices: LessonsService,private alertCtrl: AlertController,public localNotification: PhonegapLocalNotification, private sqlLite: SQLite,private database : DatabaseProvider) {
     
    }
    //pokazuje lekcje
    ionViewWillEnter(){
      
      
      
    }
  //przenosi do strony gdzie dodaje sie lekcje
  onLoadNewLesson(){
    this.navCtrl.push(NewLessonPage);
  }
  //pokazanie pierwszego alertu przycisk cos
  
  //pokazuej lekcje
  pokazLekcje(){
    this.database.pokazLekcje().then((data)=>{
      console.log(data);
    }, (error)=>{
      console.log(error);
    })

  }

    
  
      
    }
  
 


