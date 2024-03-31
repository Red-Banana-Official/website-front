import React from 'react';
import { toast } from 'react-toastify';
import { useDark } from '../App';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <p className={'text-white mx-auto my-auto'}>A unknow error occured</p>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
