import React from 'react';

export default class YglfTalk extends React.Component {
    iframeLoaded(e) {
        var iframe = e.target;
        iframe.contentWindow.document.body.addEventListener('keydown', this.onIframeKeyDown);
    }
    onIframeKeyDown(e) {
        e.stopImmediatePropagation();
        window.dispatchEvent(new KeyboardEvent('keydown', { 'keyCode': e.keyCode }));
    }
    render() {
        return (
            <iframe className="external-content"
                ref={(iframe) => { this.iframe = iframe; }} src={"/yglf-talk/#slide=" + this.props.slide}
                onLoad={(e) => this.iframeLoaded(e)} />
        );
    }
}