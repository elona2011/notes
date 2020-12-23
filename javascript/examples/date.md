# YYYYMMDD

(new Date()).toISOString().slice(0,10).replace(/[^0-9]/g, "")

let yesterday = new Date()
yesterday.setDate(yesterday.getDate()-1)
yesterday.toISOString().slice(0,10).replace(/[^0-9]/g, "")

# YYYYMMDDHHmmSS

(new Date()).toISOString().slice(0,19).replace(/[^0-9]/g, "")