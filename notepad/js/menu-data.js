/*
 * @Description: 
 * @Author: yfye
 * @Date: 2021-04-17 22:26:07
 * @LastEditTime: 2021-04-17 22:54:17
 * @LastEditors: yfye
 */
/* global np,
          $dlgAbout,
          $menubar,
          $statusBar,
          $editor,
          $dlgFont,
          $dlgSearch,
          $dlgReplace,
          $dlgGoto: true */
/* eslint no-console: ["error", { allow: ["log"]  }] */
np.menuData = [
  { 
    title: '格式(O)',
    menuItems: [
      {
        title: '字体(F)...',
        shortcut: '',
        enabled: true,
        handler: function() {
          $dlgFont.show({
            family: np.fontFamily,
            style: np.fontStyle,
            size: np.fontSize,
            okHandler: np.fontHandler
          });
        }
      }
    ],
    width: '156px',
    left: '106px'
  },
  { 
    title: '查看',
    menuItems: [
      {
        title: '状态栏(S)',
        shortcut: '',
        enabled: true,
        handler: function() {
          np.bShowStatusBar = !np.bShowStatusBar;
          $statusBar.display(np.bShowStatusBar);
          $menubar.checked(3, 0, np.bShowStatusBar);
          $editor.resize(np.bShowStatusBar);
        }
      }
    ],
    width: '138px',
    left: '162px'
  }
];
