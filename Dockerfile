# From base image node
FROM node:lts-alpine

# Create app directory
WORKDIR /srv/www/app

# Copying all the files from your file system to container file system
COPY package.json .

# Install all dependencies
RUN npm install

# Copy other files too
COPY . .

# Expose the port
EXPOSE 3000

# Command to run app when intantiate an image
CMD ["npm", "start"]
