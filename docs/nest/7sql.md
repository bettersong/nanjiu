---
title: 连接数据库及优雅地处理响应
author: 南玖
date: 2023-8-29
categories: Node
tags:
 - nest
---


## 前言

Node作为一门后端语言，当然也可以连接数据库，为前端提供CURD接口

我们以`mysql`为例，自行安装`mysql`

## TypeORM

> TypeORM 是一个[ORM](https://en.wikipedia.org/wiki/Object-relational_mapping)框架，它可以运行在 NodeJS、Browser、Cordova、PhoneGap、Ionic、React Native、Expo 和 Electron 平台上，可以与 TypeScript 和 JavaScript一起使用。 它的目标是始终支持最新的 JavaScript 特性并提供额外的特性以帮助你开发任何使用数据库的（不管是只有几张表的小型应用还是拥有多数据库的大型企业应用）应用程序。

`TypeORM`作为`TypeScript`中最成熟的对象关系映射器，可以很好的与`Nest`框架集成使用。

### 安装依赖

```shell
npm install --save @nestjs/typeorm typeorm mysql2
```

### 新建数据库

```sql
CREATE DATABASE nanjiu
    DEFAULT CHARACTER SET = 'utf8mb4';
```

新建一个`nanjiu`数据库


![7-1.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e01dc4c9f2848588b055b96898dc63a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=967&h=311&e=png&b=21232c)

### 连接数据库

数据库建好之后，我们就可以使用`typeorm`来连接数据库并建立映射关系了

```js
// dbConfig.ts
// 数据库配置
export function dbConfig()  {
    return {
        type: 'mysql', // 数据库类型
        host: '127.0.0.1', // 数据库地址
        port: 3306, // 端口
        username: 'root', // 用户名
        password: '123456', // 密码
        database: 'nanjiu', // 数据库名
        entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 实体类
        synchronize: true, // 自动创建表
        autoLoadEntities: true, // 自动加载实体类
    } as DbConfig
}
```

需要在`app.module.ts`中进行注册

```js
@Module({
  imports: [
    NanjiuModule, UserModule, InfoModule, 
    TypeOrmModule.forRoot(dbConfig() as any)
  ],
  controllers: [AppController],
  providers: [AppService],
})
```


![7-2.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9371e80d7e544ed9cf4459199b657cd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=902&h=394&e=png&b=22242d)

### 定义实体

> 实体是一个映射到数据库表的类，使用`@Entity`装饰器来定义

```js
// user.entry.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')  // 表名
export class User {

    @PrimaryGeneratedColumn() // 自增主键
    id: number;

    @Column() // 字段
    name: string;
}
```


![7-3.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95fa72718cc848f195ffab8a0bfa9f4a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=988&h=470&e=png&b=22242d)

基本实体由列和关系组成，每个实体必须有一个主列。

每个实体都必须在连接配置中注册：

```js
entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 实体类
```

### 关联实体

实体定义后需要在`module`中导入并关联

```js
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
```


![7-4.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a608c2c9025d432bba560759fbe8986c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=977&h=411&e=png&b=22242d)

当你做完这一步之后你会发现数据库里已经根据你刚刚定义的实体建好了表


![7-5.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff1c895c33474bc9a05b146ef5275a4c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=732&h=310&e=png&b=22242d)

这是因为刚刚数据库配置那里开启了`synchronize: true` 自动创建表

### CURD接口

数据库准备准备工作完成后，我们就可以来写接口了

**在`controller`控制器中定义接口`path`**

```js
// user.controller.ts
import { CreateUserDto } from './dto/create-user.dto';
export class UserController {
  constructor(
    private readonly userService: UserService,
    ) {}

  @Post('addUser')
  create(@Body() createUserDto: CreateUserDto) {
    // 添加用户
    return this.userService.add(createUserDto);
  }
}
```

**新建DTO数据验证器**

```js
import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator"; // 引入验证器
@Injectable() 
export class CreateUserDto {
    @IsString({ message: '用户名必须是字符串'}) // 验证是否是字符串
    @IsNotEmpty({ message: '用户名不能为空'}) // 验证是否为空
    name: string; // 用户名
}
```

`dto`一般用来做参数验证

**注册全局DTO验证管道**

```js
// main.ts
import { ValidationPipe } from '@nestjs/common';

app.useGlobalPipes(new ValidationPipe()) // 全局验证管道
```

**service逻辑处理，入库操作**

```js
// user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    // 使用 @InjectRepository(User) 注入实数据库实体
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

 async add(createUserDto: CreateUserDto) {
    // 添加用户，更多操作参考 TypeORM 文档
    const res = await this.userRepository.save(createUserDto);
    return res
  }
}
```

**调用接口**


![7-6.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4769529b5056417aa2100548cb60e510~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1085&h=585&e=png&b=fefefe)

**查看数据库**

调用完接口，此时数据库中会新增一条数据


![7-7.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9471ead3bf6d4896b35c325217330280~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1157&h=283&e=png&b=23252e)

## 响应结果处理

从上面的响应结果来看并不规范，只是简单的返回了数据库查询结果，并且当系统发生异常错误时，如果我们没有手动处理异常，所有的异常都会进入到`nest`内置的异常处理层，它返回的信息格式如下：

```js
{
  "statusCode": 500,
  "message": "Internal server error"
}
```

比如我们往`user`库中插入相同的`name`，但`name`设置了唯一性，所以这时会抛出错误，如果我们不处理返回给前端就是上面那种信息，这样前端同学看到就会很蒙，根本不知道为啥报错


![7-8.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f661560dc29048dd86f8461adf2ab9d8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1006&h=529&e=png&b=fefefe)

所以我们要做的就是将响应格式化处理

> 在nest中，一般是在**service**中处理异常，如果有异常，直接抛出错误，由**过滤器**捕获，统一格式返回，如果成功，service把结果返回，controller直接return结果即可，由**拦截器**捕获，统一格式返回
> 失败：过滤器统一处理
> 成功：拦截器统一处理

### 异常拦截器

为了更加优雅地处理异常，我们可以创建一个异常过滤器，它主要用来捕获作为`HttpException`类实例的异常。

**异常抛出封装：**

```js
// httpStatus.service.ts
import { Injectable, HttpException, HttpStatus, NestInterceptor } from '@nestjs/common'

@Injectable()
export class HttpStatusError {
    static fail(error, status = HttpStatus.BAD_REQUEST) {
        throw new HttpException({statusCode: status, message: '请求失败', error}, status)
    }
}
```

**抛出异常：**

```js
// group.service.ts
// ...
import { HttpStatusError } from '../utils/httpStatus.service'

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
    @InjectRepository(Template)
    private templateRepository: Repository<Template>,
  ) {}
  // todo: 添加分组
  async create(createGroupDto: CreateGroupDto) {
    const data = this.groupRepository.create(createGroupDto);
    const group = await this.groupRepository.findOne({ where: { name: createGroupDto.name } });
    if (group) {
      return HttpStatusError.fail('该分组已存在');
    }
    try {
      const res = await this.groupRepository.save(data, { reload: true });
      return res;
    } catch (error) {
      return HttpStatusError.fail(error);
    }
  }
}
```

**异常拦截器封装：**

```js
import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
  } from '@nestjs/common';
  
  @Catch()
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
  
      const status = exception.getStatus();
      const exceptionRes: any = exception.getResponse();
      const { error, message } = exceptionRes;
  
      const msgLog = {
        status,
        message,
        error,
        path: request.url,
        timestamp: new Date().toLocaleString(),
      };
  
      response.status(status).json(msgLog);
    }
  }
  
```

**使用：**

```js
 app.useGlobalFilters(new HttpExceptionFilter()); // 全局异常过滤器
```

**请求：**


![7-9.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ca91df44e994560a2902694beeabd23~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=944&h=584&e=png&b=fefefe)

这样报错信息就能够一目了然，简单实用的话可以直接抛出异常就可以，然后在抛出异常的地方给出详细信息。

### 全局响应拦截器

那成功的响应应该如何优雅地处理呢？

**Interceptor拦截器**

这里我们可以使用`Interceptor`拦截器，给成功响应按固定格式返回

```js
import { Injectable, HttpException, HttpStatus, NestInterceptor, ExecutionContext,CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable()
export class HttpStatusSuccess implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler) :Observable<any> {
        return next.handle().pipe(map(data => {
            return {
                statusCode: HttpStatus.OK,
                message: '请求成功',
                data
            }
        }))
    }
}
```

**使用：**

```js
 app.useGlobalInterceptors(new HttpStatusSuccess()); // 全局拦截器请求成功
```

**请求：**
![7-10.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f587c8fa86534bb5a447e0864a81477d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1003&h=618&e=png&b=fefefe)
