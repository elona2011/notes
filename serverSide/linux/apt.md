sudo apt-get -o Acquire::http::proxy="socks5h://127.0.0.1:39582" update
sudo apt -o Acquire::http::proxy="socks5h://127.0.0.1:39582" install zssh