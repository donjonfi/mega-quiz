import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnChanges {

  curQuestion = 0;
  nbQuestion = 0;

  @Input() quiz: Quiz | undefined;
  @Output() ExitGameEvent = new EventEmitter<void>();

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.code === "Period") {
      this.nextQuestion();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.quiz) {
      this.nbQuestion = this.quiz.questions.length;
   }
    
  }



  previousQuestion() {
    this.curQuestion = this.curQuestion - 1;
    if (this.curQuestion < 0) {
      this.curQuestion = 0;
    }
  }

  nextQuestion() {
    this.curQuestion = this.curQuestion + 1;
    if (this.curQuestion > this.nbQuestion) {
      this.curQuestion = this.nbQuestion;
    }
  }

  onExitGame() {
    this.ExitGameEvent.emit();
  }

}
