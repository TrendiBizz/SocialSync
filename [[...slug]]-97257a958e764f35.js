(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{672:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var i=n(37876),o=n(14232),a=n(54641),r=n(16648),s=n(89099),l=n(5104),d=n(77232),c=n(7512),g=n(43508),m=n(71837),p=n(93126),u=n(22508),h=n(50158),f=n(60343),x=n(48450),y=n(92182),b=n(56113),C=n(26391);let j=d.Ay.div.withConfig({componentId:"sc-2f8fcdfb-0"})(["display:flex;flex-direction:column;max-width:45rem;"]),w=d.Ay.div.withConfig({componentId:"sc-2f8fcdfb-1"})(["margin:"," 0 "," 0;text-transform:uppercase;font-weight:700;color:",";"],u.YK.spacing1,u.YK.spacing1,u.Tj.spruce),v=d.Ay.h2.withConfig({componentId:"sc-2f8fcdfb-2"})(["margin:"," 0 "," 0;"],u.YK.spacing1,u.YK.spacing1),k=d.Ay.div.withConfig({componentId:"sc-2f8fcdfb-3"})(["color:",";padding:7px;margin-top:",";border-radius:5px;display:flex;align-items:center;text-transform:capitalize;width:fit-content;"," ",""],u.Tj.nocturn,u.YK.spacing10,x.HT.md`
    margin-top: ${u.YK.spacing4};
    margin-bottom: ${u.YK.spacing2};
  `,e=>{let{category:t}=e;switch(t){case"Improved":return`background-color: ${u.Tj.cedar};`;case"New":return`background-color: ${u.Tj.mint};`;default:return`
        background-color: ${u.Tj.lake};
        color: ${u.Tj.white};
      `}}),T=(0,d.Ay)(m.w).withConfig({componentId:"sc-2f8fcdfb-4"})(["display:grid;place-items:center;width:100%;"]),$=d.Ay.div.withConfig({componentId:"sc-2f8fcdfb-5"})(["margin-top:",";font-size:1.8rem;font-weight:700;"],u.YK.spacing12),I=d.Ay.div.withConfig({componentId:"sc-2f8fcdfb-6"})(["text-wrap:pretty;"]),A=e=>{if(!e)return"";try{let t=e.includes("T")?e.split("T")[0]:e,n=(0,a.H)(t);return(0,r.GP)(n,"MMMM d, yyyy")}catch(e){return`Date unavailable: ${e}`}};function S(e){let{pageContext:t}=e,{t:n}=(0,l.Bd)(),{changelogs:a,totalChangelogs:r,locale:d,preview:u}=t,x=[],S="",[B,P]=(0,o.useState)(a),E=Math.ceil(r/y.m),Y=(0,o.useRef)(null),H=(0,s.useRouter)(),F=(0,C.nO)(H.query.page),{getChangelogCategoryText:L}=function(){let{t:e}=(0,l.Bd)(),t={New:e("New"),Improved:e("Improved"),Fixed:e("Fixed")};return{getChangelogCategoryText:e=>e in t?t[e]:e}}(),{getApplicationCategoryText:R}=function(){let{t:e}=(0,l.Bd)(),t={"Hootsuite Mobile App":e("Hootsuite Mobile App"),"Hootsuite Dashboard":e("Hootsuite Dashboard"),"Hootsuite Insights":e("Hootsuite Insights"),"Hootsuite Amplify":e("Hootsuite Amplify"),"Hootsuite App Directory":e("Hootsuite App Directory"),"AdEspresso by Hootsuite":e("AdEspresso by Hootsuite"),"Hootsuite Academy":e("Hootsuite Academy"),"Hootsuite Social Ads":e("Hootsuite Social Ads"),"Hootsuite Advanced Analytics":e("Hootsuite Advanced Analytics")};return{getApplicationCategoryText:e=>e in t?t[e]:e}}();return(0,o.useEffect)(()=>{(async e=>{let{changelogs:t}=await (0,b.u)({locale:d,preview:u},e-1);P(t)})(F)},[F,d,u]),(0,f.QV)(Y,F>1),B.forEach(e=>{let t=e.date,n=null;t!==S&&(e.date&&(n=(0,i.jsx)($,{children:A(e.date)})),S=e.date),x.push((0,i.jsxs)("div",{children:[n,(0,i.jsxs)(j,{children:[(0,i.jsx)(k,{category:e.changelogcategory,children:L(e.changelogcategory)}),(0,i.jsxs)(I,{children:[(0,i.jsx)(w,{children:R(e.applicationcategory)}),(0,i.jsx)(v,{children:e.name}),(0,i.jsx)(h.s,{content:e.body})]})]})]},`${e.name}-${e.date}`))}),(0,i.jsxs)("div",{children:[(0,i.jsx)(m.w,{colorTheme:(0,p.O4)("backgroundSecondary"),children:(0,i.jsx)(c.lq,{alignment:c.C1.CENTER,headingText:n("Product Updates"),bodyRichText:n("New features, fixes, and other improvements to help you get the most out of Hootsuite"),backgroundColor:"backgroundSecondary"})}),(0,i.jsx)("div",{ref:Y,children:(0,i.jsx)(T,{colorTheme:(0,p.O4)("white"),children:x})}),(0,i.jsx)(T,{colorTheme:(0,p.O4)("white"),padding:"bottom",children:(0,i.jsx)(g.d,{numPages:E})})]})}},2348:(e,t,n)=>{"use strict";n.d(t,{NH:()=>g});var i=n(47600),o=n(68965),a=n(26700),r=n(52918);let s=(0,r.J)`
  fragment Seo on Seo {
    seoTitle
    description
    image {
      image {
        url
      }
    }
    noIndex
    noFollow
    twitterCard
    twitterTitle
    twitterDescription
    twitterUrl
    twitterSite
    ogTitle
    ogUrl
    ogDescription
    ogSiteName
    ogLocale
    canonical
    structuredData
  }
`;var l=n(12471);let d=(0,r.J)`
  fragment CompoundOfferCard on CompoundOfferCard {
    sys {
      id
    }
    planCode
    couponCode
    discountText
    description
    topLeftText
    topRightText
    primaryCta {
      ...ComponentButton
    }
    secondaryCta {
      ...ComponentButton
    }
  }
`,c=(0,r.J)`
  ${i.Y}
  ${d}
  fragment SceneOfferDrawer on SceneOfferDrawer {
    sys {
      id
    }
    title
    disclaimer
    cardsCollection(limit: 4) {
      items {
        ...CompoundOfferCard
      }
    }
  }
`,g=(0,r.J)`
  ${s}
  ${a.J}
  ${c}
  ${l.U}
  fragment AllPagesPage on Page {
    sys {
      id
    }
    slug
    enUsSlug: slug(locale: "en-US")
    frFrSlug: slug(locale: "fr-FR")
    deDeSlug: slug(locale: "de-DE")
    itItSlug: slug(locale: "it-IT")
    ptBrSlug: slug(locale: "pt-BR")
    esEsSlug: slug(locale: "es-ES")
    enUs
    enHk
    enSg
    enGb
    frFr
    deDe
    itIt
    ptBr
    esEs
    customNav {
      sys {
        id
      }
    }
    seo {
      ...Seo
    }
    page {
      ... on Entry {
        sys {
          id
          publishedAt
        }
      }
    }
    alternatePage {
      ... on Entry {
        sys {
          id
          publishedAt
        }
      }
    }
    hideFooter
    redirect {
      ...Link
    }
    date
    offerDrawer {
      ...SceneOfferDrawer
    }
    footerForm {
      ...NewsletterForm
    }
  }
`;(0,r.J)`
  ${g}
  query AllPages($skip: Int!, $limit: Int!, $locale: String!) {
    pageCollection(skip: $skip, limit: $limit, locale: $locale) {
      total
      items {
        ...AllPagesPage
      }
    }
  }
`,(0,r.J)`
  ${g}
  query PageBySlug($slug: String!, $locale: String, $preview: Boolean) {
    pageCollection(
      limit: 1
      locale: $locale
      where: { slug: $slug }
      preview: $preview
    ) {
      items {
        ...AllPagesPage
      }
    }
  }
`;let m=(0,r.J)`
  ${a.J}
  ${i.Y}
  ${o.r}
  fragment PageCampaign on PageCampaign {
    sys {
      id
    }
    slug
    page {
      ... on Entry {
        sys {
          id
        }
      }
    }
    enUsSlug: slug(locale: "en-US")
    frFrSlug: slug(locale: "fr-FR")
    deDeSlug: slug(locale: "de-DE")
    itItSlug: slug(locale: "it-IT")
    ptBrSlug: slug(locale: "pt-BR")
    esEsSlug: slug(locale: "es-ES")
    enUs
    frFr
    deDe
    itIt
    ptBr
    esEs
    redirect {
      ...Link
    }
    navCta {
      ...ComponentButton
    }
    shareImage {
      ...ImageAsset
    }
    pageTitle
  }
`;(0,r.J)`
  ${m}
  query PageCampaign($slug: String!, $locale: String, $preview: Boolean) {
    pageCampaignCollection(
      limit: 1
      locale: $locale
      where: { slug: $slug }
      preview: $preview
    ) {
      items {
        ...PageCampaign
      }
    }
  }
`},3084:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var i=n(37876),o=n(89099),a=n(5104),r=n(77232),s=n(25356),l=n(67116),d=n(22508),c=n(91994);let g=(0,r.Ay)(s.N_).withConfig({componentId:"sc-f76b71c5-0"})(["font-size:0.875rem;color:",";font-weight:",";text-decoration:none;&:hover{text-decoration:underline;}"],d.Tj.spruce,d.Il.fontWeight.bold),m=e=>{let{category:t,...n}=e,r=(0,o.useRouter)(),{t:s}=(0,a.Bd)(),d=new URLSearchParams(r.asPath.split("?")[1]);d.set(c.am,t||"");let m=`${r.asPath.split("?")[0]}?${d.toString()}#${c.KT}`;return(0,i.jsxs)(g,{to:m,...n,children:[(0,i.jsx)(l.s,{children:s("Category:")}),t]})}},7808:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(37876),o=n(5104),a=n(77232),r=n(22508),s=n(48450),l=n(94975);let d=a.Ay.div.withConfig({componentId:"sc-cd445732-0"})(["font-weight:",";line-height:1.5;letter-spacing:2.5%;color:",";font-size:1rem;display:flex;",";",""],r.Il.fontWeight.bold,r.Tj.nocturn,e=>{let{isHighlighted:t}=e;return t&&`
    font-size: 0.875rem;
    color: ${r.Tj.white};
    border: 1px solid ${r.Tj.spruce};
  `},s.to.lg`
    flex-direction: column;
  `),c=a.Ay.div.withConfig({componentId:"sc-cd445732-1"})(["font-weight:",";padding:"," ",";background-color:",";",""],r.Il.fontWeight.bold,r.YK.spacing2,r.YK.spacing4,r.Tj.spruce,s.to.lg`
    width: 100%;
  `),g=a.Ay.div.withConfig({componentId:"sc-cd445732-2"})(["letter-spacing:0;font-weight:",";background-color:",";display:inline-block;color:",";padding:"," ",";"],r.Il.fontWeight.normal,r.Tj.white,r.Tj.nocturn,r.YK.spacing2,r.YK.spacing4),m=a.Ay.span.withConfig({componentId:"sc-cd445732-3"})(["display:inline;font-weight:",";color:",";"],r.Il.fontWeight.normal,r.Tj.nocturn),p=a.Ay.span.withConfig({componentId:"sc-cd445732-4"})(["margin:0 ",";"],r.YK.spacing1),u=e=>{let{date:t,locale:n,isLiveWebinar:a,isHighlighted:r}=e,{t:s}=(0,o.Bd)(),{date:u,time:h}=(0,l.R)(t,n),f=s(a?"Upcoming live":"On-demand");return(0,i.jsx)(d,{isHighlighted:r,children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{children:f}),a&&(0,i.jsxs)(g,{children:[u," ",h]})]}):(0,i.jsxs)("div",{children:[f," ",a&&(0,i.jsxs)(m,{children:[(0,i.jsx)(p,{children:"|"})," ",u," ",h]})]})})}},11493:(e,t,n)=>{"use strict";n.d(t,{MU:()=>o,d9:()=>a,md:()=>i,qM:()=>r,rm:()=>s});let i=12,o="All Types",a="All Locations",r="type",s="location"},12471:(e,t,n)=>{"use strict";n.d(t,{U:()=>o});var i=n(52918);let o=(0,i.J)`
  fragment NewsletterForm on NewsletterForm {
    sys {
      id
    }
    marketoId
    marketoSubmitText
    marketoButtonText
    salesforceId
    headingText
    subheadingText
    showOwly
  }
`},20296:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__N_SSG:()=>i3,default:()=>i4});var i=n(37876),o=n(14232),a=n(52918);let r=(0,a.J)`
  fragment FeatureFlagFragment on FeatureFlag {
    key
    value
  }
`;(0,a.J)`
  ${r}

  query FeatureFlag($preview: Boolean) {
    featureFlagCollection(limit: 10, preview: $preview) {
      items {
        ...FeatureFlagFragment
      }
    }
  }
`,n(13254);var s=n(26700);n(47965);let l=(0,a.J)`
  ${s.J}
  fragment NavigationLink on NavigationLink {
    sys {
      id
    }
    label
    icon {
      title
      description
      url
      height
      width
    }
    description
    tag
    link {
      ...Link
    }
  }
`,d=(0,a.J)`
  ${s.J}
  fragment NavigationFooterSection on NavigationFooterSection {
    link {
      ...Link
    }
    label
    displayOn
    stackWithNext
    navigationLinksCollection(limit: 20) {
      items {
        ...NavigationLink
      }
    }
  }
`;(0,a.J)`
  ${l}
  ${d}
  query FooterNavigation($locale: String!, $preview: Boolean) {
    navigationFooterSectionCollection(
      limit: 20
      order: weight_ASC
      locale: $locale
      preview: $preview
    ) {
      items {
        ...NavigationFooterSection
      }
    }
  }
`;let c=(0,a.J)`
  fragment PageSingle on PageSingle {
    type
  }
`;(0,a.J)`
  query PageSingleSlug {
    pageSingleCollection {
      items {
        type
        linkedFrom {
          pageCollection(limit: 1) {
            items {
              slug
            }
          }
        }
      }
    }
  }
`;var g=n(47600);let m=(0,a.J)`
  ${g.Y}
  fragment CompoundCta on CompoundCta {
    sys {
      id
    }
    defaultButton {
      ...ComponentButton
    }
    loggedInButton {
      ...ComponentButton
    }
  }
`;var p=n(68965);let u=(0,a.J)`
  ${s.J}
  ${p.r}
  fragment NavItem on NavItem {
    label
    icon {
      ...ImageAsset
    }
    badgeText
    link {
      ...Link
    }
  }
`,h=(0,a.J)`
  ${s.J}
  fragment NavDetailedItem on NavDetailedItem {
    label
    description
    industry
    link {
      ...Link
    }
  }
`,f=(0,a.J)`
  fragment NavSecondaryDropdown on NavSecondaryDropdown {
    label
    link {
      ...Link
    }
    itemsCollection {
      items {
        ...NavItem
      }
    }
  }
`,x=(0,a.J)`
  ${s.J}
  ${u}
  ${h}
  ${f}
  fragment NavMenu on NavMenu {
    label
    link {
      ...Link
    }
    numberOfColumns
    itemsCollection {
      items {
        ...NavItem
        ...NavDetailedItem
      }
    }
    secondaryDropdown {
      ...NavSecondaryDropdown
    }
  }
`,y=(0,a.J)`
  ${x}
  ${m}
  fragment Nav on Nav {
    isLogoClickable
    backgroundColor
    itemsCollection {
      items {
        ...NavMenu
      }
    }
    customCtasCollection {
      items {
        ...CompoundCta
      }
    }
    staticLogoImage {
      url
    }
    logoAnimation {
      url
    }
  }
`,b=((0,a.J)`
  ${y}
  query GlobalNav($locale: String!, $preview: Boolean) {
    defaultNavCollection(limit: 1, locale: $locale, preview: $preview) {
      items {
        nav {
          ...Nav
        }
      }
    }
  }
`,(0,a.J)`
  ${y}
  query CustomNav($id: String!, $locale: String!, $preview: Boolean) {
    nav(id: $id, locale: $locale, preview: $preview) {
      ...Nav
    }
  }
`);async function C(e){let{imageUrl:t,animationUrl:n}=e;return t?n?{imageUrl:t,animationData:await fetch(n).then(e=>e.json())}:{animationData:null,imageUrl:t}:{animationData:null,imageUrl:"/images/svg/hootsuite-full-logo.svg"}}n(2348);var j=n(6047);(0,a.J)`
  ${j.a}
  fragment BlogResource on BlogResource {
    sys {
      id
    }
    title
    blogResourceTitle
    marketoForm {
      ...MarketoForm
    }
  }
`;var w=n(47886);let v=(0,a.J)`
  ${p.r}
  ${g.Y}
  ${w.Z}
  fragment ComponentCard on ComponentCard {
    sys {
      id
    }
    header
    richtextSubheader {
      json
    }
    body
    media {
      ...Media
    }
    backgroundColor
    roundedImage
    ctasCollection(limit: 2) {
      items {
        ...ComponentButton
      }
    }
    condensedPadding
    contentAlignment
  }
`,k=(0,a.J)`
  ${w.Z}
  fragment CompoundQuote on CompoundQuote {
    sys {
      id
    }
    quote
    company
    logo {
      ...Media
    }
    avatar {
      ...Media
    }
    profileName
    jobTitle
  }
`,T=(0,a.J)`
  ${g.Y}
  ${w.Z}
  fragment ComponentDetailCard on ComponentDetailCard {
    sys {
      id
    }
    media {
      ...Media
    }
    isRoundedImage
    imageSize
    padding
    backgroundColor
    bodyRichText {
      json
      links {
        entries {
          block {
            ...ComponentButton
          }
        }
      }
    }
  }
`;var $=n(60753);let I=(0,a.J)`
  fragment ComponentPlanButton on ComponentPlanButton {
    sys {
      id
    }
    signUpCtaButton {
      ...ComponentButton
    }
    downgradeCtaButton {
      ...ComponentButton
    }
    upgradeCtaButton {
      ...ComponentButton
    }
  }
`;var A=n(38737),S=n(44150);let B=(0,a.J)`
  fragment PlanCardFeature on PlanCardFeature {
    title
    description
    isUnavailable
    size
    color
    showIcon
  }
`,P=(0,a.J)`
  ${I}
  fragment Plan on Plan {
    sys {
      id
    }
    name
    planCode
    planButtons {
      ...ComponentPlanButton
    }
    labelText
    labelColor
    labelBackground
  }
`,E=(0,a.J)`
  ${g.Y}
  ${B}
  ${A.Z}
  ${S.a}
  ${s.J}
  ${P}
  ${p.r}
  fragment PlanCard on PlanCard {
    sys {
      id
    }
    name
    subHeading {
      ...ComponentPlainTextBlock
    }
    plan {
      ...Plan
    }
    price {
      ...ComponentPrice
    }
    everythingPlus {
      json
    }
    featuresCollection(limit: 30) {
      items {
        ...PlanCardFeature
      }
    }
    learnMore {
      ...Link
    }
    buyNowCta {
      ...ComponentButton
    }
    image {
      ...ImageAsset
    }
    hideIfNotCurrentPlan
    type
  }
`,Y=(0,a.J)`
  ${s.J}
  ${w.Z}
  ${g.Y}

  fragment ComponentPolaroid on ComponentPolaroid {
    sys {
      id
    }
    header
    preheader
    bodyText
    link {
      ...Link
    }
    meta
    footer
    labelText
    labelBackgroundColor
    backgroundColor
    overlayText
    overlayColor
    textAlignment
    fullWidthImage
    media {
      ...Media
    }
    ctasCollection(limit: 2) {
      items {
        ...ComponentButton
      }
    }
  }
`,H=(0,a.J)`
  fragment ComponentStatCard on ComponentStatCard {
    sys {
      id
    }
    stat
    body
    alignment
    statColor
  }
`,F=(0,a.J)`
  ${Y}
  ${v}
  ${T}
  ${k}
  ${E}
  ${S.e}
  ${H}
  ${$.v}
  fragment ComponentCardList on ComponentCardList {
    sys {
      id
    }
    header
    subheader
    footer
    numCols
    backgroundColor
    padding
    alignment
    cardsCollection(limit: 9) {
      items {
        ...ComponentCard
        ...ComponentPolaroid
        ...ComponentDetailCard
        ...CompoundQuote
        ...PlanCard
        ...ComponentTextBlock
        ...ComponentStatCard
        ...ComponentEmbed
      }
    }
    cardsVar1Collection(limit: 3) {
      items {
        ...PlanCard
      }
    }
    isCarouselOnMobile
    gap
    smallerCardWidth
  }
`,L=(0,a.J)`
  ${g.Y}
  fragment ComponentChecklist on ComponentChecklist {
    sys {
      id
    }
    listType
    listItemsCollection(limit: 10) {
      items {
        title
        description
        cta {
          ...ComponentButton
        }
      }
    }
    display
    iconColor
    padding
    backgroundColor
    listItemBackground
  }
`,R=(0,a.J)`
  ${S.e}
  fragment ComponentCollapsible on ComponentCollapsible {
    sys {
      id
    }
    component {
      ...ComponentTextBlock
    }
    backgroundColor
    expandLabel
    collapseLabel
    height
  }
`;(0,a.J)`
  ${g.Y}
  fragment ComponentCtaBanner on ComponentCtaBanner {
    sys {
      id
    }
    bodyRichText {
      json
    }
    padding
    backgroundColor
    ctasCollection(limit: 2) {
      items {
        ...ComponentButton
      }
    }
  }
`,(0,a.J)`
  fragment ComponentCustomHtml on ComponentCustomHtml {
    sys {
      id
    }
    html
    script
  }
`,(0,a.J)`
  ${j.a}
  ${p.r}
  ${L}
  ${k}
  fragment ComponentDemoRequest on ComponentDemoRequest {
    sys {
      id
    }
    heading
    subHeading
    logosCollection {
      items {
        ...ImageAsset
      }
    }
    form {
      ...MarketoForm
    }
    experimentForm {
      ...MarketoForm
    }
    detailsHeading
    details {
      json
      links {
        entries {
          block {
            ...ComponentChecklist
          }
        }
      }
    }
    testimonial {
      ...CompoundQuote
    }
  }
`,(0,a.J)`
  ${g.Y}
  fragment DynamicTriggerPopup on DynamicTriggerPopup {
    sys {
      id
    }
    id
    backgroundColor
    bodyHeader
    bodyText {
      json
    }
    modalImage {
      ...ImageAsset
    }
    ctasCollection {
      items {
        ...ComponentButton
      }
    }
    timerDuration
    footerText
    displayTo
    openOnExitIntent
    delayTriggerDuration
  }
`;let M=(0,a.J)`
  ${g.Y}
  fragment CompoundTextInputWithButton on CompoundTextInputWithButton {
    sys {
      id
    }
    action
    inputLabel
    inputPlaceholder
    button {
      ...ComponentButton
    }
    hideField
  }
`,K=(0,a.J)`
  fragment CompoundTimer on CompoundTimer {
    sys {
      id
    }
    type
    datetime
    duration
  }
`;(0,a.J)`
  ${p.r}
  ${g.Y}
  ${A.Z}
  ${w.Z}
  ${m}
  ${K}
  ${M}

  fragment ComponentHero on ComponentHero {
    sys {
      id
    }
    preheader
    header
    subheader
    subheaderRichtext {
      json
      links {
        entries {
          inline {
            ...ComponentPrice
          }
          block {
            ...ComponentPrice
          }
        }
      }
    }
    endNotes
    backgroundColor
    featuredMedia {
      ...Media
    }
    logo {
      ...ImageAsset
    }
    imageAlign
    ctasCollection(limit: 4) {
      items {
        ...ComponentButton
        ...CompoundCta
        ...CompoundTimer
        ...CompoundTextInputWithButton
      }
    }
  }
`;let N=(0,a.J)`
  ${p.r}
  fragment ComponentLogoBanner on ComponentLogoBanner {
    sys {
      id
    }
    header
    headerFontWeight
    backgroundColor
    logosCollection(limit: 20) {
      items {
        ...ImageAsset
      }
    }
    padding
    numberOfColumns
    titleAlignment
  }
`,D=(0,a.J)`
  ${p.r}
  fragment ComponentLogoGrid on ComponentLogoGrid {
    sys {
      id
    }
    logosCollection(limit: 9) {
      items {
        ...ImageAsset
      }
    }
    padding
    backgroundColor
  }
`;var J=n(31567);let O=(0,a.J)`
  ${L}
  ${$.v}
  ${w.Z}
  ${s.J}
  ${m}
  fragment ComponentMediaBlock on ComponentMediaBlock {
    sys {
      id
    }
    preheader
    header
    backgroundColor
    padding
    linkTo {
      ...Link
    }
    bodyRichText {
      json
      links {
        entries {
          block {
            ...ComponentChecklist
          }
        }
      }
    }
    mediaAsset {
      ...Media
    }
    fullWidthImage
    mediaAlign
    animated: animation
    ctasCollection(limit: 4) {
      items {
        ...ComponentButton
        ...CompoundCta
      }
    }
    boxShadowing
    logo {
      ...ImageAsset
    }
    mediaFirstOnMobile
  }
`,W=(0,a.J)`
  ${g.Y}
  ${I}
  ${P}
  fragment PlanComparisonTable on PlanComparisonTable {
    sys {
      id
    }
    tableTitle
    plansCollection {
      items {
        ...Plan
      }
    }
    featuresCollection(limit: 20) {
      items {
        displayName
        featuresCollection(limit: 25) {
          items {
            title
            description
            tooltipText
            professionalPlan
            team3s: team3S
            businessPlan
            enterprise
            standard
            advanced
          }
        }
      }
    }
    hideIfNotCurrentPlanCollection(limit: 5) {
      items {
        planCode
      }
    }
    showOwly
    collapsible
  }
`;(0,a.J)`
  fragment ReviewWidget on ReviewWidget {
    sys {
      id
    }
    trustRadiusId
    showHeader
  }
`;let _=(0,a.J)`
  ${p.r}
  ${g.Y}
  ${A.Z}
  fragment AccordionItem on AccordionItem {
    sys {
      id
    }
    title
    description {
      json
      links {
        entries {
          inline {
            ...ComponentPrice
          }
          block {
            ...ComponentPrice
          }
        }
      }
    }
    image {
      ...ImageAsset
    }
    cta {
      ...ComponentButton
    }
    defaultOpen
  }
`,q=(0,a.J)`
  ${_}
  ${g.Y}
  fragment ComponentAccordionBlock on ComponentAccordionBlock {
    sys {
      id
    }
    title
    subtitle
    accordionItemsCollection(limit: 40) {
      items {
        ...AccordionItem
      }
    }
    ctasCollection(limit: 2) {
      items {
        ...ComponentButton
      }
    }
    backgroundColor
    mediaAlign
  }
`;var U=n(66979);let z=(0,a.J)`
  ${L}
  ${g.Y}
  fragment ComponentSimpleSteps on ComponentSimpleSteps {
    sys {
      id
    }
    heading
    list {
      ...ComponentChecklist
    }
    cta {
      ...ComponentButton
    }
  }
`;(0,a.J)`
  ${q}
  ${F}
  ${D}
  ${O}
  ${S.e}
  ${g.Y}
  ${L}
  ${z}
  ${U.V}
  ${w.Z}
  fragment ComponentRow on ComponentRow {
    sys {
      id
    }
    columnOneCollection(limit: 5) {
      items {
        ...ComponentAccordionBlock
        ...ComponentMediaBlock
        ...ComponentTextBlock
        ...ComponentCardList
        ...ComponentLogoGrid
        ...ComponentButton
        ...ComponentChecklist
        ...ComponentSimpleSteps
        ...ComponentShare
        ...Media
      }
    }
    columnOneBackgroundColor
    columnTwoCollection(limit: 5) {
      items {
        ...ComponentAccordionBlock
        ...ComponentMediaBlock
        ...ComponentTextBlock
        ...ComponentCardList
        ...ComponentLogoGrid
        ...ComponentButton
        ...ComponentChecklist
        ...ComponentSimpleSteps
        ...ComponentShare
        ...Media
      }
    }
    columnTwoBackgroundColor
    columnOrder
    backgroundColor
    contentAlignment
    hasGap
    padding
  }
`,(0,a.J)`
  ${E}
  fragment ComponentSelectPlan on ComponentSelectPlan {
    sys {
      id
    }
    planCardsCollection {
      items {
        ...PlanCard
      }
    }
    preSelectedCard {
      sys {
        id
      }
    }
    backgroundColor
    padding
  }
`;let G=(0,a.J)`
  ${p.r}
  fragment SocialMediaFeedData on SocialMediaFeedData {
    sys {
      id
    }
    image {
      ...ImageAsset
    }
    caption
    socialMediaType
    createdAt
    feedLink
    handle
    avatar {
      ...ImageAsset
    }
  }
`;(0,a.J)`
  ${G}
  fragment SceneSocialMediaFeed on SceneSocialMediaFeed {
    sys {
      id
    }
    socialMediaFeedDataItemsCollection {
      items {
        ...SocialMediaFeedData
      }
    }
    numberOfColumns
  }
`,(0,a.J)`
  ${s.J}

  fragment ComponentSubNav on ComponentSubNav {
    sys {
      id
    }
    alignment
    isSticky
    backgroundColor
    itemsCollection {
      items {
        ... on NavigationLink {
          label
          link {
            ...Link
          }
        }
      }
    }
  }
`;var V=n(116),Z=n(26823);(0,a.J)`
  ${g.Y}
  ${Z.H}
  fragment ComponentContentGenerator on ComponentContentGenerator {
    sys {
      id
    }
    header
    description
    input1Label
    input1Placeholder
    input2Label
    input2Placeholder
    input3Label
    input3Placeholder
    dropdown1Label
    dropdown1Choices
    dropdown2Label
    dropdown2Choices
    dropdown3Label
    dropdown3Choices
    optionalInputs
    backgroundColor
    buttonLabel
    primaryCtaButton {
      ...ComponentButton
    }
    ctaButton {
      ...ComponentButton
    }
    loadingMessage
    modal {
      ...ComponentModal
    }
    gaTrackingId
  }
`;let Q=(0,a.J)`
  ${g.Y}
  ${p.r}
  fragment CompoundStatCard on CompoundStatCard {
    sys {
      id
    }
    stat
    body
    citation {
      ...ComponentButton
    }
    backgroundColor
    logo {
      ...ImageAsset
    }
  }
`,X=(0,a.J)`
  ${Q}
  fragment CompoundContentList on CompoundContentList {
    sys {
      id
    }
    columns
    contentCollection {
      items {
        ...CompoundStatCard
      }
    }
    backgroundColor
  }
`,ee=(0,a.J)`
  ${m}
  ${w.Z}
  fragment CompoundFloatingBanner on CompoundFloatingBanner {
    sys {
      id
    }
    title
    description
    compoundCta {
      ...CompoundCta
    }
    compoundMedia {
      ...Media
    }
    backgroundColor
  }
`,et=(0,a.J)`
  ${g.Y}
  fragment StaticTool on StaticTool {
    sys {
      id
    }
    type
    cta {
      ...ComponentButton
    }
    backgroundColor
  }
`,en=(0,a.J)`
  ${p.r}
  ${s.J}
  fragment CompoundTestimonialCard on CompoundTestimonialCard {
    sys {
      id
    }
    sys {
      id
    }
    contentfulName
    starRating
    starAmount
    testimonialTitle
    testimonialDescription
    testimonialDate
    avatar {
      ...ImageAsset
    }
    avatarName
    avatarTitle
    avatarCompany
    testimonialLinkText
    testimonialLink {
      ...Link
    }
  }
`,ei=(0,a.J)`
  ${g.Y}
  ${w.Z}
  fragment BasicTextBlock on BasicTextBlock {
    sys {
      id
    }
    textAlignment
    smallFont
    bodyRichText {
      json
      links {
        entries {
          inline {
            ...Media
            ...ComponentButton
          }
          block {
            ...Media
          }
        }
      }
    }
  }
`,eo=(0,a.J)`
  fragment Spacer on Spacer {
    sys {
      id
    }
    backgroundColor
  }
`,ea=(0,a.J)`
  ${g.Y}
  ${w.Z}
  ${j.a}
  ${ei}
  ${eo}
  fragment FunctionalStickyContent on FunctionalStickyContent {
    sys {
      id
    }
    contentCollection(limit: 10) {
      items {
        ...ComponentButton
        ...Media
        ...MarketoForm
        ...BasicTextBlock
        ...Spacer
      }
    }
  }
`,er=(0,a.J)`
  ${w.Z}
  ${g.Y}
  ${ei}
  ${v}
  ${Y}
  fragment CellComponents on Entry {
    ...Media
    ...ComponentButton
    ...ComponentCard
    ...BasicTextBlock
    ...ComponentPolaroid
  }
`,es=(0,a.J)`
  ${er}
  fragment HorizontalCell on HorizontalCell {
    sys {
      id
    }
    contentCollection {
      items {
        ...CellComponents
      }
    }
    backgroundColor
  }
`,el=(0,a.J)`
  ${er}
  fragment VerticalCell on VerticalCell {
    sys {
      id
    }
    contentCollection {
      items {
        ...CellComponents
      }
    }
    backgroundColor
    mediaAlignment
  }
`;(0,a.J)`
  ${el}
  ${es}
  ${w.Z}
  ${ei}
  ${eo}
  ${ea}
  fragment Columns on Columns {
    sys {
      id
    }
    contentCollection {
      items {
        ...Media
        ...BasicTextBlock
        ...VerticalCell
        ...HorizontalCell
        ...Spacer
        ...FunctionalStickyContent
      }
    }
    numberOfColumns
    backgroundColor
  }
`;var ed=n(12471);(0,a.J)`
  ${ee}
  ${N}
  ${ed.U}
  fragment SceneBanner on SceneBanner {
    sys {
      id
    }
    banner {
      ...CompoundFloatingBanner
      ...ComponentLogoBanner
      ...NewsletterForm
    }
  }
`,(0,a.J)`
  ${m}
  fragment ComponentCompetitorAnalysis on ComponentCompetitorAnalysis {
    sys {
      id
    }
    firstColumnHeader
    firstColumnSubheader
    firstColumnList
    secondColumnHeader
    secondColumnSubheader
    secondColumnList
    backgroundColor
    firstColumnCta {
      ...CompoundCta
    }
    secondColumnCta {
      ...CompoundCta
    }
  }
`;let ec=(0,a.J)`
  ${g.Y}
  ${K}
  ${m}
  fragment CompoundBodyContent on CompoundBodyContent {
    sys {
      id
    }
    heading
    body1 {
      json
    }
    list
    body2 {
      json
    }
    ctasCollection(limit: 2) {
      items {
        ...ComponentButton
        ...CompoundCta
        ...CompoundTimer
      }
    }
    backgroundColor
  }
`,eg=(0,a.J)`
  ${ec}
  ${w.Z}
  fragment CompoundCard on CompoundCard {
    sys {
      id
    }
    bodyContent {
      ...CompoundBodyContent
    }
    media {
      ...Media
    }
    alignment
    backgroundColor
  }
`,em=(0,a.J)`
  ${s.J}
  ${g.Y}
  fragment CompoundPlanCard on CompoundPlanCard {
    sys {
      id
    }
    name
    planCode
    pricingInterval
    ctaButton {
      ...ComponentButton
    }
    offerButton {
      ...ComponentButton
    }
    largeFeatures
    everythingPlus
    smallFeatures
    learnMoreLinkRef {
      ...Link
    }
    featuredLabel
  }
`,ep=(0,a.J)`
  ${w.Z}
  ${k}
  ${ec}
  ${em}
  ${eg}
  ${ei}
  ${et}
  ${X}
  ${j.a}

  fragment SceneContentBlock on SceneContentBlock {
    sys {
      id
    }
    contentCollection {
      items {
        ...CompoundBodyContent
        ...CompoundQuote
        ...CompoundPlanCard
        ...CompoundCard
        ...BasicTextBlock
        ...StaticTool
        ...CompoundContentList
        ...MarketoForm
      }
    }
    media {
      ...Media
    }
    mediaAlignment
    backgroundColor
    layoutType
  }
`;(0,a.J)`
  ${Q}
  ${em}
  ${eg}
  ${k}
  ${ea}
  ${et}
  ${X}
  ${en}
  fragment SceneContentList on SceneContentList {
    sys {
      id
    }
    numberOfColumns
    cardsCollection {
      items {
        ...CompoundStatCard
        ...CompoundPlanCard
        ...CompoundCard
        ...CompoundQuote
        ...FunctionalStickyContent
        ...StaticTool
        ...CompoundContentList
        ...CompoundTestimonialCard
      }
    }
    backgroundColor
  }
`;let eu=(0,a.J)`
  fragment GalleryFilterOption on GalleryFilterOption {
    sys {
      id
    }
    label
    value
  }
`,eh=(0,a.J)`
  ${s.J}
  ${w.Z}
  ${eu}
  fragment GalleryCard on GalleryCard {
    sys {
      id
    }
    title
    link {
      ...Link
    }
    tagsCollection(limit: 2) {
      items {
        ...GalleryFilterOption
      }
    }
    topic {
      ...GalleryFilterOption
    }
    featuredAfter
    featuredUntil
    description
    media {
      ...Media
    }
  }
`;(0,a.J)`
  ${eh}
  ${eu}
  fragment SceneGallery on SceneGallery {
    sys {
      id
    }
    title
    description
    subtitle
    galleryCardsCollection(limit: 100) {
      items {
        ...GalleryCard
      }
    }
  }
`,(0,a.J)`
  ${w.Z}
  ${g.Y}
  ${M}
  ${K}
  fragment SceneHero on SceneHero {
    sys {
      id
    }
    header
    body {
      json
    }
    media {
      ...Media
    }
    mobileMedia {
      ...Media
    }
    ctasCollection(limit: 2) {
      items {
        ...ComponentButton
        ...CompoundTextInputWithButton
        ...CompoundTimer
      }
    }
    backgroundColor
    mediaAlignment
    newsletterSignupForm
    formId
  }
`,(0,a.J)`
  ${en}
  ${p.r}
  fragment SceneTestimonialCarousel on SceneTestimonialCarousel {
    sys {
      id
    }
    contentfulName
    logo {
      ...ImageAsset
    }
    title
    description
    testimonialCardsCollection(limit: 6) {
      items {
        ...CompoundTestimonialCard
      }
    }
  }
`,g.Y,$.v,J.P,j.a,U.V,S.e,(0,a.J)`
  query PageCustom(
    $id: String!
    $locale: String!
    $skip: Int
    $limit: Int
    $preview: Boolean
  ) {
    pageCustom(id: $id, locale: $locale, preview: $preview) {
      componentsCollection(skip: $skip, limit: $limit) {
        total
        items {
          ... on Entry {
            sys {
              id
            }
          }
        }
      }
    }
  }
`;var ef=n(63767);let ex=(0,a.J)`
  ${p.r}
  fragment Person on Person {
    firstName
    lastName
    jobTitle
    company
    facebookLink
    twitterLink
    linkedinLink
    socialLinkText
    bio {
      json
    }
    image {
      ...ImageAsset
    }
  }
`,ey=(0,a.J)`
  ${j.a}
  ${ex}
  ${p.r}

  fragment Event on Event {
    title
    subtitle
    description
    details {
      json
      links {
        entries {
          block {
            ...ImageAsset
          }
        }
      }
    }
    marketo: marketoForm {
      ...MarketoForm
    }
    startDate
    endDate
    type
    location
    googleMaps
    mapsLocation
    authorsCollection {
      items {
        ...Person
      }
    }
  }
`,eb=(0,a.J)`
  ${ey}

  fragment PageEvent on PageEvent {
    event {
      ...Event
    }
  }
`;(0,a.J)`
  ${eb}
  query PageEvent($id: String!, $locale: String, $preview: Boolean) {
    pageEvent(id: $id, locale: $locale, preview: $preview) {
      ...PageEvent
    }
  }
`;var eC=n(74614),ej=n(29333),ew=n(5104),ev=n(77232),ek=n(82940),eT=n(17636),e$=n(72604),eI=n(87),eA=n(7512),eS=n(80073),eB=n(23643),eP=n(71837),eE=n(18864),eY=n(35885),eH=n(25356),eF=n(93126),eL=n(15792),eR=n(22508),eM=n(48450),eK=n(89120),eN=n(70377);let eD="MarketoFormAside-request-demo",eJ=ev.Ay.p.withConfig({componentId:"sc-1e1a027b-0"})(["letter-spacing:0.08em;font-weight:",";text-transform:uppercase;"],eR.Il.fontWeight.bold),eO=e=>{let{type:t,locale:n,thankYouBody:o}=e,{t:a}=(0,ew.Bd)(),r={"fr-FR":{formId:"3302",campaignId:"701a0000002UhU7"},"de-DE":{formId:"3885",campaignId:"701a0000002UhUN"},"es-ES":{formId:"3898",campaignId:"701a0000002UhUb"},"pt-BR":{formId:"4508",campaignId:"701a0000002UhUW"},"it-IT":{formId:"9615",campaignId:"701a0000002VVOX"}}[n]||{formId:"15143",campaignId:"701a0000002UhTx"},s=a("event"===t?"Thank you for registering for the recording":"Thank you for registering for the webinar");return(0,i.jsx)(eN.e,{backgroundColor:"nocturn",columns:"1",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(eJ,{children:s}),o||(0,i.jsxs)("p",{children:[s,","," ",a("you will receive an email with a personalized link shortly.")]}),(0,i.jsx)("hr",{}),(0,i.jsx)(eI.H2,{children:a("Ready to take the next step toward becoming a social business?")}),(0,i.jsx)("p",{children:a("Request a demo now and see how Hootsuite Enterprise can help you drive business-wide results from your social outreach.")}),(0,i.jsx)(eK.$n,{"data-target":`#${eD}`,children:a("Request a Demo")}),(0,i.jsx)(eB.a,{heading:a("Request a Demo"),id:eD,children:(0,i.jsx)(eY.w,{marketoFormIds:[r.formId],staticCampaignId:r.campaignId,successMessage:(0,i.jsxs)("div",{children:[(0,i.jsx)(eI.H3,{children:a("Demo Request Received")}),(0,i.jsx)("p",{children:a("Thanks for your interest in Hootsuite Enterprise. An Enterprise Development Representative will be in touch shortly to schedule your interactive demo.")})]})})})]})})},eW=ev.Ay.div.withConfig({componentId:"sc-3d850813-0"})(["display:grid;grid-gap:"," ",";grid-template-rows:auto;grid-template-columns:1fr;",""],eR.YK.spacing6,eR.YK.spacing5,eM.HT.md`
    order: 1;
    grid-template-columns: 65% 1fr;
  `),e_=ev.Ay.div.withConfig({componentId:"sc-3d850813-1"})(["padding:"," "," "," 0;order:2;",""],eR.YK.spacing8,eR.YK.spacing8,eR.YK.spacing8,eM.HT.md`
    order: 1;
  `),eq=ev.Ay.div.withConfig({componentId:"sc-3d850813-2"})(["order:1;"," ",""],e=>{let{hideForm:t}=e;return t&&(0,ev.AH)(["display:none;"])},eM.HT.md`
    order: 2;
  `),eU=ev.Ay.div.withConfig({componentId:"sc-3d850813-3"})(["background-color:",";position:relative;box-shadow:",";",""],eR.Tj.white,eR.Eo.shadow20,e=>{let{moveFormDown:t}=e;return(0,ev.AH)(["",""],eM.HT.md`
      margin-top: ${t?"-3.75rem":"3.3rem"};
    `)}),ez=ev.Ay.div.withConfig({componentId:"sc-3d850813-4"})(["background-color:",";color:",";text-align:center;padding:"," ",";*{margin:0;font-size:1.5rem;}"],eR.Tj.spruce,eR.Tj.white,eR.YK.spacing3,eR.YK.spacing6),eG=ev.Ay.div.withConfig({componentId:"sc-3d850813-5"})(["padding-bottom:0;button[type='submit']{width:100%;}"]),eV=e=>{let{body:t,formHeaderText:n,marketo:a,locale:r,type:s,thankYouBody:l,moveFormDown:d=!0,...c}=e,[g,m]=(0,o.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[g&&(0,i.jsx)(eO,{type:s,locale:r,thankYouBody:l}),(0,i.jsx)(eH.n5,{...c,children:(0,i.jsxs)(eW,{children:[(0,i.jsx)(e_,{children:t}),(0,i.jsx)(eq,{hideForm:g,children:(0,i.jsxs)(eU,{moveFormDown:d,children:[(0,i.jsx)(ez,{children:(0,i.jsx)(eI.H3,{children:n})}),(0,i.jsx)(eG,{children:(0,i.jsx)(eL.E,{...a,onSuccess:function(){a.onSuccess?.(),("webinar-on-demand"===s||"event"===s||"webinar-live"===s)&&m(!0)}})})]})})]})})]})};var eZ=n(74175),eQ=n(50158),eX=n(20275);let e0="demoRequestModal",e1=(0,ev.Ay)(eH.n5).withConfig({componentId:"sc-a3002feb-0"})(["padding:"," 0;"],eR.YK.spacing8),e2=ev.Ay.div.withConfig({componentId:"sc-a3002feb-1"})(["font-size:1.25rem;"]),e3=ev.Ay.div.withConfig({componentId:"sc-a3002feb-2"})(["font-size:1.25rem;"]),e4=ev.Ay.div.withConfig({componentId:"sc-a3002feb-3"})(["font-size:1.25rem;"]),e8=(0,ev.Ay)(eS.In).withConfig({componentId:"sc-a3002feb-4"})(["margin-right:",";vertical-align:bottom;"],eR.YK.spacing2),e5=(0,ev.Ay)(eH.n5).withConfig({componentId:"sc-a3002feb-5"})(["border-top:1px solid ",";border-bottom:1px solid ",";padding-top:",";padding-bottom:",";"],eR.Tj.nocturn50,eR.Tj.nocturn50,eR.YK.spacing3,eR.YK.spacing3),e7=(0,ev.Ay)(eH.n5).withConfig({componentId:"sc-a3002feb-6"})(["border-top:1px solid ",";border-bottom:1px solid ",";margin-top:",";margin-bottom:",";padding-top:",";padding-bottom:",";"],eR.Tj.nocturn50,eR.Tj.nocturn50,eR.YK.spacing8,eR.YK.spacing8,eR.YK.spacing8,eR.YK.spacing8),e6={renderNode:{[ej.INLINES.HYPERLINK]:function(e,t){return(0,i.jsx)("a",{href:e.data.uri,target:"_blank",rel:"noreferrer",children:t})}}},e9=(0,a.J)`
  fragment HelpTopic on HelpTopic {
    title
    description
    url
  }
`;(0,a.J)`
  ${e9}
  query PageHelp($preview: Boolean, $locale: String!) {
    pageHelpCollection(preview: $preview, locale: $locale) {
      items {
        helpTopicsCollection {
          items {
            ...HelpTopic
          }
        }
      }
    }
  }
`;var te=n(54587),tt=n.n(te),tn=n(45105),ti=n.n(tn),to=n(94020),ta=n(50189),tr=n(67116),ts=n(83054),tl=n(37077),td=n(99961),tc=n(18847),tg=n.n(tc);let tm={RESOURCES:"Resources",CHANGELOG:"Changelog",EVENTS:"Events",PRESS_RELEASES:"Press Releases",WEBINARS:"Webinars"};tm.RESOURCES,tg()(()=>Promise.resolve().then(n.bind(n,63889)),{loadableGenerated:{webpack:()=>[63889]}}),tm.CHANGELOG,tg()(()=>Promise.resolve().then(n.bind(n,672)),{loadableGenerated:{webpack:()=>[672]}}),tm.EVENTS,tg()(()=>Promise.resolve().then(n.bind(n,74167)),{loadableGenerated:{webpack:()=>[74167]}}),tm.PRESS_RELEASES,tg()(()=>Promise.resolve().then(n.bind(n,99801)),{loadableGenerated:{webpack:()=>[99801]}}),tm.WEBINARS,tg()(()=>Promise.resolve().then(n.bind(n,32045)),{loadableGenerated:{webpack:()=>[32045]}});var tp=n(4917),tu=n.n(tp),th=n(32207),tf=n(78352);let tx=ev.Ay.div.withConfig({componentId:"sc-c06a8195-0"})(["display:flex;justify-content:start;padding-bottom:",";"],eR.YK.spacing4),ty=ev.Ay.div.withConfig({componentId:"sc-c06a8195-1"})(["max-width:44rem;width:100%;svg{position:absolute;width:1rem;margin-top:",";margin-right:",";margin-left:",";}form{width:100%;}"],eR.YK.spacing4,eR.YK.spacing2,eR.YK.spacing2),tb=ev.Ay.input.withConfig({componentId:"sc-c06a8195-2"})(["max-width:44rem;width:100%;border:1px solid ",";font-size:1.2rem;padding-top:",";padding-bottom:",";padding-left:",";min-height:3.1rem;border-bottom:4px solid transparent;transition:border-bottom 0.13s ease-out;font-family:inherit;&::placeholder{color:",";width:100%;}&:focus{outline:none;border-bottom:4px solid ",";}&::-webkit-search-cancel-button,&::-webkit-search-decoration{appearance:none;}"],eR.Tj.nocturn,eR.YK.spacing2,eR.YK.spacing2,eR.YK.spacing8,eR.Tj.nocturn,eR.Tj.jade),tC=(0,ev.DU)([".st-default-autocomplete > .st-autocomplete-results .st-ui-result .st-ui-type-heading{font-family:",";color:"," !important;em{background-color:"," !important;}}"],eR.Il.font.primary,eR.Tj.lake,eR.Tj.tea),tj=tu()(tf.J,500),tw=e=>{let{placeholder:t,searchURL:n,swiftypeOn:a=!1,locale:r}=e,s=n||`https://help.hootsuite.com/hc/${(0,td.mapLocaleToHelpCenter)(r)}/search?`;!function(e,t){(0,o.useEffect)(()=>{let n=t?t.startsWith("en"):"en-us"===(0,td.mapLocaleToHelpCenter)();if(!0===e&&n){let e=document.createElement("script");return e.id="swiftypeScript",e.async=!0,e.type="text/javascript",e.text=`(function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
        (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
        e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;s.id='stScript';e.parentNode.insertBefore(s,e);
        })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');
    
        _st('install','XPi1CNU3b8jp3p6z-3g6','2.0.0');`,document.body.appendChild(e),()=>{delete window._st,document.body.removeChild(e),document.getElementById("stScript")?.remove(),document.querySelectorAll(".st-injected-content-generated").forEach(e=>e.remove())}}},[e,t])}(a,r);let[l,d]=(0,o.useState)(!1),[c,g]=(0,o.useState)(!1),[m,p]=(0,o.useState)(!1),u=(0,o.useId)(),h=(0,o.useId)(),f=(0,o.useId)(),x=(0,o.useId)(),{t:y}=(0,ew.Bd)(),b=(0,o.useCallback)(e=>{0===e?tj(y("No results available")):tj(y("{{number}} search results available. Keyboard users, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.",{number:e}))},[y]);return(0,o.useEffect)(()=>{let e=new MutationObserver(()=>{document.querySelector(".st-default-autocomplete")&&(d(!0),e.disconnect())});return e.observe(document.body,{childList:!0}),()=>e.disconnect()},[]),(0,o.useEffect)(()=>{if(!l)return;let e=document.querySelector(".st-default-autocomplete");if(!e)return;let t=new MutationObserver(t=>{g("none"!==e.style.display);let n=document.querySelector(".st-query-present");if(n){let e=n.children.length;n.id=u,n.role="listbox";let i=e=>e.classList.contains("st-keyboard-active-item");t.forEach(t=>{if("childList"===t.type&&b(e),t.target===n&&n.querySelectorAll("a").forEach((t,n)=>{t.setAttribute("role","option"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-posinset",`${n+1}`),t.setAttribute("aria-setsize",e.toString())}),"A"===t.target.nodeName){let e=t.target,n=i(e);n?e.setAttribute("id",x):e.removeAttribute("id"),e.setAttribute("aria-selected",n?"true":"false")}}),p(Array.from(n.querySelectorAll("a")).some(i))}});return t.observe(e,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["class"]}),()=>{t.disconnect()}},[l,u,x,b]),(0,i.jsxs)(tx,{children:[(0,i.jsx)(tC,{}),(0,i.jsxs)(ty,{children:[(0,i.jsx)(th.h,{"aria-hidden":"true"}),(0,i.jsxs)("form",{action:s,method:"get",children:[(0,i.jsx)(tr.s,{children:(0,i.jsx)("label",{id:f,htmlFor:h,children:y("hootsuite help search bar")})}),(0,i.jsx)(tb,{placeholder:t,name:"query",id:h,type:"search",className:"st-hs-search-input",autoComplete:"off",role:"combobox","aria-autocomplete":"list","aria-expanded":c,"aria-owns":u,"aria-controls":u,"aria-labelledby":f,"aria-activedescendant":m?x:void 0})]})]})]})};var tv=n(81979),tk=n(77588),tT=n(58195),t$=n(66064);let tI=(0,ev.Ay)(eI.H1).attrs({forwardedAs:"h3"}).withConfig({componentId:"sc-b051b1a1-0"})(["text-align:center;"]),tA=ev.Ay.div.withConfig({componentId:"sc-b051b1a1-1"})(["a{font-weight:",";color:",";}align-items:center;padding-bottom:",";display:flex;gap:",";"],eR.Il.fontWeight.bold,eR.Tj.spring,eR.YK.spacing8,eR.YK.spacing1),tS=ev.Ay.div.withConfig({componentId:"sc-b051b1a1-2"})(["display:flex;flex-direction:row;justify-content:space-evenly;img{width:2rem;height:2rem;margin-top:",";}div{display:flex;flex-direction:column;margin-left:",";font-size:1.2rem;max-width:80%;}"],eR.YK.spacing4,eR.YK.spacing5),tB=ev.Ay.div.withConfig({componentId:"sc-b051b1a1-3"})(["text-align:center;a{color:white;}"]),tP=ev.Ay.div.withConfig({componentId:"sc-b051b1a1-4"})(["display:flex;flex-direction:row;justify-content:space-around;margin-top:",";a{display:flex;flex-direction:column;align-items:center;font-size:1.2rem;text-decoration:none;svg{margin-bottom:",";fill:white;}}a:hover{text-decoration:underline;text-decoration-thickness:2px;}div{","}"],eR.YK.spacing12,eR.YK.spacing2,eM.to.md`
      font-size: ${eR.Il.fontSize.small};
    `),tE=(0,ev.Ay)(ek.b).withConfig({componentId:"sc-b051b1a1-5"})(["div{padding-top:0;}"]),tY=(0,ev.Ay)(ta.Zs).withConfig({componentId:"sc-b051b1a1-6"})(["div{h4{font-size:1.3rem;}}"]),tH=ev.Ay.ol.withConfig({componentId:"sc-b051b1a1-7"})(["padding-inline-start:20px;li{padding-left:",";}"],eR.YK.spacing1),tF=ev.Ay.ul.withConfig({componentId:"sc-b051b1a1-8"})(["list-style-type:none;padding-inline-start:0;li:not(:last-child){margin-bottom:",";}"],eR.YK.spacing4);(0,a.J)`
  ${E}
  ${W}
  query CreatePlansPage($id: String!, $locale: String, $preview: Boolean) {
    pagePlans(id: $id, locale: $locale, preview: $preview) {
      heading
      paywallHeadingsCollection(limit: 30) {
        items {
          heading
          description {
            json
          }
          paywallQuery
        }
      }
      action
      planCardsCollection(limit: 10) {
        items {
          ...PlanCard
        }
      }
      planComparisonTable {
        ...PlanComparisonTable
      }
      linkedFrom {
        pageCollection(limit: 1) {
          items {
            sys {
              id
            }
            slug
          }
        }
      }
      planCardsDisclaimer {
        sys {
          id
        }
        contentfulName
        textAlignment
        smallFont
        bodyRichText {
          json
        }
      }
    }
  }
`,(0,a.J)`
  query PlansPageComponents($id: String!, $locale: String, $preview: Boolean) {
    pagePlans(id: $id, locale: $locale, preview: $preview) {
      componentsCollection {
        items {
          ... on Entry {
            sys {
              id
            }
          }
        }
      }
    }
  }
`,(0,a.J)`
  query PlansPageSlugs($locale: String!) {
    pagePlansCollection {
      items {
        action
        linkedFrom {
          pageCollection {
            items {
              slug(locale: $locale)
            }
          }
        }
      }
    }
  }
`;var tL=n(63960);let tR=(0,a.J)`
  ${w.Z}
  fragment PagePressRelease on PagePressRelease {
    description {
      json
      links {
        entries {
          block {
            ...Media
          }
          inline {
            ...Media
          }
        }
      }
    }
    title
    type
    date
    aboutUs {
      json
    }
    contactUs {
      json
    }
  }
`;(0,a.J)`
  ${tR}
  query PagePressRelease($id: String!, $locale: String!, $preview: Boolean) {
    pagePressRelease(id: $id, locale: $locale, preview: $preview) {
      ...PagePressRelease
    }
  }
`;let tM=ev.Ay.div.withConfig({componentId:"sc-c6d4658b-0"})(["border-top:1px solid ",";border-bottom:1px solid ",";margin-top:",";margin-bottom:",";padding-top:",";padding-bottom:",";"],eR.Tj.nocturn50,eR.Tj.nocturn50,eR.YK.spacing4,eR.YK.spacing8,eR.YK.spacing2,eR.YK.spacing1),tK=ev.Ay.div.withConfig({componentId:"sc-c6d4658b-1"})(["font-size:1.25rem;"]),tN=(0,ev.Ay)(eI.H5).attrs({forwardedAs:"h1"}).withConfig({componentId:"sc-c6d4658b-2"})([""]);var tD=n(8141),tJ=n(36224);let tO=null;async function tW(){let{preview:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||"/preview"===window.location.pathname?(0,tJ.n)().then(e=>(0,tD.U)({space:"ta4ffdi8h2om",accessToken:"WX74dtSUUTmjnBrgw3tgp40nxHjD0Z40LGhRVJGSf4c",environment:e,host:"preview.contentful.com"})):(null==tO&&(tO=(0,tJ.n)().then(e=>(0,tD.U)({space:"ta4ffdi8h2om",accessToken:"gEjXEbA3F-TJ-8rO_NWmrnYIVWhy0YaE9F65gKa82-c",environment:e}))),tO)}async function t_(e,t){let{locale:n,preview:i}=t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=await tW({preview:i}),r=`fields.${n.replace("-","_")}`,{items:s}=await a.getEntries({content_type:"page",select:["sys.id"],[r]:!0,"fields.page.sys.contentType.sys.id":e,...o}),l=s.map(e=>e.sys.id),{items:d}=await a.withoutUnresolvableLinks.getEntries({content_type:"page",locale:n,include:o.include??2,"sys.id[in]":l,order:o.order,limit:o.limit??100});return d}async function tq(e){let{locale:t,preview:n}=e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,a=await t_("pageResource",{locale:t,preview:n},{limit:o,skip:i,order:"-fields.date",include:4,"fields.page.fields.hideOnLanding[ne]":!0});return a.length?[...a,...await tq({locale:t,preview:n},i+o)]:[]}let tU=async(e,t,n)=>{let{locale:i,preview:o}=e;return{resources:(await tq({locale:i,preview:o},t,n)).filter(e=>e.fields.page?.fields.resource?.fields).map(e=>{let t=e.fields.page.fields.resource.fields;"Template: Case Study \uD83D\uDCDA"===e.fields.page.fields.template&&(t=function(e){let t=e.indexPageTitle??e.heroTitle,n=e.indexPageImage??e.heroImage,i=e.indexPageDescription??e.heroIntroCopy;return{...e,title:t,name:t,description:"",details:i,category:e.category||"Case Studies",industry:e.industry,image:{fields:{altText:n?.fields?.content?.fields?.altText,image:{fields:{file:{url:n?.fields?.content?.fields?.image?.fields?.file?.url}}}}}}}(e.fields.page.fields.resource.fields));let n=t.image?.fields?.image?.fields?.file?.url,{height:i=1,width:o=1}=t.image?.fields?.image?.fields?.file?.details?.image||{};return{slug:e.fields.slug,title:"title"in t?t.title:"",description:"description"in t?t.description:"",details:"details"in t?t.details:"",category:t.category||"",industry:t.industry||"",..."image"in t&&{image:{src:n||"",alt:t.image.fields?.altTextV2||"",originalHeight:i,originalWidth:o,originalAspectRatio:o/i}}}})}},tz=(0,a.J)`
  ${g.Y}
  ${s.J}
  ${k}
  ${H}
  ${w.Z}
  ${s.J}
  fragment CaseStudyTemplateItem on CaseStudyTemplate {
    sys {
      id
    }

    indexPageTitle
    indexPageImage {
      ...Media
    }

    heroLogo {
      title
      description
      url
    }
    heroTitle
    heroIntroCopy {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }
    heroCtasCollection(limit: 2) {
      items {
        ...ComponentButton
      }
    }
    heroImage {
      ...Media
    }

    spotlightMediaTitle
    spotlightMedia {
      ...Media
    }

    statsTitle
    statsCardsCollection(limit: 3) {
      items {
        ...ComponentStatCard
      }
    }
    statsCtasCollection(limit: 2) {
      items {
        ...ComponentButton
      }
    }

    intro1Title
    intro1Body {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }
    intro2Title
    intro2Body {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }

    introMedia {
      ...Media
    }

    stickySectionHeading
    productsUsed

    paragraph1Title
    paragraph1Body {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }
    paragraph2Title
    paragraph2Body {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }
    paragraph3Title
    paragraph3Body {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }

    stickyMediaTitle
    stickyMediaBody {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }
    stickyMediaImage {
      ...Media
    }
    stickyMediaCtasCollection(limit: 2) {
      items {
        ...ComponentButton
      }
    }

    whatsNextTitle
    whatsNextBody {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }

    testimonial {
      ...CompoundQuote
    }

    paragraph4Title
    paragraph4Body {
      json
      links {
        entries {
          inline {
            ...Media
          }
          block {
            ...Media
          }
        }
      }
    }

    relatedCaseStudiesTitle
    relatedCaseStudiesCollection {
      items {
        slug
        page {
          ... on PageResource {
            resource {
              ... on CaseStudyTemplate {
                name
                indexPageImage {
                  ...Media
                }
                indexPageTitle
                industry
              }
            }
          }
        }
      }
    }

    category
    industry
  }
`,tG=(0,a.J)`
  ${L}
  ${j.a}

  ${ep}
  fragment Resource on Resource {
    title
    description
    bodyTitle
    details {
      json
      links {
        entries {
          block {
            ...ComponentChecklist
          }
        }
      }
    }
    image {
      ...ImageAsset
    }
    heroImage {
      ...ImageAsset
    }
    category
    industry
    marketo: marketoForm {
      ...MarketoForm
    }
    marketoFormHeader
    sys {
      id
    }
    learningsList

    footerContentBlock {
      ...SceneContentBlock
    }
  }
`,tV=(0,a.J)`
  ${tG}
  ${tz}

  fragment PageResource on PageResource {
    resource {
      ...Resource
      ...CaseStudyTemplateItem
    }
    template
    componentsCollection(limit: 20) {
      items {
        ... on Entry {
          sys {
            id
          }
        }
      }
    }
  }
`;(0,a.J)`
  ${tV}
  query PageResource($id: String!, $locale: String!, $preview: Boolean) {
    pageResource(id: $id, locale: $locale, preview: $preview) {
      ...PageResource
    }
  }
`;var tZ=n(60218),tQ=n(16396),tX=n(24109),t0=n(25618),t1=n(34720),t2=n(87940),t3=n(12742),t4=n(60343);let t8=(0,ev.Ay)(eP.w).withConfig({componentId:"sc-dd844c22-0"})(["text-align:center;"]),t5=ev.Ay.div.withConfig({componentId:"sc-dd844c22-1"})([""," width:100%;border:2px solid ",";padding:"," "," ",";"],eM.HT.lg`
  min-height: 180px;
  max-width: 500px;
  `,eR.Tj.nocturn,eR.YK.spacing8,eR.YK.spacing12,eR.YK.spacing2),t7=(0,ev.Ay)(eI.H4).attrs({forwardedAs:"h3"}).withConfig({componentId:"sc-dd844c22-2"})(["",""],eM.HT.lg`
  min-height: 150px;
  `),t6=ev.Ay.div.withConfig({componentId:"sc-dd844c22-3"})(["margin:",";"," display:flex;justify-content:center;align-items:center;"],eR.YK.spacing6,eM.HT.lg`
    height: 180px;
  `),t9=(0,ev.Ay)(t3.$).withConfig({componentId:"sc-dd844c22-4"})(["object-fit:contain;max-height:180px;max-width:260px;padding-bottom:",";"],eR.YK.spacing4),ne=(0,ev.Ay)(eK.$n).withConfig({componentId:"sc-dd844c22-5"})(["width:100%;padding-bottom:",";"],eR.YK.spacing4),nt=e=>{let{relatedCaseStudiesTitle:t,relatedCaseStudiesCollection:n,pageContext:o}=e,{t:a}=(0,ew.Bd)(),r=(0,t4.Ym)();return(0,i.jsxs)(t8,{padding:"default",children:[(0,i.jsx)(eI.H2,{children:t}),(0,i.jsx)(ek.b,{numCols:3,alignment:"left",children:n.items.map((e,t)=>{if(e?.page?.__typename==="PageResource"&&e.page.resource?.__typename==="CaseStudyTemplate"&&e.page.resource.indexPageImage&&e.page.resource.indexPageTitle){let n=e.page.resource,o=(0,t1.s)(n.indexPageImage);return(0,i.jsxs)(t5,{children:[(0,i.jsx)(t6,{children:o&&(0,i.jsx)(t9,{...o})}),n.indexPageTitle&&(0,i.jsx)(t7,{alignment:"left",children:n.indexPageTitle}),(0,i.jsx)(ne,{buttonType:eK.EY.PRIMARY,href:(0,V.pO)(r,e.slug),children:a("Read the full story")}),n.industry&&(0,i.jsxs)(ns,{children:[(0,i.jsx)(eS.In,{icon:eS.Be.paperclip,size:eS.y3.xs,fill:"transparent"}),(0,i.jsx)("div",{children:n.industry})]})]},t)}})}),(0,i.jsx)(eK.$n,{buttonType:eK.EY.TEXT,href:o.singlePageUrls[tm.RESOURCES],children:a("View all case studies")})]})},nn={Enterprise:"/plans/enterprise","Hootsuite Enterprise":"/plans/enterprise",Team:"/plans/team","Hootsuite Team":"/plans/team",Professional:"/plans/professional","Hootsuite Professional":"/plans/professional",Impact:"/products/impact",Insights:"/products/insights","Social Listening":"/platform/listening",Amplify:"/products/amplify","Hootsuite Amplify":"/platform/employee-advocacy","Hootsuite Advertising":"/platform/advertising","Hootsuite Analytics":"/platform/analytics","Talkwalker by Hootsuite":"https://www.hootsuite.com/talkwalker",TINT:"https://apps.hootsuite.com/apps/tint",Brandwatch:"/pages/brandwatch",Proofpoint:"https://help.hootsuite.com/hc/en-us/articles/1260804249450-Add-publishing-security-with-Proofpoint",Adobe:"https://apps.hootsuite.com/categories/adobe",Infomedia:"https://infomedia.org/hootsuite/",AWS:"/partners/aws","Inbox Management":"/platform/social-media-inbox","Advanced Analytics":"/platform/analytics",UpContent:"https://apps.hootsuite.com/apps/upcontent",Brolly:"https://apps.hootsuite.com/apps/brolly"};var ni=n(37890),no=n(78852);let na=(0,ev.Ay)(eP.w).withConfig({componentId:"sc-ce2aaffe-0"})(["text-align:center;"]),nr=ev.Ay.div.withConfig({componentId:"sc-ce2aaffe-1"})(["",""],e=>{let{alignment:t}=e;return`
    ${t===tX.C.CENTER&&"justify-content: center;"}
    ${t===tX.C.RIGHT&&"justify-content: right;"}
    ${t===tX.C.LEFT&&"text-align: left;"}
  `}),ns=ev.Ay.div.withConfig({componentId:"sc-ce2aaffe-2"})(["font-size:",";font-weight:",";display:flex;align-items:center;padding-bottom:",";& div{top:1px;padding-left:",";}"],eR.Il.fontSize.normal,eR.Il.fontWeight.bold,eR.YK.spacing6,eR.YK.spacing1),nl=(0,ev.Ay)(eI.H4).attrs({forwardedAs:"h3"}).withConfig({componentId:"sc-ce2aaffe-3"})([""]),nd=(0,ev.Ay)(eH.N_).withConfig({componentId:"sc-ce2aaffe-4"})(["border:solid 1px;border-radius:",";padding:",";margin:"," 0;text-decoration:none;display:flex;align-items:center;",""],eR.YK.spacing2,eR.YK.spacing2,eR.YK.spacing2,eM.to.lg`
    margin: ${eR.YK.spacing2} 0;
  `),nc=ev.Ay.div.withConfig({componentId:"sc-ce2aaffe-5"})(["margin-left:",";vertical-align:middle;"],eR.YK.spacing4),ng=ev.Ay.div.withConfig({componentId:"sc-ce2aaffe-6"})(["display:inline;top:1px;",""],eM.to.md`
    display:none;
  `),nm=(0,ev.Ay)(e$.dd).withConfig({componentId:"sc-ce2aaffe-7"})(["",""],eM.to.lg`
    margin-bottom:${eR.YK.spacing6};
`),np=(0,ev.Ay)(eS.In).withConfig({componentId:"sc-ce2aaffe-8"})(["margin-right:auto;margin-left:",";vertical-align:middle;"],eR.YK.spacing3),nu=ev.Ay.div.withConfig({componentId:"sc-ce2aaffe-9"})(["margin-left:auto;"]),nh=e=>{let{title:t,body:n,title2:o,body2:a,media:r}=e;return r?(0,i.jsxs)(tZ.f,{contentAlignment:tQ.Yv.start,gap:!0,padding:"default",children:[(0,i.jsxs)(tZ.V,{order:2,children:[(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H2,{children:t}),textBlockBody:(0,i.jsx)(eQ.s,{content:n})}),o&&(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H3,{children:o}),textBlockBody:(0,i.jsx)(eQ.s,{content:a})})]}),(0,i.jsx)(tZ.V,{order:1,children:(0,i.jsx)(t1.$,{...r})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H2,{children:t}),textBlockBody:(0,i.jsx)(eQ.s,{content:n})}),o&&(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H2,{children:o}),textBlockBody:(0,i.jsx)(eQ.s,{content:a})})]})},nf=e=>{let{title:t,body:n,image:o,ctas:a}=e,{t:r}=(0,ew.Bd)(),s=r("Put social media to work in every corner of your business"),l=r("Trusted by 22+ million users in 175+ countries for managing social media."),d=(0,i.jsx)(eK.$n,{href:"/request-demo",children:r("Request a demo")},0);return(0,i.jsx)(nm,{heading:t??s,body:n?(0,i.jsx)(eQ.s,{content:n}):(0,i.jsx)("p",{children:l}),media:o?(0,t1.s)(o):{type:"image",data:{alt:"",src:"https://images.ctfassets.net/ta4ffdi8h2om/0q9PaYTVPQxJKsq0TSWBD/93883fa13ea7466aaee18c9119104f61/image_10.png?h=250",height:250,width:315}},ctaComponents:a&&a.length>0?(0,eZ.m)(a):[d],backgroundColor:"tea",roundImage:!1,contentAlignment:"left"})};function nx(e){let{pageContext:t}=e,{heroLogo:n,heroTitle:a,heroIntroCopy:r,heroCtasCollection:s,heroImage:l,spotlightMediaTitle:d,spotlightMedia:c,statsTitle:g,statsCtasCollection:m,statsCardsCollection:p,intro1Title:u,intro1Body:h,intro2Title:f,intro2Body:x,introMedia:y,stickySectionHeading:b,productsUsed:C,paragraph1Title:j,paragraph1Body:w,paragraph2Title:v,paragraph2Body:k,paragraph3Title:T,paragraph3Body:$,stickyMediaImage:I,stickyMediaTitle:A,stickyMediaBody:S,stickyMediaCtasCollection:B,whatsNextTitle:P,whatsNextBody:E,testimonial:Y,paragraph4Title:H,paragraph4Body:F,relatedCaseStudiesTitle:L,relatedCaseStudiesCollection:R,industry:M}=t,{t:K}=(0,ew.Bd)(),{locale:N}=t,D=(0,t2.Om)(),J=C?.map(e=>{let t=V.pO(N,nn[e]);return i.jsxs(nd,{to:t,"aria-label":K("View details of the {{product}} product",{product:e}),children:[i.jsx(eS.In,{icon:eS.Be.owlyFace,size:eS.y3.lg,decorative:!0}),i.jsx(nc,{children:e}),i.jsxs(nu,{children:[i.jsx(ng,{children:K("View Details")}),i.jsx(np,{icon:eS.Be.angleRight})]})]},e)});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eA.lq,{backgroundColor:"tea",headingText:(0,i.jsxs)("div",{children:[M&&(0,i.jsxs)(ns,{children:[(0,i.jsx)(eS.In,{icon:eS.Be.paperclip,size:eS.y3.xs,fill:"transparent"}),(0,i.jsx)("div",{children:D.find(e=>e.value===M)?.label})]}),a]}),logoUrl:n?.url,logoAlt:n?.title,bodyRichText:(0,i.jsx)(eQ.s,{content:r}),media:(0,t1.s)(l),ctaComponents:(0,eZ.m)(s?.items)}),c&&(0,i.jsxs)(na,{padding:"top",children:[d&&(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H2,{children:d})}),(0,i.jsx)(t1.$,{...c})]}),(0,i.jsxs)(eP.w,{padding:"default",children:[g&&(0,i.jsx)(eI.H2,{alignment:"center",children:g}),p?(0,i.jsx)(ek.b,{padding:"none",backgroundColor:"white",footer:(0,eZ.m)(m?.items),numCols:p.items.length,children:p.items.map(e=>(0,o.createElement)(ni.h,{...e,key:e?.sys.id,stat:e?.stat??"",body:e?.body??""}))}):null]}),(0,i.jsx)(nh,{title:u,body:h,title2:f,body2:x,media:y}),(0,i.jsxs)(tZ.f,{contentAlignment:tQ.Yv.start,gap:!0,padding:"default",children:[(0,i.jsxs)(tZ.V,{order:2,children:[(0,i.jsx)(nr,{alignment:tX.C.LEFT,children:(0,i.jsx)(eI.H2,{children:b||K("Let's do this")})}),C&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(nr,{alignment:tX.C.LEFT,children:(0,i.jsx)(nl,{children:K("Products used in this study")})}),J]}),(0,i.jsx)("br",{}),j&&(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H4,{children:j}),textBlockBody:(0,i.jsx)(eQ.s,{content:w})}),v&&(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H4,{children:v}),textBlockBody:(0,i.jsx)(eQ.s,{content:k})}),T&&(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H4,{children:T}),textBlockBody:(0,i.jsx)(eQ.s,{content:$})}),H&&(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H4,{children:H}),textBlockBody:(0,i.jsx)(eQ.s,{content:F})}),(0,i.jsx)(t0.V,{padding:"none",title:(0,i.jsx)(eI.H2,{children:P??K("What's next")}),textBlockBody:(0,i.jsx)(eQ.s,{content:E})})]}),(0,i.jsx)(tZ.V,{sticky:!0,order:1,children:(0,i.jsx)(nf,{title:A,body:S,image:I,ctas:B?.items})})]}),Y&&(0,i.jsx)(no.P,{...Y}),(R?.items.length??0)>0&&L&&(0,i.jsx)(nt,{relatedCaseStudiesTitle:L,relatedCaseStudiesCollection:R,pageContext:t})]})}let ny=tg()(async()=>{let{Carousel:e}=await n.e(706).then(n.bind(n,4706));return e},{loadableGenerated:{webpack:()=>[4706]}});var nb=n(64051),nC=n(84492),nj=n(69852),nw=n(60878);let nv="870px";ev.Ay.p.withConfig({componentId:"sc-9b24b66b-0"})(["font-size:1.25rem;font-weight:",";"],eR.Il.fontWeight.normal);let nk=ev.Ay.div.withConfig({componentId:"sc-9b24b66b-1"})(["padding:",";"],eR.YK.spacing4);(0,ev.Ay)(eI.H3).withConfig({componentId:"sc-9b24b66b-2"})([""]),ev.Ay.div.withConfig({componentId:"sc-9b24b66b-3"})(["margin:"," 0;"],eR.YK.spacing4);let nT=ev.Ay.div.withConfig({componentId:"sc-9b24b66b-4"})(["background-color:",";padding-top:",";color:",";h2{color:",";}","{color:",";position:absolute;top:-3rem;font-size:0.8125rem;","}&& button.mktoButton[type='submit']{color:",";background-color:",";&:hover{background-color:",";}}div.mktoFormRow div.mktoFieldDescriptor.mktoFormCol,div.mktoFormRow div.mktoFormCol{padding-left:0;}div.mktoFieldWrap,div.mktoFieldWrap.mktoRequiredField{flex-direction:column;align-items:start;}div.mktoButtonRow span.mktoButtonWrap{justify-content:start;button{margin-left:0;width:200px;}}div.mktoError::before{transform:scale(1);}div.mktoError{div.mktoErrorMsg{top:5px;}}div.mktoCheckboxList{label{color:",";}}div.mktoHtmlText{color:",";a{color:",";&:hover{color:",";}}}div label.mktoLabel{position:relative;color:"," !important;left:0;text-align:left;width:fit-content !important;}"," "," ",""],eR.Tj.lake,eR.YK.spacing14,eR.Tj.white,eR.Tj.white,nj.LT,eR.Tj.spring,eM.to.lg`
      position: relative;
      top: 0;
      text-align: left
    `,eR.Tj.nocturn,eR.Tj.spring,eR.Tj.mint,eR.Tj.white,eR.Tj.white,eR.Tj.spring,eR.Tj.tea,eR.Tj.white,eM.HT.lg`
    min-height: ${(0,eM.D0)("650px")};
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: ${eR.YK.spacing4};
    margin-bottom: ${eR.YK.spacing14};
    margin-right: 50px;
    position: relative;
    z-index: 1;
    max-width: ${nv};
  `,eM.to.lg`
    padding-top: ${eR.YK.spacing8};
  `,eM.to.sm`
    padding-left: 1rem;
    padding-right: 1rem;
  `);(0,ev.Ay)(nw.P).withConfig({componentId:"sc-9b24b66b-5"})(["background:",";color:",";div,p{font-size:",";font-weight:",";margin-left:0;::before,::after{display:none;}line-height:26px;}footer{div{margin:0;}cite{font-size:",";color:",";margin:0;}span{font-size:",";color:",";font-weight:",";margin:0;}}"],eR.Tj.white,eR.Tj.nocturn,(0,eM.D0)("16px"),eR.Il.fontWeight.bold,(0,eM.D0)("16px"),eR.Tj.nocturn,(0,eM.D0)("16px"),eR.Tj.spruce,eR.Il.fontWeight.normal),ev.Ay.div.withConfig({componentId:"sc-9b24b66b-6"})(["background-color:",";",""],eR.Tj.white,eM.HT.lg`
    display: flex;
    flex-direction: row;
    align-items: start;
  `),ev.Ay.div.withConfig({componentId:"sc-9b24b66b-7"})(["flex:0 0 50%;",""],e=>{let{rightAlign:t}=e;return t&&(0,ev.AH)(["",""],eM.HT.lg`
      display: flex;
      justify-content: flex-end;
    `)}),ev.Ay.div.withConfig({componentId:"sc-9b24b66b-8"})(["padding:",";max-width:",";height:100%;"," ",""],eR.YK.spacing12,nv,eM.HT.xl` padding: ${eR.YK.spacing20}; `,eM.HT.xxl` padding: ${eR.YK.spacing24}; `);var n$=n(68708);let nI=ev.Ay.div.withConfig({componentId:"sc-f58f2aa1-0"})(["font-size:1rem;font-weight:",";margin:"," 0;text-transform:uppercase;letter-spacing:0.1rem;& a{text-decoration:none;color:",";:hover{text-decoration:underline;}}"],eR.Il.fontWeight.bold,eR.YK.spacing4,eR.Tj.spruce),nA=ev.Ay.span.withConfig({componentId:"sc-f58f2aa1-1"})(["padding:0 ",";"],eR.YK.spacing2),nS=ev.Ay.div.withConfig({componentId:"sc-f58f2aa1-2"})(["a{text-decoration:none;:hover{text-decoration:underline;}}"]),nB=ev.Ay.div.withConfig({componentId:"sc-f58f2aa1-3"})(["padding-bottom:",";"],eR.YK.spacing2),nP=(0,ev.Ay)(eI.H2).withConfig({componentId:"sc-f58f2aa1-4"})(["margin-bottom:",";"],eR.YK.spacing6),nE=ev.Ay.div.withConfig({componentId:"sc-f58f2aa1-5"})(["margin-bottom:",";"],eR.YK.spacing10),nY=ev.Ay.div.withConfig({componentId:"sc-f58f2aa1-6"})([""]),nH=ev.Ay.div.withConfig({componentId:"sc-f58f2aa1-7"})(["margin-top:",";margin-bottom:",";padding-top:",";"],eR.YK.spacing8,eR.YK.spacing8,eR.YK.spacing8),nF=ev.Ay.div.withConfig({componentId:"sc-f58f2aa1-8"})(["padding:"," 0;text-align:center;"],eR.YK.spacing8),nL=ev.Ay.div.withConfig({componentId:"sc-f58f2aa1-9"})(["margin-bottom:",";"],eR.YK.spacing10),nR=(0,ev.Ay)(eI.H3).attrs(()=>({as:"h2"})).withConfig({componentId:"sc-f58f2aa1-10"})([""]),nM=e=>{let{pageContext:t}=e,{t:n}=(0,ew.Bd)(),o=t.singlePageUrls[tm.RESOURCES]?`${t.singlePageUrls[tm.RESOURCES]}`:"",a=o?(0,i.jsxs)(nS,{children:[(0,i.jsx)(eH.N_,{to:o,children:n("Resource Library")}),(0,i.jsx)(nA,{children:(0,i.jsx)(eS.In,{icon:eS.Be.angleRight,fill:eR.Tj.nocturn50,size:eS.y3.xxxs})}),t.item.category?(0,i.jsx)(eH.N_,{to:`${o}?category=${encodeURIComponent(t.item.category)}`,children:t.item.category}):(0,i.jsx)(eH.N_,{to:o,children:n("All Categories")})]}):null,r=(0,i.jsxs)(nY,{children:[(0,i.jsx)(nP,{children:t.item.bodyTitle}),(0,i.jsx)(nE,{children:(0,i.jsx)(eQ.s,{content:t.item.details})}),t.item.learningsList&&(0,i.jsx)(nb.o,{items:t.item.learningsList})]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(tQ.fI,{contentAlignment:tQ.Yv.start,gap:!0,padding:"default",children:[(0,i.jsxs)(tZ.V,{children:[t.item.heroImage&&(0,i.jsx)(t3.$,{type:"image",data:{...(0,nC.u)(t.item.heroImage),width:580,height:340},mediaAlignment:n$.nf.LEFT}),(0,i.jsx)(nI,{children:a}),(0,i.jsx)(eI.H1,{children:t.item.title}),(0,i.jsx)(nL,{children:t.item.description}),(0,i.jsx)(nB,{children:r}),(0,i.jsx)(nH,{children:(0,i.jsx)(eE.q,{header:n("Share this resource"),title:t.item.name,link:`${eX.CY}/${t.slug}`,socialNetworks:["LinkedIn","Facebook","Twitter"]})})]}),t.item.marketo&&(0,i.jsx)(tZ.V,{children:(0,i.jsx)(nT,{children:(0,i.jsxs)(nk,{children:[(0,i.jsx)(nR,{children:t.item.marketoFormHeader}),(0,i.jsx)(eL.E,{...t.item.marketo})]})})})]}),(0,i.jsx)(nF,{children:(0,i.jsx)(ny,{heading:n("Related Resources"),slidesToShow:3,slides:t.relatedResources.map((e,n)=>(0,i.jsx)(ta.Zs,{breadcrumb:"Not Categorized"!==e.category?e.category:"",heading:e.title,bodyText:e.description,media:{type:"image",data:{src:e.image?.src||"/images/resources/resource-fallback.png",alt:e.image?.alt||"owly asset not found",height:200,width:200}},link:(0,V.pO)(t.locale,e.slug)},n))})}),t.item.footerContentBlock&&(0,i.jsx)(tT.$,{backgroundColor:t.item.footerContentBlock.backgroundColor,content:(0,ef.c)(t.item.footerContentBlock.contentCollection?.items),media:(0,t1.s)(t.item.footerContentBlock.media)})]})};var nK=function(e){return e.DEFAULT="Default",e.CUSTOM="Custom",e.TEMPLATE_CASE_STUDY="Template: Case Study \uD83D\uDCDA",e}({});let nN=(0,a.J)`
  ${p.r}
  fragment WebinarCardFragment on Webinar {
    sys {
      id
    }
    name
    date
    categories
    industries
    isLiveWebinar
    landingPageDescription
    newCategories
    image {
      ...ImageAsset
    }
    thumbnailImage {
      ...ImageAsset
    }
    authorsCollection(limit: 1) {
      items {
        firstName
        lastName
        jobTitle
        company
        image {
          ...ImageAsset
        }
      }
    }
  }
`,nD=(0,a.J)`
  query WebinarIds(
    $preview: Boolean
    $categories: [String]
    $industries: [String]
    $dateGreaterThan: DateTime
  ) {
    webinarCollection(
      where: {
        categories_contains_all: $categories
        industries_contains_all: $industries
        date_gte: $dateGreaterThan
        hideOnLanding_not: true
      }
      preview: $preview
    ) {
      items {
        sys {
          id
        }
      }
    }
  }
`,nJ=(0,a.J)`
  ${nN}
  query WebinarByIds(
    $locale: String!
    $ids: [String!]!
    $order: [WebinarOrder]
    $preview: Boolean
    $limit: Int
  ) {
    webinarCollection(
      locale: $locale
      where: { sys: { id_in: $ids }, hideOnLanding_not: true }
      order: $order
      preview: $preview
      limit: $limit
    ) {
      items {
        ...WebinarCardFragment
      }
    }
  }
`;async function nO(e){let{locale:t,preview:n}=e;return(await t_("pageWebinarCategory",{locale:t,preview:n})).map(e=>({category:e.fields.page?.fields.category,slug:e.fields.slug}))}async function nW(e,t){let{locale:n,preview:i}=t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=await t_("pageWebinar",{locale:n,preview:i},{limit:o.limit,"fields.page.fields.webinar.sys.id[in]":e.join(","),select:"fields.page,fields.slug"}),s=r.reduce((e,t)=>(e[t.fields.page.fields.webinar.sys.id]=t.fields.slug,e),{}),{data:l}=await (0,a.P)({query:nJ,variables:{preview:i,locale:n,ids:r.map(e=>e.fields.page.fields.webinar.sys.id),order:o.order,limit:o.limit}});return l?.webinarCollection?.items.map(e=>({...e,slug:V.pO(n,s[e?.sys.id])}))}async function n_(e,t,n){let{locale:i,preview:o}=e,{data:r}=await (0,a.P)({query:nD,variables:{preview:o,dateGreaterThan:new Date,categories:t}});return nW(r?.webinarCollection?.items.map(e=>e?.sys.id)||[],{locale:i,preview:o},{order:"date_ASC",limit:n})}async function nq(e,t,n){let{locale:i,preview:o}=t,{data:r}=await (0,a.P)({query:nD,variables:{preview:o,categories:e}});return nW(r?.webinarCollection?.items.map(e=>e?.sys.id)||[],{locale:i,preview:o},{order:"sys_firstPublishedAt_DESC",limit:n})}async function nU(e){let{locale:t,preview:n}=e,i=await nO({locale:t,preview:n});return await Promise.all(i.map(async e=>{let{category:i,slug:o}=e;return{slug:o,category:i,webinars:await nq([i],{locale:t,preview:n},9)}}))}async function nz(e){let{locale:t,preview:n}=e,i=await tW({preview:n}),o=await i.getEntries({content_type:"pageSingle","fields.type":"Webinars",select:["sys.id"]}),a=await i.getEntry(o.items[0].sys.id);if(!a.fields.featured)return[];let r=a.fields.featured.map(e=>e.sys.id),s=await nW(r,{locale:t,preview:n},{limit:4}),l=s?.reduce((e,t)=>({...e,[t.sys.id]:t}),{})??{};return r.map(e=>l[e]).filter(e=>void 0!==e)}async function nG(e){let{locale:t,preview:n}=e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,a=await t_("pageWebinar",{locale:t,preview:n},{limit:o,skip:i,order:"-fields.date,-sys.createdAt",include:4});return a.length?[...a,...await nG({locale:t,preview:n},i+o)]:[]}async function nV(e){let{locale:t,preview:n}=e;return nW((await nG({locale:t,preview:n})).map(e=>e.fields.page.fields.webinar.sys.id),{locale:t,preview:n},{limit:500,order:"sys_firstPublishedAt_DESC"})}let nZ=async(e,t)=>{let{locale:n,preview:i}=t;return{webinars:await nU({locale:n,preview:i}),upcomingWebinars:await n_({locale:n,preview:i}),featuredWebinars:await nz({locale:n,preview:i}),allWebinars:await nV({locale:n,preview:i})}};var nQ=n(56113);let nX=async(e,t)=>{let{locale:n,preview:i}=t,{changelogs:o,total:a}=await (0,nQ.u)({locale:n,preview:i},0);return{changelogs:o,totalChangelogs:a}};var n0=n(26391),n1=n(11493);let n2=async(e,t,n)=>{let{locale:i,preview:o}=e,a=await tW({preview:o}),r=`fields.${i.replace("-","_")}`;return{events:(await a.withoutUnresolvableLinks.getEntries({...void 0!==n&&{limit:n1.md,skip:n*n1.md},include:2,content_type:"page",locale:i,[r]:!0,"fields.page.sys.contentType.sys.id":"pageEvent","fields.page.fields.event.fields.category":t?.category,"fields.page.fields.event.fields.industry":t?.industry})).items.map(e=>{let t=e.fields.page;return{slug:e.fields.slug||null,title:t?.fields.event?.fields.title||null,subtitle:t?.fields.event?.fields.subtitle||null,mapsLocation:t?.fields.event?.fields.mapsLocation||null,startDate:t?.fields.event?.fields.startDate||null,endDate:t?.fields.event?.fields.endDate||null,type:t?.fields.event?.fields.type||null,location:t?.fields.event?.fields.location||null,description:t?.fields.event?.fields.description||null,externalEventLink:(0,n0.GT)(t?.fields.event?.fields.externalEventLink,t?.fields.event?.fields.queryParameters)}})}},n3=async(e,t)=>{let{locale:n,preview:i}=t,[{events:o},a]=await Promise.all([n2({locale:n,preview:i},{},0),nU({locale:n,preview:i})]);return{events:[...o,...a.flatMap(e=>{let{webinars:t}=e;return(t??[]).map(e=>({slug:e.slug,title:e.name,subtitle:"",startDate:e.date,type:"",location:"",description:"",externalEventLink:"",mapsLocation:"",isWebinar:!0}))})]}};var n4=n(44867);let n8=async(e,t)=>{let{locale:n,preview:i}=t,{chunks:o,total:a}=await (0,n4.cj)({locale:n,preview:i},{}),r=o[0]||[],s=await (0,n4.YR)({locale:n,preview:i},r),{startingYearFilter:l}=await (0,n4.gA)();return{paginatedIds:o,pressReleases:s,totalPressReleases:a,startingYearFilter:l}},n5=async(e,t)=>{let{locale:n,preview:i}=t,{resources:o}=await tU({locale:n,preview:i});return{resources:o}};(0,a.J)`
  ${c}
  query PageSingle($id: String!, $locale: String!, $preview: Boolean) {
    pageSingle(id: $id, locale: $locale, preview: $preview) {
      ...PageSingle
    }
  }
`,tm.RESOURCES,tm.CHANGELOG,tm.EVENTS,tm.PRESS_RELEASES,tm.WEBINARS;var n7=n(32045),n6=n(672),n9=n(74167),ie=n(99801),it=n(63889);let ii={[tm.RESOURCES]:it.default,[tm.CHANGELOG]:n6.default,[tm.EVENTS]:n9.default,[tm.PRESS_RELEASES]:ie.default,[tm.WEBINARS]:n7.default},io=e=>ii[e];var ia=n(18845),ir=n(58724),is=n(41761),il=n(3980),id=n(49490),ic=n(94608),ig=n(76100),im=n(64864);let ip=(0,ev.Ay)(eP.w).withConfig({componentId:"sc-f1b15d85-0"})(["text-align:center;"]),iu=ev.Ay.div.withConfig({componentId:"sc-f1b15d85-1"})(["display:grid;gap:",";grid-template-columns:1fr 1fr;","{a,button{max-width:none;}}"],eR.YK.spacing6,eK.Ef),ih=(0,ev.Ay)(eI.H3).withConfig({componentId:"sc-f1b15d85-2"})(["font-weight:",";"],eR.Il.fontWeight.normal);(0,a.J)`
  query PageWebinarCategory($id: String!, $locale: String!, $preview: Boolean) {
    pageWebinarCategory(id: $id, locale: $locale, preview: $preview) {
      category
    }
  }
`,(0,a.J)`
  query PageWebinarIndustry($id: String!, $locale: String!, $preview: Boolean) {
    pageWebinarIndustry(id: $id, locale: $locale, preview: $preview) {
      industry
    }
  }
`;var ix=n(91330),iy=n(59921);let ib=ev.Ay.div.withConfig({componentId:"sc-5887fd3b-0"})([""]),iC=(0,ev.Ay)(eH.n5).withConfig({componentId:"sc-5887fd3b-1"})(["display:flex;margin-top:",";padding:0 ",";color:",";a{text-decoration:none;color:",";}"],eR.YK.spacing4,eR.YK.spacing6,eR.Tj.nocturn,eR.Tj.nocturn),ij=(0,ev.Ay)(eI.H6).withConfig({componentId:"sc-5887fd3b-2"})(["border-bottom:1px solid ",";"],eR.Tj.nocturn),iw=ev.Ay.span.withConfig({componentId:"sc-5887fd3b-3"})(["padding:0 ",";"],eR.YK.spacing3);function iv(e){let{pageContext:t}=e,{t:n}=(0,ew.Bd)(),{currentFilter:o,singlePageUrls:a,upcomingWebinar:r,webinars:s}=t,l=a[tm.WEBINARS]?`${t.singlePageUrls[tm.WEBINARS]}`:"";return(0,i.jsxs)(ib,{children:[r&&(0,i.jsx)(iy.V,{webinarsPageSlug:l,webinar:r}),(0,i.jsx)(eP.w,{colorTheme:(0,eF.O4)("backgroundPrimary"),padding:"none",children:(0,i.jsxs)(iC,{children:[(0,i.jsx)(eH.N_,{to:l,children:(0,i.jsx)(eI.H6,{children:n("ALL WEBINARS")})}),(0,i.jsx)(iw,{children:(0,i.jsx)(eS.In,{icon:eS.Be.angleRight,fill:eR.Tj.nocturn,size:eS.y3.xxxs})}),(0,i.jsx)("span",{children:(0,i.jsx)(ij,{children:o.toUpperCase()})})]})}),(0,i.jsx)(ek.b,{backgroundColor:"backgroundPrimary",numCols:3,children:s?.map((e,t)=>i.jsx(ix.$,{webinar:e},t))})]})}let ik=(0,a.J)`
  ${p.r}
  fragment Person on Person {
    firstName
    lastName
    jobTitle
    company
    facebookLink
    twitterLink
    linkedinLink
    socialLinkText
    bio {
      json
    }
    image {
      ...ImageAsset
    }
  }
`,iT=(0,a.J)`
  ${ik}
  ${p.r}
  ${j.a}
  ${R}
  ${g.Y}
  fragment Webinar on Webinar {
    name
    description {
      json
    }
    image {
      ...ImageAsset
    }
    thumbnailImage {
      ...ImageAsset
    }
    date
    categories
    registrationLink
    industries
    isLiveWebinar
    learningsList
    newCategories
    landingPageDescription
    liveMarketoForm {
      ...MarketoForm
    }
    onDemandMarketoForm {
      ...MarketoForm
    }
    authorsCollection(limit: 10) {
      items {
        ...Person
      }
    }
    viewingType
    vidyardEmbedId
    transcript {
      ...ComponentCollapsible
    }
    cta {
      ...ComponentButton
    }
    goldcastForm {
      goldcastEventId
      goldcastSeriesId
      goldcastRegistrationFormUrl
    }
  }
`,i$=(0,a.J)`
  ${iT}
  fragment PageWebinar on PageWebinar {
    webinar {
      ...Webinar
    }
  }
`;(0,a.J)`
  ${i$}
  query PageWebinar($id: String!, $locale: String!, $preview: Boolean) {
    pageWebinar(id: $id, locale: $locale, preview: $preview) {
      ...PageWebinar
    }
  }
`;var iI=n(89099),iA=n(59916),iS=n(88734),iB=n(67574),iP=n(94975);let iE=(0,ev.Ay)(t3.$).withConfig({componentId:"sc-2359d9fc-0"})(["border-radius:50%;"]),iY=ev.Ay.div.withConfig({componentId:"sc-2359d9fc-1"})(["text-align:center;"]),iH=ev.Ay.div.withConfig({componentId:"sc-2359d9fc-2"})(["font-size:1.25rem;margin-bottom:",";",""],eR.YK.spacing2,eM.HT.lg`
    font-size: 1.75rem;
  `),iF=ev.Ay.div.withConfig({componentId:"sc-2359d9fc-3"})(["margin-bottom:",";"],eR.YK.spacing2),iL=ev.Ay.a.withConfig({componentId:"sc-2359d9fc-4"})(["display:inline-block;margin-right:",";svg{transition:",";}&:hover,&:focus{fill:",";}"],eR.YK.spacing2,eR.lY.defaultTransitionDuration,eR.Tj.jade),iR=e=>{let{type:t,link:n,name:o}=e,{t:a}=(0,ew.Bd)(),r={facebook:a("link to {{name}}'s Facebook page",{name:o}),twitter:a("link to {{name}}'s Twitter page",{name:o}),linkedin:a("link to {{name}}'s LinkedIn page",{name:o})}[t];return(0,i.jsx)(iL,{"aria-label":r,href:n,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(eS.In,{icon:t,size:eS.y3.sm})})},iM=e=>{let{author:t,name:n}=e;return(0,i.jsxs)(i.Fragment,{children:[t?.facebookLink&&(0,i.jsx)(iR,{type:eS.Be.facebook,link:t.facebookLink,name:n}),t?.twitterLink&&(0,i.jsx)(iR,{type:eS.Be.twitter,link:t.twitterLink,name:n}),t?.linkedinLink&&(0,i.jsx)(iR,{type:eS.Be.linkedin,link:t.linkedinLink,name:n})]})},iK=e=>{let{author:t}=e;return t?.jobTitle&&t.company?(0,i.jsxs)(i.Fragment,{children:[t.jobTitle,", ",(0,i.jsx)("br",{}),t.company]}):t?.jobTitle?(0,i.jsx)(i.Fragment,{children:t.jobTitle}):null},iN=e=>{let{author:t}=e,n=`${t?.firstName} ${t?.lastName}`;return(0,i.jsxs)(eN.R3,{mediaAlignment:"center",backgroundColor:"nocturn5",children:[(0,i.jsx)(iE,{type:"image",data:(0,nC.u)(t?.image),height:120,width:120}),(0,i.jsxs)(iY,{children:[(0,i.jsx)(iH,{children:(0,i.jsx)("strong",{children:n})}),(0,i.jsx)(iF,{children:(0,i.jsx)(iK,{author:t})}),(0,i.jsx)(iM,{author:t,name:n})]})]})},iD=(0,ev.Ay)(iA.Tv).withConfig({componentId:"sc-5dc39df4-0"})(["margin:0;padding:",";"," "," div{padding:0;}"],eR.YK.spacing6,eM.HT.lg`
    padding: ${eR.YK.spacing12};
  `,eM.HT.xxl`
    padding: ${eR.YK.spacing18};
  `),iJ=e=>{let{children:t,bgColor:n}=e,a=o.Children.toArray(t).length;return(0,i.jsx)(eN.e,{columns:Math.min(a,4).toString(),backgroundColor:n,children:t})},iO=e=>{let{webinar:t}=e,n=(0,t4.Ym)(),{t:a}=(0,ew.Bd)(),r=(0,o.useId)(),s=t.isLiveWebinar?"webinar-live":"webinar-on-demand",l=t.viewingType,d=t.vidyardEmbedId,c=null;return"Vidyard-Embed"===l&&d&&(c=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eK.$n,{"data-target":`#${r}`,children:a("Watch Webinar")}),(0,i.jsx)(eN.hK,{backgroundColor:"nocturn"}),(0,i.jsx)(eB.a,{heading:a("Watch Webinar"),id:r,size:iB.T.LARGE,children:(0,i.jsx)(iS.i,{code:d})})]})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eO,{locale:n,type:s,thankYouBody:c}),(0,i.jsx)(eN.hK,{backgroundColor:"nocturn"})]})},iW=e=>{let{webinar:t}=e,[n,a]=(0,o.useState)(!1),{t:r}=(0,ew.Bd)(),s=t.isLiveWebinar?t.liveMarketoForm:t.onDemandMarketoForm;return(0,i.jsx)(iD,{"data-testid":"marketo-form",children:n?(0,i.jsx)(iO,{webinar:t}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(eL.E,{...s,onSuccess:function(){try{s.onSuccess?.()}catch(e){console.error(e)}a(!0)},heading:r("Please complete the form to register")})})})},i_=e=>{let{webinar:t,locale:n}=e,{t:o}=(0,ew.Bd)(),{date:a}=(0,iP.R)(t.date,n);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(tv.d,{textAlignment:"left",textBlockBody:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eI.H2,{children:o("Details")}),t.date&&(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:a})}),(0,eC.i)(t.description?.json)]})}),(0,i.jsx)(eN.hK,{backgroundColor:"white"})]})},iq=e=>{let{webinar:t}=e;return t.learningsList?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(tv.d,{textAlignment:"left",textBlockBody:(0,i.jsx)(i.Fragment,{children:t.learningsList.length>0&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(nb.o,{items:t.learningsList})})})}),(0,i.jsx)(eN.hK,{backgroundColor:"white"})]}):null},iU=e=>{let{webinar:t}=e,n=(0,iI.useRouter)(),{t:o}=(0,ew.Bd)();return(0,i.jsx)(tv.d,{textAlignment:"left",textBlockBody:(0,i.jsx)(eE.q,{header:o("Share this webinar"),title:t.name,link:`${eX.CY}${n.asPath}`,socialNetworks:["LinkedIn","Facebook","Twitter"]})})},iz=e=>{let{webinar:t}=e,{t:n}=(0,ew.Bd)();if(!t.transcript)return null;let o={...t.transcript.component,padding:"none"};return(0,i.jsx)(tv.d,{textAlignment:"left",textBlockBody:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eI.H2,{children:n("Transcript")}),(0,i.jsx)(is.N,{...t.transcript,component:o}),(0,i.jsx)(eN.hK,{backgroundColor:"white"})]})})},iG=e=>{let{webinar:t}=e,{t:n}=(0,ew.Bd)();if(t.authorsCollection?.items.length===0)return null;let o=n((t.authorsCollection?.items.length??0)>1?"Speakers":"Speaker");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eN.hK,{backgroundColor:"nocturn5"}),(0,i.jsx)(eN.e,{backgroundColor:"nocturn5",columns:"1",children:(0,i.jsx)(tv.d,{textAlignment:"center",textBlockBody:(0,i.jsx)(eI.H2,{children:o})})}),(0,i.jsx)(iJ,{bgColor:"nocturn5",children:t.authorsCollection?.items.map((e,t)=>i.jsx(iN,{author:e},t))}),(0,i.jsx)(eN.hK,{backgroundColor:"nocturn5"})]})},iV=e=>{let{relatedWebinars:t}=e,{t:n}=(0,ew.Bd)(),o=t.slice(0,3);return 0===o.length?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eN.hK,{backgroundColor:"white"}),(0,i.jsx)(eN.e,{backgroundColor:"white",columns:"1",children:(0,i.jsx)(tv.d,{textAlignment:"center",textBlockBody:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(eI.H2,{children:n("Related resources")})})})}),(0,i.jsx)(iJ,{bgColor:"white",children:o.map((e,t)=>(0,i.jsx)(ix.$,{webinar:e},t))}),(0,i.jsx)(eN.hK,{backgroundColor:"white"})]})},iZ=ev.Ay.div.withConfig({componentId:"sc-5dc39df4-1"})(["color:",";"],eR.Tj.white),iQ=()=>{let{t:e}=(0,ew.Bd)();return(0,i.jsxs)(eN.e,{backgroundColor:"spruce",columns:"2",children:[(0,i.jsxs)(iZ,{children:[(0,i.jsx)(eN.hK,{backgroundColor:"spruce"}),(0,i.jsx)(eI.H2,{children:e("Interested in learning more with Hootsuite?")}),(0,i.jsx)(eK.$n,{href:"/request-demo","aria-label":e("link to the request a demo page"),children:e("Request a demo")})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(eN.hK,{backgroundColor:"spruce"}),(0,i.jsx)(tt(),{src:"/images/webinar-cta.webp",alt:"",height:250,width:418}),(0,i.jsx)(eN.hK,{backgroundColor:"spruce"})]})]})},iX={PageCustom:function(e){let{pageContext:{components:t}}=e;return(0,i.jsx)(i.Fragment,{children:(0,ef.c)(t)})},PageEvent:function(e){let{pageContext:t}=e,{t:n}=(0,ew.Bd)(),o=new Date(t.item.startDate),a=new Date(t.item.endDate),r={year:"numeric",month:"long",day:"numeric"},s=(0,i.jsxs)("div",{children:[(0,i.jsx)(eI.H2,{children:n("Details")}),(0,i.jsxs)(e5,{children:[t.item.startDate&&(0,i.jsxs)(e3,{children:[(0,i.jsx)(e8,{icon:eS.b7.detailsClock,size:eS.y3.sm}),o.toLocaleDateString(t.locale,r)," -"," ",o.toLocaleTimeString(t.locale,{hour:"2-digit",minute:"2-digit"})," ",t.item.endDate&&(0,i.jsxs)(i.Fragment,{children:[n("to")," ",a.toLocaleDateString(t.locale,r)," -"," ",a.toLocaleTimeString(t.locale,{hour:"2-digit",minute:"2-digit",timeZoneName:"short"})," "]})]}),t.item.mapsLocation&&(0,i.jsxs)(e4,{children:[(0,i.jsx)(e8,{icon:eS.Be.mapmarker,size:eS.y3.sm}),t.item.googleMaps?(0,i.jsx)("a",{href:t.item.googleMaps,target:"_blank",rel:"noreferrer",children:t.item.mapsLocation}):t.item.mapsLocation,t.item.location?` - ${t.item.location}`:null]})]}),(0,i.jsx)(e2,{children:(0,eC.i)(t.item.details?.json,e6)})]});return(0,i.jsxs)("div",{children:[(0,i.jsx)(eP.w,{colorTheme:(0,eF.O4)("backgroundSecondary"),children:(0,i.jsx)(eA.lq,{preheader:n("Events"),headingText:t.item.title,backgroundColor:"backgroundSecondary"})}),t.item.marketo?(0,i.jsx)(eV,{type:"event",body:s,locale:t.locale,formHeaderText:n("Please complete the form to watch"),marketo:t.item.marketo}):(0,i.jsx)(e1,{children:s}),(0,i.jsx)(ek.b,{numCols:3,backgroundColor:"backgroundPrimary",children:t.item.authorsCollection?.items.map((e,t)=>i.jsx(e$.dd,{heading:e?.firstName+" "+e?.lastName,subheader:e?.jobTitle+", "+e?.company,body:i.jsx(eQ.s,{content:e?.bio}),media:{type:"image",data:{src:e?.image?.image?.url,alt:e?.image?.altText||""}},ctas:eZ.v(e)},t))||[]}),(0,i.jsx)(e7,{children:(0,i.jsx)(eE.q,{title:t.item.title||"",link:`${eX.CY}${t.slug}`,socialNetworks:["Twitter","Facebook","LinkedIn"]})}),(0,i.jsx)(eT.F,{body:n("Interested in learning more?"),backgroundColor:"offsetQuaternary",ctas:[{label:n("Request a Demo"),dataTarget:`#${e0}`}]}),(0,i.jsx)(eB.a,{id:e0,heading:"Request a Demo",children:(0,i.jsx)(eY.w,{marketoFormIds:["15143"]})})]})},PagePlans:tL.A,PagePressRelease:function(e){let{pageContext:t}=e,{item:n}=t,{t:o}=(0,ew.Bd)();return(0,i.jsxs)("div",{children:[(0,i.jsxs)(eP.w,{colorTheme:(0,eF.O4)("white"),children:[(0,i.jsx)(tN,{children:o("PRESS RELEASES")}),(0,i.jsx)(eI.H2,{children:n.title}),(0,i.jsx)(tM,{children:(0,i.jsx)(eE.q,{header:"",title:"",link:`${eX.CY}${t.slug}`,socialNetworks:["LinkedIn","Facebook","Twitter"],size:eS.y3.sm})}),(0,i.jsx)(tK,{children:(0,i.jsx)(eQ.s,{content:n.description})}),(0,i.jsx)(tM,{children:(0,i.jsx)(eE.q,{header:"",title:"",link:`${eX.CY}${t.slug}`,socialNetworks:["LinkedIn","Facebook","Twitter"],size:eS.y3.sm})})]}),(0,i.jsx)(eP.w,{colorTheme:(0,eF.O4)("offsetPrimary"),children:n.aboutUs?(0,i.jsx)(tK,{children:(0,eC.i)(n.aboutUs.json)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eI.H3,{children:o("About Hootsuite")}),(0,i.jsx)(tK,{children:o("Hootsuite is a leading global provider")})]})}),(0,i.jsx)(eP.w,{colorTheme:(0,eF.O4)("offsetPrimary"),padding:"bottom",children:n.contactUs?(0,i.jsx)(tK,{children:(0,eC.i)(n.contactUs.json)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eI.H4,{children:o("Contact")}),(0,i.jsx)(tK,{children:o("Hootsuite Media Team")}),(0,i.jsx)(eH.N_,{to:"mailto:media@hootsuite.com",children:"media@hootsuite.com"})]})})]})},PageResource:function(e){let{pageContext:t}=e;switch(t.template){case nK.TEMPLATE_CASE_STUDY:return(0,i.jsx)(nx,{pageContext:t});case nK.CUSTOM:return(0,i.jsx)("div",{children:(0,ef.c)(t.components)});case nK.DEFAULT:default:return(0,i.jsx)(nM,{pageContext:t})}},PageSingle:function(e){let{pageSingleType:t}=e.pageContext,n=io(t);return(0,i.jsx)(n,{...e})},PageWebinar:function(e){let{pageContext:t}=e,{item:n,locale:a,relatedWebinars:r}=t,s=!!n.cta;(0,o.useEffect)(()=>{window.GOLDCAST&&n.goldcastForm&&l()});let l=()=>{let e={mode:"embed",containerSelector:"#goldcast-registration-form",theme_obj:{"--form-padding":"3.5rem",splash_font_type:"Web Font",splash_theme_font_link:"https://fonts.googleapis.com/css?family=Montserrat:700",splash_custom_font_name:"Montserrat"},backendUrl:"https://backend.goldcast.io",autoResizeIframeHeight:!0,iframeWidth:"100%",event_id:n.goldcastForm?.goldcastEventId??null,seriesId:n.goldcastForm?.goldcastSeriesId??null,isSeries:!!n.goldcastForm?.goldcastSeriesId,registrationFormUrl:n.goldcastForm?.goldcastRegistrationFormUrl??null};new window.GOLDCAST.RegistrationWidget(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eN.hK,{backgroundColor:"white"}),(0,i.jsxs)(eN.e,{backgroundColor:"white",columns:s?"1":"2",children:[(0,i.jsxs)(eN.R3,{backgroundColor:"white",mediaAlignment:"left",children:[(0,i.jsx)(iy.V,{webinar:n,slug:n.registrationLink,locale:a,cta:n.cta}),(0,i.jsx)(eN.hK,{backgroundColor:"white"}),(0,i.jsx)(i_,{webinar:n,locale:a}),(0,i.jsx)(iq,{webinar:n}),(0,i.jsx)(iU,{webinar:n}),(0,i.jsx)(eN.hK,{backgroundColor:"white"})]}),!s&&(0,i.jsx)(eN.R3,{backgroundColor:"white",mediaAlignment:"left",children:n.goldcastForm?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{id:"goldcast-registration-form"}),(0,i.jsx)(ti(),{src:"https://dnf20ypvrc856.cloudfront.net/embed.js",strategy:"lazyOnload",onLoad:()=>{n.goldcastForm&&l()}})]}):(0,i.jsx)(iW,{webinar:n})})]}),(0,i.jsx)(eN.hK,{backgroundColor:"white"}),(0,i.jsx)(iz,{webinar:n}),(0,i.jsx)(iG,{webinar:n}),(0,i.jsx)(iV,{relatedWebinars:r}),(0,i.jsx)(iQ,{})]})},PageWebinarCategory:iv,PageWebinarIndustry:iv,PageHelp:function(e){let{pageContext:t}=e,n=t.helpTopics.pageHelpCollection?.items[0]?.helpTopicsCollection,{t:a}=(0,ew.Bd)(),r=(0,tl.iF)(),[s,l]=(0,o.useState)(!1),d=![t$.T.FREE,t$.T.CORE,t$.T.PROSPECT].includes(r),c=t.locale?t.locale.split("-")[0]:"en";return(0,o.useEffect)(()=>{(0,ts.M)()&&d&&l(!0)},[d]),(0,i.jsxs)("div",{children:[d&&(0,i.jsx)(ti(),{id:"ze-snippet",src:"https://static.zdassets.com/ekr/snippet.js?key=6f12c912-96d1-4887-bc3d-c6a87641b2d1"}),(0,i.jsxs)(eP.w,{colorTheme:(0,eF.O4)("backgroundSecondary"),padding:"none",children:[(0,i.jsx)(eA.lq,{headingText:a("Hootsuite Help Center"),bodyRichText:a("Search our help articles for answers or browse the resources below"),alignment:eA.C1.CENTER,backgroundColor:"backgroundSecondary"}),(0,i.jsx)(tw,{placeholder:a("What can we help you with?"),swiftypeOn:!0,locale:c}),(0,i.jsxs)(tA,{children:[(0,i.jsx)("p",{children:a("or")}),(0,i.jsx)(eK.$n,{buttonType:eK.EY.TEXT,href:"#contact-us",children:a("contact us")})]})]}),(0,i.jsx)(tr.s,{children:(0,i.jsx)("h2",{children:a("Help articles")})}),(0,i.jsx)(eP.w,{colorTheme:(0,eF.O4)("backgroundPrimary"),padding:"none",children:(0,i.jsx)(ek.b,{numCols:3,children:n?.items.map((e,t)=>i.jsx(tY,{heading:e?.title,bodyText:e?.description,link:e?.url,linkAttributes:{"aria-label":a(`Link to ${e?.title}`)}},t))})}),(0,i.jsx)(eP.w,{id:"contact-us",padding:"none",children:(0,i.jsx)(tv.d,{textAlignment:"center",textBlockBody:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eI.H2,{children:a("Need someone to help you?")}),(0,i.jsx)("p",{children:a("Need help? Give us a shout. Be sure to include the email address associated with your Hootsuite account and a description of your issue. We also welcome new feature suggestions and crowd-pleasing guacamole recipes.")})]})},1)}),(0,i.jsx)(tT.$,{backgroundColor:"white",media:{type:"image",data:{src:"https://images.ctfassets.net/ta4ffdi8h2om/71n0K4Y72hzM87QgF2Ug9F/20381afd6f8778aae4bcebfd85253847/owly_1.svg",alt:"owly on the go",width:475,height:316}},content:[(0,i.jsx)(tk.K,{heading:a("Get in touch with customer support:"),body1:(0,i.jsxs)(tH,{children:[(0,i.jsx)("li",{children:a("Message us from your Hootsuite dashboard; or ")}),(0,i.jsx)("li",{children:a("Email your account rep for support with your Enterprise plan; or\xa0")}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:`https://help.hootsuite.com/hc/${(0,td.mapLocaleToHelpCenter)(c)}/requests/new`,children:a("If all else fails, submit a help request here.")})})]}),backgroundColor:"white"},2)]}),(0,i.jsx)(tT.$,{backgroundColor:"nocturn5",mediaAlignment:"right",media:{type:"image",data:{src:"https://images.ctfassets.net/ta4ffdi8h2om/3F3p4uzEIAbLASJDfB3ZKt/4e275f16f944d7ddf7df2f364994094e/Help_Page_Asset_4.svg",alt:"help page graphic - owly",width:590,height:455}},content:[(0,i.jsx)(tk.K,{heading:a("Operational hours"),backgroundColor:"nocturn5",body1:(0,i.jsxs)(tF,{children:[(0,i.jsxs)("li",{children:[(0,i.jsxs)("strong",{children:[" ",a("Monday to Friday 9:00 am - 5:00 pm")]}),(0,i.jsx)("br",{}),a("PST GMT-8, CST GMT-6, EST GMT-5, EET GMT+2, CET GMT+1")]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:a("Monday to Friday 9:00 am - 1:00 pm, 3:00 pm - 5:00 pm")}),(0,i.jsx)("br",{}),a("SGT GMT +8")]}),(0,i.jsxs)("li",{children:[(0,i.jsxs)("strong",{children:[" ",a("Monday to Friday 9:00 am - 4:00 pm")]}),(0,i.jsx)("br",{}),a("AEDT GMT + 11")]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:a("Monday to Friday 9:00 am - 5:00 pm ")}),(0,i.jsx)("br",{}),a("NZDT GMT +12")]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:a("Languages Supported:")})," ",(0,i.jsx)("br",{}),a("English, French (email) and Spanish (email)")]})]})},3)]}),(0,i.jsxs)(eP.w,{colorTheme:(0,eF.O4)("backgroundPrimary"),children:[(0,i.jsx)(eI.H3,{children:a("Other resources")}),(0,i.jsxs)(tE,{numCols:3,children:[(0,i.jsxs)(tS,{children:[(0,i.jsx)(tt(),{src:"/images/resources/resources-academy.png",alt:"",height:32,width:32}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:(0,i.jsx)(eH.N_,{to:eX.DO,target:"_blank",rel:"noreferrer",children:a("Hootsuite Academy")})}),a("Master Hootsuite with free online courses.")]})]}),(0,i.jsxs)(tS,{children:[(0,i.jsx)(tt(),{src:"/images/resources/resources-blog.png",alt:"",height:32,width:32}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:(0,i.jsx)(eH.N_,{to:eX.dH,target:"_blank",rel:"noreferrer","aria-label":a("Link to blog for social media tips, strategy, and advice."),children:a("Blog")})}),a("Social media tips, strategy, and advice.")]})]}),(0,i.jsxs)(tS,{children:[(0,i.jsx)(tt(),{src:"/images/resources/resources-library.png",alt:"",height:32,width:32}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:(0,i.jsx)(eH.N_,{to:t.singlePageUrls[tm.RESOURCES],children:a("Resource library")})}),a("Hundreds of free resources to help you succeed in social.")]})]}),(0,i.jsxs)(tS,{children:[(0,i.jsx)(tt(),{src:"/images/resources/resources-webinars.png",alt:"",height:32,width:32}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:(0,i.jsx)(eH.N_,{to:t.singlePageUrls[tm.WEBINARS],children:a("Webinars")})}),a("Learn from industry experts on a wide range of social topics.")]})]}),(0,i.jsxs)(tS,{children:[(0,i.jsx)(tt(),{src:"/images/resources/resources-whats-new.png",alt:"",height:32,width:32}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:(0,i.jsx)(eH.N_,{to:t.singlePageUrls[tm.CHANGELOG],children:a("What’s new")})}),a("New features, fixes, and other improvements to Hootsuite.")]})]}),(0,i.jsxs)(tS,{children:[(0,i.jsx)(tt(),{src:"/images/resources/resources-classroom.png",alt:"",height:32,width:32}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:(0,i.jsx)(eH.N_,{to:"/social-media-bootcamp",children:a("Social media bootcamp")})}),a("Learn the fundamentals of social media marketing.")]})]})]})]}),(0,i.jsx)(eP.w,{colorTheme:(0,eF.O4)("backgroundSecondary"),children:(0,i.jsxs)(tB,{children:[(0,i.jsx)(tI,{children:a("Get help on social")}),(0,i.jsxs)(tP,{children:[(0,i.jsxs)(eH.N_,{to:"https://twitter.com/Hootsuite_Help","aria-label":a("Contact us on Twitter"),children:[(0,i.jsx)(eS.In,{icon:eS.Be.twitter,size:eS.y3.md,decorative:!0}),(0,i.jsx)("div",{children:"@Hootsuite_Help"})]}),(0,i.jsxs)(eH.N_,{to:"https://facebook.com/Hootsuite","aria-label":a("Contact us on Facebook"),children:[(0,i.jsx)(eS.In,{icon:eS.Be.facebook,size:eS.y3.md,decorative:!0}),(0,i.jsx)("div",{children:"/Hootsuite"})]}),(0,i.jsxs)(eH.N_,{to:"/security","aria-label":a("Check out our security page"),children:[(0,i.jsx)(eS.In,{icon:eS.Be.lock,size:eS.y3.md,decorative:!0}),(0,i.jsx)("div",{children:a("Security")})]}),(0,i.jsxs)(eH.N_,{to:"http://status.hootsuite.com/","aria-label":a("Check system status"),children:[(0,i.jsx)(eS.In,{icon:eS.Be.signal,size:eS.y3.md,decorative:!0}),(0,i.jsx)("div",{children:a("System Status")})]})]})]})}),s&&(0,i.jsxs)(eP.w,{"data-testid":"helpPageSupport",colorTheme:(0,eF.O4)("tea"),children:[(0,i.jsx)(tI,{children:a("Still can’t find what you’re looking for?")}),(0,i.jsx)(to.e,{ctas:[{buttonType:eK.EY.OUTLINE,href:`https://help.hootsuite.com/hc/${(0,td.mapLocaleToHelpCenter)(c)}/requests`,label:a("Check existing ticket")},{buttonType:eK.EY.OUTLINE,href:`https://help.hootsuite.com/hc/${(0,td.mapLocaleToHelpCenter)(c)}/requests/new`,label:a("Submit a support ticket")}]})]})]})},TemplateVsSeries:function(e){let{pageContext:t}=e,{hero:n,cardList:o,textBlockTable:a,subheadingTextBlock:r,rowCollection:s,cta:l,testimonial:d,faq:c,otherVsSeriesHeader:g,otherVsSeriesSubHeader:m,otherVsSeriesCtas:p,ctaBanner:u}=t;return(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)(id.l,{...n}),o&&(0,i.jsx)(ir.b,{...o}),a&&(0,i.jsx)(is.N,{...a}),r&&(0,i.jsx)(ip,{padding:"none",children:(0,i.jsx)(ig.V,{...r,padding:"none"})}),s?.map((e,t)=>e&&i.jsx(ic.A,{...e},t)),l&&(0,i.jsx)(ip,{children:(0,i.jsx)(ia.$,{...l})}),d&&(0,i.jsx)(no.P,{...d}),c&&(0,i.jsx)(im.O,{...c}),g&&p&&(0,i.jsxs)(ip,{padding:"bottom",children:[(0,i.jsx)(eI.H2,{children:g}),m&&(0,i.jsx)(ih,{children:m}),(0,i.jsx)(iu,{children:p.map((e,t)=>e&&(0,i.jsx)(ia.$,{...e},t))})]}),u&&(0,i.jsx)(il.F,{...u})]})}},i0=e=>iX[e],i1=()=>!!window.mutiny,i2=()=>!window.mutiny||0===Object.keys(window.mutiny).filter(e=>"client"!==e).length;var i3=!0;function i4(e){if(!e?.pageContext)return;let{componentData:t,altComponentData:n,slug:o}=e.pageContext,a=i0(t.pageType),r=n&&i0(n.pageType);return(i1()&&("1"===window.navigator.doNotTrack||i2())&&window.mutiny?.hidePersonalizations&&window.mutiny.hidePersonalizations(),r)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{id:"default-page-content",children:(0,i.jsx)(a,{pageContext:t})},o),(0,i.jsx)("div",{id:"experiment-page-content",style:{display:"none"},children:(0,i.jsx)(r,{pageContext:n})},`alt-${o}`)]}):(0,i.jsx)(a,{pageContext:t})}},27526:(e,t,n)=>{"use strict";n.d(t,{d:()=>M});var i=n(37876),o=n(14232),a=n(89099),r=n(5104),s=n(29150),l=n.n(s),d=n(77232),c=n(22508),g=n(48450),m=n(78352),p=n(26391),u=n(25356),h=n(93126),f=n(84168),x=n(80073),y=n(51118),b=n(89120);let C=d.Ay.div.withConfig({componentId:"sc-cfe71e9f-0"})(["a,button{font-size:0.78rem;}"]),j=(0,d.Ay)(b.$n).withConfig({componentId:"sc-cfe71e9f-1"})(["height:2.5rem;width:100%;max-width:none;",""],g.HT.md`
    width: auto;
    display: inline-flex;
  `),w=(0,d.Ay)(b.$n).withConfig({componentId:"sc-cfe71e9f-2"})(["margin-top:",";height:2.5rem;width:100%;max-width:none;",""],c.YK.spacing3,g.HT.md`
    display: inline-flex;
    margin: 0 0 0 ${c.YK.spacing4};
    width: auto;
  `),v=e=>{let{applyText:t,applyPath:n,clearText:o,clearPath:a,onClear:s,onApply:l}=e,{t:d}=(0,r.Bd)(),c=t??d("Apply"),g=o??d("Clear");return(0,i.jsxs)(C,{children:[(0,i.jsx)(j,{"data-testid":"apply",href:n,onClick:l,state:{preserveScrollPosition:!0},role:"button",children:c}),g&&s&&(0,i.jsx)(w,{"data-testid":"clear",buttonType:b.EY.SECONDARY,onClick:s,href:a,state:{preserveScrollPosition:!0},role:"button",children:g})]})},k=d.Ay.div.withConfig({componentId:"sc-8e002a42-0"})(["display:block;position:relative;margin-bottom:",";",""],c.YK.spacing3,g.HT.md`
    flex-grow: 1;
    box-sizing: content-box;
    margin: 0 ${c.YK.spacing4} 0 0;
  `),T=d.Ay.select.withConfig({componentId:"sc-8e002a42-1"})(["width:100%;border-radius:0;border:1px solid ",";padding:0 "," 0 ",";font:inherit;color:",";height:100%;appearance:none;background-color:",";"],c.Tj.nocturn,c.YK.spacing8,c.YK.spacing2,c.Tj.nocturn,c.Tj.white),$=(0,d.Ay)(x.In).withConfig({componentId:"sc-8e002a42-2"})(["position:absolute;top:50%;transform:translateY(-50%);right:",";pointer-events:none;"],c.YK.spacing2),I=e=>{let{filter:t,value:n,onChange:o}=e;return(0,i.jsxs)(k,{children:[(0,i.jsx)(T,{name:t.name,value:n,onChange:o,"aria-label":t.name,children:t.optionsWithTranslatedLabels?t.optionsWithTranslatedLabels.map(e=>(0,i.jsx)("option",{value:e.value,children:e.label},e.value)):t.options.map(e=>(0,i.jsx)("option",{value:e,children:e},e))}),(0,i.jsx)($,{icon:x.Be.angleDown,fill:c.Tj.lake,decorative:!0})]})};var A=n(77709),S=n(116);let B=d.Ay.div.withConfig({componentId:"sc-d64e0f87-0"})([""]),P=d.Ay.div.withConfig({componentId:"sc-d64e0f87-1"})(["",";"],e=>(0,d.AH)(["background-color:",";"],c.Tj[e.colorTheme.backgroundColor])),E=d.Ay.button.withConfig({componentId:"sc-d64e0f87-2"})(["padding:",";width:100%;background-color:transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;text-align:left;font:inherit;"," ",""],c.YK.spacing4,e=>(0,h.HD)(e.colorTheme)&&(0,d.AH)(["color:",";"],c.Tj.white),g.HT.md`
    display:none;
  `),Y=(0,d.Ay)(x.In).withConfig({componentId:"sc-d64e0f87-3"})(["position:absolute;top:",";right:",";pointer-events:none;"],c.YK.spacing5,c.YK.spacing4),H=(0,d.Ay)(u.n5).withConfig({componentId:"sc-d64e0f87-4"})(["padding:",";",";"," ",""],c.YK.spacing3,c.YK.spacing8,e=>e.hideOnMobile&&g.to.md`
      display: none;
    `,g.to.md`
    padding: ${c.YK.spacing6} ${c.YK.spacing4};
    width: 100%;
    max-width: none;
  `),F=(0,d.Ay)(l()).withConfig({componentId:"sc-d64e0f87-5"})(["",""],e=>!e.disabled&&`div{
      z-index: 5000;
    }
    .sticky {
      left: 0;
      right: 0;
      width: auto !important;
      box-shadow: 0 5px 18px 3px rgb(0 0 0 / 10%)
    }`),L=d.Ay.div.withConfig({componentId:"sc-d64e0f87-6"})(["display:block;",""],g.HT.md`
    display: flex;
  `),R=d.Ay.div.withConfig({componentId:"sc-d64e0f87-7"})(["display:block;",""],g.HT.md`
    display: flex;
    flex: 1;
  `),M=e=>{let{filters:t,buttons:n,disabled:s=!1}=e,{locale:l,localizedSlugs:d}=(0,o.useContext)(A.NQ),g=(0,h.O4)("backgroundTertiary"),b=(0,o.useRef)(null),[C,j]=(0,o.useState)(0),[w,k]=(0,o.useState)(!1),[T,$]=(0,o.useState)(s),[M,K]=(0,o.useState)(!1),[N,D]=(0,o.useState)({}),J=(0,a.useRouter)(),O=(0,S.pO)(l,d[l]),W=J.asPath.split(O)[1],_=(0,o.useMemo)(()=>t.map(e=>e.name),[t]),q=(0,o.useRef)(_.map(e=>J.query[e])),{t:U}=(0,r.Bd)(),z=U("filter updated");(0,o.useEffect)(()=>{let e=_.map(e=>J.query[e]);e.every((e,t)=>e===q.current[t])||(0,m.J)(z),q.current=e},[J.query,_,z]),(0,o.useEffect)(()=>{j(document.querySelector(`#${f.yG}`)?.getBoundingClientRect().bottom||0)},[]),(0,o.useEffect)(()=>{$(s)},[s]);let G=t.reduce((e,t)=>({...e,[t.name]:t.options[0]}),{}),V=_.reduce((e,t)=>{let n=(0,p.qn)(W,t);return{...e,[t]:n}},{}),Z=(0,i.jsx)(v,{...n,onClear:()=>{D(G),K(!1)},onApply:()=>K(!1),applyPath:(()=>{let e=(0,p.vA)(W),t=(0,p.ev)(e,N);return t=(0,p.b7)(t,[y.Z]),(0,p.M8)(O,t)})(),clearPath:O}),Q=(0,i.jsxs)(L,{children:[(0,i.jsx)(R,{children:t.map(e=>{let t=G[e.name];return N.hasOwnProperty(e.name)?t=N[e.name]:V.hasOwnProperty(e.name)&&(t=V[e.name]),(0,i.jsx)(I,{filter:e,value:t,onChange:t=>{D({...N,[e.name]:t.target.value})}},e.name)})}),w?(0,i.jsx)(h.$U.Provider,{value:g,children:Z}):Z]});return(0,i.jsx)(F,{topOffset:-C,stickyStyle:{top:C},onFixedToggle:e=>k(e),disabled:T,children:w?(0,i.jsxs)(P,{ref:b,colorTheme:g,children:[(0,i.jsxs)(E,{colorTheme:g,onClick:()=>{K(!M)},children:[U("Filter"),(0,i.jsx)(Y,{icon:M?x.Be.angleUp:x.Be.angleDown,fill:c.Tj.white})]}),(0,i.jsx)(H,{hideOnMobile:!M,children:Q})]}):(0,i.jsx)(u.n5,{children:(0,i.jsx)(B,{ref:b,children:Q})})})}},31548:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/[[...slug]]",function(){return n(20296)}])},32045:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var i=n(37876),o=n(5104),a=n(77232),r=n(89120),s=n(68708),l=n(71837),d=n(22508),c=n(48450),g=n(87),m=n(3084),p=n(61634),u=n(91330),h=n(7808);let f=a.Ay.ul.withConfig({componentId:"sc-306e10fe-0"})(["list-style:none;padding:0;margin:0;"]),x=a.Ay.li.withConfig({componentId:"sc-306e10fe-1"})(["&:not(:last-child){padding-bottom:",";margin-bottom:",";border-bottom:1px solid ",";}"],d.YK.spacing6,d.YK.spacing6,d.Tj.nocturn25),y=a.Ay.div.withConfig({componentId:"sc-306e10fe-2"})(["display:flex;flex-direction:column;gap:",";"],d.YK.spacing2_5),b=(0,a.Ay)(g.H3).withConfig({componentId:"sc-306e10fe-3"})(["margin:0 0 ",";"],d.YK.spacing2),C=(0,a.Ay)(r.$n).attrs({buttonType:r.EY.TEXT}).withConfig({componentId:"sc-306e10fe-4"})(["a,button{"," font-weight:",";color:",";justify-content:start;}"],p.O,d.Il.fontWeight.bold,d.Tj.lake),j=e=>{let{webinars:t,locale:n}=e,{t:a}=(0,o.Bd)(),r=t.slice(0,2);return(0,i.jsx)(f,{children:r.map((e,t)=>(0,i.jsx)(x,{children:(0,i.jsxs)(y,{children:[e.newCategories&&(0,i.jsx)(m.Z,{category:e.newCategories}),(0,i.jsx)(b,{as:"h2",children:e.name}),e.landingPageDescription&&(0,i.jsx)(u.r,{children:e.landingPageDescription}),(0,i.jsx)(h.Z,{date:e.date,locale:n,isLiveWebinar:!!e.isLiveWebinar}),(0,i.jsx)("div",{children:e.isLiveWebinar?(0,i.jsx)(C,{href:e.slug,children:a("Register now")}):(0,i.jsx)(C,{href:e.slug,children:a("Watch now")})})]})},t))})};var w=n(59921),v=n(89099),k=n(69942),T=n(43508),$=n(70377),I=n(91994),A=n(80482);let S=(0,a.Ay)(l.w).withConfig({componentId:"sc-7948f235-0"})(["padding-bottom:",";"],d.YK.spacing13),B=(0,a.Ay)(g.H2).withConfig({componentId:"sc-7948f235-1"})(["text-align:center;margin:"," 0;"],d.YK.spacing4),P=a.Ay.ul.withConfig({componentId:"sc-7948f235-2"})(["list-style:none;padding:0;margin:"," 0;display:grid;grid-template-columns:1fr;gap:",";"," ",""],d.YK.spacing8,d.YK.spacing5,c.HT.md`
    grid-template-columns: repeat(2, 1fr);
    `,c.HT.xl`
    grid-template-columns: repeat(3, 1fr);
  `),E=a.Ay.output.withConfig({componentId:"sc-7948f235-3"})(["display:block;text-align:center;margin:"," 0;"],d.YK.spacing12),Y=e=>{let{webinars:t=[]}=e,{t:n}=(0,o.Bd)(),{ALL_CATEGORIES:a,CATEGORIES:r,CATEGORIES_WITH_TRANSLATED_LABELS:s}=(0,A.a)(),{ALL_INDUSTRIES:l,INDUSTRIES:d,INDUSTRIES_WITH_TRANSLATED_LABELS:c}=(0,A.C)(),m=(0,v.useRouter)(),p=m.query[I.am]??a,h=m.query[I.sK]??l,f=Number(m.query.page??1),x=t.filter(e=>{let t=!0;return p!==a&&(t=e.newCategories===p),h!==l&&(t=t&&!!e.industries?.includes(h)),t}),y=Math.ceil(x.length/15),b=x.slice(15*(f-1),15*f);return(0,i.jsxs)(S,{padding:"none",id:I.KT,children:[(0,i.jsx)(B,{children:(0,i.jsx)("span",{children:n("Browse all our webinars")})}),(0,i.jsx)($.R3,{backgroundColor:"white",mediaAlignment:"center",children:(0,i.jsx)(k.d,{filters:[{name:I.am,options:r,optionsWithTranslatedLabels:s},{name:I.sK,options:d,optionsWithTranslatedLabels:c}],buttons:{clearText:n("Clear")}})}),b.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(P,{children:b.map((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)(u.$,{webinar:e})},t))}),(0,i.jsx)(T.d,{numPages:y})]}),0===b.length&&(0,i.jsxs)(E,{children:[(0,i.jsx)(g.H3,{children:n("Sorry, there are no results found")}),(0,i.jsx)("p",{children:n("Try again, or reset your filters.")})]})]})},H=a.Ay.div.withConfig({componentId:"sc-2dce7218-0"})(["display:flex;gap:"," ",";padding:"," 0;& > *{flex:1;}",""],d.YK.spacing10,d.YK.spacing14,d.YK.spacing12,c.to.lg`
    flex-direction: column;
  `),F=(0,a.Ay)(s.A$).withConfig({componentId:"sc-2dce7218-1"})(["padding:"," 0;h2{font-family:",";}"],d.YK.spacing8,d.Il.font.primary);function L(e){let{pageContext:t}=e,{t:n}=(0,o.Bd)(),{featuredWebinars:a,locale:d,allWebinars:c}=t,g=a.length>0?a:c?.slice(0,4);return(0,i.jsxs)("div",{children:[(0,i.jsx)(l.w,{padding:"none",children:g?.length&&(0,i.jsxs)(H,{children:[(0,i.jsx)(w.V,{webinar:g[0],slug:g[0].slug,locale:d}),g.length>1&&(0,i.jsx)(j,{webinars:g.slice(1),locale:d})]})}),(0,i.jsx)(Y,{webinars:c}),(0,i.jsx)(F,{mediaAlignment:s.nf.RIGHT,padding:"none",backgroundColor:"spruce",heading:n("Elevate your social media strategy now with Hootsuite"),ctaComponents:[(0,i.jsx)(r.$n,{buttonType:r.EY.PRIMARY,href:"/select-plan",children:n("Start your free trial")},1)],media:{type:"image",data:{src:"/images/webinar-cta.webp",alt:"",width:650,height:350}}})]})}},42634:()=>{},43508:(e,t,n)=>{"use strict";n.d(t,{d:()=>i.d});var i=n(51118)},44867:(e,t,n)=>{"use strict";n.d(t,{gA:()=>h,cj:()=>p,YR:()=>u});var i=n(52918),o=n(116);function a(e){return Object.entries({"en-US":"enUs","fr-FR":"frFr","de-DE":"deDe","it-IT":"itIt","pt-BR":"ptBr","es-ES":"esEs"}).reduce((t,n)=>{let[i,o]=n;if(e[o]){let n=`${o}Slug`;t[i]=e[n]||""}return"PageCampaign"===e.__typename&&(t[i]=`/lp${t[i]}`),t},{})}var r=n(67745),s=n(2348),l=n(68965);let d=(0,i.J)`
  ${s.NH}
  ${l.r}

  fragment PagePressReleaseWithPage on PagePressRelease {
    sys {
      id
    }
    title
    description {
      json
    }
    date
    type
    customImage {
      ...ImageAsset
    }
    linkedFrom(allowedLocales: ["en-US", $locale]) {
      pageCollection(limit: 1) {
        items {
          ...AllPagesPage
        }
      }
    }
  }
`,c=(0,i.J)`
  ${d}

  query PagePressReleasesWithPages(
    $skip: Int!
    $limit: Int!
    $locale: String
    $ids: [String]
    $gteDate: DateTime
    $lteDate: DateTime
    $type: String
  ) {
    pagePressReleaseCollection(
      skip: $skip
      limit: $limit
      locale: $locale
      where: {
        sys: { id_in: $ids }
        date_gte: $gteDate
        date_lte: $lteDate
        type: $type
      }
      order: date_DESC
    ) {
      items {
        ...PagePressReleaseWithPage
      }
    }
  }
`,g=(0,i.J)`
  fragment StartingYearFilter on PagePressRelease {
    date
  }
`,m=(0,i.J)`
  ${g}

  query StartingYearFilter {
    pagePressReleaseCollection(order: date_ASC, limit: 1) {
      items {
        ...StartingYearFilter
      }
    }
  }
`,p=async(e,t)=>{let{locale:n,preview:o}=e,s=0,l=!0,d=[];for(;l;){let e=20*s,{data:a}=await (0,i.P)({query:c,variables:{locale:n,preview:o,skip:e,limit:20,...t?.gteDate&&{gteDate:new Date(t.gteDate).toISOString()},...t?.lteDate&&{lteDate:new Date(t.lteDate).toISOString()},...t?.type&&{type:t.type}}});a?.pagePressReleaseCollection?.items&&a.pagePressReleaseCollection.items.length>0?(d=[...d,...a.pagePressReleaseCollection.items],s+=1):l=!1}let g=d.filter(e=>!!e.linkedFrom?.pageCollection?.items&&e.linkedFrom.pageCollection.items.length>0&&function(e,t){return!!(e?.page?.__typename&&e.slug?.startsWith("/"))&&!!a(e)[t]}(e.linkedFrom.pageCollection.items[0],n)).map(e=>e.sys.id);return{total:g.length,chunks:function(e,t){let n=[];for(;e.length>0;){let i=e.splice(0,t);n.push(i)}return n}(g,r.m)}},u=async(e,t)=>{let{locale:n,preview:s}=e;if(!t.length)return[];let{data:l}=await (0,i.P)({query:c,variables:{locale:n,preview:s,skip:0,limit:r.m,ids:t}});return(l?.pagePressReleaseCollection?.items??[]).map(e=>{let t=a(e.linkedFrom?.pageCollection?.items[0])[n],i=(0,o.pO)(n,t);return{title:e.title||"",type:e.type||"",description:e.description?.json||{},date:e.date,slug:i,customImage:{src:e.customImage?.image?.url||"",alt:e.customImage?.altText||""}}})},h=async()=>{let{data:e}=await (0,i.P)({query:m});return{startingYearFilter:e?.pagePressReleaseCollection?.items[0]?.date||null}}},51118:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C,d:()=>j});var i=n(37876),o=n(14232),a=n(89099),r=n(5104),s=n(77232),l=n(22508),d=n(48450),c=n(26391),g=n(25356),m=n(67116),p=n(80073);let u=s.Ay.div.withConfig({componentId:"sc-764a892a-0"})(["height:2rem;color:",";display:flex;flex-wrap:nowrap;justify-content:center;width:100%;margin-inline:auto;"],l.Tj.nocturn),h=(0,s.Ay)(g.N_).withConfig({componentId:"sc-764a892a-1"})(["display:contents;vertical-align:top;color:",";"],l.Tj.nocturn),f=s.Ay.span.withConfig({componentId:"sc-764a892a-2"})(["color:",";flex:0 1 5ch;"],l.Tj.nocturn50),x=s.Ay.div.withConfig({componentId:"sc-764a892a-3"})(["display:flex;flex:0 1 5ch;align-items:center;justify-content:center;min-height:1.875rem;background-color:",";border-top:1px solid ",";border-bottom:1px solid ",";font-weight:700;text-align:center;line-height:1.25rem;height:100%;cursor:pointer;transition:",";"," "," "," "," "," "," ",""],l.Tj.white,l.Tj.nocturn50,l.Tj.nocturn50,l.lY.defaultTransitionDuration,e=>void 0!==e.distanceFromCurrent&&e.distanceFromCurrent<0&&`
      border-left: 1px solid ${l.Tj.nocturn50};
    `,e=>void 0!==e.distanceFromCurrent&&e.distanceFromCurrent>0&&`
      border-right: 1px solid ${l.Tj.nocturn50};
    `,e=>0===e.distanceFromCurrent&&`
      border: 1px solid ${l.Tj.nocturn};
      cursor: default;
    `,e=>e.first&&`
      border-radius: 4px 0 0 4px;
    `,e=>e.last&&`
      border-radius: 0 4px 4px 0;
    `,e=>e.ellipses&&`
      cursor: default;
    `,e=>!e.ellipses&&0!==e.distanceFromCurrent&&`
      text-decoration: underline;

      &:hover {
        box-shadow: inset 0 0 0 1px ${l.Tj.lake};
        color: ${l.Tj.lake};
        background-color: ${l.Tj.nocturn15};
      }
    `),y=(0,s.Ay)(x).withConfig({componentId:"sc-764a892a-4"})(["border-left:1px solid ",";border-right:1px solid ",";",""],l.Tj.nocturn50,l.Tj.nocturn50,d.HT.sm`
    border-right: none;
  `),b=(0,s.Ay)(x).withConfig({componentId:"sc-764a892a-5"})(["border-right:1px solid ",";border-left:1px solid ",";",""],l.Tj.nocturn50,l.Tj.nocturn50,d.HT.sm`
    border-left: none;
  `),C="page",j=e=>{let{numPages:t,className:n}=e,[s,d]=(0,o.useState)(0),g=(0,a.useRouter)(),j=g.asPath.split("?")[0],w=g.asPath.split("?")[1],v=(0,c.vA)(w||""),{t:k}=(0,r.Bd)(),T=(0,c.M8)(j,(0,c.ev)(v,{[C]:(s-1).toString()})),$=(0,c.M8)(j,(0,c.ev)(v,{[C]:(s+1).toString()}));(0,o.useEffect)(()=>{d((0,c.nO)(g.query.page))},[g.query]);let I=e=>{let n=e===s,o=(0,c.M8)(j,(0,c.ev)(v,{[C]:e.toString()})),a=n?k("page {{pageNumber}}",{pageNumber:e}):k("go to page {{pageNumber}}",{pageNumber:e});return(0,i.jsx)(h,{to:o,...n&&{"aria-current":"page"},tabIndex:0,"aria-label":a,children:(0,i.jsxs)(x,{first:1===e&&n,last:e===t&&n,distanceFromCurrent:e-s,children:[(0,i.jsx)("span",{"aria-hidden":!0,children:e}),(0,i.jsx)(m.s,{children:a})]})},e)},A=e=>(0,i.jsx)(f,{children:(0,i.jsx)(x,{distanceFromCurrent:e,ellipses:!0,children:"..."})},`ellipses${e}`),S=[...Array(t).keys()].map(e=>e+1),B=S.map(e=>I(e));if(t>10){let e=s-3,n=s+2;B=s>=1&&s<=5?[...S.slice(0,n).map(e=>I(e)),A(3),I(t)]:s>t-5?[I(1),A(-3),...S.slice(e,t).map(e=>I(e))]:[I(1),A(-3),...S.slice(e,n).map(e=>I(e)),A(3),I(t)]}return t>1?(0,i.jsxs)(u,{"data-testid":"pagination",className:n,children:[s>1&&(0,i.jsx)(h,{to:T,"aria-label":k("previous page"),children:(0,i.jsx)(y,{first:!0,children:(0,i.jsx)(p.In,{icon:p.Be.angleLeft,fill:l.Tj.lake})})}),B,s<t&&(0,i.jsx)(h,{to:$,"aria-label":k("next page"),children:(0,i.jsx)(b,{last:!0,children:(0,i.jsx)(p.In,{icon:p.Be.angleRight,fill:l.Tj.lake,size:p.y3.xxs})})})]}):null}},56113:(e,t,n)=>{"use strict";n.d(t,{u:()=>d});var i=n(52918),o=n(92182),a=n(60753),r=n(68965);let s=(0,i.J)`
  ${a.v}
  ${r.r}
  fragment Changelog on Changelog {
    name
    date
    changelogcategory
    applicationcategory
    body {
      json
      links {
        entries {
          block {
            ...ComponentEmbed
            ...ImageAsset
          }
        }
      }
    }
  }
`,l=(0,i.J)`
  ${s}

  query ChangelogIndex(
    $limit: Int
    $skip: Int
    $locale: String
    $preview: Boolean
  ) {
    changelogCollection(
      limit: $limit
      skip: $skip
      order: date_DESC
      locale: $locale
      preview: $preview
    ) {
      total
      items {
        ...Changelog
      }
    }
  }
`,d=async(e,t)=>{let{locale:n,preview:a}=e,{data:r}=await (0,i.P)({query:l,variables:{locale:n,preview:a,...void 0!==t&&{limit:o.m,skip:t*o.m}}});return{changelogs:r?.changelogCollection?.items.reduce((e,t)=>(t?.__typename==="Changelog"&&e.push({name:t.name||"",date:t.date||"",applicationcategory:t.applicationcategory||"",changelogcategory:t.changelogcategory||"",body:t.body}),e),[])||[],total:r?.changelogCollection?.total||0}}},59921:(e,t,n)=>{"use strict";n.d(t,{V:()=>E});var i=n(37876),o=n(5104),a=n(77232),r=n(3084),s=n(14232),l=n(88734),d=n(23643),c=n(67574);let g=e=>{let{button:t,vidyardId:n}=e,a=(0,s.useId)(),{t:r}=(0,o.Bd)();return(0,i.jsxs)("div",{children:[t({modalId:a}),(0,i.jsx)(d.a,{heading:r("Watch Webinar"),id:a,size:c.T.LARGE,children:(0,i.jsx)(l.i,{code:n})})]})};var m=n(89120),p=n(22508);let u=(0,a.Ay)(m.$n).withConfig({componentId:"sc-76809429-0"})(["button,a{padding:"," ",";font-size:0.78rem;}"],p.YK.spacing2_5,p.YK.spacing4),h=e=>{let{slug:t,vidyardId:n,showVideoOverlayButton:a,...r}=e,{t:s}=(0,o.Bd)();return a&&n?(0,i.jsx)(g,{vidyardId:n,button:e=>{let{modalId:t}=e;return(0,i.jsx)(u,{buttonType:m.EY.PRIMARY,"data-target":`#${t}`,...r,children:s("Watch webinar")})}}):t?(0,i.jsx)(u,{buttonType:m.EY.PRIMARY,href:t,...r,children:s("Register Now")}):null};var f=n(7808),x=n(87),y=n(12742),b=n(67116),C=n(18845),j=n(84492),w=n(116),v=n(48450);let k=a.Ay.div.withConfig({componentId:"sc-731c753-0"})(["display:flex;flex-direction:column;gap:",";color:",";align-items:start;",""],p.YK.spacing4,p.Tj.nocturn,e=>{let{isHorizontalLayout:t}=e;return t&&v.HT.lg`
      flex-direction: row;
      column-gap: ${p.YK.spacing12};
      align-items: center;
    `}),T=a.Ay.div.withConfig({componentId:"sc-731c753-1"})(["display:flex;flex-direction:column;gap:",";align-items:start;"],p.YK.spacing4),$=(0,a.Ay)(x.H2).attrs({forwardedAs:x.H1}).withConfig({componentId:"sc-731c753-2"})(["margin:0;"]),I=a.Ay.div.withConfig({componentId:"sc-731c753-3"})(["position:relative;flex-shrink:0;width:100%;",""],e=>{let{isHorizontalLayout:t}=e;return t&&v.HT.lg`
      width: 50%;
    `}),A=(0,a.Ay)(y.$).withConfig({componentId:"sc-731c753-4"})(["&&{width:100%;max-height:",";object-fit:cover;img{width:100%;}}"],e=>{let{isHorizontalLayout:t}=e;return t?"434px":"296px"}),S=a.Ay.button.withConfig({componentId:"sc-731c753-5"})(["position:absolute;border:none;padding:0;inset:0;background:transparent;cursor:pointer;display:grid;place-items:center;"]),B=a.Ay.div.withConfig({componentId:"sc-731c753-6"})(["display:grid;place-items:center;background:#ececec;height:90px;width:90px;border-radius:50%;pointer-events:none;img{pointer-events:none;}"]),P=e=>e?{width:557,height:434}:{width:553,height:296},E=e=>{let{t}=(0,o.Bd)(),{webinar:n,slug:a,videoOverlayButton:s=!1,locale:l=w.Xn,cta:d}=e,c=!!d;return(0,i.jsxs)(k,{isHorizontalLayout:c,children:[(0,i.jsxs)(I,{isHorizontalLayout:c,children:[(0,i.jsx)(A,{isHorizontalLayout:c,type:"image",data:{...(0,j.u)(n.image),...P(c)}}),s&&n.vidyardEmbedId&&(0,i.jsx)(g,{vidyardId:n.vidyardEmbedId,button:e=>{let{modalId:n}=e;return(0,i.jsx)(S,{"data-target":`#${n}`,"data-testid":"videoOverlayButton",children:(0,i.jsxs)(B,{children:[(0,i.jsx)("img",{src:"/images/play-button.svg",alt:""}),(0,i.jsx)(b.s,{children:t("Watch webinar")})]})})}})]}),(0,i.jsxs)(T,{children:[n.newCategories&&(0,i.jsx)(r.Z,{category:n.newCategories}),(0,i.jsx)(f.Z,{date:n.date,locale:l,isLiveWebinar:!!n.isLiveWebinar,isHighlighted:!0}),(0,i.jsx)($,{children:n.name}),n.landingPageDescription&&(0,i.jsx)("div",{children:n.landingPageDescription}),d?(0,i.jsx)(C.$,{...d}):(0,i.jsx)(h,{vidyardId:n.vidyardEmbedId,showVideoOverlayButton:s,slug:a,"data-testid":"webinarHeroCta"})]})]})}},61634:(e,t,n)=>{"use strict";n.d(t,{O:()=>o});var i=n(22508);let o=`
    padding: ${i.YK.spacing3} ${i.YK.spacing4};
    text-decoration: none;
    border: 1px solid ${i.Tj.nocturn};
    border-radius: 8px;
    max-width: max-content;
`},63889:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var i=n(37876),o=n(14232),a=n(62964),r=n(89099),s=n(5104),l=n(77232),d=n(82940),c=n(62454),g=n(69942),m=n(87),p=n(7512),u=n(43508),h=n(50189),f=n(71837),x=n(25356),y=n(67116),b=n(93126),C=n(22508),j=n(60343),w=n(116),v=n(80609),k=n(87940),T=n(26391);let $=l.Ay.div.withConfig({componentId:"sc-5632d5da-0"})(["padding:"," 0;"],C.YK.spacing4),I=l.Ay.div.withConfig({componentId:"sc-5632d5da-1"})(["text-align:center;padding:"," 0;color:",";"],C.YK.spacing8,C.Tj.nocturn),A=l.Ay.div.withConfig({componentId:"sc-5632d5da-2"})(["padding:"," 0;text-align:center;"],C.YK.spacing12);function S(e){let{pageContext:t}=e,{t:n}=(0,s.Bd)(),{resources:l,locale:C}=t,{resources:S,totalPages:B}=(0,k.fn)(l),P=(0,r.useRouter)(),E=(0,T.nO)(P.query.page),Y=(0,o.useRef)(null);(0,j.QV)(Y,E>1);let H=(0,k.et)(),F=(0,k.Om)();return(0,i.jsxs)("div",{children:[(0,i.jsx)(f.w,{colorTheme:(0,b.O4)("backgroundSecondary"),children:(0,i.jsx)(p.lq,{backgroundColor:"backgroundSecondary",preheader:n("Resource Library"),headingText:n("Social media is in our DNA"),bodyRichText:n("Explore hundreds of free resources to help you succeed in social.")})}),(0,i.jsx)(y.s,{children:(0,i.jsx)("h2",{children:n("Resources")})}),(0,i.jsx)($,{children:(0,i.jsx)(g.d,{filters:[{name:v.am,options:v.R6,optionsWithTranslatedLabels:H},{name:v.sK,options:v.Bp,optionsWithTranslatedLabels:F}],buttons:{clearText:n("Clear")}})}),(0,i.jsxs)(x.n5,{ref:Y,children:[S.length>0?(0,i.jsx)(d.b,{backgroundColor:"backgroundPrimary",numCols:c.e.threeCol,children:S.map((e,t)=>{let i=e.slug?{link:(0,w.pO)(C,e.slug)}:{},r=H.find(t=>t.value===e.category);return(0,o.createElement)(h.Zs,{"data-testid":"resourceCard",...i,key:`${t}-${e.title}`,breadcrumb:"Not Categorized"!==e.category?r?.label:"",media:{type:"image",data:{...e.image,src:e.image?.src||"/images/resources/resource-fallback.png",alt:"",width:418,height:260}},heading:e.title,bodyText:e.description?e.description:(0,a.l)(e.details),linkAttributes:{"aria-label":n(`Link to read ${e.title}`)}})})}):(0,i.jsxs)(I,{children:[(0,i.jsx)(m.H3,{children:n("Sorry, there are no results found")}),(0,i.jsx)("p",{children:n("Try again, or reset your filters.")})]}),(0,i.jsx)(A,{children:(0,i.jsx)(u.d,{numPages:B})})]})]})}},67745:(e,t,n)=>{"use strict";n.d(t,{m:()=>i});let i=6},69942:(e,t,n)=>{"use strict";n.d(t,{d:()=>i.d});var i=n(27526)},74167:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var i=n(37876),o=n(14232),a=n(89099),r=n(5104),s=n(77232),l=n(69942),d=n(87),c=n(7512),g=n(22508),m=n(48450);let p=s.Ay.ul.withConfig({componentId:"sc-1df9e84d-0"})(["margin:0;padding:0;"," ",""],e=>{let{tabAlignment:t}=e;return"left"===t&&`
      display: inline-flex;
    `},m.HT.md`
      display: flex;
    `),u=s.Ay.li.withConfig({componentId:"sc-1df9e84d-1"})([""," display:inline-block;text-align:center;flex:1;position:relative;background-color:",";margin-right:5px;&:last-of-type{margin-right:0;}"],m.to.md`
    width: 100%;
  `,g.Tj.white),h=s.Ay.button.withConfig({componentId:"sc-1df9e84d-2"})(["display:flex;height:100%;width:100%;border:none;font-size:1rem;line-height:1.6;font-family:inherit;padding:",";justify-content:center;font-weight:700;",""],g.YK.spacing3,e=>{let{active:t}=e;return(0,s.AH)(["text-decoration:",";text-underline-offset:",";color:",";background-color:",";&:hover:not(:active),&:hover:not(:focus){background:",";cursor:",";}&:active,&:focus{background:",";}"],t&&`underline ${g.Tj.jade} solid 2px`,t&&"5px",t?g.Tj.nocturn:g.Tj.lake,t?g.Tj.white:g.Tj.jade30,t?g.Tj.white:g.Tj.mint,t?"default":"pointer",g.Tj.white)}),f=e=>{let{tabLabels:t=[],activeTabIndex:n=0,onChange:o,tabAlignment:a="full",...r}=e;return(0,i.jsx)(p,{role:"tablist",tabAlignment:a,...r,children:t.map((e,t)=>(0,i.jsx)(u,{role:"presentation",children:(0,i.jsx)(h,{role:"tab","data-ga-track-id":e.gaTrackingId,onClick:()=>o(t),active:n===t,"aria-selected":n===t,"aria-controls":e.controls,id:e.id,children:e.label})},t))})},x=e=>{let{id:t,children:n,value:o,index:a,labelledby:r,...s}=e;return(0,i.jsx)("div",{id:t,role:"tabpanel",hidden:o!==a,"aria-labelledby":r,...s,children:o===a&&(0,i.jsx)("div",{children:n})})};var y=n(93126),b=n(71837);let C=s.Ay.div.withConfig({componentId:"sc-fb144d53-0"})([""]),j=e=>{let{tabs:t,onChangeCallback:n,tabAlignment:a="full",...r}=e,[s,l]=(0,o.useState)(0),d=(0,o.useId)(),c=(0,o.useId)();return(0,i.jsxs)(C,{children:[(0,i.jsx)(b.w,{colorTheme:r.headerTheme||(0,y.O4)("backgroundSecondary"),padding:"none",children:(0,i.jsx)(f,{tabLabels:t.map((e,t)=>({label:e.label,gaTrackingId:e.gaTrackingId,id:`${d}-${t}`,controls:`${c}-${t}`})),activeTabIndex:s,onChange:e=>{l(e),n&&n()},tabAlignment:a})}),(0,i.jsx)(b.w,{colorTheme:r.bodyTheme||(0,y.O4)("offsetSecondary"),padding:"bottom",children:t.map((e,t)=>(0,i.jsx)(x,{value:s,index:t,id:`${c}-${t}`,labelledby:`${d}-${t}`,children:e.content},t))})]})};var w=n(67116),v=n(89120),k=n(25356);let T=s.Ay.div.withConfig({componentId:"sc-c7ede60c-0"})(["width:100%;background-color:",";color:",";&:hover h4{color:",";}",""],g.Tj.white,g.Tj.nocturn,g.Tj.lake,m.HT.md`
    display: flex;
  `),$=s.Ay.div.withConfig({componentId:"sc-c7ede60c-1"})(["display:flex;align-items:center;justify-content:center;border:1px solid ",";padding:",";width:auto;flex-shrink:0;font-size:1.5rem;font-weight:",";",""],g.Tj.nocturn,g.YK.spacing3,g.Il.fontWeight.bold,m.HT.md`
    width: 150px;
    justify-content: start;
  `),I=s.Ay.div.withConfig({componentId:"sc-c7ede60c-2"})(["border:1px solid ",";display:flex;flex-direction:column;flex-grow:1;align-items:flex-start;padding:"," ",";",""],g.Tj.nocturn,g.YK.spacing6,g.YK.spacing6,m.HT.md`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${g.YK.spacing9} ${g.YK.spacing8};
  `),A=(0,s.Ay)(d.H4).attrs({forwardedAs:"p"}).withConfig({componentId:"sc-c7ede60c-3"})([""]),S=(0,s.Ay)(k.N_).withConfig({componentId:"sc-c7ede60c-4"})(["display:flex;text-decoration:none;flex-direction:column;justify-content:flex-start;& ","{margin:0 0 ",";}",""],A,g.YK.spacing1,m.HT.md`
    padding-right: ${g.YK.spacing5};
  `),B=s.Ay.div.withConfig({componentId:"sc-c7ede60c-5"})(["display:flex;justify-content:center;padding-top:",";flex-shrink:0;",""],g.YK.spacing5,m.HT.md`
    padding-top: 0;
  `),P=s.Ay.div.withConfig({componentId:"sc-c7ede60c-6"})(["font-size:1.25rem;"]),E=s.Ay.div.withConfig({componentId:"sc-c7ede60c-7"})(["font-size:1rem;"]),Y=s.Ay.div.withConfig({componentId:"sc-c7ede60c-8"})(["padding-top:",";font-size:1rem;"],g.YK.spacing1),H=e=>{let{slug:t,title:n,type:o,location:a,startDate:s,endDate:l,subtitle:d,description:c,mapsLocation:g,externalEventLink:m,isWebinar:p=!1,locale:u}=e,{t:h}=(0,r.Bd)(),f=m||t,x=m?"_blank":"",y=e=>Intl.DateTimeFormat(u,{month:"short",day:"numeric"}).format(new Date(e)),b=l&&!((e,t)=>{let n=new Date(e),i=new Date(t);return n.getDay()===i.getDay()&&n.getMonth()===i.getMonth()&&n.getFullYear()===i.getFullYear()})(s,l);return(0,i.jsxs)(T,{children:[s&&(0,i.jsxs)($,{children:[y(s),b&&` - ${y(l)}`]}),(0,i.jsxs)(I,{children:[(0,i.jsxs)(S,{to:f,target:x,children:[(0,i.jsx)(A,{children:n}),(0,i.jsxs)(P,{children:[o||null," ",a?` - ${a}`:null," ",g?` - ${g}`:null]}),(0,i.jsx)(E,{children:d}),(0,i.jsx)(Y,{children:c})]}),(0,i.jsx)(B,{children:(0,i.jsx)(v.$n,{href:f,buttonType:v.EY.OUTLINE,target:x,children:h(p?"View this Webinar":"View this Event")})})]})]})},F=s.Ay.div.withConfig({componentId:"sc-635bd598-0"})(["margin-bottom:",";"],g.YK.spacing8),L=(0,s.Ay)(d.H2).withConfig({componentId:"sc-635bd598-1"})(["text-transform:capitalize;"]),R=e=>{let{events:t,locale:n,reverseOrder:o}=e,a=[...t].sort((e,t)=>new Date(t.startDate).valueOf()-new Date(e.startDate).valueOf());o&&a.reverse();let r=[];return a.forEach(e=>{let t=new Intl.DateTimeFormat(n,{year:"numeric"}).format(new Date(e.startDate)),i=r.find(e=>e.name===t);if(void 0===i){r.push({name:t,events:[e]});return}i.events.push(e)}),(0,i.jsx)("div",{children:r.map((e,t)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(L,{children:e.name}),e.events.map((e,t)=>(0,i.jsx)(F,{children:(0,i.jsx)(H,{locale:n,slug:e.slug,title:e.title,type:e.type,location:e.location,startDate:e.startDate,endDate:e.endDate,subtitle:e.subtitle,description:e.description,mapsLocation:e.mapsLocation,externalEventLink:e.externalEventLink,isWebinar:e.isWebinar})},`calendar-upcoming-item-${t}`))]},t))})};var M=n(11493);let K=s.Ay.div.withConfig({componentId:"sc-852c77f6-0"})([""]),N=s.Ay.div.withConfig({componentId:"sc-852c77f6-1"})(["padding:"," 0 ",";"],g.YK.spacing4,g.YK.spacing15);function D(e){let{pageContext:t}=e,{t:n}=(0,r.Bd)(),o=(0,a.useRouter)(),s=o.query,g=`/${s.slug?.[0]}`,m={[M.rm]:s[M.rm]||M.d9,[M.qM]:s[M.qM]||M.MU},{events:p,locale:u}=t,h=e=>{let t=!0;return m[M.rm]!==M.d9&&(t=m[M.rm]===e.location),t&&m[M.qM]!==M.MU&&(t=m[M.qM]===e.type),t},f=new Date,x=p.filter(e=>new Date(e.startDate)>=f),y=p.filter(e=>new Date(e.startDate)<f),b=x.reduce((e,t)=>""!==t.location&&-1===e.indexOf(t.location)?[...e,t.location]:e,[M.d9]),C=x.reduce((e,t)=>""!==t.type&&-1===e.indexOf(t.type)?[...e,t.type]:e,[M.MU]),v=y.reduce((e,t)=>t.location&&-1===e.indexOf(t.location)?[...e,t.location]:e,[M.d9]),k=y.reduce((e,t)=>t.type&&-1===e.indexOf(t.type)?[...e,t.type]:e,[M.MU]),T=x.filter(e=>h(e)),$=y.filter(e=>h(e));return(0,i.jsxs)(K,{children:[(0,i.jsx)(c.lq,{preheader:n("EVENTS"),headingText:n("Events and Recordings"),bodyRichText:(0,i.jsx)("p",{children:n("Get details on upcoming events so you can attend in person or online, and find video recordings of past events.")})}),(0,i.jsx)(j,{onChangeCallback:()=>{o.push(g,g,{scroll:!1,shallow:!0})},tabs:[{label:n("Upcoming events"),content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{children:(0,i.jsx)(l.d,{filters:[{name:M.rm,options:b},{name:M.qM,options:C}],buttons:{clearText:""}})}),T.length>0?(0,i.jsx)(R,{reverseOrder:!0,events:T,locale:u}):(0,i.jsx)(d.n,{children:n("No upcoming events at this time. Check back later!")})]})},{label:n("Past event recordings"),content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{children:(0,i.jsx)(l.d,{filters:[{name:M.rm,options:v},{name:M.qM,options:k}],buttons:{clearText:""}})}),(0,i.jsx)(w.s,{children:(0,i.jsx)("h2",{children:n("Events")})}),$.length>0?(0,i.jsx)(R,{events:$,locale:u}):(0,i.jsx)(d.n,{children:n("No past event recordings available at this time. Check back later!")})]})}]})]})}},78352:(e,t,n)=>{"use strict";n.d(t,{J:()=>r});var i=n(37876),o=n(78944),a=n(67116);function r(e){let t=(0,i.jsx)(a.s,{children:e}),n=document.createElement("output");n.setAttribute("aria-live","polite"),(0,o.createRoot)(n).render(t),document.body.append(n),setTimeout(()=>{n.remove()},5e3)}},80482:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,a:()=>o});var i=n(5104);function o(){let{t:e}=(0,i.Bd)(),t={"All Categories":e("All Categories"),"Content & Engagement":e("Content & Engagement"),"Social Listening & Analytics":e("Social Listening & Analytics"),"Success Stories":e("Success Stories"),"Product Insights & Updates":e("Product Insights & Updates"),"Social Media Strategy & Trends":e("Social Media Strategy & Trends")},n=Object.values(t),o=Object.entries(t).map(e=>{let[t,n]=e;return{value:t,label:n}});return{ALL_CATEGORIES:"All Categories",CATEGORY_MAP:t,CATEGORIES:n,CATEGORIES_WITH_TRANSLATED_LABELS:o}}function a(){let{t:e}=(0,i.Bd)(),t="All Industries",n={[t]:e("All Industries"),Agency:e("Agency"),"Financial Services":e("Financial Services"),Government:e("Government"),"Health Care":e("Health Care"),"Higher Education":e("Higher Education"),"Hospitality & Tourism":e("Hospitality & Tourism"),"Media & Entertainment":e("Media & Entertainment"),"Non-Profit":e("Non-Profit"),"Retail & CPG":e("Retail & CPG"),Sports:e("Sports"),Technology:e("Technology")},o=Object.values(n),a=Object.entries(n).map(e=>{let[t,n]=e;return{value:t,label:n}});return{ALL_INDUSTRIES:t,INDUSTRY_MAP:n,INDUSTRIES:o,INDUSTRIES_WITH_TRANSLATED_LABELS:a}}},80609:(e,t,n)=>{"use strict";n.d(t,{Bp:()=>s,NN:()=>a,R6:()=>r,am:()=>l,bl:()=>o,md:()=>i,sK:()=>d});let i=12,o="All Categories",a="All Industries",r=[o,"Research & Trends","Strategy & Tactics","Case Studies","Toolkits","Products & Services"],s=[a,"Agency","Financial Services","Government","Health Care","Higher Education","Hospitality & Tourism","Media & Entertainment","Non-Profit","Retail & CPG","Sports","Technology","Real Estate"],l="category",d="industry"},87940:(e,t,n)=>{"use strict";n.d(t,{Om:()=>c,et:()=>d,fn:()=>l});var i=n(89099),o=n(5104),a=n(51118),r=n(80609);let s=e=>Math.ceil(e/r.md);function l(e){let t=(0,i.useRouter)(),n=Number(t.query[a.Z])||1,o=t.query[r.am]?.toString()||r.bl;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.NN,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.bl,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=e.filter(e=>{let i=!0;return n!==r.bl&&(i=e.category===n),t!==r.NN&&(i=i&&e.industry===t),i}),a=i*r.md-r.md,l=i*r.md;return{resources:o.slice(a,l),totalPages:s(o.length)}}(e,t.query[r.sK]?.toString()||r.NN,o,n)}function d(){let{t:e}=(0,o.Bd)();return[{label:e("All Categories"),value:"All Categories"},{label:e("Research & Trends"),value:"Research & Trends"},{label:e("Strategy & Tactics"),value:"Strategy & Tactics"},{label:e("Case Studies"),value:"Case Studies"},{label:e("Toolkits"),value:"Toolkits"},{label:e("Products & Services"),value:"Products & Services"}]}function c(){let{t:e}=(0,o.Bd)();return[{label:e("All Industries"),value:"All Industries"},{label:e("Agency"),value:"Agency"},{label:e("Financial Services"),value:"Financial Services"},{label:e("Government"),value:"Government"},{label:e("Health Care"),value:"Health Care"},{label:e("Higher Education"),value:"Higher Education"},{label:e("Hospitality & Tourism"),value:"Hospitality & Tourism"},{label:e("Media & Entertainment"),value:"Media & Entertainment"},{label:e("Non-Profit"),value:"Non-Profit"},{label:e("Retail & CPG"),value:"Retail & CPG"},{label:e("Sports"),value:"Sports"},{label:e("Technology"),value:"Technology"},{label:e("Real Estate"),value:"Real Estate"}]}},91330:(e,t,n)=>{"use strict";n.d(t,{r:()=>x,$:()=>j});var i=n(37876),o=n(5104),a=n(77232),r=n(87),s=n(12742),l=n(25356),d=n(70377),c=n(22508),g=n(84492);let m=e=>{let t=e.thumbnailImage||e.image,n=t?.image?.url?`${t.image.url}`:"/images/placeholders/webinar-card.png";return{...(0,g.u)(t),alt:"",src:n,width:471,height:200}};var p=n(3084),u=n(61634),h=n(80482);let f=(0,a.Ay)(r.H3).withConfig({componentId:"sc-ed1a6a81-0"})(["margin:0;"]),x=(0,a.Ay)(r.n).withConfig({componentId:"sc-ed1a6a81-1"})(["font-weight:",";"],c.Il.fontWeight.normal),y=(0,a.Ay)(l.N_).withConfig({componentId:"sc-ed1a6a81-2"})([""," margin-top:calc(-1 * ",");color:",";&:hover,&:focus{color:",";}"],u.O,c.YK.spacing4,c.Tj.lake,c.Tj.spruce),b=(0,a.Ay)(l.N_).withConfig({componentId:"sc-ed1a6a81-3"})(["text-decoration:none;&:hover,&:active,&:focus{color:",";text-decoration:underline;}"],c.Tj.spruce),C=(0,a.Ay)(s.$).withConfig({componentId:"sc-ed1a6a81-4"})(["&&{object-fit:cover;}"]);function j(e){let{webinar:t}=e,{t:n}=(0,o.Bd)(),{CATEGORY_MAP:a}=(0,h.a)();return(0,i.jsxs)(d.R3,{backgroundColor:"white",mediaAlignment:"left",children:[(0,i.jsx)(b,{to:t.slug,"aria-hidden":!0,tabIndex:-1,children:(0,i.jsx)(C,{type:"image",data:m(t)})}),t.newCategories&&(0,i.jsx)(p.Z,{category:t.newCategories in a?a[t.newCategories]:t.newCategories}),(0,i.jsx)(b,{to:t.slug,children:(0,i.jsx)(f,{children:t.name})}),t.landingPageDescription&&(0,i.jsx)(x,{children:t.landingPageDescription}),(0,i.jsx)(y,{to:t.slug,"aria-hidden":!0,tabIndex:-1,children:(0,i.jsx)("strong",{children:n(t.isLiveWebinar?"Register Now":"Watch on-demand")})})]})}},91994:(e,t,n)=>{"use strict";n.d(t,{KT:()=>a,am:()=>i,sK:()=>o});let i="category",o="industry",a="webinarList"},92182:(e,t,n)=>{"use strict";n.d(t,{m:()=>i});let i=50},94975:(e,t,n)=>{"use strict";n.d(t,{R:()=>r});let i={year:"numeric",month:"long",day:"numeric"},o={hour:"2-digit",minute:"2-digit"},a={...o,timeZoneName:"short"};function r(e,t){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=new Date(e);return{date:r.toLocaleDateString(t,i),time:r.toLocaleTimeString(t,n?a:o)}}},99801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var i=n(37876),o=n(14232),a=n(62964),r=n(89099),s=n(5104),l=n(77232),d=n(89120),c=n(82940),g=n(72604),m=n(27526),p=n(87),u=n(7512),h=n(23643),f=n(67574),x=n(43508),y=n(50189),b=n(71837),C=n(35885),j=n(93126),w=n(60343),v=n(67745),k=n(44867),T=n(78352);let $=l.Ay.div.withConfig({componentId:"sc-abc34c22-0"})(["display:flex;flex-direction:column;align-items:center;"]),I=l.Ay.p.withConfig({componentId:"sc-abc34c22-1"})(["font-size:1.25rem;"]),A=(0,l.Ay)(y.Zs).withConfig({componentId:"sc-abc34c22-2"})(["img{min-height:0;object-fit:contain;width:auto;}"]),S=(0,l.Ay)(b.w).withConfig({componentId:"sc-abc34c22-3"})(["text-align:center;"]),B=e=>{let{pressReleases:t,locale:n}=e,{t:o}=(0,s.Bd)();if(0===t.length){let e=o("Sorry, there are no results matching your criteria."),t=o("Try again, or clear your filters.");return(0,T.J)(e),(0,i.jsxs)(b.w,{padding:"top",children:[(0,i.jsx)(p.H2,{children:e}),(0,i.jsx)(I,{children:t})]})}let r=o("Continue reading");return(0,i.jsx)(c.b,{numCols:2,children:t.map(e=>{let t=e.date?new Date(e.date).toLocaleDateString(n,{year:"numeric",month:"long",day:"numeric"}):"";return(0,i.jsx)(A,{heading:e.title,bodyText:(0,a.l)(e.description).slice(0,200),breadcrumb:t,textAlignment:y.m_.Left,media:{type:"image",data:{src:e.customImage?.src||"/images/hootsuite-logo.svg",alt:e.customImage?.alt||"Hootsuite",width:313,height:42}},link:e.slug,linkAttributes:{"aria-label":o(`Link to ${e.title}`)},ctaLabel:r,ellipsedBodyText:!0},e.title)})})};function P(e){let{pageContext:t}=e,{paginatedIds:n,pressReleases:a,totalPressReleases:l,startingYearFilter:T,locale:A,preview:P}=t,{t:E}=(0,s.Bd)(),Y=(0,r.useRouter)().query,H={label:E("All Dates")},F={label:E("All Types")},[L,R]=(0,o.useState)(n),[M,K]=(0,o.useState)(a),[N,D]=(0,o.useState)(Math.ceil(l/v.m)),[J,O]=(0,o.useState)(!1),W=(0,o.useRef)(null),_=Y.Year||H.label,q="",U="";_!==H.label?(q=_,U=(parseInt(_)+1).toString()):(q=H.label,U=H.label);let z=Y.Type||F.label,G=parseInt(Y.page)||1;(0,w.QV)(W,G>1),(0,o.useEffect)(()=>{let e={[E("Featured Coverage")]:"Featured Coverage",[E("Press Release")]:"Press Release"};if(q===H.label&&U===H.label&&z===F.label){R(n),D(Math.ceil(l/v.m));return}(async(e,t,n)=>{let{chunks:i,total:o}=await (0,k.cj)({locale:A,preview:P},{...e!==H.label&&{gteDate:e},...t!==H.label&&{lteDate:t},...n!==F.label&&{type:n}});R(i),D(Math.ceil(o/v.m))})(q,U,e[z])},[n,l,q,U,z,H.label,F.label,A,P,E]),(0,o.useEffect)(()=>{(async e=>{K(await (0,k.YR)({locale:A,preview:P},L[e-1]))})(G)},[G,L,A,P]);let V=()=>{let e=document.getElementById("noFilter");e&&O(e.getBoundingClientRect().bottom<=90)};(0,o.useEffect)(()=>{V(),window.addEventListener("scroll",V)},[]);let Z=new Date().getFullYear(),Q=[...Array(Z-new Date(T).getFullYear()+1).keys()].map(e=>(Z-e).toString());return Q.unshift(H.label),(0,i.jsxs)("div",{children:[(0,i.jsx)(b.w,{colorTheme:(0,j.O4)("backgroundSecondary"),children:(0,i.jsx)(u.lq,{media:{type:"image",data:{src:"/images/newsroom/newsroom-hero.png",alt:"woman taking a picture using a camera with headphones around her neck",height:600}},alignment:u.C1.LEFT,preheader:E("NEWSROOM"),headingText:E("When we’re not spreading the news, we’re making it"),ctas:[{buttonType:d.EY.PRIMARY,label:E("Subscribe for updates"),dataTarget:"#sub4updates"}],backgroundColor:"backgroundSecondary"})}),(0,i.jsx)("div",{id:"noFilter",ref:W,children:(0,i.jsxs)(b.w,{colorTheme:(0,j.O4)("white"),padding:"top",children:[(0,i.jsx)($,{children:(0,i.jsx)(p.H2,{children:E("Hootsuite in the news")})}),(0,i.jsx)(m.d,{disabled:J,filters:[{name:"Type",options:[F.label,E("Featured Coverage"),E("Press Release")]},{name:"Year",options:Q}],buttons:{clearText:E("Clear")}}),(0,i.jsx)(B,{pressReleases:M,locale:A}),(0,i.jsx)(S,{colorTheme:(0,j.O4)("white"),padding:"bottom",children:(0,i.jsx)(x.d,{numPages:N})})]})}),(0,i.jsx)(b.w,{colorTheme:(0,j.O4)("backgroundPrimary"),padding:"none",children:(0,i.jsxs)(c.b,{numCols:2,children:[(0,i.jsx)(y.Zs,{heading:E("We have amazing customers"),bodyText:E("We have 4,000+ enterprise customers worldwide."),textAlignment:y.m_.Left,media:{type:"image",data:{src:"/images/newsroom/amazing-customers.jpg",alt:"",width:630,height:313}}}),(0,i.jsx)(y.Zs,{heading:E("We are socially responsible"),bodyText:E("Our social impact strategy focuses on positively impacting our employees, customers, neighbourhoods, communities, and our environment for the long term."),textAlignment:y.m_.Left,media:{type:"image",data:{src:"/images/newsroom/socially-responsible.jpg",alt:"",width:630,height:313}}}),(0,i.jsx)(y.Zs,{heading:E("We’re the leader in social media management"),bodyText:E("We’re trusted by more than 18 million customers and employees at more than 80% of the Fortune 1000."),textAlignment:y.m_.Left,media:{type:"image",data:{src:"/images/newsroom/leader-social-media.jpg",alt:"",width:630,height:313}}}),(0,i.jsx)(y.Zs,{heading:E("We connect with the tools you use every day"),bodyText:E("With more than 150 technology partners and integrated applications, our collaborative ecosystem helps boost the adoption and integration of social media across your organization."),textAlignment:y.m_.Left,media:{type:"image",data:{src:"/images/newsroom/connect-tools.jpg",alt:"",width:630,height:313}}})]})}),(0,i.jsx)(b.w,{colorTheme:(0,j.O4)("offsetPrimary"),children:(0,i.jsxs)($,{children:[(0,i.jsx)(p.H2,{children:E("Brand Assets and Logos")}),(0,i.jsx)(I,{children:E("Visit our media portal for brand guidelines, logos, photography, and other brand assets.")}),(0,i.jsx)(d.$n,{href:"https://hootsuite.widencollective.com/portals/bafpk5oo/MediaKitAssets",children:E("View Brand Assets")})]})}),(0,i.jsxs)(b.w,{colorTheme:(0,j.O4)("backgroundPrimary"),children:[(0,i.jsxs)($,{children:[(0,i.jsx)(p.H2,{children:E("Loved by our customers, partners, and employees")}),(0,i.jsx)(I,{children:E("Here’s a few awards we’ve picked up in the last few years:")})]}),(0,i.jsxs)(c.b,{numCols:4,children:[(0,i.jsx)(g.dd,{body:`"${E("Hootsuite leads the pack with its seller focus and scale.")}"`,media:{type:"image",data:{src:"https://images.ctfassets.net/ta4ffdi8h2om/HFibmUK3H53YjjdEYpfYL/10bf47cd37aea5c85cb32f8d6a352e0e/forrester-wave.png",alt:E("Hootsuite awarded the Forrester New Wave Leader 2019 award in the Sales Social Engagement Tools category"),height:200,width:200}},roundImage:!1,imageBorder:!1}),(0,i.jsx)(g.dd,{body:E("Leader in the categories of:\nBrand Advocacy, Employee Advocacy, Social Media Suites, Social Media Management, Social Media Monitoring, Social Media Analytics"),media:{type:"image",data:{src:"https://images.ctfassets.net/ta4ffdi8h2om/VvtKbi055sg5m1RkbJylo/fbd832a9d005f28e33fc43caf5c2a6b0/g2crowd.png",alt:E("Badge commemorating Hootsuites ranking in multiple G2 categories"),height:200,width:200}},roundImage:!1,imageBorder:!1}),(0,i.jsx)(g.dd,{body:E("Hootsuite was ranked #3 of the top 25 companies to work for in Canada."),media:{type:"image",data:{src:"https://images.ctfassets.net/ta4ffdi8h2om/7HEooEtVMEe2Cfuymar5My/d3f789b46121b1ac8103b7a126ed25ac/linkedin_191211_163705.png",alt:E("Badge commemorating Hootsuite being ranked in LinkedIn's 2018 Top Companies"),height:200,width:200}},roundImage:!1,imageBorder:!1}),(0,i.jsx)(g.dd,{body:`"${E("The social data and insights that Hootsuite delivers are powerful, and help our joint customers achieve competitive advantage.")}"`,media:{type:"image",data:{src:"https://images.ctfassets.net/ta4ffdi8h2om/4kYh0BJPkQh82s0lWsTW8w/de33e7c580743f30aa0d6d412d2186b4/adobe.png",alt:E("Badge commemorating Hootsuite being awarded Adobe Experience Cloud Exchange Partner of the Year"),height:200,width:200}},roundImage:!1,imageBorder:!1})]})]}),(0,i.jsx)(h.a,{id:"sub4updates",size:f.T.MEDIUM,heading:E("Subscribe for updates"),children:(0,i.jsx)(C.w,{marketoFormIds:["4043"],successMessage:E("Thank you for subscribing! You will receive a confirmation email shortly."),submitButtonLabel:E("Submit")})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[370,593,636,792],()=>t(31548)),_N_E=e.O()}]);