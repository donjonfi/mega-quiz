import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question | undefined;
  @Input() assets_folder: string | undefined;
  @Input() questionNumber: Number = 0;

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  get isOptNoLetter() {
    return (this.question && this.question.options && this.question.options.includes("noletter"));
  }

  get isOpt2col() {
    console.log("2 col : ", this.question && this.question.options && this.question.options.includes("2col"));

    return (this.question && this.question.options && this.question.options.includes("2col"));
  }

  get isOptPicRight() {
    return (this.question && this.question.options && this.question.options.includes("picright"));
  }

  constructor() {

  }

  ngOnInit() {

  }

}
