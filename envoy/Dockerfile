FROM consul:latest
FROM envoyproxy/envoy:v1.20-latest
COPY --from=0 /bin/consul /bin/consul

WORKDIR /

ENV CONSUL_ADDR 127.0.0.1
ENV CONSUL_HTTP_PORT 8500
ENV CONSUL_GRPC_PORT 8502

RUN bash -c 'apt-get update -y'
RUN bash -c 'apt-get install curl -y'

COPY ./entrypoint.sh /entrypoint.sh

CMD ["./entrypoint.sh"]