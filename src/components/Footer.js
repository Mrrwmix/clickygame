import React from "react";

const Footer = () => {
  return (
    <div className='row static-bottom bg-dark text-primary'>
      <div className='col-md-12'>
        <h4 className='text-center mt-1'>
          Github Repository:
          <a
            href='https://github.com/Mrrwmix/clickygame'
            target='_blank'
            rel='noopener noreferrer'
            className='text-info'
          >
            {" "}
            https://github.com/Mrrwmix/clickygame
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
