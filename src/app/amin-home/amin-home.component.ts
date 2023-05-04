import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amin-home',
  templateUrl: './amin-home.component.html',
  styleUrls: ['./amin-home.component.css']
})
export class AminHomeComponent implements OnInit {

  ngOnInit() {
    var hamburger = document.querySelector(".hamburger");
    if (hamburger) {
      hamburger.addEventListener("click", function () {
        document.querySelector("body")?.classList.toggle("active");
      })
    }
  }
}
