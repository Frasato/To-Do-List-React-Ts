export type Item = {
    id: number,
    title: string,
    description: string,
    onClick: () => void,
    toRight: () => void,
    toLeft: () => void,
}