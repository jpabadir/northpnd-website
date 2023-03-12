export const items = [
  { "client": "Proximy", "tech": ["Flutter", "Google Cloud Functions"], "description": "Built many cross-platform mobile app features.", "tags": ["mobile dev", "serverless"], "dates": "May 2021 - December 2021" },
  { "client": "Proximy", "tech": ["Cloud Firestore"], "description": "Secured Cloud Firestore database by writing security rules.", "tags": ["security", "NoSQL"], "dates": "June 2021" },
  { "client": "Midstride Technologies", "tech": ["PHP", "Laravel", "MySQL", "Vue", "JS", "SASS", "Bootstrap"], "description": "Currently building many full-stack features (152 PRs merged to date).", "tags": ["full-stack web dev"], "dates": "Jan 2022 - Ongoing" },
  { "client": "Midstride Technologies", "tech": ["PHP", "Laravel"], "description": "Built a system which reads email <code>blade</code> files from the codebase and renders them with data chosen dynamically by the user, allowing admin to preview emails being sent to customers.", "tags": ["full-stack web dev"], "dates": "Jan 2022 - Ongoing" },
  { "client": "Midstride Technologies", "tech": ["PHP", "Laravel"], "description": "Took full ownership of the design and implementation of a system allowing to differententiate users by their parent category on the backend, and to take different backend actions depending on the user's parent category. Among the different actions, we buit support for sending emails from a different email address and domain depending on customer attributes. This was technically challenging because it involves updating Larave's <code>MailgunTransport</code>'s config at runtime, which requires creating a new instance of <code>MailgunTransport</code> and binding it into the service container.", "tags": ["full-stack web dev"], "dates": "Jan 2022 - Ongoing" },
  { "client": "Midstride Technologies", "tech": ["PHP", "Laravel", "MySQL", "Vue", "JS", "SASS", "Bootstrap"], "description": "Built a system which ", "tags": ["full-stack web dev"], "dates": "Jan 2022 - Ongoing" },
  { "client": "Midstride Technologies", "tech": ["GitHub Actions", "Prettier"], "description": "Currently building and maintaining a CI/CD pipeline allowing to automatically test and lint code before any PR gets merged.", "tags": ["devops", "CI/CD", "automation"], "dates": "February 2022 - Ongoing" },
  { "client": "Midstride Technologies", "tech": ["GitHub Actions", "AWS IAM", "AWS S3"], "description": "Built a CI/CD pipeline which periodically backs up git repo to S3, always maintaining the latest two backup versions in S3 bucket.", "tags": ["devops", "CI/CD", "automation"], "dates": "February 2022 - Ongoing" },
  { "client": "Midstride Technologies", "tech": ["PHP", "Laravel", "MySQL", "Vue", "JS"], "description": "Identified and fixed a stored XSS vulnerability.", "tags": ["security", "full-stack web dev"], "dates": "August 2022" },
  { "client": "Midstride Technologies", "tech": ["Bash"], "description": "Wrote a script to facilitate the detection of broken links in hundreds of blog articles, avoiding many hours of manual checking.", "tags": ["automation"], "dates": "September 2022" },
  { "client": "Internal Project", "tech": ["React", "CSS", "Bootstrap", "DNS Configuration"], "description": "Currently building this website!", "tags": ["full-stack web dev"], "dates": "May 2021 - Ongoing" }
]

export const tagColors = { "security": "red", "full-stack web dev": "darkorange", "mobile dev": "blue", "devops": "black", "CI/CD": "green", "automation": "deeppink", "serverless": "grey", "NoSQL": "lightblue" }



// - blade files 
// - iter