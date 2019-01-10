(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{460:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("blockquote",[e("p",[t._v("参考资料:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.sitepoint.com/solidity-pitfalls-random-number-generation-for-ethereum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Solidity Pitfalls: Random Number Generation for Ethereum"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.positive.com/predicting-random-numbers-in-ethereum-smart-contracts-e5358c6b8620",target:"_blank",rel:"noopener noreferrer"}},[t._v("Predicting Random Numbers in Ethereum Smart Contracts"),e("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("调用方式如下:")]),t._v(" "),t._m(3),e("p",[t._v("--")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("以彩票为例，抽奖需要调用两次合约交易，第一次，结束彩票，第二次，抽奖")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("--")]),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("以彩票为例，我们需要更多任意数据来挑选我们的赢家。当我们开奖时，我们可以使用已经进入我们的彩票智能合约的玩家的地址作为随机因子，以此产生随机数。")]),t._v(" "),e("p",[t._v("--")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("同样以彩票为例")]),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nuls区块链随机数的几种实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuls区块链随机数的几种实现方式","aria-hidden":"true"}},[this._v("#")]),this._v(" NULS区块链随机数的几种实现方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-线性同余发生器（lcg）算法获取伪随机数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-线性同余发生器（lcg）算法获取伪随机数","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. "),s("code",[this._v("线性同余发生器（LCG）")]),this._v("算法获取伪随机数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("NULS智能合约的SDK中提供了一种获取随机数的方式，它采用当前块的矿工地址、合约地址、合约调用者地址、当前块的时间戳作为随机因子，使用"),s("code",[this._v("线性同余发生器（LCG）")]),this._v("算法获取伪随机数")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("io"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nuls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utils"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pseudoRandom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 增加一个随机因子\n */")]),t._v("\nio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nuls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utils"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pseudoRandom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" seed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-使用未来块的blockhash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用未来块的blockhash","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 使用未来块的"),s("code",[this._v("BlockHash")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("第一次结束彩票后，记录当前块高度H1，并生成一个数字N，在未来区块高度达到"),s("code",[this._v("H1+N")]),this._v("的时候，才能抽奖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("第二次抽奖时，根据第一次记录的块高度H1再加上(0~80]个块(待定)得到块高度H2，获取H2这个块的"),s("code",[this._v("BlockHash")]),this._v("，以它作为随机种子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ETH不能使用这种方式的原因如下：\n"),s("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1600/1*eyNTfWTkmM-3YuMca-1H0A.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-随机种子限定在参与者内"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-随机种子限定在参与者内","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 随机种子限定在参与者内")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-commit-reveal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-commit-reveal","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. commit-reveal")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("合约为随机数留出奖励。")])]),t._v(" "),e("li",[e("p",[t._v("每个用户生成他们自己的秘密随机数 N。")])]),t._v(" "),e("li",[e("p",[t._v("用户通过散列他们N和地址来创建他们的秘密随机数的哈希值：String hash = sha3(N + Msg.sender())。")]),t._v(" "),e("pre",[e("code",[t._v("  注意：步骤2和3应在本地秘密进行，例如用户把N提交到彩票应用中，彩票应用完成hash运算\n")])])]),t._v(" "),e("li",[e("p",[t._v("用户将其哈希值发送给智能合约。")])]),t._v(" "),e("li",[e("p",[t._v("提交的内容将持续一定数量的块，或者直到有足够的参与者加入。")])]),t._v(" "),e("li",[e("p",[t._v("一旦提交轮次结束，揭幕轮开始。")])]),t._v(" "),e("li",[e("p",[t._v("每个用户将其随机数提交N给智能合约。")])]),t._v(" "),e("li",[e("p",[t._v("合约验证sha3(N + Msg.sender())匹配原始提交。")])]),t._v(" "),e("li",[e("p",[t._v("如果用户未及时提交有效N，则他的存款将被没收。")])]),t._v(" "),e("li",[e("p",[t._v("把所有验证过的N 进行 XOR 异或运算得到随机数。")])]),t._v(" "),e("li",[e("p",[t._v("该数字用于确定哪些参与者获得奖励 ---\x3e（N % numUsers）。")])])])}],!1,null,null,null);n.options.__file="randomImplementations.md";s.default=n.exports}}]);