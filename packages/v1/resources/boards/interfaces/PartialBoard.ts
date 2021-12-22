import Icon from '../../../interfaces/Icon';

export default interface PartialBoard {
    id: string;
    name: string;
    color_scheme: string;
    company_id: string;
    icon?: Icon;
    slug: string;
    uri: string;
    url: string;
}
