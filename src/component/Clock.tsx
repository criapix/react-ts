import React from "react";
import { DateTimeFormatter } from "./DateTimeFormatter";

interface ClockState {
    date: Date
}

export class Clock extends React.Component<{}, ClockState> {
    idInterval!: NodeJS.Timeout;

    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date()
        };

    }
    componentDidMount() {
        this.idInterval = setInterval(() => {
            this.atualizarRelogio();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.idInterval);

    }

    atualizarRelogio() {
        this.setState({ date: new Date() });
    }

    render() {
        return <div>
            <DateTimeFormatter date={this.state.date} />
        </div>
    }
}