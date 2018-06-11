FROM apache/couchdb:2.1
COPY ./config/local.ini /opt/couchdb/etc/local.ini
EXPOSE 5984