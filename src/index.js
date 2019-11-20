import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Carousel from 'nuka-carousel'

export default class MasspaVoucherCarousel extends Component {
  static propTypes = {
    vouchers: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      screenWidth:''
    };
    this.transtoVouchers = this.transtoVouchers.bind(this)
}

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
    if(typeof window !== `undefinded`){
      this.setState({ screenWidth: window.innerWidth});
    }
  };


  transtoVouchers(id){
    const{link}= this.props;
    if(typeof window !== `undefinded`){
      window.open(`${link}${id}`,"_self")
    }
  }
  
  imagesGalleryCarousel(vouchersData){
    const {t , iconArrow, link} = this.props;
        return vouchersData.map((it,i)=>{
        let items= JSON.parse(it.imageGallery);
        return  items.map((item,z)=>{
          return (
            <div className={styles.msVoucherCarouselContainer} key={it.code} onClick={()=>this.transtoVouchers(it.code)}>
                    <img src={item} className={styles.msVoucherCarouselImg} alt={it.title}/>
              <div
                  className={`${styles.msVoucherRow} ${styles.msVoucherContainer} ${styles.msVoucherCarouselBtn} ${styles.msVoucherPadding0}`}
                  key={it.code}
                >
                  <div className={`${styles.msVoucherColSm6} ${styles.msVoucherCarouselPr}`}></div>
                  <div className={`${styles.msVoucherColSm6} ${styles.msVoucherCarouselPl} ${styles.msVoucherCarouselRight}`}>
                    <a className={styles.msVoucherCarouselBtnDetail} href={`${link}${it.code}`}  >
                      <span className={styles.msVoucherCarouselBtnText}>
                        {/* {t('carousel_vouchers_detail')} */}
                        Xem chi tiết
                        {iconArrow}
                      </span>
                    </a>
                  </div>
                </div>
            </div>
          )
        })
      })
  }


  imagesVoucherCarousel(vouchersData){
    const {t , iconArrow , link} = this.props;
    return vouchersData.map((it,i)=>{
      return (
        <div className={styles.msVoucherCarouselContainer} key={it.code} onClick={()=>this.transtoVouchers(it.code)}>
               <img src={it.imgVoucher} className={styles.msVoucherCarouselImg} alt={it.title}/>
          <div 
              className={`${styles.msVoucherRow} ${styles.msVoucherContainer} ${styles.msVoucherCarouselBtn} ${styles.msVoucherPadding0}`}
              key={it.code}
            >
              <div className={`${styles.msVoucherColSm6} ${styles.msVoucherCarouselPr}`}></div>
              <div className={`${styles.msVoucherColSm6} ${styles.msVoucherCarouselPl} ${styles.msVoucherCarouselRight}`}>
                <a className={styles.msVoucherCarouselBtnDetail} href={`${link}${it.code}`}  >
                  <span className={styles.msVoucherCarouselBtnText}>
                    {/* {t('carousel_vouchers_detail')} */}
                    Xem chi tiết
                    {iconArrow}
                  </span>
                </a>
              </div>
            </div>
        </div>
      )
  
  })
  }


  callCarousel(itemsGallery,itemsVoucher){
    const {t} = this.props;
    let {vouchers} = this.props;
    let timeToday = Date.parse(new Date());
    let vouchersData = vouchers.filter(voucher=>voucher.endedDate > timeToday)
    if(itemsGallery.length !== 0 && itemsVoucher.length !== 0){
      if(this.state.screenWidth > 576){
        return this.imagesGalleryCarousel(vouchersData)
      }else{
        return this.imagesVoucherCarousel(vouchersData)
      }
  
    }else if(itemsGallery.length !== 0 && itemsVoucher.length === 0){

      return this.imagesGalleryCarousel(vouchersData)

    }else if(itemsGallery.length === 0 && itemsVoucher.length !== 0){

      return this.imagesVoucherCarousel(vouchersData)

    }

  }


  showSlideCarousel(){
    let {vouchers} = this.props;
    if(vouchers.length !== 0){
      let timeToday = Date.parse(new Date());
      let vouchersData = vouchers.filter(voucher=>voucher.endedDate > timeToday)
      
      
      let itemsGallery=[];
      vouchersData.forEach((voucher) => {
        if (voucher.imageGallery !== '[]') {
          return itemsGallery.push(voucher.imageGallery)
        } else if (voucher.imageGallery == '') {
          return itemsGallery;
        } else {
          return itemsGallery;
        }
      })
   
      let itemsVoucher=[];
      vouchersData.forEach((voucher)=>{
        if(voucher.imgVoucher == ''){
        return itemsVoucher
       }else if(voucher.imgVoucher !== null){
        return itemsVoucher.push(voucher.imgVoucher)
       }else{
          return itemsVoucher;
       }
      })

      if(itemsGallery.length !== 0 &&  itemsVoucher.length !== 0){
        console.log('co itemsGallery co imagesVoucher')
        if(itemsGallery.length === 1 &&  itemsVoucher.length === 1){
          if(this.state.screenWidth > 576){
            return this.imagesGalleryCarousel(vouchersData)
          }else{
            return this.imagesVoucherCarousel(vouchersData)
          }
        }else{
          return <Carousel
            autoplay={true}
            autoplayInterval={1000}
            wrapAround={true}
            withoutControls={true}
          >
          { this.callCarousel(itemsGallery,itemsVoucher)}
          </Carousel>
        
        }
      }else if(itemsGallery.length !== 0 && itemsVoucher.length === 0){
        console.log('co itemsGallery khong co imagesVoucher');
        if(itemsGallery.length === 1){
          return this.imagesGalleryCarousel(vouchersData)
       }else{
         return <Slider {...slideSettings} >{ this.callCarousel(itemsGallery,itemsVoucher)}</Slider>
       }

      }else if(itemsGallery.length === 0 && itemsVoucher.length !== 0){
        console.log('khong co itemsGallery co imagesVoucher')
        if(itemsVoucher.length === 1){
          return this.imagesVoucherCarousel(vouchersData)
       }else{
         return <Slider {...slideSettings} >{ this.callCarousel(itemsGallery,itemsVoucher)}</Slider>
       }
      }else{
        console.log('khong co itemsGallery khong co imagesVoucher');
        return <div></div>
      }
    
    }else{
      return <div></div>
    }

  }


  render() {
    const{vouchers} = this.props

    return (
      <div>{this.showSlideCarousel()}</div>
    )
  }
}


MasspaVoucherCarousel.defaultProps = {
 vouchers:[],
 link: `/promotion/?promotionId=`,
}