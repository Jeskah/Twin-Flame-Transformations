import { supabase } from "../supabase";

export async function getPackageById(id) {
const { data, error } = await supabase
    .from("packages")
    .select(`
        id,
        name,
        description,
        img_url,
        package_options (
            id,
            title,
            option_variants (
                id,
                duration,
                price
                )
            )
        `)
    .eq("id", id)
    .single();

if (error) {
    console.error(error);
    return null;
}

return data;
}

export async function getPackages() {
const { data, error } = await supabase
    .from("packages")
    .select("*");

if (error) {
    console.error(error);
    return [];
}

return data;
}