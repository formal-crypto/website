<template>
  <section id="projects" ref="projects" class="projects">
    <div class="container">
      <h2 tabindex="6">Projects</h2>
      <div class="projects__inner">
        <div class="projects__tabs">
          <div
            v-for="(tab, i) in tabs"
            :key="i"
            ref="projects__tab"
            tabindex="7"
            class="projects__tab-wrapper"
            :class="{ 'is-active': tab.scrolled }"
          >
            <p
              class="projects__tab"
              :class="{ 'projects__tab--active': tab.active }"
              @click="$switchActive(i, tabs)"
            >
              {{ tab.title }}
            </p>
          </div>
        </div>
        <div class="projects__blocks">
          <div
            v-for="(tab, t) in tabs"
            v-show="tab.active"
            :key="t"
            class="projects__block"
            :class="tab.css"
          >
            <div class="projects__texts">
              <span class="projects__subtitle">{{ tab.subtitle }}</span>
              <div class="projects__content" v-html="tab.text"></div>
            </div>
            <div class="projects__img-wrapper">
              <div class="projects__img">
                <img :src="tab.img" :alt="tab.subtitle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      tabs: [
        {
          active: true,
          scrolled: false,
          title: 'Mars staking',
          subtitle: 'Mars staking',
          text: '<p>Development of a staking contract for&nbsp;ERC-20 token.</p><p>Development of a staking contract for&nbsp;ERC-20&nbsp;token. Solidity Smart Contract development with an original logic and high-security requirements. Adding the ability to update using the developed Proxy contract based on ERC1967 and creating Web interfacefor MVP.</p>',
          img: require('@/assets/img/globe.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'NFT collection',
          subtitle: 'NFT collection',
          text: '<p>Creating an NFT collection on the Ethereum network.</p><p>Development of an ERC721 smart contract for Solidity, which includes the&nbsp;logic&nbsp;of a private presale, gas savings, and limiting the number of sales per wallet.</p><p>Creation of a landing page for mint new tokens, integration with MetaMask and WalletConnect. Generate a collection of pseudo-random images and attributes depending on the weights of different layers types. Create an IPFS node and pin an NFT collection to it. Integration of the collection with the OpenSea auction.</p>',
          img: require('@/assets/img/eth.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'Stablecoin',
          subtitle: 'Stablecoin',
          text: '<p>Creation of White Paper for the Stablecoin protocol.</p><p>AlgoEURS is a decentralized finance (DeFi) protocol on Ethereum blockchain that allows users to borrow AEUR, a stablecoin pegged to the euro, using a wide range of on-chain assets as collateral including plain Ether, other stable coins, non-stable fungible tokens, and various non-fungible assets.</p><p>The protocol allows borrowers to insure against the liquidation of the collateral assets and provides a platform for investors to make money as insurers.</p><p>To create the possibility of insuring the collateral and making money on it, the protocol issues AEPUT token on Ethereum blockchain.</p>',
          img: require('@/assets/img/coin.png'),
          css: 'projects__block--stablecoin'
        },
        {
          active: false,
          scrolled: false,
          title: 'Axie NFT Token',
          subtitle: 'Axie NFT Token',
          text: '<p>Creating an NFT collection for authorization.</p><p>Development of an ERC721 smart contract for Solidity on the BSC network for getting verified users one unique key to access other products of in-progress DAO. Creating Proxy Contract for future upgradability and development of NFT-based authorization tools for web and Telegram.</p>',
          img: require('@/assets/img/axie.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'NFT Game Analytics',
          subtitle: 'Axie NFT Token',
          text: '<p>Development of a strategy for the onchain NFT game.</p><p>Strategy development to increase the value of the investor`s collection. Smart Contracts audits for Solidity in Ethereum and Polygon networks and creation of a real-time monitoring system with the collection of more than 20 different metrics of in-game mechanics. Setting up Telegram Bots for Instant Analytics</p>',
          img: require('@/assets/img/nft.png')
        }
      ],
      projectsTop: 0,
      projectsHeight: 0
    }
  },
  computed: {},
  watch: {
    '$root.windowTop'(newV, oldV) {
      if (newV + this.projectsHeight > this.projectsTop) {
        if (this.tabs[0].scrolled) {
          return
        }
        this.tabs.forEach((tab, i) => {
          setTimeout(function () {
            tab.scrolled = true
          }, (i + 1) * 100)
        })
      } else {
        // this.tabs.forEach((tab, i) => {
        //   tab.scrolled = false
        // })
      }
    }
  },
  mounted() {
    this.projectsTop = this.$refs.projects.getBoundingClientRect().top
    this.projectsHeight = this.$refs.projects.clientHeight
  },
  destroyed() {},
  methods: {}
}
</script>
