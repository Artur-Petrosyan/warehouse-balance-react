import React from 'react';
import CardAnt from 'antd/es/card/Card';
import 'src/core/ui/components/Card/card.scss'
import Meta from 'antd/es/card/Meta';
import {HeartOutlined, StarOutlined} from '@ant-design/icons'
import {useGetLocationPathName} from "src/core/lib/useGetLocationPathName";
import {navigateWithRegex} from "src/core/lib/navigateWithRegex";

/**
 * Renders a card component with the given props.
 *
 * @param {object} props - The component's props.
 * @param {string} props.id - The card's unique identifier.
 * @param {string} props.name - The card's name.
 * @param {string} props.image - The card's image URL.
 * @param {number} props.rating - The card's rating.
 * @returns {JSX.Element} The rendered card component.
 *
 * @example
 * import React from 'eact';
 * import { Card } from './Card';
 *
 * const card = (
 *   <Card
 *     id='1'
 *     name='Example Card'
 *     image='https://example.com/image.jpg'
 *     rating={4.5}
 *   />
 * );
 *
 * export default card;
 */
export const Card = ({ id, name, image, rating }) => {
    const {navigate, path} = useGetLocationPathName();

    return (
        <CardAnt
            className='card'
            key={id}
            title={name}
            cover={image? <img src={image} alt='img' className='card__image' /> : <span>Not image</span>}
            onClick={() => navigateWithRegex && navigateWithRegex(id, name, navigate,path)}
            size='small'
        >
            <Meta title={name} />
            <div className='card__icons'>
                <HeartOutlined className='card__heart' />
                <div className='card__rating-star'>
                    <StarOutlined className='card__star' />
                    <span className='card__rating'>{rating}</span>
                </div>
            </div>
        </CardAnt >
    );
};