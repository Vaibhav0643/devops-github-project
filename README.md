# DevOps Git Project Documentation

## Project Overview
This project demonstrates **Git version control best practices** in a DevOps workflow.  
The objective is to practice branch management, pull requests, merge conflict resolution, tagging, and documentation.
---

## Branching Strategy
- **main**: Stable, production-ready branch. All final merges go here.
- **dev**: Development branch where features are integrated and tested.
- **feature-\***: Temporary branches created to develop new features or fixes before merging into `dev`.

---

## Tasks Completed

1. **Repository Setup**
   - Initialized a local Git repository.
   - Created `.gitignore` and `README.md`.
   - Pushed repository to GitHub (`main` branch).

2. **Branch Creation**
   - Created `dev` branch for ongoing development.
   - Created `feature` branch for testing new changes.

3. **Feature Implementation**
   - Modified `README.md` to include feature-specific information.
   - Added `/test` route in `index.js` to simulate a new feature.

4. **Pull Request Workflow**
   - Created a Pull Request from `feature` → `dev`.
   - Resolved merge conflicts in `README.md` and `index.js`.
   - Merged PR using GitHub’s interface.

5. **Merge Conflict Demonstration**
   - Intentionally modified the same lines in both `dev` and `feature` branches to trigger merge conflicts.
   - Resolved conflicts manually and verified merged content.

6. **Versioning**
   - Tagged releases in GitHub (optional for future versions).

---

## Key Learnings
- How to **create and manage branches** for DevOps workflows.
- How **pull requests** work and where PR titles/descriptions appear.
- How **merge conflicts** occur and strategies to resolve them.
- How **commit history** reflects merges and conflict resolutions.

---

## Git Commands Used (Summary)
```bash
git init
git add .
git commit -m "Initial commit"
git branch dev
git checkout -b feature
git add .
git commit -m "Feature changes"
git push -u origin feature
git pull
git merge dev
git push
