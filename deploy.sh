#!/bin/bash
tar czf happyR.tar.gz .babelrc .gitignore client package-lock.json package.json public script secrets.js server webpack.config.js
scp happyR.tar.gz 165.227.82.241 :~
rm happyR.tar.gz


ssh 165.227.82.241 << 'ENDSSH'
pm2 stop all
rm -rf happyResident
mkdir happyResident
tar xf happyR.tar.gz -C happyResident
rm happyR.tar.gz
cd happyResident
npm install
pm2 start all
ENDSSH 

ssh root@165.227.82.241  << 'ENDSSH'
setsebool -P httpd_can_network_connect on
setsebool -P httpd_enable_homedirs on
chcon -Rt httpd_sys_content_t /home/taulantvokshi/happyResident/public
exit
ENDSSH