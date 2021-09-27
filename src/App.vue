<template lang="pug">
v-app
  NavBar
  HelloWorld(msg="Hello Vue 3 in CodeSandbox!")
  Particles#tsparticles(
      :options="options"
      :particlesLoaded="particlesLoaded"
    )
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
import NavBarVue from "./components/NavBar.vue";
import options from "./options";

let themeableContainer;

export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
    NavBar: NavBarVue, 
  },
  setup() {
    const particlesLoaded = (container) => {
      themeableContainer = container;
      themeableContainer.loadTheme("dark");
    };
    
    const setDarkTheme = () => {
      if (themeableContainer) {
        
      }
      console.log(themeableContainer)
    };
    const setLightTheme = () => {
      if (themeableContainer) {
        themeableContainer.loadTheme("light");
      }
    };
    return {
      options,
      particlesLoaded,
      setDarkTheme,
      setLightTheme
    };
  }
};
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #c5c5c5
  margin-top: 60px


#app a 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #c5c5c5
  margin-top: 60px
  text-decoration: none
  



#app a :hover 
  color: #8e60c2


canvas 
  background: #121212

</style>
