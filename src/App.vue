<template>
  <div>
    <transition>
      <keep-alive>
        123
        <router-view v-if="$route.meta.keepAlive"></router-view>
        <!-- route当前活跃组件 -->
      </keep-alive>
    </transition>
    <transition>
      <keep-alive>
        123
         <router-view v-if="!route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>