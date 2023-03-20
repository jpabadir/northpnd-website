export const items = [{
  client: "Midstride Technologies",
  dates: "December 2022",
  description: "Built a system which reads email template blade files from the codebase and renders them dynamically with user-chosen database records, allowing the admin team to preview emails being sent to specific customers under specific circumstances. In order to maximize maintainability and code-conciseness, we used PHP's built-in iterators to read the files while only specifying their parent folder's name.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL"]
}, {
  client: "Midstride Technologies",
  dates: "November 2022",
  description: "As the client's project evolved, they decided to spin off a new project in the same industry as their main product. The new project had a different frontend, but shared a lot of its backend with the client's main product. In support of this endeavour, we took full ownership of the design and implementation of a system allowing to differentiate various backend objects (such as users, orders or emails) by their parent project, and to automatically take different actions based on the object's parent project. Among the various actions, we buit support for sending emails from a different email address and domain depending on the parent project. This was technically challenging because it involves updating Laravel's MailgunTransport's configuration at runtime, which requires creating a new instance of MailgunTransport and binding it into the service container. To build this, we made heavy use of Laravel's Tinker tool to efficienly iterate on our code and test it.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL"]
}, {
  client: "Midstride Technologies",
  dates: "February 2023",
  description: "Built a CI/CD pipeline which periodically backs up the project's git repo to AWS S3, always maintaining the latest two backup versions in an S3 bucket. Leveraged AWS IAM to ensure only minimal security permissions were granted to the GitHub Actions runner.",
  tags: ["devops", "CI/CD", "automation", "security"],
  tech: ["GitHub Actions", "AWS IAM", "AWS S3", "AWS CLI"]
}, {
  client: "Midstride Technologies",
  dates: "February 2022 - Ongoing",
  description: "Currently building and maintaining a CI/CD pipeline allowing to automatically test and lint code before any PR gets merged. Implemented caching of node dependencies to reduce CI/CD compute time, resulting in faster status reports and monthly savings on the GitHub Actions bill for our client.",
  tags: ["devops", "CI/CD", "automation"],
  tech: ["GitHub Actions", "npm"]
}, {
  client: "Midstride Technologies",
  dates: "Jan 2022 - Ongoing",
  description: "Currently building many full-stack features (167 pull requests merged to date).",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL", "Vue", "JS", "SASS", "Docker"]
}, {
  client: "Midstride Technologies",
  dates: "April - December 2022",
  description: "Wrote many customizations for <a href='https://quilljs.com/' target='_blank' rel='noopener noreferrer'>Quill.js</a> to give the client's team more flexibility in the content of the blog posts they create. Namely, we built, from scratch, support for adding CTA buttons, a references table, rich images with a caption and an alt tag, custom product advertisements, tables, and collapsible animated content. This involved writing and maintaining a lot of custom JavaScript to interact with Quill's API extensively.",
  tags: ["frontend web dev"],
  tech: ["Vue", "JS"]
}, {
  client: "Midstride Technologies",
  dates: "August 2022",
  description: "Identified and fixed a major stored XSS vulnerability which could have resulted in unauthorized access to administator accounts.",
  tags: ["security", "full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL", "Vue", "JS"]
}, {
  client: "Midstride Technologies",
  dates: "September 2022",
  description: "Wrote a script to facilitate the detection of broken links in hundreds of blog articles, avoiding many hours of manual checking.",
  tags: ["automation"],
  tech: ["Bash"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022 - Ongoing",
  description: "Fixed many issues occuring with complex Eloquent queries. As the client's requests for data filtering functionality increased in complexity, so did the sophistication of the queries we had to write in order to support the desired filtering. As a result, the client would often encouter issues where the data returned didn't match the filters they set. We were consistently able to successfully fix the queries, resulting in reliably-correct data-filtering results.",
  tags: ["backend"],
  tech: ["PHP", "Laravel", "MySQL"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022 - Ongoing",
  description: "Communicated directly with our client's client to get a thorough understanding of their desired requirements on many complex features, such as user \&quot;flagging\&quot; logic, sending text messages to users based on very specific conditions and actions taken by users and admins, or grouping different user orders' repeat dates in the system for efficiency of processing. Then, we took owernship of the design and implementation of the solution. This type of task is where our team's capabilities are most valuable to our client, as our combination of excellent communication skills and deep technical expertise allow us to collaborate with the client's client in almost complete autonomy, alleviating the rest of the team's workload.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL", "Vue", "JS", "SASS", "Docker"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Improved internal documentation as we onboarded onto the client's codebase to help future developers get set up faster. This is particularly relevant in our client's context as its team is fully remote and only comprises independent contractors who are expected to be able to set up their local stack in near full autonomy.",
  tags: ["documentation"],
  tech: ["Markdown"]
}, {
  client: "Midstride Technologies",
  dates: "August 2022",
  description: "Took full owernship of the design and implementation of a system allowing to export an Excel file showing a report of users with abandoned orders for products, allowing the admin team to take action to improve conversions.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel"]
}, {
  client: "Midstride Technologies",
  dates: "January 2023",
  description: "Implemented one-time password phone login functionality using the Twilio API. This enables users to immediately log in to their account using their mobile phone if they forget their password.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel"]
}, {
  client: "Midstride Technologies",
  dates: "October 2022",
  description: "Implemented a system to manage failed Laravel queued jobs, allowing our client to easily monitor and retry failed jobs.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel"]
}, {
  client: "Midstride Technologies",
  dates: "October 2022",
  description: "Implemented a system which leverages the Mailgun API to generate a list of emails which failed to send, providing our client and the admin team with actionable information regarding their communication endeavours with customers.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel"]
}, {
  client: "Midstride Technologies",
  dates: "November 2022",
  description: "Leveraged the Mailgun and Mailchimp APIs to allow admins to manage users' subscription status to the client's two newsletters.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel"]
}, {
  client: "Midstride Technologies",
  dates: "July 2022",
  description: "Implemented a system which allowed to automatically redirect specific groups of URLs containing uppercase letters to their fully-lowercase versions. This was challenging because the determining factor in whether or not a given URL had to be redirected was whether its route name, not the URL itself, contained a specific string. Thus, we had to add a catch-all route with a middleware and have the middleware compute the route name for the all-lowercase equivalent of the accessed URL, and then redirect the URL if its route matched the criteria.",
  tags: ["backend"],
  tech: ["PHP", "Laravel"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Added support for the upload of HEIC images by customers. Since the libraries we used didn't support this out of the box, we had to convert the images to JPG before storing them.",
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "Vue", "JS"]
}, {
  client: "Midstride Technologies",
  dates: "August 2022",
  description: "Fixed npm dependency issue affecting admin-facing tools. This involed updating a faulty package and doing the necessary updates in the code to match the new version's syntax and usage.",
  tags: ["frontend web dev"],
  tech: ["npm", "Vue", "JS"]
}, {
  client: "Midstride Technologies",
  dates: "March 2023",
  description: "Wrote documentation to help the rest of the team get set up with Xdebug step debugging on VSCode + Docker. This is challenging because it involves publishing the Docker files and doing quite a big of config to ensure it works properly.",
  tags: ["documentation"],
  tech: ["PHP", "Laravel"]
}, {
}, {
  client: "Midstride Technologies",
  dates: "March 2023",
  description: "Fixed an issue where users were able to set the database in a state which should have been impossible. After investigating the issue, we found out that users were able to exploit the fact that as they placed orders, we persist some data using HTTP sessions, which they were able to retrieve before the end of the ordering flow in order to submit forbidden requests. Since the HTTP sessions mechanism was necessary, we added extra checks to the part of the app responsible for submitting the faulty data to ensure this couldn't happen.",
  tags: ["documentation"],
  tech: ["PHP", "Laravel", "Docker"]
}, {
  client: "Internal Project",
  dates: "May 2021 - Ongoing",
  description: "Currently building this website!",
  tags: ["frontend web dev"],
  tech: ["React", "CSS", "DNS", "GitHub Pages"]
}, {
  client: "Minebright",
  dates: "February 2023 - Ongoing",
  description: "As a result of their partnership with North P&amp;D, Minebright is able to obtain, without prior notice nor any minimum commitment, help with quality assurance from one of our team members in support of their software development team.",
  tags: ["quality assurance"]
}, {
  client: "Tension",
  dates: "February - March 2023",
  description: "Built the <a href='https://rockmass.webflow.io' target='_blank' rel='noopener noreferrer'>Rockmass</a> website for Tension based on their design.",
  tags: ["frontend web dev"],
  tech: ["Webflow"]
}, {
  client: "Proximy",
  dates: "May - December 2021",
  description: "Built many customer-facing, cross-platform mobile app features on Proximy's mobile app. For instance, we built the \"add as a friend\" feature. This was technically challenging because, in order to ensure the feature worked robustly, we had to handle the case where both users clicked on the \"add as a friend\" button at the same time, which would have resulted in the creation of two separate friend requests, which would have been a forbidden state. To solve this, we utilized Cloud Firestore transactions to ensure that when we handled friend requests, we did so in a way which always resulted in a valid state. In this case, for instance, the two users would become friends. Our client appreciated our attention to detail and concern with quality.",
  tags: ["mobile dev", "serverless", "NoSQL"],
  tech: ["Flutter", "Google Cloud Functions", "Cloud Firestore"]
}, {
  client: "Proximy",
  dates: "June 2021",
  description: "Secured Cloud Firestore database by writing security rules. This was quite challenging because the Proximy app stores a lot of personal data which must be protected, but also involves a lot of interaction between users. As a result, we had to write rules that were both secure, but also allowed for users involved in specific interactions to access and update the data relevant to those interaction.",
  tags: ["security", "NoSQL"],
  tech: ["Cloud Firestore"]
}]

export const tagColors = { "security": "red", "full-stack web dev": "royalblue", "mobile dev": "orange", "devops": "black", "CI/CD": "green", "automation": "deeppink", "serverless": "grey", "NoSQL": "coral", "quality assurance": "purple", "backend": "darkred", "frontend web dev": "mediumvioletred" }
