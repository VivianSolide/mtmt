<template>
<div class="main">
<div class="columns">
  <div class="column box is-one-third">
    <img src="https://lh3.googleusercontent.com/D_04_AQH-II9TyLU26GDtFxPZohYWbl-SGKb1msbi5XlIGMAEr0HI01RvZ7Afi5BzQ=w300">
        <h2 class="title is-3">Quel est ton groupe préféré ?</h2>
        <form>
          <div class="has-text-centered">
            <b-field>
                <b-input placeholder="Search..." v-model="search" rounded type="search" icon="magnify">
                </b-input>
                <button class="button hidden is-danger" @click.prevent="getMusic">Chercher</button>
            </b-field>
            <b-field>
                <b-input placeholder="Un indice peut être ?" v-model="hint" v-show="artists" rounded type="text">
                </b-input>
            </b-field>
          </div>
        </form>
    </div>
  </div>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column rounded is-one-quarter" v-for="(artist, key) in artists" :key="key">
          <div class="card-image">
            <figure class="image is-square rounded">
              <img v-if="artist.images[0]" v-bind:src=artist.images[0].url alt="Placeholder image">
              <img v-else src="https://placehold.it/600x600" alt="Placeholder image">
            </figure>
          <button class="button is-primary" @click.prevent="sendArtist(artist.name)">{{ artist.name }} </button>
          </div>
        </div>
      </div>
      </div>  
    </div>  
</div>    
</template>


<script>
  import api from "../api";

  export default {
    data() {
      return {
        search: "",
        hint: "",
        artists: [],
        artist: ""
      };
    },
    methods: {
      getMusic() {
        api
          .getMusic(this.search)
          .then(artists => {
            this.artists = artists.body.artists.items;
          })
          .catch(err => {
            this.error = err;
          });
      },

      sendArtist(artist) {
        api
          .sendArtist({
            userId: localStorage.getItem("id"),
            artist: artist,
            hint: this.hint
          })
          .then(data => {
            this.$toast.open({
              message: `Je kiffe ${this.artist}`,
              type: "is-success"
            });
            this.$router.push("/quizz-movie");
          })
          .catch(err => {
            this.error = err;
          });
      }
    }
  };
</script>

<style scoped>
  img {
    margin-top: 12px;
    width: 90px;
  }
  .box {
    margin: 0 auto;
    margin-top: 5vh;
    padding: 3vh
  }
  .main {
    background-image: url("http://mtmt.viviansarazin.com/images/music.jpeg");
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    height: 400vh;
  }
</style>