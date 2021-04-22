interface DateTimeFormatterProps {
    date: Date
}

export default function DateTimeFormatter(props: DateTimeFormatterProps): JSX.Element {
    const { date } = props;

    return (
        <div>{date.toLocaleString()}</div>
    );
}