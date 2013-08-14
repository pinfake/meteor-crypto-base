Package.describe({
    summary: "Base Package for Crypto.js, standard secure algorithms"
});

Package.on_use(function (api) {
    api.export( 'CryptoJS' );
    api.add_files('crypto.js', ['client', 'server']);
});
