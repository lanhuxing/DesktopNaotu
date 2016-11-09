var remote = require('electron').remote;
var Menu = remote.Menu;

var template = [{
    label: '文件(&F)',
    submenu: [
        {
            label: '打开(&O)',
            accelerator: 'CmdOrCtrl+O',
            click: openDialog
        },
        { type: 'separator' },
        {
            label: '保存(&S)',
            accelerator: 'CmdOrCtrl+S',
            click: saveDialog
        },
        { type: 'separator' },
        {
            label: '退出(&X)',
            click: exitApp
        }
    ]
}, {
    label: "编辑(&E)",
    submenu: [
        {
            label: "撤销(&U)",
            accelerator: 'CmdOrCtrl+Z',
            click: undo
        },
        {
            label: "恢复(&R)",
            accelerator: 'CmdOrCtrl+Y',
            click: redo
        }
    ]
}, {
    label: "帮助(&H)",
    submenu: [
        { label: "查看许可证(&V)", click: license },
        { type: 'separator' },
        { label: "关于(&A)", click: about }
    ]
}];

var menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);