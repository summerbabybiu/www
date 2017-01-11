FROM node:6.9
MAINTAINER stephenwzl 991405736@qq.com
EXPOSE 4040
COPY run.sh /
RUN chmod +x /run.sh
RUN mkdir -p /data/config
COPY parse-dashboard.json /data/config/
RUN npm install -g parse-dashboard
CMD . /run.sh
