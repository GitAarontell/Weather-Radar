import React from 'react';
import './styles.css';

function Moon(props) {
    return (
        <div className='moonContainer bothContainers'>
            <div className={`moon ${props.time}`}>
                <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="moon 1">
                        <g id="Group">
                            <path id="Vector" d="M469.491 254.151C469.491 301.806 453.322 345.782 426.035 381.159C386.39 432.559 328.331 457 257.246 457C137.234 457 45 371.045 45 254.151C45 186.335 67.6358 125.968 118.566 87.2318C155.423 59.1991 201.804 42.4957 252.191 42.4957C372.203 42.4957 469.491 137.257 469.491 254.151Z" fill="#E3E0E4" />
                            <path id="Vector_2" d="M189.088 222.427C189.088 227.629 188.006 232.584 186.049 237.091C180.177 250.612 166.605 254.647 150.584 254.647C129.224 254.647 119.292 244.72 119.292 223.914C119.292 208.37 121.4 193.538 135.196 187.782C139.867 185.834 145.01 184.756 150.411 184.756C171.772 184.756 189.088 201.622 189.088 222.427V222.427Z" fill="#D4CFD5" />
                            <path id="Vector_3" d="M285.27 380.549C285.27 389.16 282.304 397.096 277.312 403.441C270.244 412.427 259.113 411.608 246.593 411.608C225.233 411.608 207.917 401.354 207.917 380.548C207.917 359.743 225.233 342.877 246.593 342.877C267.954 342.877 285.27 359.744 285.27 380.549Z" fill="#D4CFD5" />
                            <path id="Vector_4" d="M277.31 403.44C270.247 412.431 259.112 418.221 246.593 418.221C225.23 418.221 207.917 401.358 207.917 380.549C207.917 380.311 207.917 380.074 207.927 379.836C229.128 391.306 252.507 399.425 277.31 403.44Z" fill="#C5BEC6" />
                            <path id="Vector_5" d="M376.871 171.372C376.871 175.759 375.599 179.856 373.396 183.334C369.273 189.839 362.548 192.582 354.123 192.582C341.194 192.582 332.38 184.174 332.38 171.581C332.38 162.468 335.541 154.395 343.473 150.745C346.503 149.351 349.889 148.571 353.462 148.571C366.391 148.571 376.871 158.779 376.871 171.372Z" fill="#D4CFD5" />
                            <path id="Vector_6" d="M394.174 345.852C394.174 348.861 393.576 351.733 392.489 354.364C389.026 362.741 380.604 364.361 370.765 364.361C357.836 364.361 354.123 358.653 354.123 346.061C354.123 335.042 355.38 325.641 366.047 323.514C367.571 323.211 369.148 323.051 370.765 323.051C383.694 323.05 394.174 333.258 394.174 345.852V345.852Z" fill="#D4CFD5" />
                            <path id="Vector_7" d="M185.983 237.248C180.08 250.681 166.37 260.099 150.411 260.099C129.048 260.099 111.735 243.236 111.735 222.427C111.735 206.883 121.404 193.529 135.195 187.779C133.2 192.33 132.091 197.336 132.091 202.6C132.091 223.409 149.404 240.272 170.767 240.272C176.172 240.272 181.312 239.191 185.983 237.248Z" fill="#C5BEC6" />
                            <path id="Vector_8" d="M375.172 179.878C371.721 188.255 363.304 194.174 353.462 194.174C340.536 194.174 330.053 183.963 330.053 171.372C330.053 160.249 338.236 150.98 349.055 148.988C347.956 151.615 347.355 154.49 347.355 157.493C347.355 170.084 357.839 180.295 370.765 180.295C372.271 180.295 373.747 180.156 375.172 179.878V179.878Z" fill="#C5BEC6" />
                            <path id="Vector_9" d="M392.474 354.358C389.024 362.735 380.607 368.653 370.765 368.653C357.839 368.653 347.355 358.442 347.355 345.852C347.355 334.729 355.538 325.459 366.358 323.467C365.258 326.094 364.658 328.969 364.658 331.973C364.658 344.563 375.141 354.774 388.067 354.774C389.574 354.774 391.049 354.635 392.474 354.358Z" fill="#C5BEC6" />
                            <path id="Vector_10" d="M260.842 124.779C269.555 124.779 276.618 117.899 276.618 109.412C276.618 100.926 269.555 94.0464 260.842 94.0464C252.13 94.0464 245.067 100.926 245.067 109.412C245.067 117.899 252.13 124.779 260.842 124.779Z" fill="#D4CFD5" />
                            <path id="Vector_11" d="M250.156 258.612C259.993 258.612 267.967 250.845 267.967 241.263C267.967 231.682 259.993 223.914 250.156 223.914C240.319 223.914 232.344 231.682 232.344 241.263C232.344 250.845 240.319 258.612 250.156 258.612Z" fill="#D4CFD5" />
                            <path id="Vector_12" d="M87.3078 310.163C95.4585 310.163 102.066 303.727 102.066 295.788C102.066 287.849 95.4585 281.413 87.3078 281.413C79.1572 281.413 72.5498 287.849 72.5498 295.788C72.5498 303.727 79.1572 310.163 87.3078 310.163Z" fill="#C5BEC6" />
                            <path id="Vector_13" d="M398.754 283.396C406.905 283.396 413.512 276.96 413.512 269.021C413.512 261.082 406.905 254.647 398.754 254.647C390.603 254.647 383.996 261.082 383.996 269.021C383.996 276.96 390.603 283.396 398.754 283.396Z" fill="#D4CFD5" />
                            <path id="Vector_14" d="M158.045 155.838C162.165 155.838 165.505 152.584 165.505 148.571C165.505 144.558 162.165 141.304 158.045 141.304C153.925 141.304 150.584 144.558 150.584 148.571C150.584 152.584 153.925 155.838 158.045 155.838Z" fill="#D4CFD5" />
                            <path id="Vector_15" d="M146.849 356.092C150.969 356.092 154.31 352.839 154.31 348.826C154.31 344.813 150.969 341.559 146.849 341.559C142.729 341.559 139.389 344.813 139.389 348.826C139.389 352.839 142.729 356.092 146.849 356.092Z" fill="#C5BEC6" />
                            <g id="Group_2">
                                <path id="Vector_16" d="M343.284 403.678C347.404 403.678 350.745 400.424 350.745 396.411C350.745 392.398 347.404 389.144 343.284 389.144C339.164 389.144 335.824 392.398 335.824 396.411C335.824 400.424 339.164 403.678 343.284 403.678Z" fill="#D4CFD5" />
                                <path id="Vector_17" d="M428.779 224.242C432.899 224.242 436.24 220.988 436.24 216.975C436.24 212.962 432.899 209.708 428.779 209.708C424.659 209.708 421.319 212.962 421.319 216.975C421.319 220.988 424.659 224.242 428.779 224.242Z" fill="#D4CFD5" />
                                <path id="Vector_18" d="M322.928 114.201C327.048 114.201 330.389 110.947 330.389 106.934C330.389 102.921 327.048 99.6674 322.928 99.6674C318.808 99.6674 315.468 102.921 315.468 106.934C315.468 110.947 318.808 114.201 322.928 114.201Z" fill="#D4CFD5" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default Moon;