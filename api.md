## baseURL

`DEV` ： `https://api.imooc-front.lgdsunday.club/api`

`PROD` ： `https://api.imooc-front.lgdsunday.club/prod-api`

## 身份验证

包含 `/user/` 的请求中需要通过请求头：`Authorization` 传递 `token` 验证：`Bearer {token}`

## 初始化

- 描述：该接口会初始化 `用户` 和 `文章` 列表数据
- 请求路径：/sys/init
- 请求方法：get
- 请求参数

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": null,
  "message": "init data success"
}
```

## 阿里云 OSS

### 获取上传文件临时凭证

- 请求路径：/user/sts
- 请求方法：get
- 请求参数

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {
    "RequestId": "E03B702D-5B84-50BC-B578-EF87A71B5C45",
    "AssumedRoleUser": {
      "Arn": "acs:ram::1211026263114215:role/imoocfrontramoss/imooc-front@1211026263114215.onaliyun.com",
      "AssumedRoleId": "315679564736224577:imooc-front@1211026263114215.onaliyun.com"
    },
    "Credentials": {
      "SecurityToken": "CAISmAJ1q6Ft5B2yfSjIr5fPCcvii+pzxISdSXPVtzUjVN1c2Y/Nhzz2IHlJenZhBO4asf8xnmpU6/kdloByTphCTgnKd8x28rwOq1r4O9Cf4ZLutOVY0sT4X2+VAhr6zdLUJe7+SYs0r3hH9xeW+BVoyJ7WKB+APTX8Q7Dr5LdjatMIJHraCRNNGNZRICZ7tcYeLgG/HP2xMxns8AGyZQgSzWgas25k7rmlycCx8wfXiEaAqtUYvIPsOJOpHaIOVdVdK47vhbUuLPSbjnUJskQQrfpM4fYaqWudjLa0GEJM5hiKCe3Q/+B0IRVxDqpAQPcZ8qetyKMk5beNzd6rlkkSJ5lUViPYT466x83YAuqsMc0iZTkQu61lFyvlGoABHlwxfFetftswlD0BiZfn5mL0XtAGRYWuUGt24CnPgofaTlK3YeVES3zoI8vrjVtC1SHoWxPJgChkfANeuCgxtFAj29U4A3jzFnXYt07oT/u4zqrE5bzwNMf3HvjZ4j9DZXxIPwXyxf0RegWrrdZx0zNqyYbu0MgMJw7sgO7Up34=",
      "AccessKeyId": "STS.NTzBqVf5RsFvKUdS5vXRp6Jfe",
      "AccessKeySecret": "Du8TGFWGtgswmaQXt8Vquw6j1eSy56318vMTLmmDcFxz",
      "Expiration": "2022-02-28T12:41:45Z"
    }
  },
  "message": "success"
}
```

## 用户中心

### 注册

- 请求路径：/sys/register
- 请求方法：post
- 请求参数

| 参数名         | 参数说明                         | 备注                      |
| -------------- | -------------------------------- | ------------------------- |
| username       | 用户名                           |                           |
| password       | 密码（MD5 加密）                 |                           |
| reqType        | 第三方登录（可选）               | QQ、WX                    |
| accessToken    | accessToken                      | QQ 注册时必须要传递的数据 |
| openid         | Openid                           | 微信 注册时必传           |
| nickname       | 微信获取到的用户信息 nickname    | 微信 注册时必传           |
| headimgurl     | 微信获取到的用户信息 headimgurl  | 微信 注册时必传           |
| figureurl_qq_2 | QQ 获得的用户信息 figureurl_qq_2 | QQ 注册时必传             |

- 响应数据

```json
{
  "success": true,
  "code": 10000,
  "data": null,
  "message": "执行成功"
}
```

### 人类行为验证

- 请求路径：/sys/`captcha`
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| behavior | 行为数组 |      |

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": true,
  "message": "验证成功"
}
```

### 微信登录前置数据获取

- 请求路径：/sys/wxlogin/data
- 请求方法：get
- 请求参数

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {},
  "message": "验证成功"
}
```

### 微信登录获取 access_token

- 请求路径：/sys/wxlogin/access_token

- 请求方法：get

- 请求参数

  | 参数名 | 参数说明                                                 | 备注 |
  | ------ | -------------------------------------------------------- | ---- |
  | appid  | 应用唯一标识，在微信开放平台提交应用审核通过后获得       |      |
  | secret | 应用密钥 AppSecret，在微信开放平台提交应用审核通过后获得 |      |
  | code   | 填写第一步获取的 code 参数                               |      |

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {},
  "message": "验证成功"
}
```

### 微信登录获取用户信息

- 请求路径：/sys/wxlogin/userinfo

- 请求方法：get

- 请求参数

  | 参数名      | 参数说明                  | 备注 |
  | ----------- | ------------------------- | ---- |
  | accessToken | wxlogin/access_token 获取 |      |
  | openid      | wxlogin/access_token 获取 |      |

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {},
  "message": "验证成功"
}
```

### 登录

- 请求路径：/sys/login
- 请求方法：post
- 请求参数

| 参数名      | 参数说明                        | 备注                      |
| ----------- | ------------------------------- | ------------------------- |
| username    | 用户名                          |                           |
| password    | 密码（MD5 加密）                |                           |
| loginType   | 登录类型                        | username、QQ、WX          |
| accessToken | accessToken                     | QQ 登录时必须要传递的数据 |
| openid      | Openid                          | 微信 登录时必传           |
| nickname    | 微信获取到的用户信息 nickname   | 微信 登录时必传           |
| headimgurl  | 微信获取到的用户信息 headimgurl | 微信 登录时必传           |

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {
    "code": 204, // 该用户尚未注册，用于第一次扫码登录时
    "token": "63776a8e-dc47-49e6-b63d-e53c51966943"
  },
  "message": "登录成功"
}
```

### 获取用户信息

- 请求路径：/user/profile
- 请求方法：get
- 请求参数

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {},
  "message": "success"
}
```

### 修改用户信息

- 请求路径：/user/profile

- 请求方法：put

- 请求参数

  | 参数名       | 参数说明 | 备注 |
  | ------------ | -------- | ---- |
  | nickname     | 昵称     |      |
  | title        | 职位     |      |
  | company      | 公司     |      |
  | homePage     | 个人主页 |      |
  | introduction | 简介     |      |
  | avatar       | 头像 URL |      |

- 响应数据

```json
{
    "success": true,
    "code": 200,
    "data": {
        ...
    },
    "message": "success"
}
```

## 列表

### 获取图片数据列表

- 请求路径：`/pexels/list`
- 请求方法：get
- 请求参数

| 参数名     | 参数说明 | 备注       |
| ---------- | -------- | ---------- |
| page       | 页码     | 默认为 1   |
| pageSize   | 每页数量 | 默认为 20  |
| categoryId | 分类 ID  | 默认为 all |
| searchText | 搜索文本 | 默认为 ''  |

- 响应数据

```json
{
    "success": true,
    "code": 200,
    "data": {
        "list": [
            {
                "_id": ObjectId("62136609722a9d2f7c1106ba"),
                "photoLink": "https://www.pexels.com/zh-cn/photo/9667784/",
                "photo": "https://images.pexels.com/photos/9667784/pexels-photo-9667784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "authorLike": "https://www.pexels.com/zh-cn/@vunyakurochkin",
                "avatar": "https://images.pexels.com/users/avatars/111615061/-184.jpeg?auto=compress&fit=crop&h=60&w=60",
                "author": "Вениамин Курочкин",
                "photoDownLink": "https://www.pexels.com/photo/9667784/download/",
                "id": "9667784",
                "title": "图片数据来自 pexels ",
                "photoWidth": NumberInt("500"),
                "photoHeight": NumberInt("750"),
                "photoType": "jpg",
                "__v": NumberInt("0")
            },
            ...
        ],
        "total": 533,
        "page": 1,
        "size": 20
    },
    "message": "success"
}
```

### 获取推荐主题

- 请求路径：`/pexels/themes`
- 请求方法：get
- 请求参数

- 响应数据

```json
{
    "success": true,
    "code": 200,
    "data": {
        "themes": [
            {
                "id": "cute background",
                "photo": "https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360",
                "title": "可爱背景"
            }
          ....
        ]
    },
    "message": "success"
}
```

### 获取搜索提示

- 请求路径：`/pexels/hint`
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注 |
| ------ | -------- | ---- |
| q      | 搜索内容 |      |

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {
    "total": 4,
    "result": ["12306", "123", "1234", "12345"]
  },
  "message": "success"
}
```

### 获取指定图片数据

- 请求路径：`/pexels/:id`
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注 |
| ------ | -------- | ---- |
| id     | 图片 id  |      |

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {
    "tags": [
      "all",
      "data_presentation",
      "tips",
      "games",
      "anime",
      "apparel",
      "travel_places"
    ],
    "_id": "6214865537be02128d1dea27",
    "photoLink": "https://www.pexels.com/zh-cn/photo/11210402/",
    "photo": "https://images.pexels.com/photos/11210402/pexels-photo-11210402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "authorLike": "https://www.pexels.com/zh-cn/@louis-tran-155871478",
    "avatar": "https://images.pexels.com/users/avatars/155871478/louis-tran-274.jpeg?auto=compress&fit=crop&h=60&w=60",
    "author": "Louis Tran",
    "photoDownLink": "https://www.pexels.com/photo/11210402/download/",
    "id": "11210402",
    "title": "图片数据来自 pexels ",
    "photoWidth": 500,
    "photoHeight": 617,
    "photoType": "jpg",
    "__v": 0
  },
  "message": "success"
}
```

## 类别

### 获取所有类别

- 请求路径：`/category`
- 请求方法：get
- 请求参数

- 响应数据

```json
{
    "success": true,
    "code": 200,
    "data": {
        "categorys": [
            {
              "id": "web_app_icon",
              "name": "UI/UX",
              "col": 1,
              "urlname": "web_app_icon"
            }
            ...
        ]
    },
    "message": "success"
}
```

## VIP

### 获取 VIP 支付数据

- 请求路径：`/user/vip/pay/list`
- 请求方法：get
- 请求参数

- 响应数据

```json
{
    "success": true,
    "code": 200,
    "data": [
        {
            "id": 0,
            "title": "连续包月",
            "desc": "次月 ¥19 续费,可随时取消",
            "oldPrice": "29",
            "price": "9",
            "isHot": true
        },
      ......
    ],
    "message": "success"
}
```

### 支付宝订单

- 请求路径：`/user/alipay`
- 请求方法：get
- 请求参数

| 参数名      | 参数说明         | 备注         |
| ----------- | ---------------- | ------------ |
| subject     | 支付标题         |              |
| totalAmount | 支付价格         | 默认为 0.01  |
| body        | 支付描述         |              |
| isMobile    | 是否为移动端请求 | 默认为 false |

- 响应数据

```json
{
    "success": true,
    "code": 200,
    "data": [
        {
            "id": 0,
            "title": "连续包月",
            "desc": "次月 ¥19 续费,可随时取消",
            "oldPrice": "29",
            "price": "9",
            "isHot": true
        },
      ......
    ],
    "message": "success"
}
```

### 根据订单号查询支付结果

- 请求路径：`/sys/pay/result`
- 请求方法：get
- 请求参数

| 参数名       | 参数说明 | 备注 |
| ------------ | -------- | ---- |
| out_trade_no | 订单号   |      |

- 响应数据

```json
{
  "success": true,
  "code": 200,
  "data": {},
  "message": "success"
}
```
