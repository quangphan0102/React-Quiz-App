1. Welcome to my GitHub, and today I introduce the **Quiz App built with React.js!** 
- This project built from scratch with the concepts that i got: Components, State, Props and also Hooks
- This project developed on purpose to deep dive into the **useEffect** hooks, how this hook will be handle with **Side-Effect** when you work with React.
- Also another hook called useCallback to memoized the function when the first time the React app was render the UI to client-side View.

2. The logic of this Quiz App is:
   - When the use choose these answers that App provide will be persist in the state to find the correct answer in the object that questions.js contained.
   - Compare the answers that use picked and compare with questions's object (in the answers's array the first index answer always the correct answer).
   - Setting up for the timer with **useEffects hook** into the QuestionTimer's Component and create new 2 timeout and interval.
   - **In QuestionTimer Component:**
     + Will be excute the timeout after 10s use don't answer question will return null into the state.
     + Second, interval timer will be handle for the progress bar value for count down.
   - Handled use clicked the answer for styling.
   - Calculated the answers, skipped answers, correct and incrorrect answers
   - Collect all the calculate perform and spread all into Summary Component showing stats and questions that use answered.

3. Quiz App pics:
![image](https://github.com/user-attachments/assets/1c244803-89f0-4ef4-9527-0aa319e50616)
![image](https://github.com/user-attachments/assets/87fed84a-7784-42ff-8bf4-85d28eb78473)
![image](https://github.com/user-attachments/assets/d9791d0d-4575-49db-a5c2-aeff52abe5da)
![image](https://github.com/user-attachments/assets/73dec3a1-f01b-48a7-9e6b-5cdf7a6fd710)
![image](https://github.com/user-attachments/assets/e70cd26c-1bb9-4a0f-9b17-faf13b14858e)


