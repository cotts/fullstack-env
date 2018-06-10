FROM apache/couchdb:2.1
CMD [ "chmod","644"," /opt/couchdb/etc" ,"-R" ]
EXPOSE 5984