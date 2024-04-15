import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component {

  score: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.score = navigation.extras.state.score;
    }
  }

  selectAnswer(answer: string) {
    if (answer === 'C') {
      this.score += 25;
    }
  }

  submitAnswer() {
    // Display the final score
    alert(`Your final score is: ${this.score}`);
  }
}
