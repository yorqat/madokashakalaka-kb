const { widget, root } = figma
const {
  AutoLayout,
  Ellipse,
  Frame,
  Image,
  Rectangle,
  SVG,
  Text,
  Input,
  Span,
  useSyncedState,
} = widget

function bigHandGraphic(flip?: boolean) {
  const fill = '#FFEAD7'

  return (
    <SVG
      src={`<svg width="673" height="520" viewBox="0 0 673 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${flip ? `<g transform="translate(673, 0) scale(-1, 1)">` : ''}
<path fill-rule="evenodd" clip-rule="evenodd" d="M535.124 180.464C546.114 165.597 566.248 160.522 582.565 169.337C598.883 178.152 605.774 197.826 599.493 215.237L599.858 215.434L519.095 366.375L454 331.21L531.89 185.638C531.949 185.524 532.01 185.41 532.071 185.297C532.131 185.183 532.193 185.07 532.254 184.956L534.763 180.269L535.124 180.464Z" fill="${fill}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M490.948 72.8446C490.954 72.8085 490.959 72.7725 490.965 72.7363C490.97 72.7002 490.976 72.6641 490.982 72.628L491.109 71.7944L491.097 71.7925C493.65 51.887 479.944 33.4464 460.087 30.3483C440.23 27.2501 421.626 40.6494 418.079 60.3996L418.067 60.3978L417.923 61.3398L373.55 349.847L446.592 361.244L490.948 72.8446Z" fill="${fill}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M368.989 36.361L374.707 313.357L300.817 314.897L295.1 37.9844C295.1 37.9566 295.099 37.9288 295.098 37.901C295.098 37.8732 295.097 37.8454 295.097 37.8177L295 33.1438L295.301 33.1375C297.248 14.8334 312.477 0.399991 331.277 0.00814792C350.078 -0.383696 365.889 13.4028 368.59 31.61L368.891 31.6037L368.989 36.361Z" fill="${fill}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M236.468 94.3324C236.124 92.1634 235.583 89.995 234.833 87.8491C228.077 68.4986 206.988 58.3151 187.73 65.1037C168.473 71.8921 158.338 93.0821 165.093 112.432C165.843 114.578 166.768 116.611 167.848 118.521L167.289 118.718L246.333 345.113L316.072 320.53L237.029 94.1348L236.468 94.3324Z" fill="${fill}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M97.0968 445.904C81.0874 438.378 70 422.073 70 403.171C70 377.119 91.0617 356 117.043 356C131.237 356 143.963 362.304 152.588 372.272L335 496.804L283.264 573L97.0968 445.904Z" fill="${fill}"/>
<path d="M243.773 305.617L386.849 265.63L528.029 351.317L478.758 593.142H269.355L203.029 516.025L243.773 305.617Z" fill="${fill}"/>
${flip ? `</g>` : ''}
</svg>
`}
    ></SVG>
  )
}

function handGraphic(
  activeFinger: number,
  flip: boolean,
  transparent: boolean,
): FigmaDeclarativeNode {
  const fill = '#FFE7D1'
  const activeFill = '#FFB46F'
  // Idk what I was doing anymore
  const buttonSvgSrc = `
  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${transparent ? `<g opacity="0">` : ''}
  ${flip ? `<g transform="translate(22, 0) scale(-1, 1)">` : ''}
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4338 6.04985C17.8058 5.54773 18.4872 5.37635 19.0395 5.67405C19.5918 5.97175 19.825 6.63621 19.6124 7.22424L19.6248 7.2309L16.8913 12.3286L14.688 11.141L17.3243 6.22462C17.3263 6.22076 17.3284 6.21691 17.3304 6.21306C17.3325 6.20921 17.3346 6.20538 17.3367 6.20156L17.4216 6.04325L17.4338 6.04985Z" 
fill="${activeFinger == 0 || activeFinger == 1 ? activeFill : fill}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.657 2.77286C16.6573 2.77163 16.6576 2.7704 16.6579 2.76916C16.6582 2.76793 16.6585 2.76669 16.6588 2.76546L16.6654 2.73785L16.665 2.73776C16.8062 2.0748 16.3949 1.41622 15.7336 1.25709C15.0724 1.09796 14.4077 1.49758 14.2334 2.15258L14.233 2.15248L14.2255 2.18379L11.93 11.7723L14.3624 12.3577L16.657 2.77286Z" 
fill="${activeFinger == 2 ? activeFill : fill}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1478 1.25365L12.3414 10.6086L9.84046 10.6606L9.64698 1.30855C9.64696 1.30759 9.64694 1.30663 9.64692 1.30567C9.6469 1.3047 9.64688 1.30374 9.64686 1.30278L9.6436 1.145L9.65377 1.14479C9.71968 0.526604 10.2351 0.0391437 10.8714 0.0259099C11.5078 0.0126762 12.0429 0.478286 12.1343 1.0932L12.1445 1.09299L12.1478 1.25365Z" 
fill="${activeFinger == 3 ? activeFill : fill}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.3196 2.94564C7.30794 2.87239 7.28961 2.79915 7.26426 2.72668C7.03559 2.07316 6.32182 1.72923 5.67001 1.9585C5.0182 2.18777 4.67517 2.90341 4.90384 3.55694C4.92919 3.62941 4.96052 3.69807 4.99706 3.76257L4.97815 3.76922L7.65348 11.4153L10.0139 10.585L7.33857 2.93897L7.3196 2.94564Z" 
fill="${activeFinger == 4 ? activeFill : fill}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.8391 15.2737C2.26067 15.0018 1.86006 14.4127 1.86006 13.7298C1.86006 12.7886 2.62105 12.0256 3.55977 12.0256C4.07262 12.0256 4.53243 12.2534 4.84407 12.6135L11.4348 17.1126L9.56551 19.8654L2.8391 15.2737Z" 
fill="${activeFinger == 5 ? activeFill : fill}"/>
<path d="M7.47231 10.3217L12.3149 8.97118L17.0933 11.8651L15.4257 20.0323L8.3382 20.0323L6.0933 17.4278L7.47231 10.3217Z" fill="${fill}"/>
<path d="M19 0L17 1.5L19 3V0Z" opacity="${
    activeFinger == 0 || activeFinger == 1 ? '1' : '0'
  }" fill="${
    (flip ? !(activeFinger == 0) : activeFinger == 0) ? activeFill : fill
  }"/>
<path d="M22 1.5L20 0V3L22 1.5Z" opacity="${
    activeFinger == 0 || activeFinger == 1 ? '1' : '0'
  }" fill="${
    (flip ? !(activeFinger == 1) : activeFinger == 1) ? activeFill : fill
  }"/>
${flip ? '</g>' : ''}
${transparent ? `</g>` : ''}
</svg>
`

  return <SVG name="hand" src={buttonSvgSrc} />
}

const emptyHands: Hands = {
  leftHand: [
    [
      { primary: '', alt_left: '', alt_center: '', alt_right: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
  ],

  rightHand: [
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_left: '', alt_center: '', alt_right: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
  ],
}

const defaultHands: Hands = {
  leftHand: [
    [
      {
        primary: 'を',
        alt_left: 'きゅ',
        alt_center: 'じょ',
        alt_right: 'ほ',
      },
      {
        primary: 'け',
        alt_right: 'わ',
        alt_center: '',
        alt_left: 'ゎ',
      },
    ],
    [
      { primary: 'ち', alt_right: 'た', alt_center: 'だ', alt_left: 'ちょ' },
      { primary: 'つ', alt_right: 'ぬ', alt_center: 'ず', alt_left: 'っ' },
    ],
    [
      { primary: 'て', alt_right: 'ろ', alt_center: 'りょ', alt_left: 'てる' },
      { primary: 'と', alt_right: 'こ', alt_center: 'ご', alt_left: 'ど' },
      { primary: 'さ', alt_right: 'ふ', alt_center: 'ぶ', alt_left: 'ざ' },
    ],
    [
      { primary: 'い', alt_right: 'へ', alt_center: 'べ', alt_left: 'ぃ' },
      { primary: 'し', alt_right: 'か', alt_center: 'しゃ', alt_left: 'しょ' },
      { primary: 'そ', alt_right: 'あ', alt_center: 'ぁ', alt_left: 'ぞ' },
    ],
    [
      { primary: 'は', alt_right: 'す', alt_center: 'しゅ', alt_left: 'が' },
      { primary: 'ひ', alt_right: 'う', alt_center: 'ぅ', alt_left: 'び' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
  ],

  rightHand: [
    [
      { primary: 'ま', alt_right: 'な', alt_center: 'ない', alt_left: 'ます' },
      { primary: 'も', alt_right: 'え', alt_center: 'ぇ', alt_left: 'む' },
    ],
    [
      { primary: 'に', alt_right: '゛', alt_center: '「', alt_left: 'ぎょ' },
      { primary: 'の', alt_right: 'ん', alt_center: 'じゅ', alt_left: 'じ' },
      { primary: 'ね', alt_right: 'お', alt_center: 'ぉ', alt_left: '、' },
    ],
    [
      { primary: 'ら', alt_right: '゜', alt_center: '」', alt_left: 'じゃ' },
      { primary: 'り', alt_right: 'き', alt_center: 'ぎ', alt_left: 'きょ' },
      { primary: 'る', alt_right: 'や', alt_center: 'ゃ', alt_left: '。' },
    ],
    [
      { primary: 'み', alt_right: 'せ', alt_center: 'ぜ', alt_left: 'で' },
      { primary: 'め', alt_right: 'ゆ', alt_center: 'ゅ', alt_left: '？' },
    ],
    [
      { primary: 'れ', alt_right: '', alt_center: '', alt_left: 'れる' },
      { primary: '', alt_right: 'よ', alt_center: 'ょ', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_left: 'ー', alt_center: 'げ', alt_right: 'く' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
  ],
}

type LeftHand = [
  [keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps, keyBoardKeyProps],
]

type RightHand = [
  [keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps],
  [keyBoardKeyProps, keyBoardKeyProps, keyBoardKeyProps],
]

type Hands = {
  leftHand: LeftHand
  rightHand: RightHand
}

const hands: Hands = {
  leftHand: [
    [
      { primary: '', alt_left: '', alt_center: '', alt_right: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
  ],

  rightHand: [
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
    [
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
      { primary: '', alt_left: '', alt_center: '', alt_right: '' },
      { primary: '', alt_right: '', alt_center: '', alt_left: '' },
    ],
  ],
}

type Profiles = {
  [key: string]: Hands
}

const removeProfile = (
  profile: string,
  profiles: Profiles,

  setProfiles: {
    (newValue: Profiles | ((currValue: Profiles) => Profiles)): void

    (arg0: { [key: string]: Hands }): void
  },
) => {
  const { [profile]: _, ...updatedProfiles } = profiles
  setProfiles(updatedProfiles)
}

const initialProfiles: Profiles = {}

const vowels = ['ʲa', 'ʲɯ', 'ʲo', 'a', 'i', 'ɯ', 'e', 'o']
const consonantsRaw: string[] = [
  '',
  'g',
  'd ʑ,z',
  'd',
  'b',
  'p',
  'k',
  'ɕ',
  'tɕ',
  'n',
  'ç',
  'm',
  'r',
]

const consonants: FigmaDeclarativeChildren<TextComponent>[] = [
  ...consonantsRaw,
].map((c, idx) => {
  const braces = '{}'
  if (idx === 2) {
    return (
      <Text>
        <Span fill={'#AAA'}>d</Span>
        {braces[0]}ʑ,z{braces[1]}
      </Text>
    )
  }

  return <Text>{c}</Text>
})

const legendLayout = [
  // G     Z     D     B     P              K     S      T       N      H     M      R
  // ya
  [
    'ぎゃ',
    'じゃ',
    'ぢゃ',
    'びゃ',
    'ぴゃ',
    'きゃ',
    'しゃ',
    'ちゃ',
    'にゃ',
    'ひゃ',
    'みゃ',
    'りゃ',
  ],
  // yu
  [
    'ぎゅ',
    'じゅ',
    'ぢゅ',
    'びゅ',
    'ぴゅ',
    'きゅ',
    'しゅ',
    'ちゅ',
    'にゅ',
    'ひゅ',
    'みゅ',
    'りゅ',
  ],
  // yo
  [
    'ぎょ',
    'じょ',
    'ぢょ',
    'びょ',
    'ぴょ',
    'きょ',
    'しょ',
    'ちょ',
    'にょ',
    'ひょ',
    'みょ',
    'りょ',
  ],
  // a
  ['が', 'ざ', 'だ', 'ば', 'ぱ'],
  // i
  ['ぎ', 'じ', 'ぢ', 'び', 'ぴ'],
  // u
  ['ぐ', 'ず', 'づ', 'ぶ', 'ぷ'],
  // e
  ['げ', 'ぜ', 'で', 'べ', 'ぺ'],
  // o
  ['ご', 'ぞ', 'ど', 'ぼ', 'ぽ'],
]

const legendStore: { [key: string]: keyBoardKeyMeta } = {}

const padding = [0, 0, 20, 40, 0]

type keyBoardKeyMeta = {
  handedness: 'leftHand' | 'rightHand'
  column: keyBoardKeyColumn
  row: keyBoardKeyRow
  modifier: keyBoardKeyModifier
}

type keyBoardKeyModifier = {
  left: boolean
  right: boolean
}

enum keyBoardKeyColumn {
  PinkyLeft,
  PinkyRight,
  Ring,
  Mid,
  Pointer,
}

enum keyBoardKeyRow {
  Upper,
  HomeRow,
  Lower,
  Thumb,
}

type keyBoardKeyProps = {
  primary: string
  alt_left: string
  alt_right: string
  alt_center: string
}

/**
 *  Dimensions of A4 paper in px
 */
const a4 = {
  width: 842,
  height: 595,
}

function colorCode(name: string, char?: string) {
  function isDigraph(char: string) {
    return char.length > 1
  }

  function isModified(char: string): boolean {
    return 'がぎぐげござじずぜぞだぢづでどびぶべぱぴぷぺ'.includes(char)
  }

  function isPunctuation(char: string): boolean {
    const japanesePunctuationRegex = /[\u3000-\u303F\uFF00-\uFFEF]/
    return japanesePunctuationRegex.test(char)
  }

  function isSmol(char: string): boolean {
    return 'ぁぃぅぇぉゃゅょゎっ'.includes(char)
  }

  let color = '#222'

  if (!char) return <Text> </Text>

  if (isSmol(char)) {
    color = '#F8A72D'
  }

  if (isDigraph(char)) {
    color = '#9148EF'
  }

  if (isPunctuation(char)) {
    color = '#F05C5C'
  }

  if (isModified(char)) {
    color = '#29b392'
  }

  let width = 16

  if (char.length > 1) {
    width = 32
  }

  if (char.length == 0) {
    width = 5
  }

  return (
    <Input
      fill={color}
      letterSpacing={-2}
      fontWeight={'semi-bold'}
      value={char ? char : ''}
      onTextEditEnd={(e) => {}}
      width={width}
    />
  )
}

function indicators() {
  const indicators = ['▲', '●', '▼', '✦']

  return (
    <AutoLayout padding={{ top: 35 }} name="indicators" direction="vertical">
      {indicators.map((i, idx) => {
        return (
          <AutoLayout
            key={idx}
            height={100}
            width={50}
            horizontalAlignItems={'center'}
            verticalAlignItems="center"
          >
            <Text fontSize={22}>{i}</Text>
          </AutoLayout>
        )
      })}
    </AutoLayout>
  )
}

function KeyboardGuide() {
  // Individual Keyboard key
  function keyBoardKey(
    props: keyBoardKeyProps,
    colIdx: number,
    rowIdx: number,
    handedness: 'leftHand' | 'rightHand',
  ): FigmaDeclarativeChildren<Frame> {
    // Order of fingers from left to right respectively
    const keyBoardKeyColumnSequenceLeft = [
      keyBoardKeyColumn.PinkyLeft,
      keyBoardKeyColumn.PinkyRight,
      keyBoardKeyColumn.Ring,
      keyBoardKeyColumn.Mid,
      keyBoardKeyColumn.Pointer,
    ]

    const keyBoardKeyColumnSequenceRight = [
      keyBoardKeyColumn.Pointer,
      keyBoardKeyColumn.Mid,
      keyBoardKeyColumn.Ring,
      keyBoardKeyColumn.PinkyLeft,
      keyBoardKeyColumn.PinkyRight,
    ]

    const keyBoardKeyRowSequence = [
      keyBoardKeyRow.Upper,
      keyBoardKeyRow.HomeRow,
      keyBoardKeyRow.Lower,
      keyBoardKeyRow.Thumb,
    ]

    let row = keyBoardKeyRowSequence[rowIdx]

    const column =
      handedness == 'leftHand'
        ? keyBoardKeyColumnSequenceLeft[colIdx]
        : keyBoardKeyColumnSequenceRight[colIdx]

    if (props.primary) {
      legendStore[props.primary] = {
        column,
        row,
        handedness,
        // Primary keys require no modifiers
        modifier: { left: false, right: false },
      }
    }

    if (props.alt_left) {
      legendStore[props.alt_left] = {
        column,
        row,
        handedness,
        // Alt left requires left pedal modifier
        modifier: { left: true, right: false },
      }
    }

    if (props.alt_right) {
      legendStore[props.alt_right] = {
        column,
        row,
        handedness,
        // Alt right requires right pedal modifier
        modifier: { left: false, right: true },
      }
    }

    if (props.alt_center) {
      legendStore[props.alt_center] = {
        column,
        row,
        handedness,
        // Alt center requires both pedals
        modifier: { left: true, right: true },
      }
    }

    return (
      <Frame
        name="Keyboard key"
        width={100}
        height={100}
        cornerRadius={8}
        effect={{
          type: 'inner-shadow',
          color: { r: 160 / 255, g: 160 / 255, b: 160 / 255, a: 1 },
          offset: { x: 0, y: 0 },
          blur: 5,
        }}
        key={`${colIdx}${rowIdx}`}
        fill={'#FDFDFD'}
        opacity={0.95}
      >
        <AutoLayout
          direction="vertical"
          height={'fill-parent'}
          width={'fill-parent'}
          verticalAlignItems="center"
          horizontalAlignItems="center"
        >
          <AutoLayout
            direction="horizontal"
            name="Alt Keys"
            height={40}
            width={'fill-parent'}
            verticalAlignItems="center"
            spacing={{ horizontal: 'auto' }}
            padding={{ horizontal: 8 }}
          >
            {[
              colorCode('Alt Left', props.alt_left),
              colorCode('Alt Center', props.alt_center),
              colorCode('Alt Right', props.alt_right),
            ]}
          </AutoLayout>

          <AutoLayout name="Primary" direction="vertical">
            <Input
              horizontalAlignText="center"
              fill={'#161616'}
              fontSize={32}
              fontWeight={'semi-bold'}
              value={props.primary ? props.primary : ''}
              onTextEditEnd={(e) => {
                setEditBuffer((old) => {

                  console.log(e.characters)
                  // const current = old[handedness][colIdx][rowIdx]
                  // old[handedness][colIdx][rowIdx] = {
                  //   primary: e.characters,
                  //   alt_right: current.alt_right,
                  //   alt_center: current.alt_center,
                  //   alt_left: current.alt_left,
                  // }
                  console.log(old[handedness][colIdx][rowIdx])

                  return old
                })
              }}
              width={'fill-parent'}
            />
          </AutoLayout>
        </AutoLayout>
      </Frame>
    )
  }

  function button(
    cta: string,
    handler: ((event: WidgetClickEvent) => Promise<any> | void) | undefined,
    active: boolean,
  ) {
    const stroke = active ? '#34353A' : '#EEE'

    return (
      <AutoLayout
        stroke={stroke}
        strokeWidth={1}
        strokeAlign={'inside'}
        padding={16}
        onClick={active ? handler : undefined}
      >
        <Text>{cta}</Text>
      </AutoLayout>
    )
  }

  const [profiles, setProfiles] = useSyncedState<Profiles>('profiles', {
    "default": defaultHands
  })

  const [currentProfile, setCurrentProfile] = useSyncedState<string>(
    'current profile',
    'default',
  )

  let keys = currentProfile ? profiles[currentProfile] : hands

  // Key mapping alterations do be saved here
  const [editBuffer, setEditBuffer] = useSyncedState<Hands>(
    'edit buffer',
    { ...hands, }
  )

  const [newSaveName, setNewSaveName] = useSyncedState('New save file', '')

  const [newImport, setnewImport] = useSyncedState<{
    name: string
    hands: string
    // if hands JSON is valid Hands
    valid: boolean
  }>('import', { name: '', hands: '', valid: false })

  // Just some cosmetic stuff
  const keySpacing = 4
  const columnBottomPadding = [30, 30, 60, 70, 50]
  const columnBottomPaddingRight = [...columnBottomPadding].reverse()

  const thumbRotations = [0, -10, -20]
  let thumbRotationsRight = [...thumbRotations]
    .reverse()
    .map((rotation) => -rotation)

  return (
    <AutoLayout
      spacing={20}
      wrap={true}
      width={a4.width * 4.5}
      height={a4.height * 2.5}
      name="Keyboard Guide"
    >
      {/* Context Menu */}
      {/* <AutoLayout
        name="Control Panel"
        {...a4}
        fill={'#FFF'}
        direction="vertical"
        spacing={{ vertical: 16 }}
        padding={{ vertical: 16, horizontal: 16 }}
      >
        <Text fontSize={36}>Control Panel</Text>

        <Text fill={'#eeaa00'} fontSize={12}>
          Caution: Switching profiles will cause unsaved changes to be lost
        </Text>

        <AutoLayout
          name="create"
          direction="vertical"
          width={'fill-parent'}
          spacing={8}
          padding={{ vertical: 16 }}
        >
          <AutoLayout
            name="Import profile"
            width={'fill-parent'}
            direction="vertical"
          >
            <AutoLayout>
              {button(
                'Import profile',
                (e) => {
                  if (
                    newImport.valid &&
                    newImport.name &&
                    !profiles[newImport.name]
                  ) {
                    setProfiles((profiles) => {
                      profiles[newImport.name] = JSON.parse(newImport.hands)
                      return profiles
                    })
                  }
                },
                true,
              )}
            </AutoLayout>

            <AutoLayout
              name="Name Import profile"
              height={'fill-parent'}
              width={'fill-parent'}
              direction="vertical"
            >
              <Text>Name</Text>
              <Frame
                height={'fill-parent'}
                width={'fill-parent'}
                stroke={'#000'}
                strokeWidth={2}
              >
                <Input
                  value={newImport.name}
                  verticalAlignText="center"
                  onTextEditEnd={(e) => {
                    setnewImport((im) => {
                      im.name = e.characters
                      return im
                    })
                  }}
                />
              </Frame>
            </AutoLayout>

            <AutoLayout
              name="JSON Import profile"
              height={'fill-parent'}
              width={'fill-parent'}
              direction="vertical"
            >
              <Text>JSON</Text>
              <Frame
                height={'fill-parent'}
                width={'fill-parent'}
                stroke={'#000'}
                strokeWidth={2}
              >
                <Input
                  value={newImport.hands}
                  verticalAlignText="center"
                  fill={
                    newImport.valid && newImport.hands ? '#00FF00' : '#FF0000'
                  }
                  onTextEditEnd={(e) => {
                    setnewImport((im) => {
                      im.hands = e.characters.replace(/\s+/g, '')
                      try {
                        JSON.parse(im.hands)
                        im.valid = true
                      } catch (e) {
                        im.valid = false
                      }
                      return im
                    })
                  }}
                />
              </Frame>
            </AutoLayout>
          </AutoLayout>

          <AutoLayout name="Save as" width={'fill-parent'}>
            {button('Save as', (e) => {}, true)}
            <AutoLayout
              name="Input Save as"
              strokeWidth={2}
              stroke={'#000'}
              height={'fill-parent'}
              width={'fill-parent'}
            >
              <Input
                verticalAlignText="center"
                horizontalAlignText="center"
                height={'fill-parent'}
                width={'fill-parent'}
                value={newSaveName}
                onTextEditEnd={(e) => {
                  setNewSaveName(e.characters)
                }}
              />
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
        <AutoLayout name="Options" wrap={true} width={'fill-parent'}>
          {[
            button(
              'Save',
              (e) => {
                // TODO: overwrite save from edit buffer
              },
              true,
            ),
            button(
              'Delete',
              (e) => {
                // removeProfile(currentProfile, profiles, setProfiles)/
              },
              true,
            ),
            button(
              'Overwrite default',
              (e) => {
                root.setPluginData('profiles', JSON.stringify(initialProfiles))
                setProfiles(JSON.parse(JSON.stringify(initialProfiles)))
              },
              true,
            ),
            button(
              'Reset Edit buffer',
              (e) => {
                setEditBuffer(hands)
              },
              true,
            ),
          ]}
        </AutoLayout>
        <AutoLayout
          name="Profiles"
          direction="vertical"
          width={'fill-parent'}
          spacing={{ horizontal: 32 }}
          padding={{ horizontal: 16 }}
        >
          <Text fontSize={22}>Profiles</Text>
          {Object.keys(profiles).map((profile, idx) => {
            return (
              <Text
                key={idx}
                verticalAlignText="center"
                width={'fill-parent'}
                height={32}
                effect={{
                  type: 'drop-shadow',
                  color: '#999',
                  offset: { x: 2, y: 2 },
                  blur: 4,
                }}
                onClick={
                  profile === currentProfile
                    ? undefined
                    : () => {
                        setEditBuffer(hands)
                        setCurrentProfile(profile)
                      }
                }
              >
                {profile} {profile === currentProfile ? '◄' : ''}
              </Text>
            )
          })}
        </AutoLayout>
      </AutoLayout> */}

      {/* Left hand reference */}
      <AutoLayout
        name="Left hand (A4)"
        fill={'#FFF'}
        {...a4}
        spacing={{ horizontal: 10 }}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        direction="horizontal"
      >
        <Frame
          name="Hand graphic"
          height={700}
          width={700}
          positioning="absolute"
          x={90}
          y={75}
        >
          {bigHandGraphic(true)}
        </Frame>
        {indicators()}
        <AutoLayout
          name="Content"
          spacing={{ vertical: -40 }}
          direction="vertical"
          verticalAlignItems="end"
        >
          <AutoLayout
            name="Columns"
            spacing={{ horizontal: keySpacing }}
            padding={{ right: 185 }}
          >
            {keys.leftHand.slice(0, 5).map((column, colIdx) => {
              return (
                <AutoLayout
                  key={colIdx}
                  name="Column"
                  verticalAlignItems="end"
                  height={'fill-parent'}
                  direction="vertical"
                  spacing={{ vertical: keySpacing }}
                  padding={{ bottom: columnBottomPadding[colIdx] }}
                >
                  {[...column].map((k, rowIdx) => {
                    return keyBoardKey(
                      k,
                      colIdx,
                      colIdx != 2 && colIdx != 3 ? rowIdx + 1 : rowIdx,
                      'leftHand',
                    )
                  })}
                </AutoLayout>
              )
            })}
          </AutoLayout>

          <AutoLayout
            name="Row"
            spacing={{ horizontal: -1 }}
            horizontalAlignItems={'end'}
            width={'fill-parent'}
          >
            {keys.leftHand[5].map((k, colIdx) => {
              // + 2 for offset
              return (
                <AutoLayout
                  rotation={thumbRotations[colIdx]}
                  width={'hug-contents'}
                >
                  {keyBoardKey(k, colIdx + 2, 3, 'leftHand')}
                </AutoLayout>
              )
            })}
          </AutoLayout>
        </AutoLayout>
        {indicators()}
      </AutoLayout>

      {/* Right hand reference */}
      <AutoLayout
        name="Right hand (A4)"
        fill={'#FFF'}
        {...a4}
        spacing={{ horizontal: 10 }}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        direction="horizontal"
      >
        <Frame
          name="Hand graphic"
          height={700}
          width={700}
          positioning="absolute"
          x={80}
          y={75}
        >
          {bigHandGraphic()}
        </Frame>
        {indicators()}
        <AutoLayout
          name="Content"
          spacing={{ vertical: -40 }}
          direction="vertical"
          verticalAlignItems="end"
        >
          <AutoLayout
            name="Columns"
            spacing={{ horizontal: keySpacing }}
            padding={{ left: 185 }}
          >
            {keys.rightHand.slice(0, 5).map((column, colIdx) => {
              return (
                <AutoLayout
                  key={colIdx}
                  name="Column"
                  verticalAlignItems="end"
                  height={'fill-parent'}
                  direction="vertical"
                  spacing={{ vertical: keySpacing }}
                  padding={{ bottom: columnBottomPaddingRight[colIdx] }}
                >
                  {column.map((k, rowIdx) => {
                    return keyBoardKey(
                      k,
                      colIdx,
                      colIdx != 1 && colIdx != 2 ? rowIdx + 1 : rowIdx,
                      'rightHand',
                    )
                  })}
                </AutoLayout>
              )
            })}
          </AutoLayout>

          <AutoLayout
            name="Row"
            spacing={{ horizontal: -1 }}
            horizontalAlignItems={'start'}
            width={'fill-parent'}
          >
            {keys.rightHand[5].map((k, colIdx) => {
              return (
                <AutoLayout
                  rotation={thumbRotationsRight[colIdx]}
                  width={'hug-contents'}
                >
                  {keyBoardKey(k, colIdx, 3, 'rightHand')}
                </AutoLayout>
              )
            })}
          </AutoLayout>
        </AutoLayout>
        {indicators()}
      </AutoLayout>

      {/* Character cheat sheet */}
      <AutoLayout
        name="Character Reference (A4)"
        fill={'#FFF'}
        {...a4}
        spacing={{ horizontal: 10 }}
        verticalAlignItems="center"
        horizontalAlignItems="start"
        direction="vertical"
        padding={{ horizontal: 30 }}
      >
        <Text name="title" fontWeight={800} fontSize={24}>
          キーボードガイド
        </Text>
        <AutoLayout name="Consonants">
          {consonants.map((c, idx) => {
            const side = 60
            return (
              <AutoLayout
                key={idx}
                height={side}
                width={side}
                stroke={'#34353A'}
                strokeWidth={0}
                strokeAlign={'inside'}
                verticalAlignItems="center"
                horizontalAlignItems="center"
              >
                {c}
              </AutoLayout>
            )
          })}
        </AutoLayout>
        {vowels.map((v, xidx) => {
          const side = 60
          return (
            <AutoLayout name="Field">
              <AutoLayout
                key={-1}
                height={side}
                width={side}
                stroke={'#34353A'}
                strokeWidth={0}
                strokeAlign={'inside'}
                verticalAlignItems="center"
                horizontalAlignItems="center"
              >
                <Text>{v}</Text>
              </AutoLayout>
              {legendLayout[xidx].map((key, yidx) => {
                return (
                  <AutoLayout
                    key={`${xidx}${yidx}`}
                    height={side}
                    width={side}
                    stroke={'#DDD'}
                    strokeWidth={0.2}
                    strokeAlign={'inside'}
                    verticalAlignItems="center"
                    horizontalAlignItems="center"
                    direction="vertical"
                    fill={legendStore[key] ? '#FFF' : '#F5F5F5'}
                  >
                    <Text
                      fontWeight={'semi-bold'}
                      opacity={legendStore[key] ? 1 : 0.5}
                    >
                      {key}
                    </Text>
                    <AutoLayout verticalAlignItems="end">
                      {legendStore[key] ? (
                        handGraphic(
                          legendStore[key].row === keyBoardKeyRow.Thumb
                            ? // 5 because it's the thumb part
                              5
                            : legendStore[key].column,
                          true,
                          legendStore[key].handedness != 'leftHand',
                        )
                      ) : (
                        <Text> </Text>
                      )}
                      {legendStore[key] ? (
                        <>
                          <Text
                            fontSize={5}
                            opacity={!legendStore[key].modifier.left ? 0.2 : 1}
                          >
                            {legendStore[key].row == keyBoardKeyRow.Lower
                              ? '▼'
                              : legendStore[key].row == keyBoardKeyRow.HomeRow
                              ? '●'
                              : legendStore[key].row == keyBoardKeyRow.Upper
                              ? '▲'
                              : '✦'}
                          </Text>

                          <Text
                            fontSize={5}
                            opacity={!legendStore[key].modifier.right ? 0.2 : 1}
                          >
                            {legendStore[key].row == keyBoardKeyRow.Lower
                              ? '▼'
                              : legendStore[key].row == keyBoardKeyRow.HomeRow
                              ? '●'
                              : legendStore[key].row == keyBoardKeyRow.Upper
                              ? '▲'
                              : '✦'}
                          </Text>
                        </>
                      ) : (
                        <Text></Text>
                      )}

                      {legendStore[key] ? (
                        handGraphic(
                          legendStore[key].row === keyBoardKeyRow.Thumb
                            ? // 5 because it's the thumb part
                              5
                            : legendStore[key].column,
                          false,
                          legendStore[key].handedness != 'rightHand',
                        )
                      ) : (
                        <Text> </Text>
                      )}
                    </AutoLayout>
                  </AutoLayout>
                )
              })}
            </AutoLayout>
          )
        })}
      </AutoLayout>

      {/* Debug */}
      <AutoLayout
        name="Raw profile data"
        fill={'#FFF'}
        {...a4}
        spacing={{ horizontal: 30 }}
        horizontalAlignItems="start"
        direction="vertical"
      >
        {/* <Text width={'fill-parent'}>{JSON.stringify(legendStore)}</Text> */}
        {/* <Text width={'fill-parent'}>{JSON.stringify(editBuffer)}</Text> */}

        <Text width={'fill-parent'}>
          {JSON.stringify(profiles[currentProfile])}
        </Text>
      </AutoLayout>
    </AutoLayout>
  )
}

widget.register(KeyboardGuide)
