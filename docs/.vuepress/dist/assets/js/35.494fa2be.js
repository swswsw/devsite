(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{248:function(e,t,n){e.exports=n.p+"assets/img/image-20190103193901967.35788ccc.png"},525:function(e,t,n){"use strict";n.r(t);var a=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"how-to-build-a-private-chain-based-on-nuls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build-a-private-chain-based-on-nuls","aria-hidden":"true"}},[e._v("#")]),e._v(" How to build a private chain based on NULS")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("This tutorial guides you to build a private chain based on NULS source code, to make is easier for users to learn about the operation, development or experiment of the NULS Blockchain. By building a chain to fully understand the operation of each node and data interaction, we can better grasp the overall operating mechanism of the NULS Blockchain, which is conducive to further research. We assume that readers have the skills to set up and debug a Java development environment.")]),e._v(" "),a("h2",{attrs:{id:"setting-up-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-environment","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up environment")]),e._v(" "),a("ul",[a("li",[e._v("Operating systems: macOS, Windows")]),e._v(" "),a("li",[e._v("Build Tools: Maven")]),e._v(" "),a("li",[e._v("Development Tools: IntelliJ IDEA")]),e._v(" "),a("li",[e._v("NULS source code on github: https://github.com/nuls-io/nuls")])]),e._v(" "),a("h2",{attrs:{id:"beginning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beginning","aria-hidden":"true"}},[e._v("#")]),e._v(" Beginning")]),e._v(" "),a("p",[e._v("Since blockchain is a decentralized network composed of multiple nodes, we will take a private chain with three nodes as an example. Although we recommend using a Linux server to run the NULS main-net consensus node, in this tutorial, we choose macOS system that can set up a Java development environment to run and debug nodes.")]),e._v(" "),a("h2",{attrs:{id:"development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-environment","aria-hidden":"true"}},[e._v("#")]),e._v(" Development environment")]),e._v(" "),a("p",[e._v("First, clone the NULS source code using IntelliJ IDEA and open the project. Make sure JDK is the jdk1.8 version and Maven is configured correctly.")]),e._v(" "),a("h2",{attrs:{id:"steps-to-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-build","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps to build")]),e._v(" "),a("ol",[a("li",[e._v("Open the module.ini file, which is the configuration file for joining or building the network. In this tutorial, it is the configuration information of the NULS test-net.")])]),e._v(" "),a("p",[a("img",{attrs:{src:n(248),alt:"image-20190103193901967"}})]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("We will use three nodes to build a private chain. First we need to prepare devices (virtual machine works) for three nodes to run.")])]),e._v(" "),a("ul",[a("li",[e._v("Node A: 192.168.1.1")]),e._v(" "),a("li",[e._v("Node B: 192.168.1.2")]),e._v(" "),a("li",[e._v("Node C: 192.168.1.3")])]),e._v(" "),a("p",[e._v("We also need to set up a seed node to maintain the operation of the blockchain, i.e., to package and forge blocks. In addition, we need to prepare a block-forging address (including private key, to import into the seed node), which can be prepared in advance.")]),e._v(" "),a("p",[e._v("In this tutorial, the initial block-forging address we prepare is:\n"),a("code",[e._v("Nse4zpZHsUuU7h5ymv28pcGbwHju3joV")])]),e._v(" "),a("p",[e._v('PS: You may find that the first few letters of the address we prepare differs from those of the test-net address in the figure, which is for the sake of distinguishing the test-net address from the main-net address, so as to avoid confusion that may result in adverse consequences. Specifically, we set the test-net address to start with "TT" and the main-net address to start with "Ns". This tutorial uses the NULS main-branch code, so the address starts with "Ns". If you prefer to custom the starting letters of the private-chain account address, you can try to modify the '),a("code",[e._v("chain.id")]),e._v(" parameter in the nuls.ini file. The parameters of the same chain must be in consistence.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Assuming node A is the seed node, then modify the network and consensus sections of the module.ini configuration file of three nodes A, B and C according to the following configuration:")])]),e._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[network]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Bootstrap")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("io.nuls.network.netty.module.impl.NettyNetworkModuleBootstrap")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Network.server.port")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("8003")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Network.magic")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("20190101")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Network.max.in")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("100")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Network.max.out")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("10")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Network.seed.ip")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("192.168.1.1:8003")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[consensus]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Bootstrap")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("io.nuls.consensus.poc.module.impl.PocConsensusModuleBootstrap")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Partake.packing")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("true")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Min.upgrade.delay")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("1000")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("Seed.nodes")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("Nse4zpZHsUuU7h5ymv28pcGbwHju3joV")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("ul",[a("li",[e._v("Modify "),a("code",[e._v("work.seed.ip")]),e._v(" to the ip and port of the seed node.")]),e._v(" "),a("li",[e._v("Modify "),a("code",[e._v("seed.nodes")]),e._v(" to the block-forging address.")]),e._v(" "),a("li",[e._v("The consistency of the magic parameters "),a("code",[e._v("network.magic")]),e._v(" of all nodes in the private chain is a must.")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Run the three nodes separately through IntelliJ IDEA. If you only need to debug one node, the other two nodes can be packaged with maven and sent to a Linux server to run. Remarkably, a jre must be placed in the NULS root directory to run properly.")]),e._v(" "),a("li",[e._v("After launching the three nodes, once the IntelliJ IDEA console has the following log output, it means that the three nodes have successfully formed a private chain network, but it still cannot produce new blocks and the block height is 0. If there is no log output, you need to uncomment the "),a("code",[e._v('<appender-ref ref="STDOUT"/>')]),e._v(" in logback.xml.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("io.nuls.client.Bootstrap.sysStart(Bootstrap.java:156):bestHeight:0 , txCount : 1 io.nuls.client.Bootstrap.sysStart(Bootstrap.java:174):height:0,count:2, hash :xxxxxxx,192.168.1.2:8003,192.168.1.2:8003\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Then import the prepared block-forging account "),a("code",[e._v("Nse4zpZHsUuU7h5ymv28pcGbwHju3joV")]),e._v(" via wallet interface of the seed node A. After a while, you can see the latest height displayed in the console increasing, which indicates that the network is producing new blocks. At the same time, the height of the node B, C will also increase and the height of the three nodes will remain the same. At this point, the setup of the private chain network is completed.")])]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("This tutorial mainly introduces the easiest way to build a private chain for the development and debugging of NULS, without modification on the source code of NULS. If you want to dig deeper into NULS, you can refer to the relevant documentation of NULS to modify and debug the source code. Maybe you will find more secrets!")])])}],s=n(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);o.options.__file="buildPrivateChain.md";t.default=o.exports}}]);