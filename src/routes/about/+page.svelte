<script lang="ts">
	import { CodeBlock } from "@skeletonlabs/skeleton";

	const placeholderCode: string = 
		`
		import praw
import streamlit as st


# instantiate reddit agent
def reddit_agent():
	
	client_id = st.secrets['ACCESS_TOKEN']
	client_secret = st.secrets['SECRET_KEY']
	username = st.secrets['USERNAME']
	password = st.secrets["PASSWORD"]
	user_agent = "dev"

	reddit = praw.Reddit(
		client_id = client_id,
		client_secret = client_secret,
		user_agent = user_agent,
		username= username,
		password= password
	)

	return reddit
		`;

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1>Let's get cracking bones!</h1>
		<p>Start by exploring:</p>
		<ul>
			<li><code>/src/routes/+layout.svelte</code> - barebones layout, the CSS import order is critical!</li>
			<li><code>/src/app.postcss</code> - minimal css to make the page full screen, may not be relevant for your project</li>
			<li><code>/src/routes/+page.svelte</code> - this page, you can replace the contents</li>
		</ul>
		<button class="btn variant-glass-primary">Hello World</button>
		<p> Skeleton UI also provides code-block components that look like: </p>
		<CodeBlock language="python" code={placeholderCode} />
		<p> Syntax highlighting is done with <code>highlight.js</code></p>
	</div>
</div>