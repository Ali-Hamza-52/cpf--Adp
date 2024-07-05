import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoBookmarksOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaEdit } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";


const SocialIcon = {
    facebook: <FaFacebookF size={16} />,
    twitter: <BsTwitterX size={16} />,
    linkedin: <LiaLinkedinIn size={16} />,
    share: <IoShareSocialOutline size={16} />,
    bookmark: <IoBookmarksOutline size={16} />,
    like: <SlLike size={16} />,
    dislike: <SlDislike size={16} />,
    edit: <FaEdit size={70} />,
    reload: <IoReload size={16} />,
    calendar: <BsCalendarDate size={16} />,
    eye: <AiOutlineEye size={16} />,
    book: <IoBookOutline size={16} />
};

export default SocialIcon;
