```sql
CREATE TABLE FeiguaCookies (
    id INT NOT NULL AUTO_INCREMENT,
    cookies TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS FeiguaCookies (
    id INT NOT NULL AUTO_INCREMENT,
    cookies TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (id)
);
```