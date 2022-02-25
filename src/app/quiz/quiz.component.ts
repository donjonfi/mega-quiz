import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizList: Quiz[] | undefined;
  selectedQuiz = -1;

  constructor(
    public httpClient: HttpClient,
  ) { }

  ngOnInit() {

    // load quiz

    this.httpClient.get<Quiz[]>('./assets/quiz.json').subscribe(
      // this.httpClient.get<Quiz[]>('./assets/quiz32.json').subscribe(
      quizList => {
        this.quizList = quizList;
      });
  }

  onSelectQuiz(index: number) {
    this.selectedQuiz = index;
  }


}
