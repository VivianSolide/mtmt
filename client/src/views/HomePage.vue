<template>

<div class="bg-pan-left">
  <section class="hero is-fullheight is-default is-bold">
    <div class="welcome bg-pan-top">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <!-- <div class="column is-2 p2">

            </div> -->
            <div class="column is-6  scale-up-ver-bottom">
              <h1 class="title is-1 mtmt">
                MTMT
              </h1>
              <h2 class="subtitle is-2 mtmt">
                Make Things Magical Together
              </h2>
              <p class="mtmt">Le swipe amélioré.</p>
              <br>
              <p class="has-text-centered">
                <a href="/api/auth/facebook">
                  <button class="loginBtn loginBtn--facebook">
                    Continuer avec Facebook
                  </button>
                </a>
                <p class="small">L'application ne publiera sur ton mur, jamais, promis juré.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-body container columns">
      <div class="column content-left" style="margin-left: 300px;">
        <h2 class="title is-2">Réinventer le swipe</h2>
        <p>Les applications de rencontre c'est bien.</p>
        <p>Très bien même.</p>
        <p>Mais bon, c'est un peu impersonnel non ?</p>
        <br />
        <p>MTMT te propose de rédiger ton quizz de rencontre pour améliorer les matchs et les conversations qui suivent.</p>
        <p>Si une personnne arrive à deviner tes goûts, ton caractère, nous te mettons en relation.</p>
        <p>Pas avant.</p>
        <br />
        <p>Moins de matchs, plus de qualité.</p>
      </div>
      <div class="column">
        <div class="card swiper p1">
          <header class="card-header">
            <p class="card-header-title">
              Vivian
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="img">
            <img src="images/vivian.jpg">
          </div>
          <div class="card-content">
            <div class="content">
              <p>
                <i class="material-icons">cake</i> 29 ans</p>
              <p>
                <i class="material-icons">work</i> Ironhack</p>
              <p>
                <i class="material-icons">keyboard</i>
                <em> Pourquoi on dit FBI à l'anglaise et CIA à la française ? Si tu as la réponse, clique sur le coeur. Si tu
                  l'as pas, mais que tu veux m'aider à trouver la réponse clique aussi.</em>
              </p>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">
              <i class="material-icons">cancel</i>
            </a>
            <a href="#" class="card-footer-item">
              <i class="material-icons heart">favorite</i>
            </a>
          </footer>
        </div>
      </div>
    </div>

    <img class="t1" src="https://img00.deviantart.net/c167/i/2011/202/0/7/nyan_cat_6120x2400_by_norbi9696-d4162a4.png" alt="">

    <div class="hero-body columns ">
      <div class="column  vp vp1">
        <i class="material-icons">format_align_left</i>
        <h3 class="title is-3">Quizz</h3>
        <p>Groupe préféré ? Film préféré ? Vérifie que ton futur match s'intéresse à toi en créant rapidement ton quizz.</p>
        <p>Les meilleur.e.s se démarqueront rapidement.</p>
        <p>De toutes façons, tu peux insérer des indices un peu partout.</p>
      </div>

      <i class="material-icons heart t2">favorite</i>

      <div class="column  vp vp2">
        <i class="material-icons">search</i>
        <h3 class="title is-3">Swipe</h3>
        <p>Comme sur les autres applis, tu parcoures les profils.</p>
        <p>Uniquement sur Paris dans un premier temps.</p>
        <p>Quelqu'un te plaît ? Fais-le savoir en tentant de remplir son quizz.</p>
        <p></p>
      </div>

      <i class="material-icons heart t3">favorite</i>

      <div class="column  vp vp3">
        <i class="material-icons">check</i>
        <h3 class="title is-3">Discute</h3>
        <p>Tu as eu un match ? Bravo !</p>
        <p>Maintenant que tu as plein de sujets de conversation, à toi de jouer.</p>
        <p>C'est là que la magie opère.</p>
      </div>
    </div>


    <div class="container has-text-centered">
      <h3 class="title is-1">Convaincu.e ?</h3>
        <p>Allez viens, on est bien bien bien...</p>
        <div>
            <a href="/api/auth/facebook">
              <button class="loginBtn loginBtn--facebook">
                Continuer avec Facebook
              </button>
            </a>
        </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>MTMT</strong> par
            <a href="http://blog.viviansarazin.com">Vivian Sarazin</a>
          </p>
          <p>La vraie histoire derrière cette appli
            <a href="http://blog.viviansarazin.com/javascript">ici</a>.</p>
          <p>Merci à
            <a href="https://twitter.com/jgthms">Jeremy Thomas</a> pour son framework CSS
            <a href="https://bulma.io/">Bulma</a>
          </p>
        </div>
      </div>
    </footer>


  </section>
</div>
</template>

<script>
import initpara from "../initpara"
  export default {
    mounted () {
      console.log('tutu', window.vivian)
      initpara();
    }
  }
</script>