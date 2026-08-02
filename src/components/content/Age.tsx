const getAge = (from: Date): number => {
    const now = new Date();
    const years = now.getFullYear() - from.getFullYear();
    const birthdayThisYear = new Date(now.getFullYear(), from.getMonth(), from.getDate());

    return years - (now < birthdayThisYear ? 1 : 0);
};

export default function() {
    return <>{getAge(new Date(1996, 1, 13))}</>
}