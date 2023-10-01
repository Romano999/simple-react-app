# build environment
FROM node:16.20.2-alpine as build
WORKDIR /app

ENV REACT_APP_BASE_URL http://localhost:80
RUN echo "The ENV variable value is $REACT_APP_BASE_URL"

COPY package.json /app/package.json
RUN npm install --silent

# Install serve globally
RUN npm install -g serve

# RUN npm install react-scripts@5.0.1 -g --silent
COPY . /app

RUN npm run build

CMD ["serve", "-s", "build", "-p", "3000"]

# # production environment
# FROM nginx:1.25.0-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY .env /usr/share/nginx/html
# EXPOSE 3000:3000
# CMD ["nginx", "-g", "daemon off;"]