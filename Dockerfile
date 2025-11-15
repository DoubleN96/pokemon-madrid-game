# Build web game for Pokemon Madrid
FROM nginx:alpine

## Invalidate cache for fresh build
ARG CACHEBUST=20251115-124227

# Copy game files
COPY . /usr/share/nginx/html/

# Fix file permissions for nginx user
RUN chmod -R 755 /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
