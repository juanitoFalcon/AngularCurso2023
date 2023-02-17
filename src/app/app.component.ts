import { Component, OnInit } from '@angular/core';
interface Targeta{
   titulo:String;
   subtitulo:String;
   numero?:number

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiPrimerApp';
  public ArregloTragetas: Targeta []=[];

ngOnInit(): void {
  this.ArregloTragetas=[
    {titulo:"Video 1", subtitulo:"Subtitulo video 1"},
    {titulo:"Video 2", subtitulo:"Sbutitulo video 2"},
    {titulo:"Video 3", subtitulo:"Subtitulo video 3"}
  ]
}
}


