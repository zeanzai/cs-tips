const l=JSON.parse('{"key":"v-f8ce5266","path":"/docs/04-middleware/redis.html","title":"Redis知识点汇总","lang":"zh-CN","frontmatter":{"description":"**日期** 迭代内容 ---------- ----------------------------------------------------------------------------------------- 23-11-24 1. 创建文档骨架，确定知识体系；2. 完成《概述》《对象系统》等篇；3. 完成《持久化》篇章； | 导学指引...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/cs-tips/cs-tips/docs/04-middleware/redis.html"}],["meta",{"property":"og:site_name","content":"cs-tips"}],["meta",{"property":"og:title","content":"Redis知识点汇总"}],["meta",{"property":"og:description","content":"**日期** 迭代内容 ---------- ----------------------------------------------------------------------------------------- 23-11-24 1. 创建文档骨架，确定知识体系；2. 完成《概述》《对象系统》等篇；3. 完成《持久化》篇章； | 导学指引..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/cs-tips/cs-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis知识点汇总"}],["meta",{"property":"article:author","content":"zeanzai"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis知识点汇总\\",\\"image\\":[\\"https://zeanzai.github.io/cs-tips/cs-tips/\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\",\\"url\\":\\"https://github.com/zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"知识体系","slug":"知识体系","link":"#知识体系","children":[]},{"level":2,"title":"本地缓存VS分布式缓存","slug":"本地缓存vs分布式缓存","link":"#本地缓存vs分布式缓存","children":[]},{"level":2,"title":"1. 对象系统","slug":"_1-对象系统","link":"#_1-对象系统","children":[{"level":3,"title":"1.1. 为什么要有对象系统","slug":"_1-1-为什么要有对象系统","link":"#_1-1-为什么要有对象系统","children":[]},{"level":3,"title":"1.2. 源代码","slug":"_1-2-源代码","link":"#_1-2-源代码","children":[{"level":4,"title":"1.2.1. type 属性","slug":"_1-2-1-type-属性","link":"#_1-2-1-type-属性","children":[]},{"level":4,"title":"1.2.2. encoding 属性","slug":"_1-2-2-encoding-属性","link":"#_1-2-2-encoding-属性","children":[]},{"level":4,"title":"1.2.3. lru 属性","slug":"_1-2-3-lru-属性","link":"#_1-2-3-lru-属性","children":[]},{"level":4,"title":"1.2.4. refcount 属性","slug":"_1-2-4-refcount-属性","link":"#_1-2-4-refcount-属性","children":[]},{"level":4,"title":"1.2.5. ptr 属性","slug":"_1-2-5-ptr-属性","link":"#_1-2-5-ptr-属性","children":[]}]},{"level":3,"title":"1.3. 一个对象在内存中的存储示意","slug":"_1-3-一个对象在内存中的存储示意","link":"#_1-3-一个对象在内存中的存储示意","children":[]},{"level":3,"title":"1.4. 内建对象","slug":"_1-4-内建对象","link":"#_1-4-内建对象","children":[]},{"level":3,"title":"命令的类型检查和多态","slug":"命令的类型检查和多态","link":"#命令的类型检查和多态","children":[]},{"level":3,"title":"1.5. 总结","slug":"_1-5-总结","link":"#_1-5-总结","children":[]}]},{"level":2,"title":"2. 数据类型","slug":"_2-数据类型","link":"#_2-数据类型","children":[{"level":3,"title":"2.1. redis 中的数据结构","slug":"_2-1-redis-中的数据结构","link":"#_2-1-redis-中的数据结构","children":[{"level":4,"title":"2.1.1. SDS","slug":"_2-1-1-sds","link":"#_2-1-1-sds","children":[]},{"level":4,"title":"2.1.2. ziplist","slug":"_2-1-2-ziplist","link":"#_2-1-2-ziplist","children":[]},{"level":4,"title":"2.1.3. quicklist","slug":"_2-1-3-quicklist","link":"#_2-1-3-quicklist","children":[]},{"level":4,"title":"2.1.4. hashtable","slug":"_2-1-4-hashtable","link":"#_2-1-4-hashtable","children":[]},{"level":4,"title":"2.1.5. skiplist","slug":"_2-1-5-skiplist","link":"#_2-1-5-skiplist","children":[]},{"level":4,"title":"其他","slug":"其他","link":"#其他","children":[]}]},{"level":3,"title":"2.2. 基本数据类型","slug":"_2-2-基本数据类型","link":"#_2-2-基本数据类型","children":[{"level":4,"title":"2.2.1. 字符串 string","slug":"_2-2-1-字符串-string","link":"#_2-2-1-字符串-string","children":[]},{"level":4,"title":"2.2.2. 列表 list","slug":"_2-2-2-列表-list","link":"#_2-2-2-列表-list","children":[]},{"level":4,"title":"2.2.3. 集合 set","slug":"_2-2-3-集合-set","link":"#_2-2-3-集合-set","children":[]},{"level":4,"title":"2.2.4. 有序集合 zset","slug":"_2-2-4-有序集合-zset","link":"#_2-2-4-有序集合-zset","children":[]},{"level":4,"title":"2.2.5. 散列 hash","slug":"_2-2-5-散列-hash","link":"#_2-2-5-散列-hash","children":[]},{"level":4,"title":"2.2.6. 流 stream","slug":"_2-2-6-流-stream","link":"#_2-2-6-流-stream","children":[]}]},{"level":3,"title":"2.5. 命令汇总","slug":"_2-5-命令汇总","link":"#_2-5-命令汇总","children":[]}]},{"level":2,"title":"3. 高级特性","slug":"_3-高级特性","link":"#_3-高级特性","children":[{"level":3,"title":"3.1. 事务","slug":"_3-1-事务","link":"#_3-1-事务","children":[]},{"level":3,"title":"3.2. LUA 脚本","slug":"_3-2-lua-脚本","link":"#_3-2-lua-脚本","children":[]},{"level":3,"title":"3.3. 消息队列（发布订阅）","slug":"_3-3-消息队列-发布订阅","link":"#_3-3-消息队列-发布订阅","children":[]},{"level":3,"title":"3.4. 搜索引擎","slug":"_3-4-搜索引擎","link":"#_3-4-搜索引擎","children":[]},{"level":3,"title":"3.5. 管道","slug":"_3-5-管道","link":"#_3-5-管道","children":[]},{"level":3,"title":"3.6. 布隆过滤器","slug":"_3-6-布隆过滤器","link":"#_3-6-布隆过滤器","children":[]},{"level":3,"title":"3.7. 迭代器","slug":"_3-7-迭代器","link":"#_3-7-迭代器","children":[]},{"level":3,"title":"事件","slug":"事件","link":"#事件","children":[]}]},{"level":2,"title":"4. 内存管理","slug":"_4-内存管理","link":"#_4-内存管理","children":[{"level":3,"title":"4.1. 键的驱逐策略（删除策略）","slug":"_4-1-键的驱逐策略-删除策略","link":"#_4-1-键的驱逐策略-删除策略","children":[{"level":4,"title":"4.1.1. Redis 中键的过期时间的管理","slug":"_4-1-1-redis-中键的过期时间的管理","link":"#_4-1-1-redis-中键的过期时间的管理","children":[]},{"level":4,"title":"4.1.2. 删除带过期时间的 key 的通用做法","slug":"_4-1-2-删除带过期时间的-key-的通用做法","link":"#_4-1-2-删除带过期时间的-key-的通用做法","children":[]},{"level":4,"title":"4.1.3. redis 中的键的驱逐策略（删除策略）","slug":"_4-1-3-redis-中的键的驱逐策略-删除策略","link":"#_4-1-3-redis-中的键的驱逐策略-删除策略","children":[]}]},{"level":3,"title":"4.2. 内存回收机制","slug":"_4-2-内存回收机制","link":"#_4-2-内存回收机制","children":[]}]},{"level":2,"title":"5. 持久化机制","slug":"_5-持久化机制","link":"#_5-持久化机制","children":[{"level":3,"title":"5.1. RDB 持久化方式","slug":"_5-1-rdb-持久化方式","link":"#_5-1-rdb-持久化方式","children":[{"level":4,"title":"5.1.1. 配置参数有哪些？","slug":"_5-1-1-配置参数有哪些","link":"#_5-1-1-配置参数有哪些","children":[]},{"level":4,"title":"5.1.2. 触发条件有哪些？","slug":"_5-1-2-触发条件有哪些","link":"#_5-1-2-触发条件有哪些","children":[]},{"level":4,"title":"5.1.3. 持久化原理","slug":"_5-1-3-持久化原理","link":"#_5-1-3-持久化原理","children":[]},{"level":4,"title":"5.1.4. 有什么优缺点？","slug":"_5-1-4-有什么优缺点","link":"#_5-1-4-有什么优缺点","children":[]}]},{"level":3,"title":"5.2. AOF 持久化方式","slug":"_5-2-aof-持久化方式","link":"#_5-2-aof-持久化方式","children":[{"level":4,"title":"5.2.1. 配置参数有哪些？","slug":"_5-2-1-配置参数有哪些","link":"#_5-2-1-配置参数有哪些","children":[]},{"level":4,"title":"5.2.2. 触发条件有哪些？","slug":"_5-2-2-触发条件有哪些","link":"#_5-2-2-触发条件有哪些","children":[]},{"level":4,"title":"5.2.3. 持久化原理","slug":"_5-2-3-持久化原理","link":"#_5-2-3-持久化原理","children":[]},{"level":4,"title":"5.2.4. 重写原理","slug":"_5-2-4-重写原理","link":"#_5-2-4-重写原理","children":[]},{"level":4,"title":"5.2.5. 恢复","slug":"_5-2-5-恢复","link":"#_5-2-5-恢复","children":[]},{"level":4,"title":"5.2.6. 有什么优缺点","slug":"_5-2-6-有什么优缺点","link":"#_5-2-6-有什么优缺点","children":[]}]},{"level":3,"title":"5.3. 混合持久化方式","slug":"_5-3-混合持久化方式","link":"#_5-3-混合持久化方式","children":[]},{"level":3,"title":"5.4. 持久化方式的最佳实践","slug":"_5-4-持久化方式的最佳实践","link":"#_5-4-持久化方式的最佳实践","children":[]}]},{"level":2,"title":"本地缓存","slug":"本地缓存","link":"#本地缓存","children":[{"level":3,"title":"Spring Boot 本地缓存示例","slug":"spring-boot-本地缓存示例","link":"#spring-boot-本地缓存示例","children":[{"level":4,"title":"依赖配置","slug":"依赖配置","link":"#依赖配置","children":[]},{"level":4,"title":"配置类","slug":"配置类","link":"#配置类","children":[]},{"level":4,"title":"服务类","slug":"服务类","link":"#服务类","children":[]},{"level":4,"title":"主应用类","slug":"主应用类","link":"#主应用类","children":[]}]},{"level":3,"title":"SpringBoot+Guaua","slug":"springboot-guaua","link":"#springboot-guaua","children":[]},{"level":3,"title":"SpringBoot+Ehcache","slug":"springboot-ehcache","link":"#springboot-ehcache","children":[]}]},{"level":2,"title":"分布式缓存","slug":"分布式缓存","link":"#分布式缓存","children":[{"level":3,"title":"Spring Boot 分布式缓存示例","slug":"spring-boot-分布式缓存示例","link":"#spring-boot-分布式缓存示例","children":[{"level":4,"title":"依赖配置","slug":"依赖配置-1","link":"#依赖配置-1","children":[]},{"level":4,"title":"配置类","slug":"配置类-1","link":"#配置类-1","children":[]},{"level":4,"title":"服务类","slug":"服务类-1","link":"#服务类-1","children":[]},{"level":4,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":4,"title":"主应用类","slug":"主应用类-1","link":"#主应用类-1","children":[]}]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"6. 运行模式","slug":"_6-运行模式","link":"#_6-运行模式","children":[]},{"level":2,"title":"单机模式","slug":"单机模式","link":"#单机模式","children":[]},{"level":2,"title":"主从模式","slug":"主从模式","link":"#主从模式","children":[]},{"level":2,"title":"哨兵模式","slug":"哨兵模式","link":"#哨兵模式","children":[]},{"level":2,"title":"集群模式","slug":"集群模式","link":"#集群模式","children":[{"level":4,"title":"安装过程","slug":"安装过程","link":"#安装过程","children":[]},{"level":4,"title":"查看集群及节点信息","slug":"查看集群及节点信息","link":"#查看集群及节点信息","children":[]},{"level":4,"title":"部署视图","slug":"部署视图","link":"#部署视图","children":[]},{"level":4,"title":"增加节点","slug":"增加节点","link":"#增加节点","children":[]},{"level":4,"title":"变更节点角色","slug":"变更节点角色","link":"#变更节点角色","children":[]},{"level":4,"title":"增加新节点后rehash","slug":"增加新节点后rehash","link":"#增加新节点后rehash","children":[]},{"level":4,"title":"移除某节点","slug":"移除某节点","link":"#移除某节点","children":[]},{"level":3,"title":"6.1. 单机模式","slug":"_6-1-单机模式","link":"#_6-1-单机模式","children":[{"level":4,"title":"6.1.1. 安装过程","slug":"_6-1-1-安装过程","link":"#_6-1-1-安装过程","children":[]}]},{"level":3,"title":"6.2. 主从模式","slug":"_6-2-主从模式","link":"#_6-2-主从模式","children":[{"level":4,"title":"6.2.1. 安装","slug":"_6-2-1-安装","link":"#_6-2-1-安装","children":[]}]},{"level":3,"title":"6.3. 哨兵模式","slug":"_6-3-哨兵模式","link":"#_6-3-哨兵模式","children":[]},{"level":3,"title":"6.4. 集群模式","slug":"_6-4-集群模式","link":"#_6-4-集群模式","children":[]}]},{"level":2,"title":"7. 生产运维","slug":"_7-生产运维","link":"#_7-生产运维","children":[{"level":3,"title":"7.1. 基准测试","slug":"_7-1-基准测试","link":"#_7-1-基准测试","children":[]},{"level":3,"title":"7.2. 慢查询","slug":"_7-2-慢查询","link":"#_7-2-慢查询","children":[]},{"level":3,"title":"7.3. 监控和报警","slug":"_7-3-监控和报警","link":"#_7-3-监控和报警","children":[]},{"level":3,"title":"7.4. 性能优化","slug":"_7-4-性能优化","link":"#_7-4-性能优化","children":[]}]},{"level":2,"title":"8. 生产实践","slug":"_8-生产实践","link":"#_8-生产实践","children":[{"level":3,"title":"8.1. 生产场景","slug":"_8-1-生产场景","link":"#_8-1-生产场景","children":[]},{"level":3,"title":"8.2. 问题及解决","slug":"_8-2-问题及解决","link":"#_8-2-问题及解决","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]},{"level":2,"title":"面试题","slug":"面试题","link":"#面试题","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":88.07,"words":26420},"filePathRelative":"docs/04-middleware/redis.md","autoDesc":true,"excerpt":""}');export{l as data};
