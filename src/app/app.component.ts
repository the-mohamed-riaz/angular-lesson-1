import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'app-lesson1';
  password = 'a';
  param1 = false;
  param2 = false;
  param3 = false;
  onButtonClick() {
    // console.log('Button was clicked!');
    this.password = 'new password';
  }
  onCheckBox1Click() {
    // this.param1 = !this.param1;
    console.log('use letters', this.param1);
  }
  onCheckBox2Click() {
    this.param2 = !this.param2;
    console.log('use numbers', this.param2);
  }
  onCheckBox3Click() {
    this.param3 = !this.param3;
    console.log('use symbols', this.param3);
  }

  onCheckBoxClick(value: any) {
    console.log(value.target.id + ' was clicked');
    let id: string = value.target.id;
    if (id) {
      if (id === 'checkbox1') {
        this.param1 = !this.param1;
        this.onCheckBox1Click();
      } else if (id === 'checkbox2') {
        this.param2 = !this.param2;
      } else if (id === 'checkbox3') {
        this.param3 = !this.param3;
      } else {
        console.log('no id found');
      }
    }
  }
  getValue() {
    return this.password + '2';
  }
}
