#!/usr/bin/env sh


# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'auto deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push -f https://github.com/bettersong/nanjiu.git main:static-pages


set -x