FROM alpine:latest

RUN apk add --update nodejs-npm && \
    npm install -g nightwatch && \
    rm -rf /tmp/* /root/.npm

CMD nightwatch -c /scripts/nightwatch.json