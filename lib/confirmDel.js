/**
 * author: zto
 */
import Vue from 'vue'

/**
 * 确认删除通用处理
 * @param {String} name  模块名
 * @param {Function} fun  回调方法
 * 
 .vue文件中使用：
 methods: {
     deleteBtn(id) {
        this.$confirmDel("企业",function(){
            let params = {
                query: this.query,
                id: id
            };
            this.delEnterprise(params);
        })
    }
    ...
}
 */
Vue.prototype.$confirmDel = function (name, fun) {
    this.$confirm(`此操作将删除该${name}, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    }).then(() => {
        fun.call(this);
        this.$message({
            type: "success",
            message: "删除成功!"
        });
    }).catch((e) => {
        this.$message({
            type: "info",
            message: "已取消删除"
        });
    });
}

