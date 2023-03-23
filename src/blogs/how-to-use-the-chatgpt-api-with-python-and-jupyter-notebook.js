import "./BlogStyles.css";
import bootstrap from "bootstrap";

export default function Content() {
  return (
    <div>
      <p>
        You've probably heard of <a href="https://openai.com/blog/chatgpt">ChatGPT</a>, the artificial 
        intelligence chatbot by OpenAI that is taking the world by storm. On March 6, 2023, OpenAI released 
        their <a href="https://openai.com/blog/introducing-chatgpt-and-whisper-apis">ChatGPT API</a>, which 
        is already being implemented into popular apps such as Snapchat, Quizlet, Instacart, and Shopify. It 
        is priced 10x cheaper than OpenAI's previously existing GPT-3.5 models, at only $0.002 per 1k tokens.
      </p>
      <p>
        This guide will show you how to set up your OpenAI account and install Jupyter Notebook, and then 
        explain how to use the ChatGPT API using Python.
      </p>
      <p>
        Note: OpenAI gives API users a free $5 credit that can be used for 3 months after an account is 
        created, so you don't need to spend any money or enter your credit card information to get started!
      </p>
      <h2>Installing Python</h2>
      <p>
        If you don't have Python installed already, I recommend installing&nbsp;
        <a href="https://docs.anaconda.com/anaconda/install/index.html">Anaconda</a> because it comes with
        Jupyter Notebook, which we will be using later on. Otherwise, feel free to install Jupyter
        Notebook <a href="https://jupyter.org/install">separately</a> or use another IDE (it doesn't matter
        where you run your Python code from).
      </p>
      <h2>Creating an OpenAI Account</h2>
      <p>
        Head to <a href="https://openai.com/blog/openai-api">https://openai.com/blog/openai-api</a> and 
        click Sign up.
      </p>
      <img alt="OpenAI API home page" className="LargeImg" src="/publicassets/Using the ChatGPT API Images/openai-api-home.jpg" />
      <p className="Caption">The homepage for the OpenAI APIs.</p>
      <p>
        Follow the instructions to create a new account. Note that you'll need a phone number to verify your 
        identity. Once you're done, head to&nbsp;
        <a href="https://platform.openai.com/">https://platform.openai.com/</a>. Click 
        your account at the top right and then click <i>View API Keys</i>.
      </p>
      <p>
        To create an API key, click <i>Create new secret key</i>. <strong>Note that once you close the 
        pop-up with your key, you won't be able to access it again.</strong> Copy it somewhere safe, such as 
        Notepad. Don't share your API key with anyone.
      </p>
      <div id="apiKeyCarousel" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#apiKeyCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#apiKeyCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#apiKeyCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block m-auto" style={{height: "35vw", maxHeight: "400px"}} src="/publicassets/Using the ChatGPT API Images/view-api-keys.jpg" alt="Click View API keys" />
          </div>
          <div class="carousel-item">
            <img class="d-block m-auto" style={{height: "35vw", maxHeight: "400px"}} src="/publicassets/Using the ChatGPT API Images/create-new-secret-key.jpg" alt="Create new API key" />
          </div>
          <div class="carousel-item">
            <img class="d-block m-auto" style={{height: "35vw", maxHeight: "400px"}} src="/publicassets/Using the ChatGPT API Images/api-key-generated.jpg" alt="Generated API key" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#apiKeyCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#apiKeyCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
      <p className="Caption">
        Create a new API key and make sure to copy it to somewhere safe.
      </p>
      <h2>Using the API</h2>
      <p>If you installed Jupyter with Anaconda:</p>
      <ul>
        <li><strong>Windows</strong>: Open the Start menu and search for Anaconda Navigator.</li>
        <li><strong>MacOS</strong>: Press <kbd>Cmd+Space</kbd> and search for Navigator.</li>
        <li><strong>Linux</strong>: Open a terminal window and type <code>anaconda-navigator</code>.</li>
      </ul>
      <p>Once you have Anaconda Navigator running, launch Jupyter Notebook.</p>
      <img alt="Launch Jupyter Notebook" src="/publicassets/Using the ChatGPT API Images/notebook-icon.jpg" />
      <p>
        Once you have Jupyter Notebook running in your browser, navigate to where you want to save your notebook. 
        Then click <i>New &gt; Python 3 (ipykernel)</i> at the top right.
      </p>
      <img alt="Create new notebook" src="/publicassets/Using the ChatGPT API Images/new-notebook.jpg" />
      <p>
        Note that Jupyter Notebook does not autosave; make sure to save (<kbd>Ctrl+S</kbd> or <kbd>Cmd+S</kbd>) 
        frequently when writing the following code.
      </p>
      <p>
        For your first line of code, type <code>!pip install openai</code> then press <kbd>Shift+Enter</kbd> (or 
        Cell &gt; Run Cells and Select Below) to run it. This will install the OpenAI Python library. Then, you 
        can comment it out by adding <code>#</code> to the beginning of the line.
      </p>
      <p>In the box below, type <code>import openai</code> to import the library. Run this line of code.</p>
      <p>
        Remember how earlier I mentioned to not share your API key with anyone? There's a way to avoid putting it 
        directly in your code: an environment variable. You will need to install a package to access the environment 
        variable file. Run <code>!pip install python-dotenv</code> (you can comment this out after running it). Next, 
        create a file in the same directory as your Jupyter Notebook called <code>.env</code>. In this file, type the 
        following, replacing <code>&lt;your API key&gt;</code> with your actual API key.
      </p>
      <p><code>OPENAI_API_KEY=&lt;your API key&gt;</code></p>
      <p>Save the file. The following lines of code will load the <code>.env</code> file and access the API key.</p>
      <p><code>
        from dotenv import load_dotenv<br />
        load_dotenv()
      </code></p>
      <p>
        After running that code, you can access your API key at any time by importing os (<code>import os</code>)
        and then running <code>os.getenv("OPENAI_API_KEY")</code>.
      </p>
      <p>
        To give the API key to the OpenAI library (which is necessary for API calls), run&nbsp;
        <code>openai.api_key = os.getenv("OPENAI_API_KEY")</code>
      </p>
      <p>Your notebook should now look something like this:</p>
      <img alt="Ready notebook" className="LargeImg" src="/publicassets/Using the ChatGPT API Images/ready-notebook.jpg" />
      <p className="Caption">The libraries are installed, imported, and set up.</p>
      <p>
        Finally, you're ready to use the API! To use the ChatGPT API, we will be using the&nbsp;
        <a href="https://platform.openai.com/docs/guides/chat">chat completion</a> API call. You can send three types 
        of messages to the API:
      </p>
      <ul>
        <li><strong>system</strong>: Dictates ChatGPT's behaviour</li>
        <li><strong>user</strong>: Instructs ChatGPT; use this for questions, commands, etc.</li>
        <li><strong>assistant</strong>: Tells ChatGPT what it said previously (use this when you want ChatGPT to
        remember previous messages)</li>
      </ul>
      <p>
        For example:
      </p>
      <p><code>
        response = openai.ChatCompletion.create(<br />
        &nbsp;&nbsp;model="gpt-3.5-turbo",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;messages=[<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;"role": "system", "content": "You are a basketball coach."&#125;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;"role": "user", "content": "How can I improve my dribbling skills?"&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;]<br />
        )
      </code></p>
      <p>
        A JSON object will be returned. For the example given above, this would be a possible response:
      </p>
      <p><code>
        &#123;<br />
        &nbsp;&nbsp;"choices": [<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"finish_reason": "stop",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"index": 0,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"message": &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"content": "\n\nThere are several ways you can improve your dribbling skills as a basketball player:\n\n1. Practice regularly: Dribble the basketball every day for at least 10-15 minutes to develop muscle memory and improve your skills.\n\n2. Start simple: Begin with basic dribbling drills, such as dribbling around cones or practicing figure-eight moves, before progressing to more complicated drills.\n\n3. Use both hands: Practice dribbling with both your dominant and non-dominant hand to develop versatility and improve ball control.\n\n4. Focus on form: Keep your eyes up and maintain a low center of gravity. Use your fingertips, not your palms, to control the ball and maintain a strong stance.\n\n5. Incorporate game situations: Practice dribbling in game situations, such as dribbling past defenders or dribbling under pressure, to simulate what you might experience in a game.\n\n6. Watch and learn: Study professional basketball players and their dribble techniques to pick up tips and ideas for improving your game.",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"role": "assistant"<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
        &nbsp;&nbsp;],<br />
        &nbsp;&nbsp;"created": 1678204045,<br />
        &nbsp;&nbsp;"id": "chatcmpl-6rTp7F6qUmAqOlK6FPGbhcVbSanYj",<br />
        &nbsp;&nbsp;"model": "gpt-3.5-turbo-0301",<br />
        &nbsp;&nbsp;"object": "chat.completion",<br />
        &nbsp;&nbsp;"usage": &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"completion_tokens": 203,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"prompt_tokens": 27,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"total_tokens": 230<br />
        &nbsp;&nbsp;&#125;<br />
        &#125;
      </code></p>
      <p>
        The JSON can be accessed like a Python dictionary. For example, the message content can be accessed from the 
        above response like this:
      </p>
      <p><code>response["choices"][0]["message"]["content"]</code></p>
      <p>This can be used with <code>print</code> to properly display the response.</p>
      <img alt="Using print" className="LargeImg" src="/publicassets/Using the ChatGPT API Images/printed-response.jpg" />
      <p className="Caption">Now the response is much more readable!</p>
      <p>If you wanted to continue the conversation:</p>
      <p><code>
        response2 = openai.ChatCompletion.create(<br />
        &nbsp;&nbsp;model="gpt-3.5-turbo",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;messages=[<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;"role": "system", "content": "You are a basketball coach."&#125;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;"role": "user", "content": "How can I improve my dribbling skills?"&#125;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;"role": "assistant", "content": response["choices"][0]["message"]["content"]&#125;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;"role": "user", "content": "Which specific basketball players would you suggest to study?"&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;]<br />
        )
      </code></p>
      <img alt="Second response" className="LargeImg" src="/publicassets/Using the ChatGPT API Images/second-response.jpg" />
      <p className="Caption">The API successfully stays in the context of improving dribbling skills.</p>
      <p>Great, now you know how to use the ChatGPT API with Python and Jupyter Notebook!</p>
      <h2>Next Steps</h2>
      <p>
        To play around with the ChatGPT API and OpenAI's other language models, you can use the&nbsp;
        <a href="https://platform.openai.com/playground">playground</a> on OpenAI's website. To use the ChatGPT API, 
        select the Chat mode at the top right.
      </p>
      <img alt="Choose Chat mode" src="/publicassets/Using the ChatGPT API Images/chat-mode.jpg" />
      <p>You can add any system, user, or assistant messages you want and then click Submit.</p>
      <p>Here are some other useful resources:</p>
      <ul>
        <li><a href="https://github.com/Raptors65/chatgpt-blog-post/blob/main/ChatGPT%20Example.ipynb">A finished version of the Jupyter Notebook for this guide</a></li>
        <li><a href="https://platform.openai.com/docs/guides/chat">Chat completions guide</a></li>
        <li><a href="https://platform.openai.com/docs/api-reference/chat">Chat completions documentation</a></li>
        <li>
          <a href="https://openai.com/blog/introducing-chatgpt-and-whisper-apis">
            OpenAI's blog post announcing the release of the ChatGPT API
          </a> which has examples of how apps are starting to use the API
        </li>
      </ul>
      <p>Now you know how to use the ChatGPT API with Python and Jupyter Notebook!</p>
    </div>
  );
}