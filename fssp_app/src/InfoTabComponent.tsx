import React from "react";
import { Frame } from "./Frame";

interface InfoTabProps {
    ultra1: number;
    ultra2: number;
    ultra3: number;
}

export class InfoTabComponent extends React.Component<InfoTabProps> {
    constructor(props: Readonly<InfoTabProps>) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Info</h1>
                <Frame className="info-frame">
                    <h2>Sensors</h2>
                    <h4 className="green">Status: Active</h4>
                    <h4>Ultrasonic Sensor 1: {this.props.ultra1}</h4>
                    <h4>Ultrasonic Sensor 2: {this.props.ultra2}</h4>
                    <h4>Ultrasonic Sensor 3: {this.props.ultra3}</h4>
                </Frame>
            </div>
        );
    }
}