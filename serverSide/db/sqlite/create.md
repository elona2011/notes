create table IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid int NOT NULL,
    sitename TEXT NOT NULL,
    QICQ TEXT NOT NULL,
    balanceName TEXT NOT NULL,
    balanceRate TEXT NOT NULL,
    percentage TEXT NOT NULL,
    Appid TEXT NOT NULL,
    createtime datetime default current_timestamp
)