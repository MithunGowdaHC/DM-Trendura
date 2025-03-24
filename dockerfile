# Use a lightweight Node.js image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the project
RUN npm run build

# Use a clean production image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary built files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Expose the port used by Vite (default is 5173)
EXPOSE 5173

# Start the Vite preview server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
