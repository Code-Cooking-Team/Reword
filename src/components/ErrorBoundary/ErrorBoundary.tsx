import * as Sentry from '@sentry/browser'
import React, { Component, ErrorInfo } from 'react'

type ErrorBoundaryState = {
    error: Error | null
    eventId: string | null
}

export class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
    public state = {
        error: null,
        eventId: null,
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ error })

        Sentry.withScope(scope => {
            scope.setExtras(errorInfo)
            this.setState({ eventId: Sentry.captureException(error) })
        })
    }

    public render() {
        if (this.state.error) {
            return (
                <div>
                    <h1>Error occurred ;(</h1>
                    <a onClick={this.handleReportDialog}>Report feedback</a>
                    <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
                </div>
            )
        }

        return this.props.children
    }

    private handleReportDialog = () => {
        Sentry.showReportDialog({ eventId: this.state.eventId })
    }
}
