# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the Next.js app using a lightweight server
FROM node:20-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --production --frozen-lockfile

# Copy the built app from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Set environment variable to indicate production
ENV NODE_ENV=production

# Start the Next.js app
CMD ["npm", "run", "start"]
