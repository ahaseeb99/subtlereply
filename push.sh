#!/bin/bash

# This script configures remote repositories, pulls changes from the master branch, and pushes changes to two Git repositories
git remote remove origin 2> /dev/null
git remote remove secondRepo 2> /dev/null

git remote add origin https://github.com/ialim0/subtlereply.git
git remote add secondRepo https://github.com/PtownPioneer/subtle-reply-frontend.git

BRANCHE=${1:-master}

echo "Pulling changes from (origin)..."
git pull origin $BRANCHE

echo "Push to (origin)..."
git push origin $BRANCHE

echo "Pulling changes from (secondRepo)..."
git pull secondRepo $BRANCHE

echo "Push to (secondRepo)..."
git push secondRepo $BRANCHE

echo "OK"
