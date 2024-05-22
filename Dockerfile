
# Use a specific version of node on Alpine for better security and predictability
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /mindscape

# Copy package.json and package-lock.json (if available) first to leverage Docker cache
COPY package.json package-lock.json* tailwind.config.js ./

# Install dependencies in a separate layer to take advantage of cached Docker layers
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Command to run your application using serve, `serve -s build` will serve your static site on the port specified by the SERVE_PORT environment variable
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"]

# Expose the default port for serving (can be overridden at runtime)
EXPOSE 3000