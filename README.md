## Setting Up
1. clone the git repo to your local folder 
   ``` git clone git@github.com:linesbetween/KiaT-2.git ```
2. create your own branch 
   ``` git checkout -b <your branch name> ```

## Workflow
0. sync local master with master on Github by ```git checkout master```,  ```git pull```; 
   sync your branch with master by ``` git checkout <your branch>```, ```git merge master```
1. **make changes in your own branch**
2. commit and push change to this repo
   ``` git add . ```, ``` git commit -m "<your message>" ```, ``` git push```
3. repeat step 1 untill enough changes are made
4. create a pull request on Github
