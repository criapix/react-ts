import React from "react";

import DateTimeFormatter from "./DateTimeFormatter";

interface ClockState {
    date: Date
}

export default class Clock extends React.Component<any, ClockState> {
    idInterval!: NodeJS.Timeout;

    state = {
        date: new Date()
    };

    componentDidMount(): void {
        this.idInterval = setInterval(() => {
            this.atualizarRelogio();
        }, 1000);
    }

    componentWillUnmount(): void {
        clearInterval(this.idInterval);
    }

    atualizarRelogio(): void {
        this.setState({ date: new Date() });
    }

    render(): JSX.Element {
        const { date } = this.state;
        return <div>
            <DateTimeFormatter date={date} />
        </div>;
    }
}