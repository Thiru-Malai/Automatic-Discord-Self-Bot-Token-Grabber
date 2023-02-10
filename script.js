TOKEN = ""
window.webpackChunkdiscord_app.push([
    [Math.random()],
    {},
    req => {
      for (const m of Object.keys(req.c)
        .map(x => req.c[x].exports)
        .filter(x => x)) {
        if (m.default && m.default.getToken !== undefined) {
          TOKEN = m.default.getToken()
          // return copy(m.default.getToken());
        }
        if (m.getToken !== undefined) {
          TOKEN = m.getToken()
          // return copy(m.getToken());
        }
      }
    },
  ]);
  console.log(TOKEN)

  navigator.clipboard.writeText(TOKEN).then(() => {
    console.log('Content copied to clipboard');
    /* Resolved - text copied to clipboard successfully */
  },() => {
    console.error('Failed to copy');
    /* Rejected - text failed to copy to the clipboard */
  });

  console.log('%cWorked!', 'font-size: 50px');
  console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');