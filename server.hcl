node_name = "consul-server"
server = true
bootstrap_expect = 1
data_dir = "/consul/data"
log_level = "INFO"
client_addr = "0.0.0.0"

connect {
    enabled = true
}

ports {
  grpc = 8502
}

ui_config {
  enabled = true
}