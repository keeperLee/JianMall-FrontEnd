<template>
    <div class="footer">
      <div class="footer-logo">
        <img src="/imgs/logo-footer.png" alt="">
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="">帅哥1主页</a><span>|</span>
        <a href="">帅哥2主页</a><span>|</span>
        <a href="">帅哥3主页</a><span>|</span>
        <a href="">帅哥4主页</a>
        帅哥主页
      </div>
      <div class="copyright">Copyright ©2019 <span class="domain">mi.fue.com</span> All Rights Reserved.</div>
    </div>
</template>

<script>
export default {
  name: "NavFooter"
}
</script>

<style scoped lang="scss">
  .footer{
    height:234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top:46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display: inline-block;
        margin-bottom: 16px;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      .domain{
        color:#FF6600;
      }
    }

  }

</style>
