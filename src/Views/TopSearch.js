import React from "react";

function TopSearch(){
    return (
        <div class="grid grid-cols-4 gap-4">
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    Công ty React JS
                </h3>
                <div className="font-bold mb-3">
                    Lương tháng: 13.000.000 VND
                </div>
                <div className="mb-3">
                    Thông tin liên hệ: 0923 332 424
                </div>
                <div className="mb-3">
                    Địa chỉ: Hà Nội
                </div>
             </div>

            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    Công ty TNHH Một Thành Viên
                </h3>
                <div className="font-bold mb-3">
                    Lương tháng: 7.000.000 VND
                </div>
                <div className="mb-3">
                    Thông tin liên hệ: 0965 226 382
                </div>
                <div className="mb-3">
                    Địa chỉ: Hà Nội
                </div>
            </div>

            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    Công ty TNHH Kinh tế Quốc Dân
                </h3>
                <div className="font-bold mb-3">
                    Lương tháng: 4.000.000 VND
                </div>
                <div className="mb-3">
                    Thông tin liên hệ: 0245 234 345
                </div>
                <div className="mb-3">
                    Địa chỉ: Hà Nội
                </div>
            </div>
        </div>
    )
}

export default TopSearch