tinymce.PluginManager.add('grid', function(editor, url) {
    const openDialog = function () {
        return editor.windowManager.open({
            title: 'Select the number of rows and columns',
            size: "large",
            body: {
              type: "panel",
              items: [{
                type: "input",
                name: "rows",
                label: "Number of Rows",
              }, 
              {
                type: "input",
                name: "columns",
                label: "Number of Columns",
              }, ],
            },
            buttons: [{
                type: "cancel",
                text: "Close",
              },
              {
                type: "submit",
                text: "Save",
                primary: true,
              },
            ],
            onSubmit: function (api) {
              const data = api.getData();
                editor.insertContent(
                    `${renderRows(data.rows, data.columns)}`
                );
              api.close();
            },
        })
    }
    
    editor.ui.registry.addButton('grid', {
        text: 'Insert a Grid',
        onAction:() => {
            openDialog();
        }
    });

    return {
        getMetadata: function () {
          return {
            name: "Grid Display plugin",
            url: "http://exampleplugindocsurl.com" // TODO: add link to docs
          };
        }
      };
})

function renderRows(rows, columns) {
    let renderedRows = [];
    for (let r = 0; r < parseInt(rows); r++) {
        renderedRows = [...renderedRows, `
            <div class="row" style="background-color: #eee">
                ${renderColumns(columns)}
            </div>
        `]
    }
    return renderedRows.join('');
}

function renderColumns(columns) {
    let renderedColumns = [];
    let columnWidth = 12 / parseInt(columns);
    for (let c = 0; c < parseInt(columns); c++) {
        renderedColumns = [...renderedColumns, `
        <div class="col-lg-${columnWidth}">
            <p>COL ${c}</p>
        </div>
    `]
    }
    return renderedColumns.join('');
}