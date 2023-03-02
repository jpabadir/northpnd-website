import "./BlogStyles.css";

export default function Content() {
  return (
    <div>
      <head>
        <h1>Getting Started with Github</h1>
      </head>
      <p>
        When working with others, an organized platform where everyone can collaborate together is key, and that's exactly what GitHub can provide.
        For people who has never used or seen GitHub before, phrases like "pushing" or "pulling" may seem alien and unfamiliar, but after reading this article, they'll just be another everyday hassle.
      </p>
      <p>
        Before getting to all that however, first, there are some things you must do before you can start your work on GitHub:
      </p>
      <header>
        <h2>Creating a GitHub Account</h2>
      </header>
      <img src="/publicassets/Getting Started With GitHub Images/GitHub.png" height="300" alt=""></img>
      <p>
        Before you can start working on GitHub, you need a GitHub account to allow you to access the repositories you wish to edit.
        Creating a GitHub account is not a difficult task however, and you can do so just by going to the <a href="https://github.com" target="_blank" rel="noreferrer">GitHub Website</a> and clicking "Sign Up".
        If you are experiencing troubles, you can take a look at this quick, more in depth tutorial <a href="https://learn.microsoft.com/en-us/visualstudio/version-control/git-create-github-account?view=vs-2022" target="_blank" rel="noreferrer"> here</a>.
      </p>
      <header>
        <h2>Downloading Git</h2>
      </header>
      <img src="/publicassets/Getting Started With GitHub Images/git-logo.png" height="250" alt=""></img>
      <p>
        The next step towards working with GitHub is downloading Git, which is a control system that is usually used for coordinating work among programmers collaboratively.
        To download git, go to their website <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">here</a> and download the latest source release for your system.
        For more set up instructions, visit google or <a href="https://github.com/git-guides/install-git" target="_blank" rel="noreferrer">this website</a> if needed.
        <img src="/publicassets/Getting Started With GitHub Images/Downloading_Git.jpg" height="300" alt=""></img>
      </p>
      <header>
        <h2>VSCode</h2>
      </header>
      <img src="/publicassets/Getting Started With GitHub Images/VSCode.jpg" height="250" alt=""></img>
      <header>
        <h3>Downloading VSCode</h3>
      </header>
      <p>
        Now all we need is a coding IDE to get started.
        VSCode is the recommanded IDE to use, as it is compatible with all kinds of coding languages, and is quite simple to use.
        To get started, visit their website <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">here</a>, and just like before with Git, download the latest version and follow the executable instructions to finish.
        For further information, a useful guide website is linked <a href="https://code.visualstudio.com/docs/setup/windows" target="_blank" rel="noreferrer">here</a>.
      </p>
      <header>
        <h3>Setting Up VSCode</h3>
      </header>
      <p>
        Now that we have VSCode downloaded and opened, all that is left to do is set it up to be ready to work with GitHub.
        The simplest way to get started pushing and pulling between VSCode and GitHub is by installing the extension "GitHub Pull Requests and Issues".
        You can find this by searching for the extension in the Extensions Marketplace in VSCode.
      </p>
      <p>
        <img src="/publicassets/Getting Started With GitHub Images/Extensions1.jpg" height="200" alt=""></img>
        <img src="/publicassets/Getting Started With GitHub Images/Extensions2.jpg" height="200" alt=""></img>
        <img src="/publicassets/Getting Started With GitHub Images/Extensions3.jpg" height="200" alt=""></img>
      </p>
      <header>
        <h2>Cloning the Repository</h2>
      </header>
      <p>
        Once the extension is downloaded, we can finally start working on some code.
        The first step towards that is going to be getting access to that code in the first place.
        To do this, we do something called a <code>Git: Clone</code>.
        First, we need the link to the code that you want to edit and clone.
        To get this, go to the repository in GitHub, and copy the HTTPS link under the green "Code" button.
      </p>
      <p>
        <img src="/publicassets/Getting Started With GitHub Images/Link.jpg" height="300" alt=""></img>
      </p>
      <p>
        Now going back to VSCode, open the command palette with the shortcut Ctrl + Shift + P or by clicking the option under "View".
      </p>
      <p>
        <img src="/publicassets/Getting Started With GitHub Images/Cloning.jpg" height="300" alt=""></img>
      </p>
      <p>
        Now run the command <code>Git: Clone</code> and paste in the link that you just copied.
      </p>
      <p>
        <img src="/publicassets/Getting Started With GitHub Images/GitClone.jpg" width="800" alt=""></img>
      </p>
      <p>
        <img src="/publicassets/Getting Started With GitHub Images/Paste.jpg" width="800" alt=""></img>
      </p>
      <p>
        Now after running the command and pasting the link to the repository,
        you will be prompted to select a local folder where you want to clone the
        repository. Once you have selected a folder, the cloning process will begin
        and you will be able to see the progress in the VSCode terminal.
      </p>
      <p>
        <img></img>
      </p>
      <p>
        Once the cloning process is complete, you will be able to see the cloned repository
        in the Explorer pane in VSCode. You can now open any file in the repository and start
        making changes.
      </p>
      <p>
        <img></img>
      </p>
      <p>
        Before making any changes, it's always a good idea to create a new branch so that you don't
        accidentally modify the main branch. You can create a new branch by clicking on the "Branch"
        button in the bottom left corner of the VSCode window and then selecting "Create New Branch".
      </p>
      <p>
        <img></img>
      </p>
      <p>
        Now you can start making changes to the code and commit them to your branch. Once you are done
        with the changes, you can push them to the remote repository using the <code>Git: Push command</code>.
      </p>
      <p>
        <img></img>
      </p>
      <p>
        And that's it! You are now ready to work with GitHub and VSCode. Happy coding!
      </p>
      <br></br>
      <h1>How to Contribute Code to a Repo</h1>
      <p style={{opacity:"0.6"}}>Friday, February 10, 2023</p>
      <img src="/publicassets/github.jpg" width="900px" style={{borderRadius:"10px"}}></img> 
      <p>
        If you've pushed code to your own repo in the past, you probably only had one single branch, called <code>master</code> or <code>main</code>. But when you contribute to a repo, you'll often have to work with multiple branches. This is because you'll be working on a feature, and you'll want to keep the <code>master</code> branch clean and stable. So you'll create a new branch for your feature, and then when you're done, you'll merge it into the <code>master</code> branch.
      </p>
      <p>
        Here is how you can create a new branch and submit a PR:
        First, checkout the <code>master</code> branch: <code>git checkout master</code>
        Then, pull the latest changes from the <code>master</code> branch: <code>git pull</code>.
        Then, create a new branch for your feature: <code>git checkout -b my-feature</code>
        You'll want to call this branch something that describes your feature. For example, if you're working on a new feature called "Add a new blog post", you could call your branch <code>add-new-blog-post</code>.
      </p>
      <p>
        Then, here is how you open your PR on GitHub:
        First, push your branch to GitHub: <code>git push</code>.
        You'll probably be met with an error message that tells you there is no origin for your branch. If so, you'll need to run the command that comes up and is suggested to you by the error message when you do so.
        Then, go to the repo on GitHub and click on the <code>Compare & pull request</code> button.
        Then, click on the <code>Create pull request</code> button.
        Then, add a title for your PR. The title should be a short description of your feature. For example, if you're working on a new feature called "Add a new blog post", you could call your PR <code>Add new blog post</code>.
        Then, click on the <code>Create pull request</code> button again.
      </p>
    </div>
  );
}