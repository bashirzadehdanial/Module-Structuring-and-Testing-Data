## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? <!-- This is what I got : ƒ log() { [native code] } -->

Now enter just `console` in the Console, what output do you get back? <!-- console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} -->

Try also entering `typeof console`

Answer the following questions:

What does `console` store? <!-- An 'object' === console is an object that provides access to the browser's debugging console, allowing developers to log messages, assert conditions, and display errors. -->

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
<!-- The syntax console.log and console.assert refers to methods of the console object. The . (dot) operator is used to access properties or methods of an object, meaning you are calling the log or assert method defined on the console object. -->
