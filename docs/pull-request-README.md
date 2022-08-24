# Feature Branch Git Workflow

Each feature gets its own branch!

Are you creating an updating a new feature or updating an existing one?

1. Create a feature branch and make local changes.

- [ ] Clone the remote repository (git clone <remote-repository-url>)

- [ ] Create a new branch for the feature and checkout locally (git branch <local-branch name>) (git checkout <local-branch-name>)

- [ ] Add files that were changed and commit the changes on the local branch (git add <filename>) (git commit -m “My commit message.”)

- [ ] Push the changes to the remote repository with a remote branch name that matches local branch (git push origin <local-branch-name>). The local branch name will now appear in the branch names on GitHub repository.

2. Submit a pull request to merge the feature branch into the master branch.

- [ ] Check if you need to do step #3 below
On GitHub: click “Compare and Pull Request”
Give a descriptive title for the pull request (i.e. “Add Sort subwidget to Ratings & Reviews widget.”)

- [ ]  Add a description and tag reviewers. Include the Trello ticket in the description.
If there are conflicts with the base branch, go to step #3 below before proceeding.
If there are no conflicts with the base branch, get someone from team to code review your pull request.


3. If the remote master branch has changes not in the local feature branch, merge them into your local feature branch.

- [ ]  Checkout your local master (git checkout master)
Pull remote master to your local master branch repository (git pull origin master) Checkout your local branch (git checkout <local-branch>)
Merge master branch into your local branch (git merge master) (this merges in the changes from the remote master branch into your local branch)
Push your updated local branch to the remote repository (git push origin <local-branch-name>)

- [ ]  Read Atlassian Feature Branch Workflow to further your understanding of the process.

# Code Review Checklist:

- [ ]  Branch Name: Should describe the feature and include the Trello ticket id (i.e. 11-ratings-sort)

- [ ]  No Sensitive Information: no .env files, API keys, etc.

- [ ]  Performance Considerations: Change in performance between master and feature branch should be considered before merging into master.
  - Time to First Paint: 0.8 seconds
  - Time to First Meaningful Paint: 2.0 seconds
  - Time to Interactive: 2.5 seconds

- [ ]  Unit Tests: PR should include at least one unit test.

- [ ]  Improvements: Code reviewer should leave at least one suggestion for improvement before approving the PR.

