
<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
    </header>
    <button></button>
    <nav>
      <ul>
        <li>
          <router-link to="/ProjectGallery">Project Gallery</router-link>
        </li>
        <li>
          <router-link to="/Services">Services</router-link>
        </li>
        <li>
          <router-link to="/About">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>

  li {
    display: inline-block;
  }

  ul {
    float: right;
  }
</style>
