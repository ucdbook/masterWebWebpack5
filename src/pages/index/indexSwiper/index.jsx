import React from 'react'
import { Carousel, Button } from 'antd';
import './index.less';
import webBanner from '../assets/web_banner.png';

class IndexSwiper extends React.Component {

  componentDidMount(){

  }
  
  startUse = () => {
    // location.href = `${location.href}components/getting-started`
    let com = document.getElementsByClassName('ant-badge')[0]
    // console.log(com)
    com.click()
  }

  render(){
    const settings = {
      effect:'fade',
      speed: 1000,
      autoplay:true,
      autoplaySpeed:5000
    };
    return(
      <>
        <Carousel {...settings}>
                <div className={`swiper-slide wrapper1`}>
                  <div className={'bg1'}>
                    <div className={'contentWrapper1'}>
                      <img  className={'swiperImg'} src={webBanner} ></img>
                      <p className={'title'}><b>魔方 - 前端设计组件库</b></p>
                      <p className={'instr'}>
                      传化智能化中心倾力打造的组件管理、交流平台，为设计者和开发者带来更统一和便捷的开发体验！
                      </p>
                      <Button type="primary" className={'btn'} size="large" onClick={this.startUse}>开始使用</Button>
                    </div>
                  </div>
                </div>
                {/* <div className={`swiper-slide ${wrapper2}`}>
                  <div className={bg2}>
                    <div className={imgWrapper2}>
                      <img  className={text2} src={require('../../../public/index/index/text-02.png')} ></img>
                    </div>
                  </div>
                </div> */}
        </Carousel>
        <style>
          {`
            .text{
              z-index:1;
            }
            .swiper-container{
              z-index: -1 !important;
            }
            .swiper-pagination-bullets{
              
              bottom:50px!important;
            }
            .swiper-pagination-bullet{
              width: 35px;
              height: 3px;
              background-color: #ccc;
              border-radius: 0;
            }
          `}
        </style>
      </>  
    )
}

}

export default IndexSwiper