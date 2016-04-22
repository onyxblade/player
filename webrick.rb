require 'webrick'
server = WEBrick::HTTPServer.new(:Port => 80, :DocumentRoot => "#{Dir.pwd}")
trap('INT'){ server.stop }
server.start