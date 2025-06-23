export type UserType = {
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "website": string;
};

function User ({id, name, username, email, website}: UserType) {
    return (
    <div 
        className={
            "grid grid-cols-5 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
        }
    >
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <p className="text-blue-500 hover:underline">
            <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
                {website}
            </a>
        </p>
    </div>
    );
}   

export default User;