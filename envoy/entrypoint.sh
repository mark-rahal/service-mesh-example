until $(curl --output /dev/null --silent --head --fail http://$CONSUL_ADDR:$CONSUL_HTTP_PORT); do
    echo 'Waiting for consul server'
    sleep 5
done

consul connect envoy -sidecar-for $SERVICE -http-addr $CONSUL_ADDR:$CONSUL_HTTP_PORT -grpc-addr $CONSUL_ADDR:$CONSUL_GRPC_PORT 