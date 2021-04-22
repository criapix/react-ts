
interface DateTimeFormatterProps {
    date: Date
}

export function DateTimeFormatter(props: DateTimeFormatterProps) {
    return (
        <div>{props.date.toLocaleString()}</div>
    );
}