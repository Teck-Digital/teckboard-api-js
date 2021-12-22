export default interface Company {
    id: string;
    name: string;
    color_scheme: string;
    owner_id: string;
    description: string;
    slug: string;
    address: {
        postal_code: string;
        city: string;
        street: string;
        house_number: string;
    };
    phone: string;
    url: string;
    created_at: string;
    updated_at: string;
}
