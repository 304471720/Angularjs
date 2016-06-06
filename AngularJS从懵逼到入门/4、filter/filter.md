　　angular中filter过滤器主要有两个作用：**格式化数据**和**过滤数据**。filter组件共有以下几种：1、currency 2、number 3、date 4、json 5、lowercase 6、uppercase 7、limitTo 8、orderBy 9、filter。
官方API：https://code.angularjs.org/1.4.0-rc.2/docs/api/ng/filter
##### 一 、currency
　　`{{ currency_expression | currency : symbol : fractionSize}}`
　　symbol：货币符号，
　　fractionSize：精确小数位数
　　currency的作用是将值转换为精确小数点的数字，同时在前面添加货币符号
![currency测试](http://upload-images.jianshu.io/upload_images/2058233-c2dc0b0e78ca8980.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)