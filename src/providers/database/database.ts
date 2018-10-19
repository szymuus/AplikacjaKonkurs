import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Http } from '@angular/http';
import { Time } from '@angular/common';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor( 
   public http: Http,
   public storage: SQLite
  )
    //tworzenie tabeli z planem
  {
      if(!this.isOpen){
        this.storage = new SQLite();
        this.storage.create({name: "plan.db", location:"default"}).then((db:SQLiteObject)=>{
          this.db = db;
          db.executeSql("CREATE TABLE IF NOT EXISTS plan(id INTENGER PRIMARY KEY AUTOINCREMENT, dzien TEXT NOT NULL przedmiot TEXT NOT NULL,klasa TEXT NOT NULL,godzina_start TEXT NOT NULL,godzina_koniec TEXT NOT NULL)",[])
          this.isOpen = true;
        }).catch((error) =>{
            console.log(error);
        })
      }
}
  //dodawanie lekcji do bazy
    dodajLekcje(dzien: string,przedmiot: string,klasa: string,godz_start: string ,godz_koniec: string){
      return new Promise ((resolve, reject) =>{
        let sql = "INSERT INTO plan(dzien,przedmiot,klasa,godz_start,godz_koniec) VALUES (?,?,?,?,?)";
        this.db.executeSql(sql,[dzien,przedmiot,klasa,godz_start,godz_koniec]).then((data)=>{
          resolve(data);
        }, (error)=> {
          reject(error);
        });
      });
    }
//pokazywanie lekcji
    pokazLekcje(){
      return new Promise((resolve, reject)=>{
        this.db.executeSql("SELECT * FROM plan",[]).then((data)=>{
          let planLekcji = [];
          if(data.rows.length > 0){
              for( var i = 0; i < data.rows.length; i++){
                planLekcji.push({
                  id: data.rows.item(i).id,
                  dzien: data.rows.item(i).dzien,
                  przedmiot: data.rows.item(i).przedmiot,
                  klasa: data.rows.item(i).klasa,
                  godzina_start: data.rows.item(i).godzina_start,
                  godzina_koniec: data.rows.item(i).godzina_koniec,
                });
              }

            }
            resolve(planLekcji);
          }, (error)=>{
            reject(error);
          })
       })
      }
    }
