import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit, OnChanges {

  @Input() quiz: Quiz | undefined;

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  hide = true;

  isCollapsed: boolean[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isCollapsed = [];
    if (this.quiz?.questions && this.quiz.questions.length > 0) {
      // init array
      this.isCollapsed = new Array(this.quiz.questions.length);
      for (let index = 0; index < this.isCollapsed.length; index++) {
        this.isCollapsed[index] = true;
      }
    }
  }

  SwitchHide() {
    this.hide = !this.hide;
  }

  isPicSol(index: number) {
    let retVal = false;
    if (this.quiz) {
      const q = this.quiz.questions[index];
      retVal = (q.options && q.options.includes("picsol"));
    }
    return retVal;
  }

  getSolution(index: number) {
    if (this.quiz) {
      const q = this.quiz.questions[index];
      if (typeof q.solution === 'number' && q.propositions && q.propositions.length > 0) {
        return this.alphabet[q.solution] + '. (' + q.propositions[q.solution] + ')';
      } else {
        return q.solution;
      }
    } else {
      return "???"
    }

  }

}
