# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4
# Set the working directory to /api
WORKDIR /api
# copy package.json into the container at /api
COPY package*.json /api/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY . /api/
# Make port 80 available to the world outside this container
EXPOSE 8080
# Install nodemon
RUN npm install bcrypt
RUN npm install nodemon -g
# Run the app when the container launches
CMD ["nodemon", "server"]
