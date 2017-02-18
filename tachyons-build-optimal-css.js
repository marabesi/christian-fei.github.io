const fs = require('fs')
const build = require('tachyons-build-optimal-css')

const tachyonsFileLocation = './node_modules/tachyons/css/tachyons.min.css'
const input = fs.readFileSync(tachyonsFileLocation, 'utf8')

build(input, {
  from: tachyonsFileLocation,
  to: 'tachyons-build-optimal.css',
  minify: true,
  whitelist: ['pa3','w-70','w-30','w-100-ns','fr','fl','cf','v-mid','mw8','measure-wide','pl3','ml3','mh1','mh2','mh3','mh4','mh5','','mh6','mh2','f4','f5','f6','link','white','black','ph1','ph3','intro-line','avenir','mb3','mb6','mb3','measure','fw6','mt0','mt1','mt4','f2','f-subheadline-l','ph5-ns','pv3','bg-black-10','mv3','w4', 'w2', 'mw4'],
  stripComments: true
}).then(result => {
  fs.writeFileSync('./assets/css/tachyons-build-optimal.css', result.css)
})
