# sibling
//span[contains(., '出生日期')]/following-sibling::span[contains(., '请选择出生日期')]
//span[contains(., '被保险人本人同意投保该产品，并已确认保险金额等各项内容')]/preceding-sibling::input[@type='checkbox']

# and
//p[contains(., '￥')]/following-sibling::div/button[contains(@class, 'confirms') and contains(., '支付')]

# 多个元素名
(//span|//div)[contains(., '车架号')]
//*[self::span|self::div][contains(., '车架号')]

# 根据子元素选择父元素

//div[contains(@class,'van-popup') and .//span[contains(.,'优享保障')]]
首先找到class为van-popup的div，并且它的子元素中要有一个span，且这个span内有文字'优享保障'

# 根据兄弟元素查找

//div[contains(@class, 'button') and contains(.,'确定') and preceding-sibling::ul[contains(.,'基础保障')]]
找到div的class为button，且包括'确定'，且它的上一个兄弟元素为ul并包含文字'基础保障'

# 匹配第1个

(//button[contains(.,'注销')])[1]
匹配第1个

# 精确匹配

//table/tbody/tr/td[@class='available']/div/span[normalize-space(text())='1']
//input[normalize-space(@placeholder)='请选择性别']
通过normalize-space(text())

# Axes

parent::
ancestor::
descendant::
preceding-sibling::
following-sibling::