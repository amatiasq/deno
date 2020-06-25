### Discord docs => json

```re
(\w+)(\??)\t(\??)([\w| ]+)\t(.+)
```

```sh
/** $5 */\n$1$2$3: $4;
```

Query String Params

### Tables to interfaces

```js
copy($$('.markdown-11q6EU table').map(x => {
    const h6 = x.previousSibling;
    const name = text(h6).replace(/\s/g, '').replace(/Structure/, '');
    const link = `${window.location}#${h6.id}`;
    const headers = $$(x, 'thead tr th').map(y => text(y).toLowerCase())
    const rows = $$(x, 'tbody tr');

    const iField = headers.indexOf('field')
    const iType = headers.indexOf('type')
    const iDescription = headers.indexOf('description')
    const iRequired = headers.indexOf('required')
    const iDef = headers.indexOf('default');

    const props = rows.map(y => {
        const field = text(y.children[iField]);
        const type = text(y.children[iType]);
        const description = text(y.children[iDescription]);
        const required = iRequired === -1 ? '' : text(y.children[iRequired]);
        const def = iDef === -1 ? '' : text(y.children[iDef]);

        const isOptional =
            (iDef !== -1 && def !== '-') ||
            (iRequired !== -1 && required === 'false') ||
            (field && field.includes('?')) ||
            (type && type.includes('?'));

        const defPrint = def && isOptional ? ` (DEFAULT: ${def})` : '';
        const descPrint = description || defPrint ? `/** ${description}${defPrint} */\n    ` : ''
        const typePrint = type && type.replace('?', '').replace(/array of (.+)/, '$1[]')
        const fieldPrint = field && field.replace('?', '')

        return `    ${descPrint}${fieldPrint}${isOptional ? '?' : ''}: ${typePrint};
`})

    return `export interface Raw${name} {\n${props.join('')}}`

    function text(el) {
        return el && el.textContent.trim()
    }

    function $$(el, selector) {
        return Array.from(el.querySelectorAll(selector))
    }
}).join('\n\n'))
```