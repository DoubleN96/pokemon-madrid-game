# Build web game for Pokemon Madrid
FROM nginx:alpine

## Invalidate cache for fresh build
ARG CACHEBUST=20251115-122409

# Copy game files
COPY . /usr/share/nginx/html/

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
