# sibling
//span[contains(., '出生日期')]/following-sibling::span[contains(., '请选择出生日期')]
//span[contains(., '被保险人本人同意投保该产品，并已确认保险金额等各项内容')]/preceding-sibling::input[@type='checkbox']

# and
//p[contains(., '￥')]/following-sibling::div/button[contains(@class, 'confirms') and contains(., '支付')]

# 多个元素名
(//span|//div)[contains(., '车架号')]
//*[self::span|self::div][contains(., '车架号')]