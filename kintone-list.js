
    (() => {
        "use strict";
        kintone.events.on('app.record.index.show', function(event) {
            console.log('GitHubからロードされたファイルが実行されました');
            console.log('一覧画面のイベント:', event);
            return event;
        });
    })();
    