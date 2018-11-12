const { query } = require('./mysql');
const fs = require('fs-promise');
const path = require('path')
var lib = require('./@api/lib');
// const {forEach} = require('p-iteration');
let bashpath = '/mnt/d/code/psp_mvp/psp_mvp_server/src/upload/enterprise/';

//retrieve all the data
async function selectAllData() {
    let sql = 'SELECT sn,label FROM enterprise_info';
    console.log(sql);
    let dataList = await query(sql);
    return dataList;
}


// get the folder and the files under the folder


async function getFiles(foldername) {

    let _foldername = foldername;
    let _path = bashpath + foldername;
    console.log(_path);
    console.log(fs.existsSync(_path));
    if (!fs.existsSync(_path)) {
        try {
            fs.mkdir(_path);
        } catch (error) {
            console.error("create folder fail " + _path);
        }

    } else {
        try {
            let fileList = await fs.readdir(_path);
            return fileList;
        } catch (error) {
            console.error("no folder" + _path);
            try {
                fs.mkdir(_path);
            } catch (error) {
                console.error("create folder fail " + _path);
            }
        }
        
        
    }


}
// async function insertFile(sn, filename, enterprise_label) {
//     let sql = 'insert into enterprise_file ()';
// }

async function getData() {
    let dataList = await selectAllData();
    // console.log(dataList);


    for (const element of dataList) {

        // console.log(element);
        var lll = new lib();
        var sn = lll.GetUUID();

        let enterprise_sn = element.sn;
        let label = element.label;
        let _path=bashpath + label;
        console.log(_path);
        if (!fs.existsSync(_path)) {
            try {
                fs.mkdir(_path);
            } catch (error) {
                console.error("create folder fail " + _path);
            }
    
        }
        try {
            let filelist = await fs.readdir(_path);
            for (const file of filelist) {
                var file_sn = lll.GetUUID();
                const fullpath =_path + '/' + file;
                const stats = fs.statSync(fullpath);
                const size = stats.size;
                const ext = path.extname(fullpath);
                // console.log(ext + size);
                var insertFileSql = "insert into file_info (sn,label,file_bytes,file_postfix,file_save_path) values (?,?,?,?,?)";
                var paramFile = [file_sn, file, size, ext, fullpath];
                var insertSql1 = "insert into enterprise_file (sn,creator_sn,file_sn,enterprise_sn) values (?,?,?,?)";
                var param1 = [sn, '0', file_sn, enterprise_sn];
                try {
                    await query(insertFileSql, paramFile);
                    console.log(" insert file OK " + label + file);
                } catch (error) {
                    console.log("insert File fail " + error.message)
                }
    
    
                try {
                    await query(insertSql1, param1);
                    console.log(" insert file mapping OK " + label + file);
                } catch (error1) {
                    console.log("insert mapping fail" + error1.message)
                }
    
    
            } 
        } catch (error) {
            
        }
       



        // console.log(filelist);
    }

}

getData();

//得到所有的目录信息

// let fs = require('fs');
// const { lstatSync, readdirSync } = require('fs')
// const { join } = require('path')


// async function getAllFolder() {
//     const isDirectory = source => lstatSync(source).isDirectory();
//     const getDirectories = source =>
//         readdirSync(source).map(name => join(source, name)).filter(isDirectory);

//     let Filelist = await getDirectories('/mnt/d/code/psp_mvp/psp_mvp_server/src/upload/enterprise/');
//     console.log(Filelist);
//     return Filelist;
// }

//getAllFolder();