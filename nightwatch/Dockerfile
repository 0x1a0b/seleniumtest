FROM alpine:latest

COPY launch.sh /opt/launch.sh

RUN apk add --update nodejs-npm && \
    npm install -g nightwatch && \
    rm -rf /tmp/* /root/.npm && \
    chmod a+rx /opt/launch.sh && \
    mkdir -pv /results/screenshots /results/reports && \
    chmod -R 777 /results

CMD /opt/launch.sh

VOLUME /results