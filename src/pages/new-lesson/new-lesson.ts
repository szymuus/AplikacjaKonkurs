import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LessonsService } from '../../services/lessons.service';
import {NavController} from 'ionic-angular';
import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';



@IonicPage()
@Component({
  selector: 'page-new-lesson',
  templateUrl: 'new-lesson.html',
})
export class NewLessonPage {
  

  constructor(private lessonsService: LessonsService, private navCtrl: NavController, private sqlLite: SQLite,private database : DatabaseProvider) {
     
  }
  
  dodajLekcje(){
    this.database.dodajLekcje("poniedzialek","polski", "122","9:35","10:00").then((data)=>{
      console.log(data);
    }, (error)=>{
      console.log(error);
    })
  }

 
  
  

}
