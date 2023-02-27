import "./BlogStyles.css";

export default function Content() {
  return (
    <div>
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
        Then, go to the repo on GitHub and click on the <code>Pull Request</code> tab.
        Then, go to the repo on GitHub and click on the <code>Compare & pull request</code> button.
        Then, click on the <code>Create pull request</code> button.
        Then, add a title and description for your PR.
        Then, click on the <code>Create pull request</code> button.    
      </p>
    </div>
  );
}
