FROM node:20

WORKDIR /app

# Copy only package.json and lock file to optimize Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy Prisma schema and run prisma generate
COPY prisma ./prisma
RUN npx prisma generate

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
