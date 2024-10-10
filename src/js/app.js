export default function getAttack(character) {
    const result = [];

    const { special } = character;

    for (const item of special) {
        if (Object.prototype.hasOwnProperty.call(item, 'description')) {
            const itemUpdate = { ...item };
            result.push(itemUpdate);
        } else {
            const itemUpdate = { ...item, description: "Описание недоступно" };
            result.push(itemUpdate);
        }
    }
    return result;
}