export const items = [{
  client: "Midstride Technologies",
  dates: "December 2023",
  description: "Built a system which reads email template blade files from the codebase and renders them dynamically with user-chosen data pulled from the database, allowing admin to preview emails being sent to specific customers under specific circumstances. In order to maximize maintainability and code-conciseness, we leveraged PHP's built-in iterators to read the files while only listing their parent folder.",
  key: 4,
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL"]
}, {
  client: "Midstride Technologies",
  dates: "November 2023",
  description: "Took full ownership of the design and implementation of a system allowing to differentiate various backend objects by a parent category, and to take different actions based on the object' parent category. Among the different actions, we buit support for sending emails from a different email address and domain depending on customer attributes. This was technically challenging because it involves updating Laravel's MailgunTransport's config at runtime, which requires creating a new instance of MailgunTransport and binding it into the service container.",
  key: 5,
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL"]
}, {
  client: "Midstride Technologies",
  dates: "February 2023",
  description: "Built a CI/CD pipeline which periodically backs up the project's git repo to AWS S3, always maintaining the latest two backup versions in an S3 bucket. Leveraged AWS IAM to ensure only minimal security permissions were granted to the GitHub Actions runner.",
  key: 7,
  tags: ["devops", "CI/CD", "automation"],
  tech: ["GitHub Actions", "AWS IAM", "AWS S3", "AWS CLI"]
}, {
  client: "Midstride Technologies",
  dates: "February 2022 - Ongoing",
  description: "Currently building and maintaining a CI/CD pipeline allowing to automatically test and lint code before any PR gets merged. Implemented caching of node dependencies in order to reduce CI/CD compute time, resulting in faster checks status reports and monthly savings on compute time.",
  key: 6,
  tags: ["devops", "CI/CD", "automation"],
  tech: ["GitHub Actions"]
}, {
  client: "Midstride Technologies",
  dates: "Jan 2022 - Ongoing",
  description: "Currently building many full-stack features (167 pull requests merged to date).",
  key: 3,
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL", "Vue", "JS", "SASS", "Docker"]
}, {
  client: "Midstride Technologies",
  dates: "April - December 2022",
  description: "Wrote many customizations for <a href='https://quilljs.com/' target='_blank' rel='noopener noreferrer'>Quill.js</a> to give the client's team more flexibility in the content of the blog posts they create. Namely, we added built, from scratch, support for adding CTA buttons, a references table, rich images with a caption and an alt tag, product advertisements, tables, and collapsible animated content. This involved writing and maintaining a lot of custom JavaScript to interact with Quill's API extensively.",
  key: 11,
  tags: ["full-stack web dev"],
  tech: ["Vue", "JS"]
}, {
  client: "Midstride Technologies",
  dates: "August 2022",
  description: "Identified and fixed a major stored XSS vulnerability which could have resulted in unauthorized access to administator accounts.",
  key: 8,
  tags: ["security", "full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL", "Vue", "JS"]
}, {
  client: "Midstride Technologies",
  dates: "September 2022",
  description: "Wrote a script to facilitate the detection of broken links in hundreds of blog articles, avoiding many hours of manual checking.",
  key: 9,
  tags: ["automation"],
  tech: ["Bash"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022 - Ongoing",
  description: "Fixed many issues with complex Eloquent queries. As the client's requests for data filtering functionality increased in complexity, so did the sophistication of the eloquent queries we had to write in order to support the powerful filtering. As a result, the client would often encouter issues where the data didn't match the filters. We were always able to successfully fix the queries, resulting in reliably-correct data-filtering results.",
  key: 12,
  tags: ["backend"],
  tech: ["Laravel", "MySQL"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022 - Ongoing",
  description: "Communicated directly with our client's client to get a thorough understanding of their desired requirements on many complex features, such as user \&quot;flagging\&quot; logic, sending text messages to users based on very specific conditions and actions taken by users and admins, or grouping different users's orders' repeat dates in the system for processing efficiency. Then, we took owernship of the design and implementation of the solution. This type of task is where our team's capabilities are most valuable to our client. Indeed, our combination of excellent communication skills and deep technical expertise allow us to truly alleviate the rest of the team's workload as we collaborate directly with the feature's final stakeholders.",
  key: 13,
  tags: ["full-stack web dev"],
  tech: ["PHP", "Laravel", "MySQL", "Vue", "JS", "SASS", "Docker"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Improved internal documentation as we onboarded to help future developers get set up faster. This is particularly relevant in our client's team's context as it is fully remote and only comprises independent contractors who are expected to be able to set up their local stack in near full autonomy.",
  key: 10,
  tags: ["documentation"],
  tech: ["Markdown"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Took full owernship of the design and implementation of a system allowing to export an Excel file showing a report of users with abandoned orders, allowing the admin team to take action to improve conversions.",
  key: 14,
  tags: ["full-stack web dev"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Implemented one-time password phone login using the Twilio API. This enables users to immediately log in to their account using their mobile phone if they forget their password.",
  key: 15,
  tags: ["full-stack web dev"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Implemented a system to manage failed Laravel queued jobs, allowing our client to easily monitor and retry failed jobs.",
  key: 16,
  tags: ["full-stack web dev"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Implemented a system which leverages the Mailgun API to generate a list of emails which failed to send, providing our client and the admin team with actionable information regarding their communication endeavours with customers.",
  key: 17,
  tags: ["full-stack web dev"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Leveraged the Mailgun and Mailchimp APIs to allow admins to manage users' subscription status to their various newsletters.",
  key: 18,
  tags: ["full-stack web dev"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Implemented a system which allowed to automatically redirect blog URLs containing uppercase letters to their full lowercase versions. This was challenging because the determining factor in whether or not a given URL had to be redirected was whether its route name, not the URL itself, contained a specific string. Thus, we had to add a catch-all route with a middleware and have the middleware compute the route name for the all-lowercase equivalent of the URL, and then redirect the URL if its route matches the condition.",
  key: 19,
  tags: ["backend"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Added support for upload of HEIC images. Since the libraries we used didn't support this out of the box, we had to convert the image to JPG before storing it.",
  key: 20,
  tags: ["full-stack web dev"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Fixed npm dependency issue affecting admin-facing tools. This involed updating a faulty package and doing the necessary updates in the code to match the new version's syntax and usage.",
  key: 21,
  tags: ["frontend web dev"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Midstride Technologies",
  dates: "January 2022",
  description: "Wrote documentation to help the rest of the team get set up with Xdebug step debugging on VSCode + Docker. This is challenging because it involves publishing the docker files and doing quite a big of config.",
  key: 22,
  tags: ["documentation"],
  tech: ["Laravel", "Eloquent"]
}, {
  client: "Proximy",
  dates: "May - December 2021",
  description: "Built many cross-platform mobile app features.",
  key: 1,
  tags: ["mobile dev", "serverless"],
  tech: ["Flutter", "Google Cloud Functions"]
}, {
  client: "Internal Project",
  dates: "May 2021 - Ongoing",
  description: "Currently building this website!",
  key: 23,
  tags: ["frontend web dev"],
  tech: ["React", "CSS", "DNS Configuration", "GitHub Pages"]
}, {
  client: "Minebright",
  dates: "May 2021 - Ongoing",
  description: "As a result of their ongoing partnership with North P&amp;D, Minebright is able to immediately obtain, without prior notice nor any minimum commitment, help with quality assurance from one of our team members in support of their software development team.",
  key: 24,
  tags: ["quality assurance"]
}, {
  client: "Tension",
  dates: "May 2021 - Ongoing",
  description: "We built the <a href='https://rockmass.webflow.io' target='_blank' rel='noopener noreferrer'>Rockmass</a> website for Tension based on their design.",
  key: 25,
  tags: ["frontend web dev"],
  tech: ["Webflow"]
}, {
  client: "Proximy",
  dates: "June 2021",
  description: "Secured Cloud Firestore database by writing security rules.",
  key: 2,
  tags: ["security", "NoSQL"],
  tech: ["Cloud Firestore"]
}]

export const tagColors = { "security": "red", "full-stack web dev": "royalblue", "mobile dev": "orange", "devops": "black", "CI/CD": "green", "automation": "deeppink", "serverless": "grey", "NoSQL": "coral", "quality assurance": "purple", "backend": "darkred", "frontend web dev": "mediumvioletred" }
