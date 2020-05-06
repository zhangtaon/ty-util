/**
 * 获取父集结点
 * @author zto
 * @param {domNode} node 当前节点
 * @param {number} level 寻找父节点最大层级
 * @param {number} targetClassName 指定要搜索的父节点的样式名称 
 */
export function getParentNode(node, level, targetClassName) {
    let recursion = function (_node) {
        if (!level) {
            return null;
        }
        if (_node.classList.contains(targetClassName)) {
            return _node;
        } else {
            level--;
            return recursion(_node.parentNode);
        }
    }
    return recursion(node);
}