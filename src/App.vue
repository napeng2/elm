<template>
  <div>
    <transition>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
        <!-- route当前活跃组件 -->
      </keep-alive>
    </transition>
    <transition>
      <keep-alive>
         <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import svgIcon from './components/common/svg'
export default {
  components:{
    svgIcon
  }
}
</script>

<style lang="scss">
  @import './style/common.scss';
  	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
