const e=JSON.parse('{"key":"v-c7155b70","path":"/docs/02-java/%E6%8B%86%E7%AE%B1%E5%92%8C%E8%A3%85%E7%AE%B1.html","title":"拆箱和装箱","lang":"zh-CN","frontmatter":{"order":2,"author":"zeanzai","title":"拆箱和装箱","category":["Java编程语言"],"description":"1. 导引 1.1 问题引入 我们知道，Java中int变量存在于jvm的静态区中，在系统之中它的存在形式很简单，就是一个简单的内存块，里面放了一个具体的数字，而Integer则是一个具体的对象，里面不光有具体的数字，还有一些具体的操作方法。早期的Java版本中，要想对int的数据进行对象化操作时，就必须要先把int转化为Integer对象才能够进行操...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/cs-tips/cs-tips/docs/02-java/%E6%8B%86%E7%AE%B1%E5%92%8C%E8%A3%85%E7%AE%B1.html"}],["meta",{"property":"og:site_name","content":"cs-tips"}],["meta",{"property":"og:title","content":"拆箱和装箱"}],["meta",{"property":"og:description","content":"1. 导引 1.1 问题引入 我们知道，Java中int变量存在于jvm的静态区中，在系统之中它的存在形式很简单，就是一个简单的内存块，里面放了一个具体的数字，而Integer则是一个具体的对象，里面不光有具体的数字，还有一些具体的操作方法。早期的Java版本中，要想对int的数据进行对象化操作时，就必须要先把int转化为Integer对象才能够进行操..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"zeanzai"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"拆箱和装箱\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"1. 导引","slug":"_1-导引","link":"#_1-导引","children":[{"level":3,"title":"1.1 问题引入","slug":"_1-1-问题引入","link":"#_1-1-问题引入","children":[]}]},{"level":2,"title":"2. 概念","slug":"_2-概念","link":"#_2-概念","children":[{"level":3,"title":"2.1 基本数据类型和封装数据类型","slug":"_2-1-基本数据类型和封装数据类型","link":"#_2-1-基本数据类型和封装数据类型","children":[]},{"level":3,"title":"2.2 拆箱和装箱","slug":"_2-2-拆箱和装箱","link":"#_2-2-拆箱和装箱","children":[]}]},{"level":2,"title":"3. 适用场景与不适用场景","slug":"_3-适用场景与不适用场景","link":"#_3-适用场景与不适用场景","children":[{"level":3,"title":"3.1 适用场景","slug":"_3-1-适用场景","link":"#_3-1-适用场景","children":[]},{"level":3,"title":"3.1.1 赋值","slug":"_3-1-1-赋值","link":"#_3-1-1-赋值","children":[]},{"level":3,"title":"3.1.2 方法调用","slug":"_3-1-2-方法调用","link":"#_3-1-2-方法调用","children":[]}]},{"level":2,"title":"3.2 不适用场景","slug":"_3-2-不适用场景","link":"#_3-2-不适用场景","children":[{"level":3,"title":"3.2.1 重载","slug":"_3-2-1-重载","link":"#_3-2-1-重载","children":[]},{"level":3,"title":"3.2.2 对象之间的比较","slug":"_3-2-2-对象之间的比较","link":"#_3-2-2-对象之间的比较","children":[]}]},{"level":2,"title":"4. 使用中需要注意的问题","slug":"_4-使用中需要注意的问题","link":"#_4-使用中需要注意的问题","children":[]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.85,"words":1455},"filePathRelative":"docs/02-java/拆箱和装箱.md","autoDesc":true,"excerpt":""}');export{e as data};
