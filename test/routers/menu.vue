<template>
  <div>
    <Menu mode="horizontal" theme="primary" active-key="1">
      <Submenu key="1">
        <template slot="title">
          <Icon type="soup-can-outline"></Icon>
          数据管理
        </template>
        <Menu-group title="使用">
          <Menu-item key="1-1">新增和启动新增和启动</Menu-item>
          <Menu-item key="1-2">活跃分析</Menu-item>
          <Menu-item key="1-3">时段分析</Menu-item>
        </Menu-group>
        <Menu-group title="留存">
          <Menu-item key="1-4">用户留存</Menu-item>
          <Menu-item key="1-5">流失用户</Menu-item>
        </Menu-group>
      </Submenu>
    </Menu>
    <br>
    <Menu theme="light" active-key="a">
      <Menu-group title="我的交易">
        <Menu-item key="a">
          <Icon type="document-text"></Icon>
          收到的订单
        </Menu-item>
      </Menu-group>
      <Menu-group title="爆料管理">
        <Menu-item key="3">
          <Icon type="ios-book"></Icon>
          新建爆料
        </Menu-item>
        <Menu-item key="4">
          <Icon type="ios-copy"></Icon>
          爆料列表
        </Menu-item>
      </Menu-group>
    </Menu>
    <p>切换主题</p>
    <!-- <Radio-group :model.sync="theme1">
      <Radio value="light"></Radio>
      <Radio value="dark"></Radio>
      <Radio value="primary"></Radio>
    </Radio-group> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        theme1: 'light'
      }
    }
  }
</script>
