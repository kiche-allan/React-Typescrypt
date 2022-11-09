type RandomNumberProps = {
    value: number
    isPositive?:boolean
    isNegative?: boolean
    isZero?: boolean
}

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
} : RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'}{isNegative && 'negative'}{' '}
            {isZero && 'zero'}
        </div>
    )
}