import type ICategory from "@interfaces/ICategory";
import type IRecipe from "@interfaces/IRecipe";

async function getData<T>(url: string) {
    const response = await fetch(url);
    return response.json() as T;
}

export async function getCategories() {
    return getData<ICategory[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
}

export async function getRecipes() {
    return getData<IRecipe[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
}
