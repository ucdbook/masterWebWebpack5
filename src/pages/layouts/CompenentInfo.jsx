/**
 * DateTimePicker Component
 * @author yanrong.tian
 * @date 2018/9/12 下午2:41:24
 */
import React, { useState, useEffect } from 'react';
import { Form, Tag } from 'antd';
import style from './style.less';

function CompenentInfo(props) {
  const [data, setData] = useState([]);

  let currentItem = {};
  if(props.componentsObj && props.pathname) {
    currentItem = props.componentsObj[props.pathname] || {};
  }
  

  return (
    <div className={style.tagBox}>
        {currentItem.authorName ? <Tag color="magenta">Author：{currentItem.authorName}</Tag> : ''}
        {currentItem.npm ? <Tag color="purple"><a target="_blank" href={currentItem.npm}>npm</a></Tag> : ''}
        {currentItem.git ? <Tag color="cyan"><a target="_blank" href={currentItem.git}>Gitlab</a></Tag> : ''}
    </div>
  );
}

export default CompenentInfo;
