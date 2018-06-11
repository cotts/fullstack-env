FROM nginx:latest
COPY ./dist /var/www/public/dist
COPY ./index.html /var/www/public/index.html
COPY ./config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT ["nginx"]
# Parametros extras para o entrypoint
CMD ["-g", "daemon off;"]
