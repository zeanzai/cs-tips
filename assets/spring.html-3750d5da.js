const l=JSON.parse('{"key":"v-6089850c","path":"/docs/03-framework/spring.html","title":"spring","lang":"zh-CN","frontmatter":{"description":"**日期** 迭代内容 --- --- 23-11-24 1. 导学指引。确定一种学习和记忆 Spring 相关知识点的逻辑树。 | 导学指引 Java 作为一个编程语言，随着 JVM 功能的完善，Java 逐渐应用于工程领域（相对于科学计算领域）。但是在工程领域，人们实现的 Java 框架很庞大和臃肿，并不利于程序员的理解和应用，于是人们想要把程序员...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/cs-tips/cs-tips/docs/03-framework/spring.html"}],["meta",{"property":"og:site_name","content":"cs-tips"}],["meta",{"property":"og:title","content":"spring"}],["meta",{"property":"og:description","content":"**日期** 迭代内容 --- --- 23-11-24 1. 导学指引。确定一种学习和记忆 Spring 相关知识点的逻辑树。 | 导学指引 Java 作为一个编程语言，随着 JVM 功能的完善，Java 逐渐应用于工程领域（相对于科学计算领域）。但是在工程领域，人们实现的 Java 框架很庞大和臃肿，并不利于程序员的理解和应用，于是人们想要把程序员..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"zeanzai"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"spring\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\",\\"url\\":\\"https://github.com/zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"EJB概述","slug":"ejb概述","link":"#ejb概述","children":[]},{"level":3,"title":"Spring","slug":"spring-1","link":"#spring-1","children":[]},{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]}]},{"level":2,"title":"EJB的困境","slug":"ejb的困境","link":"#ejb的困境","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"Jar包","slug":"jar包","link":"#jar包","children":[{"level":3,"title":"使用设计模式建模","slug":"使用设计模式建模","link":"#使用设计模式建模","children":[]},{"level":3,"title":"防止DI的滥用","slug":"防止di的滥用","link":"#防止di的滥用","children":[{"level":4,"title":"原则一","slug":"原则一","link":"#原则一","children":[]},{"level":4,"title":"原则二","slug":"原则二","link":"#原则二","children":[]}]},{"level":3,"title":"EJB前置知识","slug":"ejb前置知识","link":"#ejb前置知识","children":[{"level":4,"title":"互联网产品的服务模式的发展与迭代","slug":"互联网产品的服务模式的发展与迭代","link":"#互联网产品的服务模式的发展与迭代","children":[]},{"level":4,"title":"RPC、RMI","slug":"rpc、rmi","link":"#rpc、rmi","children":[]},{"level":4,"title":"Java语言的设计缺陷","slug":"java语言的设计缺陷","link":"#java语言的设计缺陷","children":[]},{"level":4,"title":"POJO、组件、JavaBean","slug":"pojo、组件、javabean","link":"#pojo、组件、javabean","children":[]},{"level":4,"title":"对象的状态","slug":"对象的状态","link":"#对象的状态","children":[]},{"level":4,"title":"EJB","slug":"ejb","link":"#ejb","children":[]}]},{"level":3,"title":"EJB概述","slug":"ejb概述-1","link":"#ejb概述-1","children":[]},{"level":3,"title":"Spring前夕的挣扎","slug":"spring前夕的挣扎","link":"#spring前夕的挣扎","children":[]},{"level":3,"title":"Spring诞世","slug":"spring诞世","link":"#spring诞世","children":[{"level":4,"title":"相关特性","slug":"相关特性","link":"#相关特性","children":[]},{"level":4,"title":"组件","slug":"组件-1","link":"#组件-1","children":[]},{"level":4,"title":"套装","slug":"套装","link":"#套装","children":[]}]}]},{"level":2,"title":"2. Bean","slug":"_2-bean","link":"#_2-bean","children":[]},{"level":2,"title":"3. 容器","slug":"_3-容器","link":"#_3-容器","children":[{"level":3,"title":"高层视图","slug":"高层视图","link":"#高层视图","children":[]},{"level":3,"title":"什么是容器","slug":"什么是容器","link":"#什么是容器","children":[]},{"level":3,"title":"启动流程","slug":"启动流程","link":"#启动流程","children":[]},{"level":3,"title":"BeanFactory vs ApplicationContext","slug":"beanfactory-vs-applicationcontext","link":"#beanfactory-vs-applicationcontext","children":[{"level":4,"title":"BeanFactory","slug":"beanfactory","link":"#beanfactory","children":[]},{"level":4,"title":"ApplicationContext","slug":"applicationcontext","link":"#applicationcontext","children":[]},{"level":4,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]}]}]},{"level":2,"title":"4. AOP","slug":"_4-aop","link":"#_4-aop","children":[{"level":3,"title":"业务开发时碰到的程序扩展性问题","slug":"业务开发时碰到的程序扩展性问题","link":"#业务开发时碰到的程序扩展性问题","children":[]},{"level":3,"title":"代理模式","slug":"代理模式","link":"#代理模式","children":[{"level":4,"title":"含义","slug":"含义","link":"#含义","children":[]},{"level":4,"title":"分类","slug":"分类","link":"#分类","children":[]}]},{"level":3,"title":"静态代理","slug":"静态代理","link":"#静态代理","children":[{"level":4,"title":"不适合静态代理的","slug":"不适合静态代理的","link":"#不适合静态代理的","children":[]},{"level":4,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]}]},{"level":3,"title":"动态代理","slug":"动态代理","link":"#动态代理","children":[{"level":4,"title":"JDK 动态代理","slug":"jdk-动态代理","link":"#jdk-动态代理","children":[]},{"level":4,"title":"CGLib 动态代理","slug":"cglib-动态代理","link":"#cglib-动态代理","children":[]},{"level":4,"title":"AsceptJ 动态代理","slug":"asceptj-动态代理","link":"#asceptj-动态代理","children":[]}]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]},{"level":3,"title":"总结","slug":"总结-2","link":"#总结-2","children":[]},{"level":3,"title":"Spring中AOP的相关概念","slug":"spring中aop的相关概念","link":"#spring中aop的相关概念","children":[{"level":4,"title":"切面（Aspect）","slug":"切面-aspect","link":"#切面-aspect","children":[]},{"level":4,"title":"目标对象(target)","slug":"目标对象-target","link":"#目标对象-target","children":[]},{"level":4,"title":"代理对象(Proxy)","slug":"代理对象-proxy","link":"#代理对象-proxy","children":[]},{"level":4,"title":"连接点(JoinPoint)","slug":"连接点-joinpoint","link":"#连接点-joinpoint","children":[]},{"level":4,"title":"ReflectiveMethodInvocation","slug":"reflectivemethodinvocation","link":"#reflectivemethodinvocation","children":[]},{"level":4,"title":"CglibMethodInvocation","slug":"cglibmethodinvocation","link":"#cglibmethodinvocation","children":[]}]},{"level":3,"title":"通知(Advice)","slug":"通知-advice","link":"#通知-advice","children":[{"level":4,"title":"通知包装器","slug":"通知包装器","link":"#通知包装器","children":[]},{"level":4,"title":"MethodBeforeAdviceInterceptor类","slug":"methodbeforeadviceinterceptor类","link":"#methodbeforeadviceinterceptor类","children":[]},{"level":4,"title":"AfterReturningAdviceInterceptor类","slug":"afterreturningadviceinterceptor类","link":"#afterreturningadviceinterceptor类","children":[]},{"level":4,"title":"ThrowsAdviceInterceptor类","slug":"throwsadviceinterceptor类","link":"#throwsadviceinterceptor类","children":[]}]},{"level":3,"title":"切入点(Pointcut )","slug":"切入点-pointcut","link":"#切入点-pointcut","children":[]},{"level":3,"title":"顾问（Advisor)","slug":"顾问-advisor","link":"#顾问-advisor","children":[{"level":4,"title":"DefaultPointcutAdvisor类","slug":"defaultpointcutadvisor类","link":"#defaultpointcutadvisor类","children":[]},{"level":4,"title":"IntroductionAdvisor接口","slug":"introductionadvisor接口","link":"#introductionadvisor接口","children":[]},{"level":4,"title":"配置 Spring 框架中的代理生成逻辑","slug":"配置-spring-框架中的代理生成逻辑","link":"#配置-spring-框架中的代理生成逻辑","children":[]}]}]},{"level":2,"title":"5. Web","slug":"_5-web","link":"#_5-web","children":[{"level":3,"title":"SpringMVC 拦截器如何使用？","slug":"springmvc-拦截器如何使用","link":"#springmvc-拦截器如何使用","children":[]},{"level":3,"title":"常见注解","slug":"常见注解","link":"#常见注解","children":[]},{"level":3,"title":"REST","slug":"rest","link":"#rest","children":[]},{"level":3,"title":"基于 Servlet 开发的示例","slug":"基于-servlet-开发的示例","link":"#基于-servlet-开发的示例","children":[]},{"level":3,"title":"TODO","slug":"todo","link":"#todo","children":[]},{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]},{"level":2,"title":"6. 事务","slug":"_6-事务","link":"#_6-事务","children":[{"level":3,"title":"Spring事务的优点","slug":"spring事务的优点","link":"#spring事务的优点","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[{"level":4,"title":"编程式事务","slug":"编程式事务","link":"#编程式事务","children":[]},{"level":4,"title":"声明式事务","slug":"声明式事务","link":"#声明式事务","children":[]}]},{"level":3,"title":"事务属性","slug":"事务属性","link":"#事务属性","children":[{"level":4,"title":"@Transactional注解标识的位置","slug":"transactional注解标识的位置","link":"#transactional注解标识的位置","children":[]},{"level":4,"title":"只读 —— readOnly()","slug":"只读-——-readonly","link":"#只读-——-readonly","children":[]},{"level":4,"title":"超时 —— timeout()","slug":"超时-——-timeout","link":"#超时-——-timeout","children":[]},{"level":4,"title":"回滚策略","slug":"回滚策略","link":"#回滚策略","children":[]},{"level":4,"title":"隔离级别 —— isolation()","slug":"隔离级别-——-isolation","link":"#隔离级别-——-isolation","children":[]},{"level":4,"title":"传播行为 —— propagation()","slug":"传播行为-——-propagation","link":"#传播行为-——-propagation","children":[]}]},{"level":3,"title":"事务原理","slug":"事务原理","link":"#事务原理","children":[{"level":4,"title":"事务失效及其原因","slug":"事务失效及其原因","link":"#事务失效及其原因","children":[]},{"level":4,"title":"事务使用不规范","slug":"事务使用不规范","link":"#事务使用不规范","children":[]},{"level":4,"title":"方法不是public类型的","slug":"方法不是public类型的","link":"#方法不是public类型的","children":[]},{"level":4,"title":"自身调用问题","slug":"自身调用问题","link":"#自身调用问题","children":[]},{"level":4,"title":"业务和spring事务代码必须在一个线程中","slug":"业务和spring事务代码必须在一个线程中","link":"#业务和spring事务代码必须在一个线程中","children":[]},{"level":4,"title":"异常类型错误","slug":"异常类型错误","link":"#异常类型错误","children":[]},{"level":4,"title":"异常被吞了","slug":"异常被吞了","link":"#异常被吞了","children":[]}]},{"level":3,"title":"长事务","slug":"长事务","link":"#长事务","children":[]},{"level":3,"title":"源码分析","slug":"源码分析","link":"#源码分析","children":[{"level":4,"title":"总结","slug":"总结-3","link":"#总结-3","children":[]}]}]},{"level":2,"title":"7. 事件机制","slug":"_7-事件机制","link":"#_7-事件机制","children":[{"level":3,"title":"背景","slug":"背景-1","link":"#背景-1","children":[]},{"level":3,"title":"现实生活中的例子","slug":"现实生活中的例子","link":"#现实生活中的例子","children":[]},{"level":3,"title":"AKA","slug":"aka","link":"#aka","children":[]},{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"不好的例子","slug":"不好的例子","link":"#不好的例子","children":[]},{"level":3,"title":"基于 jdk 实现方式","slug":"基于-jdk-实现方式","link":"#基于-jdk-实现方式","children":[]},{"level":3,"title":"基于 Guava 实现 EventBus","slug":"基于-guava-实现-eventbus","link":"#基于-guava-实现-eventbus","children":[]},{"level":3,"title":"Spring 中的事件机制","slug":"spring-中的事件机制","link":"#spring-中的事件机制","children":[]}]},{"level":2,"title":"8. 应用上下文","slug":"_8-应用上下文","link":"#_8-应用上下文","children":[]},{"level":2,"title":"9. 资源操作","slug":"_9-资源操作","link":"#_9-资源操作","children":[]},{"level":2,"title":"10. 高级特性","slug":"_10-高级特性","link":"#_10-高级特性","children":[]},{"level":2,"title":"11. 数据校验","slug":"_11-数据校验","link":"#_11-数据校验","children":[]},{"level":2,"title":"12. 国际化","slug":"_12-国际化","link":"#_12-国际化","children":[]},{"level":2,"title":"13. 远程方法调用","slug":"_13-远程方法调用","link":"#_13-远程方法调用","children":[]},{"level":2,"title":"14. 缓存操作","slug":"_14-缓存操作","link":"#_14-缓存操作","children":[]},{"level":2,"title":"15. 测试","slug":"_15-测试","link":"#_15-测试","children":[]},{"level":2,"title":"16. AOT","slug":"_16-aot","link":"#_16-aot","children":[]},{"level":2,"title":"17. 参考资料","slug":"_17-参考资料","link":"#_17-参考资料","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.19,"words":2157},"filePathRelative":"docs/03-framework/spring.md","autoDesc":true,"excerpt":""}');export{l as data};
