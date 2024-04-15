import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component {

  score: number = 0;

  constructor(private router: Router) {}

  selectAnswer(answer: string) {
    if (answer === 'B') {
      this.score += 25;
    }
  }

  submitAnswer() {
    this.router.navigate(['/question2'], { state: { score: this.score } });
  }
}

