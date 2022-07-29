export default function classes(roles) {
    let collection = [];
    roles.forEach((role) => {
        if (role.default) {
            collection.push(role.default);
            return;
        }
        if (role.condition) {
            collection.push(role.classes);
        }
    });
    return collection.join(" ").trim();
}
