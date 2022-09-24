import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const Bed = ({ title, className, style }: IconProps) => (
    <svg className={className} style={style} width={12} height={9} viewBox="0 0 12 9" fill="none">
        <title>{title}</title>
        <g clipPath="url(#a)" fill="#4F5657" fillOpacity={0.9}>
            <path d="M11.142 7.72H.858v.387c-.002.271-.182.464-.43.464-.247 0-.426-.195-.427-.467 0-.982-.003-1.964.001-2.946.003-.735.564-1.3 1.299-1.3 3.133-.002 6.265-.002 9.398 0 .736.001 1.296.563 1.299 1.3.004.982.001 1.964 0 2.946 0 .273-.178.466-.426.467-.247.001-.428-.193-.43-.464V7.72ZM2.572 2.993H1.287V.487c0-.32.167-.487.486-.487h8.447c.327 0 .493.167.493.495v2.497H9.428V2.59c-.005-.502-.372-.872-.871-.875a92.29 92.29 0 0 0-1.258 0c-.5.003-.866.374-.87.876-.002.129 0 .258 0 .398H5.57v-.38c-.002-.527-.366-.893-.891-.894-.406-.002-.812-.002-1.218 0-.519.001-.886.367-.89.883v.395Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h12v8.571H0z" />
            </clipPath>
        </defs>
    </svg>
);

Bed.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Bed.defaultProps = {
    className: '',
    style: {},
    title: 'Bed',
};

export default Bed;
