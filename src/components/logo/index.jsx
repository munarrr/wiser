import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import cn from "classnames";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import Avatar from '../../data/images/logo/logo.png'

const Logo = ({ className }) => {
    return (
        <div className={cn("logo", className)}>
            <Link to="/">
                    <Image src={Avatar} alt="logo" />
            </Link>
        </div>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
};

export default Logo;
