FROM alpine:latest

COPY launch.sh /opt/launch.sh

RUN apk add --update nodejs-npm && \
    npm install -g nightwatch && \
    rm -rf /tmp/* /root/.npm && \
    chmod a+rx /opt/launch.sh

CMD /opt/launch.sh