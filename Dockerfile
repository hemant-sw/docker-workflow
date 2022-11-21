FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV CHINESE_FOOD=goodFood
ENV REACT_APP_NAME=myName 
EXPOSE 3000
CMD ["npm","start"]