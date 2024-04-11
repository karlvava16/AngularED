import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  boldText = false;
  italicText = false;
  underlineText = false;
  caseTextActive = false;
  caseText = 1;

  boldAction() {
    this.boldText = !this.boldText;
  }

  italicAction() {
    this.italicText = !this.italicText;
  }

  underlineAction() {
    this.underlineText = !this.underlineText;
  }

  switchTextCase()  {
    this.caseText = (this.caseText % 4) + 1;

    if (this.caseText > 1)
      this.caseTextActive = true;
    else
      this.caseTextActive = false;
  }

  getTextCase() {
    switch (this.caseText) {
      case 1:
        return { 'text-transform': 'none' };
      case 2:
        return { 'text-transform': 'capitalize' };
      case 3:
        return { 'text-transform': 'uppercase' };
      case 4:
        return { 'text-transform': 'lowercase' };
      default:
        return { 'text-transform': 'none' }; // Default case
    }
  }

}
