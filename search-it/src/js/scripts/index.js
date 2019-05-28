import marked from 'marked';

const transformLink = (link) => {
    return marked(link)
}

console.log(transformLink("[drawn to books about upheaval](https://www.gatesnotes.com/About-Bill-Gates/Summer-Books-2019?WT.mc_id=05_20_2019_10_SummerBooks2019_BG-RE_&amp;WT.tsrc=BGRE)"))

