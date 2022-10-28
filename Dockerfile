# node js 15 ver.
FROM node:15
WORKDIR /app
# 현재 폴더에 있는 package.json 파일을 카피
COPY package.json .

RUN npm install

ARG NODE_ENV
# RUN = if문 사용 
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

# 현재 폴더 밑에 있는 디렉/파일 카피
COPY . ./
ENV PORT 8000
EXPOSE $PORT
CMD ["node", "index.js"]