import { AccueilComponent } from './accueil/accueil.component';
import { AnimationComponent } from './animation/animation.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { GameComponent } from './quiz/game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { QuestionComponent } from './quiz/question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizIndexComponent } from './quiz/quiz-index/quiz-index.component';
import { SolutionsComponent } from './quiz/solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageNotFoundComponentComponent,
    QuizComponent,
    QuestionComponent,
    QuizIndexComponent,
    SolutionsComponent,
    GameComponent,
    AnimationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
