export const colorCode = (type: string | undefined) => {
    const color: any = {
        sponsored: '#c3a604',
        essentials: '#008c76',
        opinion: '#0033ff',
        defi: '#f65058ff',
    };

    return type ? color[type] : 'black';
};
