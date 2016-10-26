# 1. Installing command line tools

You will need to install certain tools that will be used throughout the course. The installation instructions vary depending on whether you have a Mac, Windows, or Linux machine.

## Mac OS X

1. __Install brew__

  Brew is a package manager that we use to install various command line applications to your computer.

  Open your terminal (`Applications > Utilities > Terminal`), paste the following command, and hit enter:

  ```bash
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

2. __Install Git__

  Git is used to track the state of your code over time. [GitHub](https://github.com) has built its platform on Git technology. We will be using both Git and GitHub to distribute code, submit assignments, and offer feedback. Use the following command to install Git:

  ```bash
  brew install git
  ```

3. __Configure Git__

  Copy and paste the following two commands (separately) into your terminal. Replace the name and email address values with your own.

  ```bash
  git config --global user.name "Steve Jobs"
  git config --global user.email "steve@apple.com"
  ```

4. __Install Node__

  Refer to the package installer on Node’s [website](https://nodejs.org/en/). Select the LTS version (labeled "Recommended for Most Users"). Then just follow the set-up instructions.

5. __Ensure NPM is updated__

  Node has a handy package manager, which we will using frequently. It comes with Node, but NPM is updated more frequently; you will always need to have the most up-to-date version.

  ```bash
  npm install npm -g
  ```

6. __Install Visual Studio Code__

  Visual Studio Code can be found [here](http://code.visualstudio.com) and is available for all platforms, but you are free to use any code editor you choose. Popular choices include [Atom](http://atom.io) (Mac and Windows) and [Sublime Text](https://sublimetext.com/3) (all platforms).

  When you’re done, raise your hand and ask a member of the instructional team to verify that the installation was successful.

## Windows

1. __Install Git__

  Git is used to track the state of your code over time. [GitHub](https://github.com) has built its platform on Git technology. We will be using both Git and GitHub in this class to distribute code, submit assignments, and offer feedback.
  Git can be downloaded and installed from [this](https://git-scm.com/download/win) URL.

2. __Configure Git__

  In order to interact with Git, you'll need to first open the Git Bash utility. A quick way to access this terminal is by right clicking your desktop and choosing "Git Bash".

  Copy and paste the following two commands (separately) into your terminal. Replace the name and email address values with your own.

  ```bash
  git config --global user.name "Steve Jobs"
  git config --global user.email "steve@apple.com"
  ```

3. __Install Node__
  Refer to the package installer on Node’s [website](https://nodejs.org/en/). Select the LTS version (labeled "Recommended for Most Users"). Then just follow the set-up instructions.

4. __Install Visual Studio Code__

  Visual Studio Code can be found [here](http://code.visualstudio.com) and is available for all platforms, but you are free to use any code editor you choose. Popular choices include [Atom](http://atom.io) (Mac and Windows) and [Sublime Text](https://sublimetext.com/3) (all platforms).

  When you’re done, raise your hand and ask a member of the instructional team to verify that the installation was successful.

## Linux (Ubuntu)

1. __Install Git__

  Git is a tool used to track the state of your code over time. [GitHub](https://github.com) is a company that has made a business on top of the Git technology. We will be using both Git and GitHub in this class to distribute code, submit assignments and offer feedback.

  Git can be installed by running the following command:

  ```bash
  sudo apt-get install build-essential git-core curl
  ```

2. __Configure Git__

  Copy and paste the following two commands (separately) into your terminal. Replace the name and email address values with your own.

  ```bash
  git config --global user.name "Steve Jobs"
  git config --global user.email "steve@apple.com"
  ```

3. __Install Node.js__

  ```bash
  curl --silent --location https://deb.nodesource.com/setup_6.x | sudo -E bash -
  sudo apt-get install --yes nodejs
  apt-get install --yes build-essential
  ```

4. __Install Visual Studio Code__

  Visual Studio Code can be found [here](http://code.visualstudio.com) and is available for all platforms, but you are free to use any code editor you choose. Popular choices include [Atom](http://atom.io) (Mac and Windows) and [Sublime Text](https://sublimetext.com/3) (all platforms).

  When you’re done, raise your hand and ask a member of the instructional team to verify that the installation was successful.


# 2. Setting Up GitHub

We will be using the GitHub service to share some of our code. We will learn
about the underlying technology of GitHub known as `git` in the next lesson.

- Create an account at http://github.com
- In a Terminal on your computer, run the following two commands:

```bash
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL ADDRESS"
```

  (source: [GitHub](https://help.github.com/articles/set-up-git/))

- Follow [these
  instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
  to create a new _SSH Key_ (a special, very secure, key which allows your
  laptop access to your github account without having to remember your github
  password)
- Add your new SSH Key to GitHub following [these
  instructions](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
- Verify your key works by running the following:

```bash
ssh git@github.com
```

  You should see output similar to:

  ```
  Hi <you>! You've successfully authenticated, but GitHub does not provide shell access.
  Connection to github.com closed.
  ```



# Helpful Debugging Tips

__Error installing due to permissions__

Permissions issues are common when installing programs on the terminal. In order to install command line utilities, you need to be signed into a user account on your computer with administrator-level rights. If you have trouble with this, please ask a member of the instructional team for help.

__Google is your friend__

Even experienced programmers occasionally need to look up error messages on Google. If you experience an error, it’s likely that someone else has experienced the error, as well. To find the fix, copy and paste the error message into Google, but remove content specific to your computer to ensure the accuracy of your search. You will most likely find a reference to your specific error. StackOverflow is a trustworthy reference.


__Common Issues and Fixes:__

We recommend the following remedies to issues that commonly arise during the installation of command line utilities:

* Mac users may run into the problem of an outdated version of Git installed with Xcode being given precedence in the terminal. If you experience this issue, you’ll need to adjust your shell path by following the instructions under "Trumping Xcode's Older Git" [in this article](http://coolestguidesontheplanet.com/install-update-latest-version-git-mac-osx-10-9-mavericks/).

* Mac users running OS 10.11 or later may need to [disable the System Integrity Protection](http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/) on their machine before installing certain command line utilities.

* Students experiencing an EACCES error should change directory permissions to install Node and npm without the need to use sudo:
`$ sudo chown -R $(whoami) /usr/local/lib/node_modules`

* Students with Homebrew installed on their machines should run `brew update` in order to get the latest version of Homebrew.

* Students who need to update their installations of npm can run `npm install -g npm`.

* Students with an existing, outdated installation of Node can update their install by following the directions above (i.e., using the package installer).
