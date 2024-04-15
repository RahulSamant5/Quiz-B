import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {

  score: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.score = navigation.extras.state.score;
    }
  }

  selectAnswer(answer: string) {
    if (answer === 'A') {
      this.score += 25;
    }
  }

  submitAnswer() {
    this.router.navigate(['/question3'], { state: { score: this.score } });
  }
}
