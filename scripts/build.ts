import StyleDictionary from 'style-dictionary'

console.log('Generating theme...')
console.log('\n==============================================')

StyleDictionary.registerFileHeader({
  name: 'customHeader',
  fileHeader: () => [
    'DO NOT EDIT THS FILE DIRECTLY',
    'Values are auto generated from @BROS/tokens <-- insert actual repo here',
    `Last generated on: ${new Date().toUTCString()} (UTC)`,
  ],
})

const coreDictionary = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    ts: {
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'color/hex',
        'size/px', // should we use `em` or `rem` instead?
      ],
      files: [
        {
          format: 'javascript/es6',
          destination: 'build/theme.ts',
          options: {
            fileHeader: 'customHeader',
          },
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'build/theme.d.ts',
          options: {
            fileHeader: 'customHeader',
          },
        },
      ],
    },
  },
})

coreDictionary.buildAllPlatforms()

console.log('\n==============================================')
console.log('\nFinished!')
