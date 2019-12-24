import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { QuizComponent } from './quiz/quiz.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'animation',
    component: AnimationComponent,
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
