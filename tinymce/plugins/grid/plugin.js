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
              editor.insertContent(`
                <div class="row">
                    ${getColumns(data.columns)}
                </div>
            `);
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

function getColumns(col) {
    let renderedColumns = [];
    for (let c = 0; c < parseInt(col); c++) {
        renderedColumns = [...renderedColumns, `
        <div class="col-lg-6">
            <p>${c}</p>
        </div>
    `]
    }
    return renderedColumns.join('');
}