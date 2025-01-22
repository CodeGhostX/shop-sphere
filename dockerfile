FROM node:20

WORKDIR /app

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", 'run', 'dev']