import React, {Component} from 'react';
import './index.less';
import IndexSwiper from './indexSwiper/index'
import { Link } from 'react-router-dom';

import zpl from './assets/zpl.jpg';
import jlk from './assets/jlk.png';
import chb from './assets/chb.png';
import hlq from './assets/hlq.png';
import yc from './assets/yc.png';
import yxy from './assets/yxy.jpg';

class IndexPage extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <IndexSwiper/>
        <div className={'titleWrap'}>
            <div className={'title'}>
                <p className={'name'}><b>前端设计组件库</b></p>
                <div className={'line'}></div>
                <p className={'instr'}>
                为园区、供应链、增值提供组件支持
                </p>
            </div>
        </div>
        <div className={'floor01'}>
          <ul>
            <li>
              <span className={`img img1`}></span>
              <p><b>规范设计</b></p>
              <p className={'describe'}>统一尺寸、颜色、形状等 UI 元素</p> 
            </li>
            <li>
              <span className={`img img2`}></span>
              <p><b>通用组件</b></p>
              <p className={'describe'}>根据业务场景，满足共用需求</p> 
            </li>
            <li>
              <span className={`img img3`}></span>
              <p><b>高效复用</b></p>
              <p className={'describe'}>通过简单的复制修改完成页面搭建</p> 
            </li>
          </ul>
        </div>
        <div className={'titleWrap'}>
            <div className={'title'}>
                <p className={'name'}><b>主要功能</b></p>
                <div className={'line'}></div>
                <p className={'instr'}>
                前端组件化四大主要功能，致力于为业务赋能
                </p>
            </div>
        </div>
        <div className={'floor02'}>
          <ul>
            <Link to="/standardComponents/getting-started">
              <li >
                <span className={`img img1`}></span>
                <p><b>使用指南</b></p>
                <p className={'describe'}>帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品</p> 
              </li>
            </Link>
            <Link to="/standardComponents">
              <li>
                <span className={`img img2`}></span>
                <p><b>组件</b></p>
                <p className={'describe'}>快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发</p> 
              </li>
            </Link>
            <Link to="/standardComponents/log">
              <li>
                <span className={`img img3`}></span>
                <p><b>更新日志</b></p>
                <p className={'describe'}>每一次修改都会升级成一个日志，方便查询和追溯</p> 
              </li>
            </Link>
            <a target="_blank" href="http://gitlab.tf56.lo/c/Front/">
              <li>
                <span className={`img img4`}></span>
                <p><b>资源</b></p>
                <p className={'describe'}>提供可共享的资源，方便开发快速找到资源</p> 
              </li>
            </a>
          </ul>
        </div>
        <div className={'titleWrap'}>
            <div className={'title'}>
                <p className={'name'}><b>团队成员</b></p>
                <div className={'line'}></div>
                <p className={'instr'}>
                前端组件规范，有效的保障项目开发过程中的视觉的统一性，也有效地提升了开发者在开发过程中的开发效率
                </p>
            </div>
        </div>
        <div className={'floor03'}>
            <ul>
              <li>
                <img  src={zpl} alt=""/>
                <p><b>朱平雷</b></p>
              </li>
              <li>
                <img  src={jlk} alt=""/>
                <p><b>江丽康</b></p>
              </li>
              <li>
                <img  src={chb} alt=""/>
                <p><b>陈欢斌</b></p>
              </li>
              <li>
                <img  src={hlq} alt=""/>
                <p><b>黄林琴</b></p>
              </li>
              <li>
                <img src={yc} alt=""/>
                <p><b>杨超</b></p>
              </li>
              <li>
                <img  src={yxy} alt=""/>
                <p><b>喻晓羽</b></p>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}
export default IndexPage;