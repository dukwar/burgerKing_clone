import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
    children: React.ReactNode
}

class Portal extends Component<PortalProps> {

   private el:HTMLDivElement = document.createElement('div');

   public componentDidMount():void {
        document.body.appendChild(this.el);
    }

   public componentWillUnmount():void {
        document.body.removeChild(this.el);
    }

    render():PortalProps {
        const { children } = this.props;

        return ReactDOM.createPortal(children, this.el);
    }
}

export default Portal;