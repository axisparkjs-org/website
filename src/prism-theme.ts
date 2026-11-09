import type { PrismTheme } from 'prism-react-renderer';

/**
 * Code colors of the site, the same as the code windows of the home page: gold keywords, the text color for
 * names, and soft green, blue and lilac for strings, variables and properties. The background is translucent
 * so code blocks are glass over the page (src/css/custom.css).
 */
const theme: PrismTheme = {
    plain: {
        color: '#E6E9F5',
        backgroundColor: 'rgba(6, 8, 20, 0.72)'
    },
    styles: [
        { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#6F7796', fontStyle: 'italic' } },
        { types: ['punctuation', 'operator'], style: { color: '#9AA2BF' } },
        { types: ['keyword', 'builtin', 'important', 'atrule', 'selector'], style: { color: '#E8BC3F' } },
        { types: ['string', 'char', 'attr-value', 'regex', 'inserted'], style: { color: '#A9D39A' } },
        { types: ['function', 'class-name', 'maybe-class-name'], style: { color: '#F4F6FC' } },
        { types: ['variable', 'parameter', 'constant', 'symbol'], style: { color: '#93B4FF' } },
        { types: ['property', 'attr-name', 'tag'], style: { color: '#D7A8FF' } },
        { types: ['number', 'boolean'], style: { color: '#F49A62' } },
        { types: ['decorator', 'annotation'], style: { color: '#EE6A24' } },
        { types: ['deleted'], style: { color: '#F07A6A' } }
    ]
};

export default theme;
