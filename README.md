# ReactSystem
React-反欺诈管理系统

如何从gitLab上赋值项目代码到gitHub上：
1.从gitLab上克隆代码到本地，再赋值项目到自己新建的文件夹中
cd 项目目录
2.git init 变成git仓库
3.git add . 将项目添加到本地仓库
4.git commit -m '初始化项目' 将项目提交到仓库
5.新建一个远程仓库，通过git remote add origin https://github.com/xlfdqf/VueDemo.git将本地仓库和远程仓库进行关联(这里是项目地址)
6.git pull --rebase origin master 将远程仓库和本地仓库内容合并 7.git push -u origin master 将本地仓库所有内容推送到远程仓库
