import React from 'react';
import './Midstride.css';

function Midstride() {
  return (
    <div className="container">
      <div className="image-container">
        {/* <img alt=""Midstride logo" /> */}
      </div>
      <div >
        <h1>Midstride</h1>
        <p>We work closely with Midstride's team by communicating directly with its clients and getting a thorough understanding of their requirements before building out full-stack features on their products.</p>
        <h3>Here are some of the things we've done for Midstride</h3>
        <ul>
          {/* "tech": ["PHP", "Laravel", "MySQL", "Vue", "JS", "SASS", "Bootstrap"],  */}
          <li>Currently building many full-stack features (152 PRs merged to date).</li>
          {/* "tech": ["PHP", "Laravel"],  */}
          <li>Built a system which reads email <code>blade</code> files from the codebase and renders them with data chosen dynamically by the user, allowing admin to preview emails being sent to customers.</li>
          {/* "tech": ["PHP", "Laravel"],  */}
          <li>Took full ownership of the design and implementation of a system allowing to differententiate users by their parent category on the backend, and to take different backend actions depending on the user's parent category. Among the different actions, we buit support for sending emails from a different email address and domain depending on customer attributes. This was technically challenging because it involves updating Larave's <code>MailgunTransport</code>'s config at runtime, which requires creating a new instance of <code>MailgunTransport</code> and binding it into the service container.</li>
          {/* "tech": ["PHP", "Laravel", "MySQL", "Vue", "JS", "SASS", "Bootstrap"],  */}
          <li>Built a system which </li>
          {/* "tech": ["GitHub Actions", "Prettier"],  */}
          <li>Currently building and maintaining a CI/CD pipeline allowing to automatically test and lint code before any PR gets merged.</li>
          {/* "tech": ["GitHub Actions", "AWS IAM", "AWS S3"],  */}
          <li>Built a CI/CD pipeline which periodically backs up git repo to S3, always maintaining the latest two backup versions in S3 bucket.</li>
          {/* "tech": ["PHP", "Laravel", "MySQL", "Vue", "JS"],  */}
          <li>Identified and fixed a stored XSS vulnerability.</li>
          {/* "tech": ["Bash"],  */}
          <li>Wrote a script to facilitate the detection of broken links in hundreds of blog articles, avoiding many hours of manual checking.</li>
        </ul>
      </div>
    </div>
  );
}

export default Midstride;