# How to contribute to an open source project


1. Go to repository and fork the repository to our repository.
2. take SSH url and use: git clone <url(git@github.....)>
    - ls -al to see all files 
3. git remote add upstream <url> (points to this as the upstream file)
4. git fetch upstream (fetches the upstream branch on this url)
5. git branch --set-upstream-to-upstream/master master (sets our branch to track upstream)

~8 Setting up the project locally
6. Check CONTRIBUTING.md file for setup instructions
7. Create a new branch (git checkout -b branchname )
8. npm install
9. npm test:watch (rerun as we make changes)
10. Check 'acceptable contributions'
11. Look over code to make sure your code will have the same syntax.

~9 How to create a pull req on Github
12. Sometimes you need some help, let team take a look at it by commiting what you have + a pull request.
13. Push upstream to our fork ('origin') and then create a pull request.
    - git push origin branchname
        - To set upstream: git push -u  origin branchname

14. Go to github and click "create pull request"
15. click "compare across forks", change 'head fork' to your fork && 'compare'to branch just pushed
16. Then add the pull request with a message

~10 How to Contribute to an Open source Project

- Comments will usually be shown in inline messages with tips, etc.
- Bots may run to make sure your contributions meet standards.
    - This is where CI/CD is used too

~11 How to Update a Pull Request

17. Run their tests to make sure our contribution passes:
    - cat/.travis.yml
     - ex: test with np run build
18. Sometimes projects have commit message standards
    - to get around it - git commit --no-verify
19. git push


~12 How to Rebase a Git Pull request

- git fetch upstream
- git rebase upstream master
    - gets a fresh copy of the upstream and runs all commits sequentially
- edit merge conflicts
- git rebase --continue
- git push -f to push while removing old history

~13 Squash multiple commits

- git rebase -i SHA
    - interactive mode
        -ex: pick 7bjfjfj squash 3io344

