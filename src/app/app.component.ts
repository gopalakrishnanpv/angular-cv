import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSpinner = false;

  ngOnInit() {
    setTimeout(() => {
      this.showSpinner = false;

    },
      1000);
    this.showSpinner = true;
  }

  title = 'Gopalakrishnan-PV';
  pdfSrc = "https://firebasestorage.googleapis.com/v0/b/gopalakrishnan-pv.appspot.com/o/Gopalakrishnan_Automation_Testing_CV.pdf?alt=media&token=4d497b83-d1a2-4d52-a1ea-8863ff6f4954";
}
