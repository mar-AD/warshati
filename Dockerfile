FROM node:22-alpine

WORKDIR /app

COPY package.json  ./

RUN npm install --legacy-peer-deps --frozen-lockfile

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]