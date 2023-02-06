const {  withAndroidManifest } = require('@expo/config-plugins');

const withPlugins = (config) => {
    return withAndroidManifest(config, config => {
        config.modResults = addAndroidTts(config, config.modResults);
        return config;
    });
}

function addAndroidTts(_config, androidManifest) {
    console.log("BEFORE", androidManifest.manifest.queries)
    androidManifest.manifest.queries.push({
        intent: [
            {
                action: [
                    {
                        $: {
                          "android:name": "android.intent.action.TTS_SERVICE"  
                        }
                    }
                ]
            }
        ]
    })
    console.log("AFTER", androidManifest.manifest.queries)
    return androidManifest;
}

module.exports = withPlugins;
