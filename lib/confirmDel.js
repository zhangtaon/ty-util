/**
 * author: zto
 * validate config
 */
import Vue from 'vue'

//解决重复路由报错
const $confirm = Vue.prototype.$confirm;

Vue.prototype.$confirmDel = function(context, name, fun) {
    // $confirm(`此操作将删除该${name}, 是否继续?`, "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       fun.call(context);
    //       context.$message({
    //         type: "success",
    //         message: "删除成功!"
    //       });
    //     })
    //     .catch((e) => {
    //         context.$message({
    //         type: "info",
    //         message: "已取消删除"
    //       });
    //     });
}

// export function confirmDel(context, name, fun) {
//     context.$confirm(`此操作将删除该${name}, 是否继续?`, "提示", {
//         confirmButtonText: "确定",
//         cancelButtonText: "取消",
//         type: "warning"
//       })
//         .then(() => {
//           fun.call(context);
//           context.$message({
//             type: "success",
//             message: "删除成功!"
//           });
//         })
//         .catch((e) => {
//             context.$message({
//             type: "info",
//             message: "已取消删除"
//           });
//         });
// }

