I/ Đây là bản mockup của hệ thồng quản lí cửa hàng -
https://app.mockplus.com/team/invitation/kJTYSquMAk3
Lưu ý: để ngôn ngữ của google là tiếng Việt do bản Mockup thiết kết theo tiếng việt 

II/ Hướng dẫn cách chạy: 

1. Clone code về máy
2. Cài đặt môi trường chạy nodeJS, expressJS và vue
    npm install
    npm install --save express
    npm install -g vue-cli
    npm install -g babel-cli
3. Kết nối database 
    * Mở MySQL Workbench -> Tạo 1 connection mới 
        "username": "root",
            "password": "password",
            "database": "datn",
            "host": "127.0.0.1",
            "port": 3306,
    * Vào folder training-backend thực hiện chỉnh sửa như sau: 
        a. tạo bản sao của file .env.example và sửa thành tên .env, Nội dung file .env như sau: 
            NODE_ENV= local
            STORAGE_UPLOAD_PATH=/var/www/html/static/
            MYSQL_DATADIR=./data_dir
            LOGS_DIR=./logs
            TZ='Etc/UTC'
        b. vào folder config. Tạo bản sao của default.json và đổi tên thành local.json . File local.json có nội dung như sau:
            {
            "database": {
                "username": "root",
                "password": "password",
                "database": "datn",
                "host": "127.0.0.1",
                "port": 3306,
                "dialect": "mysql"
            },
            "auth": {
                "secret_access_token": "edit this",
                "secret_refresh_access_token": "edit this",
                "secret_access_token_expire": 300,
                "secret_refresh_access_token_expire": 86400,
                "secret_crypto_password": "crypto_password"
            }
    * Vào folder database -> mở file createDB.js và sửa nội dung file thành như sau: 
            const mysql = require('mysql2/promise');

            process.env.NODE_CONFIG_DIR = '../config'

            const config = require('config');

            const dbConfig = config.get('database');
            const dbName = dbConfig.database || "DB_NAME";

            console.log('dbConfig: ', dbConfig);

            mysql.createConnection({
                host: dbConfig.host || "127.0.0.1",
                port: dbConfig.post || "3306",
                user: dbConfig.username || "root",
                password: dbConfig.password || "password",
            }).then(connection => {
                connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
                    console.info("Database create or successfully checked");
                    process.exit(0);
                })
            })
    * Chạy lệnh sau ở terminal:  npm install mysql2  

4. Mở folder training-backend bằng teminal và chạy lệnh sau :  mpn run dev
Đây là folder chứa serve
4. Mở folder front-end bằng teminal và chạy lệnh sau : npm run serve
Đây là folder chứa giao diện sử dụng dành cho đối tượng: Quản lí cửa hàng, Thu ngân  
5. Mở folder dashboard bằng teminal và chạy lệnh sau : npm run serve
Đây là folder chứa giao diện sử dụng dành cho đối tượng: Khách hàng khi đặt bàn 
