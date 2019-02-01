import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public Editor = ClassicEditor;
  public editorValue = {
    value: '<h1>Sample Heading</h2><p>This is a sample terms and condition</p>'
  }

  constructor() { }

  ngOnInit() {

  }
}
