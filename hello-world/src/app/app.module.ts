import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizCardComponent } from './components/template/quiz-card/quiz-card.component';
import { HeaderComponent } from './components/template/header';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavigationComponent } from './components/template/navigation/navigation.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizComponent } from './components/quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { QuizCardService } from './components/template/quiz-card/quiz-card.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizCardComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule, 
    FormsModule,
    MatProgressBarModule
  ],
  providers: [QuizCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
