# node-js

1)initialize repo
git init / git initialize

2)account config
git config user.name xxx
git config user.email xxx
git config user.password xxx

let's check
git config -l

3)remote
remote.origin.url=https://github.com/elencode/node-js.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.remote=master
branch.master.remote=origin
branch.master.merge=refs/heads/master

4) local <-sync-> remote
before work
    git pull - de pe remote il transmiteti pe local
after work
    git push - de pe local - pe remote