import XLSX from "xlsx";
import _ from "lodash";

/**
 * @description 根据arr数据导出单表头Excel，复杂表头暂不支持
 * @author lcd
 * @param {Array} arr 用于生成Excel表格表体的数据，示例：[{key:value},{key:value}]
 * @param {Object} tableHeaderObjs 用于生成Excel表格表头的数据，示例：{key:value,key:value} （匹配arr数组中对象的属性）
 * @param {String} excelFilename 用于保存Excel表格的文件名，不需要加后缀，工作表和工作簿的名称暂时同名
 * @returns 工作簿(Workbook)对象
   demo
   const data = [{name:"zto",age:"30"},{name:"zt",age:"20"}]；
   const tableHeader = {
        name: "姓名",
        age: "年龄"
        };
   exportExcel(data.list, tableHeader, "列表");
 * 
 */
export function exportExcel(arr, tableHeaderObjs, excelFilename) {
    /* 提取 keys */
    const tableHeaderKeys = Object.keys(tableHeaderObjs);
    /* _.pick只留下需要的属性 */
    const jsonPicked = _.map(arr, function(item){return _.pick(item, tableHeaderKeys)});
    /* 生成 Worksheet */
    const ws = XLSX.utils.json_to_sheet(jsonPicked, {
        header: tableHeaderKeys
    });
    // 设置列宽
    ws["!cols"] = [
        {wpx: 200},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
        {wch: 3},
        {width: 3},
        {MDW: 1}
      ];
    /* 得到当前页内数据范围, 将A1:G8这种字符串转换为行列对象, ws["!ref"]表示所有单元格的范围 */
    const range = XLSX.utils.decode_range(ws["!ref"]);
    /* s表示开始，e表示结束，r表示行，c表示列； */
    for (let c = range.s.c; c <= range.e.c; c++) {
        /* 将基于 0 的索引转换为 ABCD 这种列；excel 表格软件中，列的表示是A, B, C, D，这个函数将 A, B, C, D 对应到 0, 1, 2, 3 */
        const header = XLSX.utils.encode_col(c) + "1";
        /*  
            t：表示内容类型，s表示string类型，n表示number类型，b表示boolean类型，d表示date类型，等等
            v：表示原始值；
            f：表示公式，如B2+B3；
            h：HTML内容
            w：格式化后的内容
            r：富文本内容rich text 
        */
        ws[header].v = tableHeaderObjs[ws[header].v];
    }
    /* 新建一个 Workbook */
    let wb = XLSX.utils.book_new();
    /*  向工作簿(Workbook)追加一个工作表(Worksheet)，第三个参数实际为工作表名称 */
    XLSX.utils.book_append_sheet(wb, ws, excelFilename);
    /* 生成Excel表格并下载 */
    XLSX.writeFile(wb, excelFilename + ".xlsx", { compression: false });

    return wb;
};