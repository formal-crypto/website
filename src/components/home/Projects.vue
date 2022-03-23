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
              @mouseenter="$switchActive(i, tabs)"
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
          title: 'NFT ART',
          subtitle: 'NFT ART',
          text: '<p>The ERC-721 smart contract is developed with the&nbsp;mechanics of&nbsp;the&nbsp;marketplace at&nbsp;the&nbsp;blockchain level. The&nbsp;functions of&nbsp;selling, viewing all active lots, and buying are integrated within the&nbsp;contract.</p><p>The service allows users to&nbsp;create digital art (NFT) with the&nbsp;possibility of&nbsp;obtaining a&nbsp;physical version. Royalties, NFTs limit per user, vesting time are configurable parameters of&nbsp;the&nbsp;sales mechanism on&nbsp;the&nbsp;marketplace.</p><p>A landing page is created with a&nbsp;protocol for&nbsp;connecting crypto wallets.</p>',
          img: require('@/assets/img/eth.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'NFT Early Adopters',
          subtitle: 'NFT Early Adopters',
          text: '<p>The NFT Early Adopters project is the&nbsp;ERC-721 smart contract on&nbsp;the&nbsp;Binance Smart Chain network.</p><p>Authentication tokens (passes), based on&nbsp;NFT, provide users with access to&nbsp;a&nbsp;wide range of&nbsp;services related to&nbsp;a&nbsp;Play-To-Earn game Axis Infinity. Passes are issued for&nbsp;maintaining activity in&nbsp;the&nbsp;social networks of&nbsp;the&nbsp;project. Proxy technology is implemented for&nbsp;future updates.</p>',
          img: require('@/assets/img/eth.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'NFT Wall Street Gang',
          subtitle: 'Wall Street Gang',
          text: '<p>The Wall Street Gang collection at&nbsp;the&nbsp;OpenSea marketplace is created on&nbsp;the&nbsp;Ethereum network.</p><p>Advanced gasless listing technology is implemented for&nbsp;saving Ether. The&nbsp;pseudo random generation mechanism creates a&nbsp;collection of&nbsp;images that is securely stored on&nbsp;a&nbsp;distributed IPFS system. The&nbsp;private pre-sale function is built into&nbsp;the&nbsp;smart contract.</p><p><a href="http://gangws.com" target="blank">A landing page</a> is created with a&nbsp;protocol for&nbsp;connecting crypto wallets.</p>',
          img: require('@/assets/img/eth.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'What-To-Farm Token',
          subtitle: 'What-To-Farm Token',
          text: '<p>The What-To-Farm ERC-20 token is created and a&nbsp;staking smart contract is developed.</p><p>The What-To-Farm token is implemented on&nbsp;the&nbsp;Binance Smart Chain (BSC) network. It is based on&nbsp;reflect tokenomics and follows high-security requirements. The&nbsp;information about the&nbsp;users` deposits are stored on&nbsp;the&nbsp;blockchain. The&nbsp;interest rates are calculated using a&nbsp;unique mechanism. The&nbsp;protocol provides a&nbsp;choice of&nbsp;the&nbsp;aggregated staking pool tariff. Proxy technology is implemented for&nbsp;future updates.</p>',
          img: require('@/assets/img/globe.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'Cross-chain Router',
          subtitle: 'Cross-chain Router',
          text: '<p>A decentralized service of&nbsp;the&nbsp;What-To-Farm project is designed to&nbsp;route the&nbsp;exchange of&nbsp;tokens.</p><p>The contract implements a&nbsp;mechanism for&nbsp;transferring tokens from one EVM network to&nbsp;another. Cross-chain operations go through DeBridge, a&nbsp;partner company. Token transfer between networks is carried out through the&nbsp;USDС stablecoin, and then into&nbsp;the&nbsp;cryptocurrency chosen by the&nbsp;user. The&nbsp;service performs cross-chain exchange along the&nbsp;optimal route with the&nbsp;lowest commission.</p>',
          img: require('@/assets/img/globe.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'Cryptorobotics Token',
          subtitle: 'Cryptorobotics Token & Vesting',
          text: '<p>The DeRobo BEP-20 token on&nbsp;the&nbsp;Binance Smart Chain is designed for&nbsp;Cryptorobotics, a&nbsp;company engaged in&nbsp;trading bots and algotrading.</p><p>DeRobo is a&nbsp;utility token of&nbsp;the&nbsp;company. Tokens are used to&nbsp;pay for&nbsp;services on&nbsp;the&nbsp;exchange. It is used to&nbsp;participate in&nbsp;raffles, fee payments, and rent trading bots. DeRobo&apos;s liquidity is provided via a&nbsp;one-way bridge from the&nbsp;Ethereum network. The&nbsp;token vesting contract is developed for&nbsp;investors, influencers and the&nbsp;community.</p>',
          img: require('@/assets/img/coin.png'),
          css: 'projects__block--stablecoin'
        },
        {
          active: false,
          scrolled: false,
          title: 'Cryptorobotics Bridge',
          subtitle: 'Cryptorobotics Bridge',
          text: '<p>The one-way liquidity bridge project is developed for&nbsp;Cryptorobotics, a&nbsp;company engaged in&nbsp;trading bots and algotrading. A mechanism of&nbsp;transferring the&nbsp;DeRobo tokens from the&nbsp;Ethereum network to&nbsp;the&nbsp;Binance Smart Chain is implemented.</p><p>DeRobo tokens are burned in&nbsp;the&nbsp;original network. The&nbsp;contract automatically transmits information to&nbsp;the&nbsp;BSC, followed by the&nbsp;distribution of&nbsp;tokens to&nbsp;users.</p><p>The landing page for&nbsp;the&nbsp;cryptocurrency bridge is created. A whitelist mechanism is implemented.</p>',
          img: require('@/assets/img/coin.png'),
          css: 'projects__block--stablecoin'
        },
        {
          active: false,
          scrolled: false,
          title: 'AlgoEURS',
          subtitle: 'AlgoEURS',
          text: '<p>Development of&nbsp;the&nbsp;AlgoEURS architecture. </p><p>AlgoEURS is a&nbsp;decentralized finance (DeFi) protocol on&nbsp;Ethereum blockchain that allows users to&nbsp;borrow AEUR, a&nbsp;stablecoin pegged to&nbsp;the&nbsp;euro, using a&nbsp;wide range of&nbsp;on-chain assets as collateral including plain Ether, other stablecoins, and non-fungible token (NFT).</p><p>The&nbsp;protocol allows borrowers to&nbsp;insure against the&nbsp;liquidation of&nbsp;the&nbsp;collateral assets and provides a&nbsp;platform for&nbsp;investors to&nbsp;make money as insurers. To create the&nbsp;possibility of&nbsp;insuring the&nbsp;collateral and making money on&nbsp;it, the&nbsp;protocol issues AEPUT token on&nbsp;the&nbsp;Ethereum blockchain.</p>',
          img: require('@/assets/img/axie.png')
        },
        {
          active: false,
          scrolled: false,
          title: 'Ether Orcs',
          subtitle: 'Ether Orcs',
          text: '<p>A project is developed to&nbsp;collect analytics for&nbsp;the&nbsp;on-chain game Ether Orcs.</p><p>An audit of&nbsp;the&nbsp;game smart contracts is conducted both for&nbsp;Ethereum and Polygon networks. A&nbsp;couple of&nbsp;dozen reports are created with suggestions for&nbsp;optimizing the&nbsp;game strategy, taking into&nbsp;account the&nbsp;priorities of&nbsp;the&nbsp;customer.</p><p>The mechanism is designed for&nbsp;data collection and visualization of&nbsp;game statistics on&nbsp;a&nbsp;web page. The&nbsp;online monitoring system of&nbsp;all important game mechanics is implemented. A&nbsp;telegram bot is created to&nbsp;receive analytics and instant crash notifications.</p>',
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
