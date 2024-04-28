# Use a specific version of node on Alpine for better security and predictability
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /mindscape

# Copy package.json and package-lock.json (if available) first to leverage Docker cache
COPY package.json package-lock.json* tailwind.config.js ./

# Install dependencies in a separate layer to take advantage of cached Docker layers
RUN npm install

# Copy the rest of your application code
COPY public/ public/
COPY src/ src/

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
