<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed" :style="{ minHeight: '100vh' }">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/">主页</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/home">第二页</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px'}">
        <div :style="{ margin: '16px 0',background: '#fff', padding: '24px', minHeight: '380px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">Ant Design</a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
