# Nanotechnology Quiz

This is a quiz game that you can test your knowledge in the field of Nanotechnology. In the first page you can find the instruction about how many questions are in the quiz and how many questions you need to answer correctly to win the quiz. By tracking your scores over time, you can challenge yourself to improve your performance and continue learning.

![Responsice Mockup](readme/responsive.png)

The live link can be found here - <https://teman67.github.io/Project_2/index.html>

### Existing Features

- __The welcome page__

  - On the welcome page, you'll find an instruction about the game. It is clear for users that they need to answer at least 6 question correctly to win the game.
  - Users can see what will happen after ending the game, including playing a song, showing a chicken icon and a table that record their attempts.
  - Users can go to the quiz page by clicking the "Go to Quiz Page" button.

![Welcome Page](readme/welcome_page.png)

- __The Quiz Page__
  
  - At the top of the Quiz page there is a button that user can go back to the welcome page.
  - Here, the questions are displayed and a user can select the correct answer from 5 available options.
  - If the user select the correct answer then the Correct score increases otherwise the Incorrect score increases.
  - When the user answers to 10 questions, if they answer to at least 6 questions correctly, then a happy song plays,a happy chicken dances and the background color changes to green. While, if the user cannot win the quiz a sad song plays, a sad chicken shows at the bottom of the page and the background color changes to red.
  - The song is muted and the user can unmute the song.
  - A table is also displayed after each participation and the user can track his/her scores.
  - Each time that the user Restart the quiz, the questions are suffled.
  
![Quiz Page](readme/quiz_page.png)
![Win Quiz](readme/win_quiz.png)
![Lose Quiz](readme/lose_quiz.png)

## Testing

- I have checked the website on different screen sizes and it works well.
- The webpage works well when I used Google chrome, Firefox, Opera, and Microsoft Edge web browsers.
- The outcome of the quiz is always correct and I tested different scenarios to confirm it.
- I confirm that the quiz questions are easy to read and the contrast is good enough.

### Validator Testing

- HTML
  - No errors were returned when passing through the official W3C Markup Validator [W3C_validator](https://validator.w3.org/).
- CSS
  - No errors were found when passing through the official W3C CSS Validator [Jigsaw validator](https://jigsaw.w3.org/) .
- Javascript
  - No errors were found when passing through the official Jshint Validator [JSHint](https://jshint.com/).

- The Google Chrome lighthouse tool was used to check the website:
  - ![Scores for Quiz page](readme/scores.png)

### Fixed Bugs

- When a user refreshed the page the scores in the table did not clean. Using localStorage.removeItem("quizScores") solved the isuue.
- The songs did not start from 0 second when a user restarted the quiz. Using happyMusic.currentTime = 0; sadMusic.currentTime = 0 in resetQuiz() function solved the isuue.

## Deployment

- GitHub pages
  - The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://teman67.github.io/Project_2/index.html>

- Local Clone
  - Log in to GitHub and locate GitHub Repository Project_2 [Project 2](https://github.com/teman67/Project_2)
  - Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
  - Open Git Bash
  - Change the current working directory to the location where you want the cloned directory to be made.
  - Type git clone and then paste The URL copied in the step 2.
  - Press Enter and your local clone will be created.

### Content

- The image of the quiz page was tooken from google images.
- The chicken icons were downloaded from google with .gif extention and then converted to .mp4 to reduce the size.
- The songs were downloaded from [Pixabay](https://pixabay.com).
- The Fisher-Yates algorithm to shuffle the questions was obtained from [Fisher-Yates Shuffle Algorithm](https://saturncloud.io/blog/how-to-randomize-shuffle-a-javascript-array/)
- The Readme.md template was obtained from Code Institute [Code Institute](https://github.com/Code-Institute-Org/ci-full-template).
