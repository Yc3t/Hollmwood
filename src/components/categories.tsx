import { Category } from "@prisma/client";

interface CategoriesProps {
    data: Category[];
}

export default function Categories({ data }: CategoriesProps) {
    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {data.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}