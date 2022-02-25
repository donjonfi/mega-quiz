import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-quiz-index',
  templateUrl: './quiz-index.component.html',
  styleUrls: ['./quiz-index.component.scss']
})
export class QuizIndexComponent implements OnInit {

  @Input() quizList: Quiz[] | undefined;

  @Output() SelectionEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSelectQuiz(index: number) {
    this.SelectionEvent.emit(index);
  }

}
