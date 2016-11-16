# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Slack bot lab - sample code

## Creating code for your Slack bot

Now we have our very own Hubot that's willing and able to do our bidding. What can it do? Let’s take it for a test drive.

> There's a `module` object. We customize the `exports` method, and within it we create nested behaviors for different methods. So the code is always structured as

> ```
> module.exports = function(robot) {
>   robot.verb(parameter1, function(res) {
>      return res.command();
>    });
> };
> ```
>where `verb` is the action from the API that you are customizing, `parameter1` is the data passed to the method, and `command` is a command from the API to run.

### Interacting with Your Hubot

To create instructions for your Hubot, you need to add a JavaScript file to the `scripts` folder. You can add multiple scripts files to that folder and all will execute when the Hubot is run. Let's look at a few commands that will help us build our Hubot scripts.

> To test locally, type `./bin/hubot` as a command. A prompt is displayed, and everything you type is input for your bot to respond to. At this point you don't have any scripts in place for bot functionality, though.

#### Listening

**.hear**

 The `.hear` command listens for a specific phrase anywhere in the Slack room. You don't have to mention your Hubot in order to get a response.

 In the example below, when the bot hears "Hello!", it will respond, "Hi there!":

 ```js
 bot.hear(/Hello!/, function(res) {
   return res.send("Hi there!");
 });
 ```

 ```
 tim: Hello!
 hubot: Hi there!
 ```

**.respond**

 `.respond` is similar to `.hear`, except it will only be triggered when someone specifically mentions the Hubot using `@`, or sends a direct message.

 ```javascript
 bot.respond(/What's your favorite food?/, function(res) {
   return res.send("I'm a robot--I don't eat food!");
 });
 ```

 ```
 tim: @hubot What's your favorite food?
 hubot: I'm a robot--I don't eat food!
 jon: What's your favorite food?
 ... [no response because Jon didn't tag Hubot in his message]
 ```

#### Speaking Responding to User Input

**.send and .reply**

The "send" method allows your Hubot to send a message to the channel, and the "reply" method allows it to respond directly to a user with an @ reply. In order to understand the difference, we’ll need to accept some user input, so let's take a look at the example below.

**The Wildcard Selector**

 Would you like to accept user input in your script? Take a look at the example below:

 ```js
 bot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
   var name;
   name = msg.match[1];
   if (name == "Hubot"){
     return msg.send("You're not Hubot--I'm Hubot!");
   } else {
     return msg.reply("Nice to meet you, " + name + "!");
   }

 });
 ```
 ```
 tim: @hubot Hi Hubot! My name is Tim
 hubot: @tim Nice to meet you, Tim!  
 tim: @hubot Hi Hubot! My name is Hubot
 hubot: You're not Hubot--I'm Hubot!
 ```

Did you notice the difference between `.send` and `.reply`?

Now, let's dig into how the user input works. As you can see, we're using `.respond` to set the bot up to listen for its @ handle. In this case, it's listening for the phrase `@hubot Hi Hubot! My name is _____`. The `(.*)` syntax is a wildcard value that effectively represents the "blank" in that sentence. When the bot is triggered with the phrase, `@hubot Hi Hubot! My name is (.*)`, it stores the contents of `(.*)` in an array called `match`, which lives inside an object called `msg`. When we want to retrieve that value, we use `fav = msg.match[0]` to grab the first value in that array, which, in this case, is "Tim".

 <details>
 <summary>
 **Wait, What Does the `[1]` Mean?** (click the arrow for the answer)
 </summary>
`msg.match[1]` will grab the value corresponding to the second group `(.*)` in the expression. Just like most collections in JavaScript, this is a zero-based index. However, the first group is the entire expression. So in the example above, `msg.match[0]` will return the entire expression: `Hi Hubot! My name is Tim`. If you use multiple `(.*)`s within one RegEx statement, you can assign each of the values to different variables, such as: `var foo = msg.match[1]`, `var bar = msg.match[2]`.
 </details>

 Here's an example that uses two wildcards:

 ```js
 bot.respond(/add (.*) and (.*)/i, function(msg) {
   var a;
   var b;
   a = parseInt(msg.match[1]);
   b = parseInt(msg.match[2]);
   c = a + b

   return msg.reply(a + " plus " + b + " = " + c);
 });

 ```
 ```
 tim: @hubot add 3 and 4
 hubot: 3 plus 4 = 7
 ```

 Here's another example that uses a switch statement to handle different cases:
 ```js
 bot.respond(/what is your favorite (.*)/, function(msg) {
   var fav;
   fav = msg.match[1];
   console.log(fav);
   switch (fav) {
     case "food":
       return msg.reply("I'm a robot--I don't eat food!");
       break;
     case "band":
       return msg.reply("It's gotta be Daft Punk!");
       break;
     case "programming language":
       return msg.reply("Javascript, of course!");
       break;
     default:
       return msg.reply("I don't have a favorite " + fav + ". What's yours?");
   }
 });
 ```
 ```
 tim: @hubot what is your favorite food?
 hubot: @tim I'm a robot--I don't eat food!
 tim @hubot what is your favorite color?
 hubot: @tim I don't have a favorite color. What's yours?
 ```

#### Getting Fancy

 **Regular Expressions**
   You might have noticed that we haven't used quotes around the phrases Hubot is listening for; instead, we’re using `/` (e.g. `/What's your favorite food/`). Why do we do this?

  Most programming languages allow you to search for text within text using something called **Regular Expressions**. Regular expressions, or "RegEx," enable you to listen for very specific patterns of text within a document, or, in this case, a chat room.

  For example, if you want to find the word "what" using a RegEx, you can use the following code: `\bwhat\b`. Here, "b" represents the boundaries of the word (i.e., its beginning and end) and the "what" represents the word we are searching for.

  This is an advanced example, though. **For most of your bots, you can simply enclose phrases between `/` marks**. If you would like to learn more about RegEx, check out the resources below:
  - [RegexOne](http://regexone.com/) walks you through basic to advanced RegEx syntax. Check it out!
  - [RegExr](http://regexr.com/) lets you test out your RegEx without the need to constantly start and stop your bot.


To wrap things up, here's one final example of an advanced Hubot that uses a RegEx, and that can respond to a number of different inputs:

```js
module.exports = function(robot) {
    robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

    robot.hear(/i did it/i, function(msg){
        msg.send("Congratulations! Good job!");
    });

    robot.respond(/are you there?/i, function(msg){
        msg.reply('Yes, usually here, and listening.');
    });

    robot.respond(/convert \$(.*) to btc/i, function(res){
        var usd = res.match[1];
        res.reply('That is about ' + usd * 0.0024 + ' in BTC');
    });

}
```

This should give you a sense of what a Hubot can do—and perhaps give you some ideas for building your own Hubot...

## Troubleshooting

**Bot unresponsive?**

A Heroku app instance is known as a __dyno__. A free dyno 
* runs for a maximum of 18 hours out of every 24
* goes to sleep after 30 minutes of inactivity

If a sleeping web dyno receives web traffic, it will become active again after a short delay.

Further details:
* [Free Dyno Hours](https://devcenter.heroku.com/articles/free-dyno-hours)
* [App Sleeping on Heroku](https://blog.heroku.com/app_sleeping_on_heroku)

**CoffeeScript code that you want to understand?**

CoffeeScript is often used in conjunction with Hubot; you won't need to know how to write CoffeeScript for the purposes of this class, 
but be aware that it will come up in Hubot examples and documentation. If you encounter a CoffeeScript file (e.g., the "example.coffee" 
file included with Hubot) and want to better understand what it's doing, you can use CoffeeScript to translate, or compile, the CoffeeScript 
file into JavaScript code. 

To compile CoffeeScript to JavaScript, navigate to the directory containing the CoffeeScript file. Then use the `coffee` command with the
`-c` switch (for "compile") and the `-o` switch (to specify "output"), as follows:

```js
coffee -c -o output-file.js source-file.coffee
```
where `output-file.js` is the name of the new file where the compiled JavaScript code should be stored, and `source-file.coffee` is the name of
a file containing CoffeeScript code that you want to compile.

For instance, the following command compiles the CoffeeScript file script.coffee and saves the resulting JavaScript in a new file named script.js:

```js
coffee -c -o script.js script.coffee
```

Then you can open the JavaScript file in a code editor and examine the code.