amis.define('docs/zh-CN/components/anchor-nav.md', function(require, exports, module, define) {

  module.exports = {
    "title": "AnchorNav 锚点导航",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "AnchorNav",
    "icon": null,
    "order": 68,
    "html": "<div class=\"markdown-body\"><p>锚点导航容器组件。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"anchor-nav\",\n    \"links\": [\n        {\n            \"title\": \"基本信息\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"基本信息\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"name\",\n                            \"label\": \"姓名：\"\n                        },\n                        {\n                            \"name\": \"email\",\n                            \"type\": \"input-email\",\n                            \"label\": \"邮箱：\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"title\": \"工作信息\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"工作信息\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"cname\",\n                            \"label\": \"公司名称：\"\n                        },\n                        {\n                            \"name\": \"caddress\",\n                            \"type\": \"input-text\",\n                            \"label\": \"公司地址：\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"title\": \"兴趣爱好\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"兴趣爱好\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"interest1\",\n                            \"label\": \"兴趣爱好1：\"\n                        },\n                        {\n                            \"name\": \"interest2\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好2：\"\n                        },\n                        {\n                            \"name\": \"interest3\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好3：\"\n                        },\n                        {\n                            \"name\": \"interest4\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好4：\"\n                        },\n                        {\n                            \"name\": \"interest5\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好5：\"\n                        },\n                        {\n                            \"name\": \"interest6\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好6：\"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>默认想要显示多少锚点导航配置多少个 <code>links</code> 成员即可。</p>\n<h2><a class=\"anchor\" name=\"%E9%BB%98%E8%AE%A4%E5%AE%9A%E4%BD%8D%E5%88%B0%E6%9F%90%E4%B8%AA%E5%8C%BA%E5%9F%9F\" href=\"#%E9%BB%98%E8%AE%A4%E5%AE%9A%E4%BD%8D%E5%88%B0%E6%9F%90%E4%B8%AA%E5%8C%BA%E5%9F%9F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>默认定位到某个区域</h2><p>主要配置<code>active</code>属性来实现该效果，共有下面两种方法：</p>\n<h4><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE-href-%E5%80%BC\" href=\"#%E9%85%8D%E7%BD%AE-href-%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置 href 值</h4></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"anchor-nav\",\n    \"active\": \"work\",\n    \"links\": [\n        {\n            \"title\": \"基本信息\",\n            \"href\": \"base\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"基本信息\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"name\",\n                            \"label\": \"姓名：\"\n                        },\n                        {\n                            \"name\": \"email\",\n                            \"type\": \"input-email\",\n                            \"label\": \"邮箱：\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"title\": \"工作信息\",\n            \"href\": \"work\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"工作信息\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"cname\",\n                            \"label\": \"公司名称：\"\n                        },\n                        {\n                            \"name\": \"caddress\",\n                            \"type\": \"input-text\",\n                            \"label\": \"公司地址：\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"title\": \"兴趣爱好\",\n            \"href\": \"interest\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"兴趣爱好\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"interest1\",\n                            \"label\": \"兴趣爱好1：\"\n                        },\n                        {\n                            \"name\": \"interest2\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好2：\"\n                        },\n                        {\n                            \"name\": \"interest3\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好3：\"\n                        },\n                        {\n                            \"name\": \"interest4\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好4：\"\n                        },\n                        {\n                            \"name\": \"interest5\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好5：\"\n                        },\n                        {\n                            \"name\": \"interest6\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好6：\"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h4><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E7%B4%A2%E5%BC%95%E5%80%BC\" href=\"#%E9%85%8D%E7%BD%AE%E7%B4%A2%E5%BC%95%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置索引值</h4><p>单个<code>link</code>上不要配置<code>href</code>属性，配置需要展示的<code>link</code>索引值，<code>0</code>代表第一个。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"anchor-nav\",\n    \"active\": 1,\n    \"links\": [\n        {\n            \"title\": \"基本信息\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"基本信息\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"name\",\n                            \"label\": \"姓名：\"\n                        },\n                        {\n                            \"name\": \"email\",\n                            \"type\": \"input-email\",\n                            \"label\": \"邮箱：\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"title\": \"工作信息\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"工作信息\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"cname\",\n                            \"label\": \"公司名称：\"\n                        },\n                        {\n                            \"name\": \"caddress\",\n                            \"type\": \"input-text\",\n                            \"label\": \"公司地址：\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"title\": \"兴趣爱好\",\n            \"body\": [\n                {\n                    \"type\": \"form\",\n                    \"title\": \"兴趣爱好\",\n                    \"body\": [\n                        {\n                            \"type\": \"input-text\",\n                            \"name\": \"interest1\",\n                            \"label\": \"兴趣爱好1：\"\n                        },\n                        {\n                            \"name\": \"interest2\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好2：\"\n                        },\n                        {\n                            \"name\": \"interest3\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好3：\"\n                        },\n                        {\n                            \"name\": \"interest4\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好4：\"\n                        },\n                        {\n                            \"name\": \"interest5\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好5：\"\n                        },\n                        {\n                            \"name\": \"interest6\",\n                            \"type\": \"input-text\",\n                            \"label\": \"兴趣爱好6：\"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;anchor-nav&quot;</code></td>\n<td>指定为 AnchorNav 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>linkClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>导航 Dom 的类名</td>\n</tr>\n<tr>\n<td>sectionClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>锚点区域 Dom 的类名</td>\n</tr>\n<tr>\n<td>links</td>\n<td><code>Array</code></td>\n<td></td>\n<td>links 内容</td>\n</tr>\n<tr>\n<td>active</td>\n<td><code>string</code></td>\n<td></td>\n<td>需要定位的区域</td>\n</tr>\n<tr>\n<td>links[x].title</td>\n<td><code>string</code></td>\n<td></td>\n<td>区域 标题</td>\n</tr>\n<tr>\n<td>links[x].href</td>\n<td><code>string</code></td>\n<td></td>\n<td>区域 标识</td>\n</tr>\n<tr>\n<td>links[x].body</td>\n<td><a href=\"../types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>区域 内容区</td>\n</tr>\n<tr>\n<td>links[x].className</td>\n<td><code>string</code></td>\n<td><code>&quot;bg-white b-l b-r b-b wrapper-md&quot;</code></td>\n<td>区域成员 样式</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "默认定位到某个区域",
          "fragment": "%E9%BB%98%E8%AE%A4%E5%AE%9A%E4%BD%8D%E5%88%B0%E6%9F%90%E4%B8%AA%E5%8C%BA%E5%9F%9F",
          "fullPath": "#%E9%BB%98%E8%AE%A4%E5%AE%9A%E4%BD%8D%E5%88%B0%E6%9F%90%E4%B8%AA%E5%8C%BA%E5%9F%9F",
          "level": 2,
          "children": [
            {
              "label": "配置 href 值",
              "fragment": "%E9%85%8D%E7%BD%AE-href-%E5%80%BC",
              "fullPath": "#%E9%85%8D%E7%BD%AE-href-%E5%80%BC",
              "level": 4
            },
            {
              "label": "配置索引值",
              "fragment": "%E9%85%8D%E7%BD%AE%E7%B4%A2%E5%BC%95%E5%80%BC",
              "fullPath": "#%E9%85%8D%E7%BD%AE%E7%B4%A2%E5%BC%95%E5%80%BC",
              "level": 4
            }
          ]
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});