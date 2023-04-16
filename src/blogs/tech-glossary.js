import "./BlogStyles.css";

export default function Content() {
  return (
    <div>
      <head>
        <h1>Glossary</h1>
      </head>
      <h2>Some terminology you should be familiar with</h2>
      <ul>
        <li><i>Environment</i><br/>When we talk about the "environment", we mean the specific machine and set of softwares and configuration on which you're currently running your code. Here are some of the environments you'll often hear about:</li>
        <ul>
          <li><i>Production</i>: this is the "real" place where the code actually runs and can be accessed by end users. For instance, when you visit <strong>northpnd.com</strong>, you're viewing the site in production.</li>
          <li><i>Local</i>: this is your local machine, which you'll usually access using <strong>localhost:3000</strong> in the browser. You'll typically run the entire application locally so that you can make changes and view their effect instantly and test them before "deploying" to production.</li>
          <li><i>Staging</i>: this is an "in-between" environment. It's different from the local environment in that it's usually accessible by not just you, but a chosen set of users. Usually, this will be a predefined list of people who will be given early access to new features or bug fixes such that they may test it and give feedback on it. For instance, while working with clients, we will often deploy the latest version of the code to a site like <strong>staging.theclientsdomain.com</strong> and ask the client to double check that everything looks good before we deploy the changes to production for everyone to use.</li>
        </ul>
      </ul>
    </div>
  );
}