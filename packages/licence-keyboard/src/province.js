/*
 * @Author: LenGXin
 * @Description: 车牌省简称
 * @Date: 2020-03-30 09:20:57
 * @LastEditors: LenGXin
 * @LastEditTime: 2020-03-31 14:50:11
 */
const PROVINCES = [
  {
    name: ['粤', '京', '冀', '沪', '津', '晋', '蒙', '辽', '苏', '浙'],
    size: 'big',
    type: 'province'
  },
  {
    name: ['皖', '闽', '赣', '鲁', '豫', '鄂', '琼', '渝', '川', '贵'],
    size: 'big',
    type: 'province'
  },
  {
    name: ['云', '藏', '陕', '甘', '吉', '黑', '湘', '桂', '青', '宁'],
    size: 'big',
    type: 'province'
  },
  {
    name: ['新', '民', '使', '1', '2', '3', 'W', 'Q', 'V', 'K', 'H'],
    size: 'normal',
    type: 'province'
  },
  {
    name: ['B', 'S', 'L', 'J', 'N', 'G', 'C', 'E', 'Z', 'delete'],
    size: 'normal',
    type: 'province'
  }
]

export default PROVINCES
