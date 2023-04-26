import "./BlogStyles.css";

export default function Content() {
  return (
    <div>
      <h2>Steps to follow while submitting a PR (an internal guide)</h2>
      <p>
        When you ask others to review your code, you should have first made sure that it's as good as you can possibly make it on your own.
      </p>
      <p>
        Therefore, to ensure that your PR is of the highest quality, you have to follow the following four steps every time you submit a PR:
      </p>
      <ol>
        <li>Complete the task (build the feature or fix the bug.)</li>
        <li>QA extensively.
          <ul>
            <li>QAing (quality assurance-ing) means you're manually testing your code to make sure your feature works, handles edge cases gracefully, and does not introduce new bugs to the existing codebase. Edge cases are use cases which are different from the exact way your feature is supposed to be used, but could still potentially happen. For instance, what if the user tries to submit a form without the required data? What if the user is running the code on a gigantic monitor?</li>
          </ul>
        </li>
        <li>Open your PR on GitHub and re-read it thoroughly line by line.
          <ul>
            <li>Your PR should be clean. Give descriptive names to your variables, make sure your code is as concise as possible, don't leave random new lines in the code or any extra change that's not needed.</li>
            <li>Your PR should be minimalistic. It should be the smallest possible amount of changes to the code which achieves the task's goal. Nothing less, nothing more.</li>
          </ul>
        </li>
        <li>Submit for review.</li>
      </ol>
    </div >
  );
}