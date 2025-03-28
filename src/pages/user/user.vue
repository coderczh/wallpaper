<template>
  <view class="global">
    <!-- 顶部 -->
    <view class="user-info">
      <view class="avatar">
        <wd-img
          width="160rpx"
          height="160rpx"
          round
          src="https://uniapp-1258823864.cos.ap-shanghai.myqcloud.com/wallpaper/xxmLogo.png"
          mode="aspectFill"
        />
      </view>
      <view class="ip">
        <wd-text text="192.168.1.23" size="35rpx" color="#333" />
      </view>
      <view class="nickname">
        <wd-text text="来自于：合肥" size="28rpx" color="#aaa" />
      </view>
    </view>
    <!-- 导航栏1 -->
    <view class="selection">
      <view class="list">
        <!-- 我的下载 -->
        <navigator url="/pages/classlist/classlist">
          <view class="row">
            <view class="left">
              <view class="icon"
                ><wd-icon name="download" size="25rpx" color="#28b389"
              /></view>
              <view class="text">
                <wd-text text="我的下载" color="#666" />
              </view>
            </view>
            <view class="right">
              <view class="text">
                <wd-text text="33" size="25rpx" color="#aaa"
              /></view>
              <view class="icon"
                ><wd-icon name="chevron-right" size="15" color="#aaa"
              /></view>
            </view>
          </view>
        </navigator>
        <!-- 我的评分 -->
        <navigator url="/pages/classlist/classlist">
          <view class="row">
            <view class="left">
              <view class="icon"
                ><wd-icon name="star" size="25rpx" color="#28b389"
              /></view>
              <view class="text">
                <wd-text text="我的评分" color="#666" />
              </view>
            </view>
            <view class="right">
              <view class="text">
                <wd-text text="33" size="25rpx" color="#aaa"
              /></view>
              <view class="icon"
                ><wd-icon name="chevron-right" size="15" color="#aaa"
              /></view>
            </view>
          </view>
        </navigator>
        <!-- 联系客服 -->
        <view class="row">
          <view class="left">
            <view class="icon"
              ><wd-icon name="service" size="25rpx" color="#28b389"
            /></view>
            <view class="text">
              <wd-text text="联系客服" color="#666" />
            </view>
          </view>
          <view class="right">
            <!-- <view class="text">
            <wd-text text="33" size="25rpx" color="#aaa"
          /></view> -->
            <view class="icon"
              ><wd-icon name="chevron-right" size="15" color="#aaa"
            /></view>
          </view>
          <view class="service">
            <wd-button
              open-type="contact"
              size="large"
              block
              :round="false"
              custom-class="service-button"
              >联系客服</wd-button
            >
          </view>
        </view>
      </view>
    </view>
    <!-- 导航栏2 -->
    <view class="selection">
      <view class="list">
        <!-- 订阅更新 -->
        <view class="row">
          <view class="left">
            <view class="icon"
              ><wd-icon name="notification" size="25rpx" color="#28b389"
            /></view>
            <view class="text">
              <wd-text text="订阅更新" color="#666" />
            </view>
          </view>
          <view class="right">
            <!-- <view class="text">
            <wd-text text="33" size="25rpx" color="#aaa"
          /></view> -->
            <view class="icon"
              ><wd-icon name="chevron-right" size="15" color="#aaa"
            /></view>
          </view>
        </view>
        <!-- 常见问题 -->
        <view class="row">
          <view class="left">
            <view class="icon"
              ><wd-icon name="error-circle" size="25rpx" color="#28b389"
            /></view>
            <view class="text">
              <wd-text text="常见问题" color="#666" />
            </view>
          </view>
          <view class="right">
            <!-- <view class="text">
            <wd-text text="33" size="25rpx" color="#aaa"
          /></view> -->
            <view class="icon"
              ><wd-icon name="chevron-right" size="15" color="#aaa"
            /></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50rpx 0;
  .ip {
    padding: 20rpx 0 5rpx;
  }
}

.selection {
  width: 690rpx;
  margin: 50rpx auto;
  border: 2rpx solid #eee;
  border-radius: 10rpx;
  box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
  .list {
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30rpx;
      height: 100rpx;
      border-bottom: 1rpx solid #eee;
      background-color: #fff;
      position: relative;
      &:last-child {
        border-bottom: none;
      }
      .left {
        display: flex;
        align-items: center;
        .icon {
          margin-right: 20rpx;
        }
      }
      .right {
        display: flex;
        align-items: center;
      }
      .service {
        position: absolute;
        top: 0;
        left: 0;
        height: 100rpx;
        width: 100%;
        :deep(.service-button) {
          height: 100% !important;
          width: 100%;
          opacity: 0;
        }
      }
    }
  }
}
</style>
