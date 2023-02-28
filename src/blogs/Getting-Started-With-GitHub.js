import "./BlogStyles.css";

export default function Content() {
  return (
    <div>
      <head>
        <h1>How to Contribute Code With GitHub</h1>
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
        <img class="fit-picture" src="https://miro.medium.com/max/719/0*LqBi2dONH28oTKVX.png" height="400"></img>
      <p>
        Before you can start working on GitHub, you need a GitHub account to allow you to access the repositories you wish to edit.
        Creating a GitHub account is not a difficult task however, and you can do so just by going to the <a href="https://github.com" target="_blank"> GitHub Website</a> and clicking "Sign Up".
        If you are experiencing troubles, you can take a look at this quick, more in depth tutorial <a href="https://learn.microsoft.com/en-us/visualstudio/version-control/git-create-github-account?view=vs-2022" target="_blank"> here</a>.
      </p>
      <header>
        <h2>Downloading Git</h2>
      </header>
      <img class="fit-picture" src="https://cdn.freebiesupply.com/logos/thumbs/2x/git-logo.png" height="400"></img>
      <p>
        The next step towards working with GitHub is downloading Git, which is a control system that is usually used for coordinating work among programmers collaboratively.
        To download git, go to their website <a href="https://git-scm.com/downloads" target="_blank">here</a> and download the latest source release for your system. 
        For more set up instructions, visit google or <a href="https://github.com/git-guides/install-git" target="_blank">this website</a> if needed.
        <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/Downloading_Git.jpg" height="400"></img>
      </p>
      <header>
        <h2>VSCode</h2>
      </header>
      <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/VSCode.jpg" height="400"></img>
      <header>
        <h3>Downloading VSCode</h3>
      </header>
      <p>
        Now all we need is a coding IDE to get started. 
        VSCode is the recommanded IDE to use, as it is compatible with all kinds of coding languages, and is quite simple to use.
        To get started, visit their website <a href="https://code.visualstudio.com/download" target="_blank">here</a>, and just like before with Git, download the latest version and follow the executable instructions to finish.
        For further information, a useful guide website is linked <a href="https://code.visualstudio.com/docs/setup/windows" target="_blank">here</a>.
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
        <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/Extensions1.jpg" height="300"></img>
        <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/Extensions2.jpg" height="300"></img>
        <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/Extensions3.jpg" height="300"></img>
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
        <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/Link.jpg" height="400"></img>
      </p>
      <p>
        Now going back to VSCode, open the command palette with the short cut control+shift+p or by clicking the option under "View".
        <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/Cloning.jpg" height="400"></img>
      </p>
      <p>
        Now run the command <code>Git: Clone</code> and paste in the link that you just copied.
      </p>
      <p>
        <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/GitClone.jpg" width="800"></img>
      </p>
      <p>
        <img class="fit-picture" src="/Users/andyc/OneDrive/Desktop/Images/Paste.jpg" width="800"></img>
      </p>
      <p>
        Now after running the command, 
      </p>
      <p>
      </p>
    </div>
  );
}