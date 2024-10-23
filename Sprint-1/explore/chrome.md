Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`; 
<!-- Displays a modal dialog with a message, pausing execution until the user clicks "OK." -->

What effect does calling the `alert` function have? 
<!-- Displays a dialog asking for user input, with an input field and buttons to submit or cancel. -->

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

<!-- Returns the input string if "OK" is clicked, null if "Cancel" is clicked, or an empty string if "OK" is clicked without input. In this case it returened my name as I entered Danial -->
