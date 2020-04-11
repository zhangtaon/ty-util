/*
[
  {
      "label": "中国",
      "children": [
          {
              "label": "北京市",
              "children": [
                  {
                      "label": "昌平区",
                      "children": [
                        "label": "北七家镇"
                      ]
                  }，
                  {
                      "label": "海淀区",
                      "children": [
                        "label": "西二旗"
                      ]
                  }
              }
          },
          {
              "label": "河北省",
              "children": [
                  {
                      "label": "廊坊市",
                      "children": [
                        "label": "文安县"
                      ]
                  }，
                  {
                      "label": "张家口市",
                      "children": [
                        "label": "崇礼"
                      ]
                  }
              }
          } 
      ]
  }
]
*/

import { isFunction } from './isType';

//解析树（bfs）
export function treeBfs(tree) {
  let treeData = [];
  if (!tree || !tree.length) {
    return treeData;
  }
  let _tree = JSON.parse(JSON.stringify(tree));
  while (_tree.length) {
    let treeNode = _tree.shift();
    if (treeNode.children) {
      _tree.push(...treeNode.children);
    } else {
      treeData.push(treeNode);
    }
  }
  return treeData;
}
//解析树(dfs)
export function treeDfs(tree,callback) {
  if (!Array.isArray(tree)) {
    console.warn("数据不合法");
    return;
  }
  let dfs = nodeArr => {
    nodeArr.forEach(function(node) {
      if (node.children) {
        node.label = node.label + " " + node.total;
        if(isFunction(callback)){
          callback.call(node,node);
        }
        dfs(node.children);
      } else {
        if(isFunction(callback)){
          callback.call(node,node);
        }
      }
    });
  };
  dfs(tree);
}