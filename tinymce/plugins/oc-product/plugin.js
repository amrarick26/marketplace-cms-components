tinymce.PluginManager.add('oc-product', function (editor, url) {
  const openDialog = function () {
    console.log("EDITOR", editor);
    console.log("cookies", editor.contentDocument.cookie)
    // https://www.tiny.cloud/docs/api/tinymce/tinymce.windowmanager/
    return editor.windowManager.open({
      title: "Select a Product",
      size: "large",
      body: {
        type: "panel",
        items: [{
          type: "input",
          name: "productId",
          label: "Product Identifier",
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
        const token = getCookie(editor, 'ordercloud.token');
        fetch(`https://api.ordercloud.io/v1/me/products/${data.productId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response.json().then((product) => {
              editor.insertContent(`
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${product.Name}</h5>
                  <p class="card-text">ID: <code>${product.ID}</code></p>
                  <p class="card-text">Description: <code>${product.Description}</code></p>
                </div>
              </div>`);
              api.close();
            });
          } else {
            api.close();
          }
        });
      },
    });
  };

  editor.ui.registry.addButton("oc-product", {
    text: "Insert a Product",
    onAction: () => {
      // tslint:disable-next-line:no-console
      openDialog();
    },
  });

  return {
    getMetadata: function () {
      return {
        name: "OrderCloud Product Display plugin",
        url: "http://exampleplugindocsurl.com" // TODO: add link to docs
      };
    }
  };
})

function getCookie(editor, cname) {
  var name = cname + "=";
  var cookie = editor.contentDocument.cookie;
  var decodedCookie = decodeURIComponent(cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
