/**
 * author: zto
 */
import Vue from 'vue'

/**
 * 确认删除通用处理
 * @param {String} name  模块名
 * @param {Function} fun  回调方法
 * 
 .store中定义的方法需要throw抛出异常：
 actions: {
    async deleteDemo({ commit, dispatch }, data) {
        try {
            const a = await axios.post(`/delete/demo/${data.id}`);
        } catch (e) { 
            throw e;
        }
    }
}
 .vue文件中使用需要return方法的调用：
 methods: {
     deleteBtn(id) {
        this.$confirmDelete("企业",function(){
            let params = {
                query: this.query,
                id: id
            };
            return this.deleteDemo(params);
        })
    }
    ...
}
 */
Vue.prototype.$confirmDelete = function (name, fun) {
    this.$confirm(`此操作将删除该${name}, 是否继续?`, "提示", {
        type: "warning"
    }).then(async () => {
        try {
            await fun.call(this);
            this.$message({
                type: "success",
                message: "删除成功!"
            });
        } catch (error) {
            this.$message({
                type: "error",
                message: "删除失败!"
            });
        }
    }).catch((e) => {
        this.$message({
            type: "info",
            message: "已取消删除"
        });
    });
}

