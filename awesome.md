# My Awesome List

## npm -g packages

My installed packages:
```log
npm list -g --depth 0
C:\Users\mmoehrlein\AppData\Roaming\npm
+-- boxen-cli@1.0.0
+-- changelog@1.4.2
+-- docsify-cli@4.3.0
+-- fkill-cli@5.2.0
+-- localtunnel@1.9.1
+-- ndb@1.0.42
+-- nodemon@1.13.3
+-- np@4.0.2
+-- npm@6.7.0
+-- npm-name-cli@2.5.0
+-- npx@10.2.0
+-- ntl@3.0.0
+-- release@6.0.0
+-- solidarity@2.3.1
+-- spoof@2.0.1
+-- tldr@3.2.6
```

Installation:
``` 
npm i -g <package-name>
```


### boxen-cli
create boxen like the npm package, but in the command line.

```
boxen 'Hello World!' --align center --border-style round --padding 1
```

![tags](boxen,promt,terminal,box,borders)


### changelog
generate a changlog from commits

```
changelog mmoehrlein/mmoehrlein.github.io latest -m
```

![tags](generate,commits,release)


### docsify-cli
initializes a docsify setup and can serve it locally

```
docsify init ./docs
docsify serve ./docs --open
```

![tags](cli,serve,init)


### fkill-cli
command line interface to kill processes

```
fkill
fkill :port
```

![tags](kill,process,task)
  

### localtunnel
opens a tunnel to expose a local server via a public domain

```
lt -p 3000 -o
```

![tags](local,localhost,tunnel,public,domain)


### ndb
ndb is an improved debugging experience for Node.js, enabled by Chrome DevTools


### nodemon
monitor files and restart node app if something changes

``` 
nodemon server
```

![tags](monitor,watch,restart)


### np
a better npm publish

``` 
np minor
```

![tags](npm,publish,clean,update,release)


### npm
node package manager - no explanation needed I guess

``` 
npm init
```

![tags](node,package,manager)


### npm-name-cli
check if npm package name is available

``` 
npm-name <package-name>
```

![tags](name,npm)


### npx
Executes <command> either from a local node_modules/.bin, or from a central cache, installing any packages needed in order for <command> to run.

``` 
npx <local module>
```

![tags](npm,execute,local,bin)


### ntl
Interactive cli menu to list and run npm tasks.

``` 
ntl
```

![tags](npm,scripts,list,tasks)


### pm2
PM2 is a production process manager for Node.js applications with a built-in load balancer. 

``` 
pm2 start app.js
pm2 monit
```

![tags](process,manager,alive,forever)


### release
When run, this command line interface automatically generates a new GitHub Release and populates it with the changes (commits) made since the last release.

``` 
release patch
```

![tags]()


### solidarity
Solidarity is an environment checker for project dependencies across multiple machines.

``` 
solidarity snapshot
solidarity --verbose
```

![tags](environment,env,check,report,issue)


### spoof
sadly it does not work for me

``` 
spoof set <mac> <devices>
```

![tags](mac)


### tldr
super useful collection of help manuals

``` 
tldr <command>
```

![tags](man page,man,manual,help)
