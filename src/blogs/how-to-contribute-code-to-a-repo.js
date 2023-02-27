import "./BlogStyles.css";

export default function Content() {
  return (
    <div>
      <h2>First, checkout the repo</h2>
      <p>
        First, you'll need to clone the repo to your computer. You can do this by running the following command in your terminal: <code>git clone [repo-url]</code>.
        You find the repo URL by clicking on the <code>Code</code> button on the repo page on GitHub.
        Then, you'll need to navigate to the repo on your computer. You can do this by running the following command in your terminal: <code>cd [repo-name]</code>.
        Once that's done, make sure you can run the code:
        First, install the dependencies: <code>npm install</code>
        Then, run the code: <code>npm start</code>
        If you see the code running in your browser, you're good to go! It should be running in the <code>localhost:3000</code> URL.
      </p>
      <p>
        If you've pushed code to your own repo in the past, you probably only had one single branch, called <code>master</code> or <code>main</code>. But when you contribute to a repo, you'll often have to work with multiple branches. This is because you'll be working on a feature, and you'll want to keep the <code>master</code> branch clean and stable. So you'll create a new branch for your feature, and then when you're done, you'll merge it into the <code>master</code> branch.
      </p>
      <p>
        Here is how you can create a new branch and submit a PR:
        First, checkout the <code>master</code> branch: <code>git checkout master</code>
        Then, pull the latest changes from the <code>master</code> branch: <code>git pull</code>
        Then, create a new branch for your feature: <code>git checkout -b my-feature</code>
        You'll want to call this branch something that describes your feature. For example, if you're working on a new feature called "Add a new blog post", you could call your branch <code>add-new-blog-post</code>.
      </p>
      <p>
        Then, here is how you open your PR on GitHub:
        First, push your branch to GitHub: <code>git push</code>
        You'll probably be met with an error message that tells you there is no origin for your branch. If so, you'll need to run the command that comes up and is suggested to you by the error message when you do so.
        Then, go to the repo on GitHub and click on the <code>Compare & pull request</code> button.
        Then, click on the <code>Create pull request</code> button.
        Then, add a title for your PR. The title should be a short description of your feature. For example, if you're working on a new feature called "Add a new blog post", you could call your PR <code>Add new blog post</code>.
        Then, click on the <code>Create pull request</code> button again.
      </p>
      <p>

      </p>
    </div >
  );
}
