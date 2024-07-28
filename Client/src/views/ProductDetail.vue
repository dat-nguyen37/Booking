<template>
    <div>
        <!-- room -->
        <div v-if="brand==='room'" class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Phòng đơn 
                </a></li>
                <li><a href="" class="text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Phòng đơn view sân vườn
                </a></li>
            </ul>
        </div>
        <div class="w-[calc(100%-20px)] mx-auto my-5 lg:px-5">
            <div class="relative flex gap-5 overflow-x-auto no-scrollbar scroll-smooth"  ref="slider">
                <img src="/Image/room/1.webp" alt="" class="w-[30rem] h-72 object-contain">
                <img src="/Image/room/2.webp" alt="" class="w-[30rem] h-72 object-contain">
                <img src="/Image/room/3.webp" alt="" class="w-[30rem] h-72 object-contain">
            </div>
            <button @click="scrollLeft" class="absolute left-0 top-1/2 ml-2 w-10 h-10 rounded-full bg-slate-500 opacity-60 text-yellow-500 hover:bg-black"><font-awesome-icon icon="fa-angle-left"/></button> 
            <button @click="scrollRight" class="absolute right-0 top-1/2 mr-2 w-10 h-10 rounded-full bg-slate-500 opacity-60 text-yellow-500 hover:bg-black"><font-awesome-icon icon="fa-angle-right"/></button>
        </div>
        <div class="w-[calc(100%-20px)] mx-auto my-5 lg:px-5">
            <div class="grid lg:grid-cols-3 gap-5">
                <div class="lg:col-span-2">
                    <h1 class="text-2xl font-medium">Phòng đơn view sân vườn</h1>
                    <div class="w-full">
                        <div class="flex gap-14 text-xl py-4 border-b-2 border-yellow-500">
                            <div class="flex items-center gap-5">
                                <font-awesome-icon icon="users" class=""/>
                                <p>02 Người lớn</p>
                            </div>
                            <div class="flex items-center gap-5">
                                <font-awesome-icon icon="users"/>
                                <p>01 Trẻ em</p>
                            </div>
                            <div class="flex items-center gap-5">
                                <font-awesome-icon icon="home"/>
                                <p>Phòng 25m²</p>
                            </div>
                        </div>
                        <div class="py-3 text-sm leading-6">Các phòng trang nhã và dãy phòng trang nghiêm của chúng tôi gợi nhớ về một thời đại đã qua. Mỗi tính năng như đường cong, thảm sang trọng, trần nhà cao, phòng tắm lát đá cẩm thạch, thiết bị làm sạch và nhiều không gian đều được bố trí một cách chu đáo để gọi cho riêng bạn. Tông màu nâu phong phú và gỗ sồi tự nhiên tạo nên những khu bảo tồn yên tĩnh và yên tĩnh, được tôn lên một cách tuyệt vời bởi đồ nội thất trang nhã.</div>
                        <div>
                            <div class="bg-yellow-500 w-40 ml-2 text-white text-xl font-bold p-2 rounded-tr-xl rounded-tl-xl">Dịch vụ phòng</div>
                            <div class="flex border border-yellow-500 rounded-lg p-3 flex-wrap text-xl">
                                <div class="w-1/3 py-2 flex gap-4 items-center"><font-awesome-icon icon="coffee"/>Cafe Buổi Sáng</div>
                                <div class="w-1/3 py-2 flex gap-4 items-center"><font-awesome-icon icon="utensils"/>Gọi Đồ Ăn Tại Phòng</div>
                                <div class="w-1/3 py-2 flex gap-4 items-center"><font-awesome-icon icon="bath"/>Bồn Tắm Hoa Sen</div>
                                <div class="w-1/3 py-2 flex gap-4 items-center"><font-awesome-icon icon="wifi"/>Internet Không Giây</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1 bg-gray-100 rounded-xl p-3">
                    <h1 class="text-xl font-medium text-red-500 border-b border-yellow-500">800.000₫/Đêm</h1>
                    <div class="flex flex-wrap py-2 w-full">
                        <div class="w-1/2">
                            <label for="">Họ và tên*</label>
                            <input type="text" name="" id="" placeholder="Họ và Tên" class="outline-none p-2 rounded-xl my-2 w-full">
                        </div>
                        <div class="w-1/2">
                            <label for="">Số điện thoại*</label>
                            <input type="text" name="" id="" placeholder="Số điện thoại" class="outline-none p-2 rounded-xl my-2 w-full">
                        </div>
                        <div class="w-1/2">
                            <label for="">Ngày nhận</label>
                            <input type="date" name="" id="" class="outline-none p-2 rounded-xl my-2 w-full">
                        </div>
                        <div class="w-1/2">
                            <label for="">Ngày trả</label>
                            <input type="date" name="" id="" class="outline-none p-2 rounded-xl my-2 w-full">
                        </div>
                        <div class="w-1/2">
                            <label for="">Người lớn</label>
                            <input type="number" name="" id="" placeholder="Người lớn" min="0" value="1" class="outline-none p-2 rounded-xl my-2 w-full">
                        </div>
                        <div class="w-1/2">
                            <label for="">Trẻ em</label>
                            <input type="number" name="" id="" placeholder="Trẻ em" min="0" value="0" class="outline-none p-2 rounded-xl my-2 w-full">
                        </div>
                        <div class="w-full text-sm">
                            <div class="flex justify-between py-2 border-b">
                                <p>Giá niêm yết (1 x 800.000₫/Đêm)</p>
                                <p class="font-bold">800.000₫</p>
                            </div>
                            <div class="flex justify-between py-2 font-bold">
                                <p>Tổng tiền</p>
                                <p>800.000₫</p>
                            </div>
                        </div>
                        <button class="w-full bg-yellow-500 text-xl font-bold text-white p-2 rounded-lg">ÐẶT PHÒNG</button>
                    </div>
                </div>
            </div>
            <div class="my-5">
                <div class="flex">
                    <div @click="CurrentTab='tab1'" :class="{'bg-yellow-500 text-white': CurrentTab === 'tab1'}" class=" ml-2  text-xl font-bold p-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Mô tả</div>
                    <div @click="CurrentTab='tab2'" :class="{'bg-yellow-500 text-white': CurrentTab === 'tab2'}" class=" ml-2  text-xl font-bold p-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Tiện nghi</div>
                </div>
                <div v-if="CurrentTab === 'tab1'"  class=" border border-yellow-500 rounded-lg p-3 leading-8">
                    <p>Phòng đơn khu view vườn rộng rãi xây tách biệt với ánh sáng tự nhiên.</p>
                    <p>Hòa mình vào thiên nhiên và cảnh quan lúc đi nghỉ dưỡng, tạo sự thoải mái và bình yên đến lạ kỳ là những gì chúng tôi mong muốn đem đến cho kỳ nghỉ của bạn.</p>
                    <p><strong>Dịch vụ miễn phí:</strong> Ăn sáng tự chọn, Nước khoáng trên phòng nghỉ, Dịch Internet không dây (wifi), Đặt món tại phòng chỉ với chiếc smartphone của bạn</p>
                    <p><strong>Giờ trả phòng:</strong> 12h00 hàng ngày</p>
                    <p><strong>Hình thức Thanh toán:</strong> Tiền mặt (VND, USD, EURO, …) thẻ tín dụng Visa và Master</p>
                    <p>* Nếu Quý khách thanh toán bằng ngoại tệ thì theo tỷ giá hối đoái của Ngân hàng hiện thời.</p>
                </div>
                <div v-if="CurrentTab === 'tab2'"  class="border border-yellow-500 rounded-lg p-3 leading-8">
                    <p>Liên hệ hotline: 1900 6750 để nhận được ưu đãi đặt phòng sớm nhất !</p>
                    <h1 class="uppercase font-medium text-xl mt-2">CÁC TIỆN NGHI CỦA BEAN HOTEL</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 my-4 gap-5">
                        <div class="flex flex-col">
                            <h1 class="flex gap-5 font-bold items-center"><img src="/icon/parking.png" alt="" class="w-8 h-8">Chỗ đậu xe</h1>
                            <p class="flex gap-2 items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4"> Chỗ đậu xe miễn phí</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Có chỗ đỗ xe riêng, an toàn</p>
                       </div>
                       <div class="flex flex-col">
                            <h1 class="flex gap-5 font-bold items-center"><img src="/icon/group.png" alt="" class="w-8 h-8">Tiện ích trong nhà</h1>
                            <p class="flex gap-2 items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4"> Karaoke</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Truyền hình cáp free</p>
                       </div>
                       <div class="flex flex-col">
                            <h1 class="flex gap-5 font-bold items-center"><img src="/icon/outdoor.png" alt="" class="w-8 h-8">Tiện ích ngoài trời</h1>
                            <p class="flex gap-2 items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4"> BBQ</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Bàn ghế ngoài trời</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Ban công</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Sân hiên</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Sân vườn & Cây xanh</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Sân thượng</p>
                       </div>
                       <div class="flex flex-col">
                            <h1 class="flex gap-5 font-bold items-center"><img src="/icon/clean.png" alt="" class="w-8 h-8">Dịch vụ lau dọn</h1>
                            <p class="flex gap-2 items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4"> Giặt khô</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Giặt ủi</p>
                            <p class="flex gap-2  items-center"><img src="/icon/checklist.png" alt="" class="w-4 h-4">Dọn phòng hàng ngày</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:grid lg:grid-cols-12 gap-5">
                <div class="col-span-9">
                    <div class="bg-yellow-500 text-white ml-2 w-44  text-xl font-bold p-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Phòng tương tự</div>
                    <div class="flex w-full overflow-x-auto no-scrollbar md:grid md:grid-cols-3 gap-5 border border-yellow-500 rounded-lg p-3">
                        <div class="flex-shrink-0">
                            <ProductItem :brand="'room'"/>
                        </div>
                        <div class="flex-shrink-0">
                            <ProductItem :brand="'room'"/>
                        </div>
                        <div class="flex-shrink-0">
                            <ProductItem :brand="'room'"/>
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="bg-yellow-500 text-white ml-2 w-44  text-xl font-bold p-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Phòng tốt nhất</div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 border border-yellow-500 rounded-lg p-3 ">
                        <div class="flex gap-3 border-b py-2">
                            <img src="/Image/roomvip/1.webp" alt="" class="w-24 h-16 object-contain">
                            <div class="font-medium text-sm">
                                <a href="" class="hover:text-yellow-500">Phòng Đơn Vip</a>
                                <p class="text-red-500">2.500.000₫</p>
                            </div>
                        </div>
                        <div class="flex gap-3 border-b py-2">
                            <img src="/Image/roomvip/1.webp" alt="" class="w-24 h-16 object-contain">
                            <div class="font-medium text-sm">
                                <a href="" class="hover:text-yellow-500">Phòng Đơn Vip</a>
                                <p class="text-red-500">2.500.000₫</p>
                            </div>
                        </div>
                        <div class="flex gap-3 border-b py-2">
                            <img src="/Image/roomvip/1.webp" alt="" class="w-24 h-16 object-contain">
                            <div class="font-medium text-sm">
                                <a href="" class="hover:text-yellow-500">Phòng Đơn Vip</a>
                                <p class="text-red-500">2.500.000₫</p>
                            </div>
                        </div>
                        <div class="flex gap-3 border-b py-2">
                            <img src="/Image/roomvip/1.webp" alt="" class="w-24 h-16 object-contain">
                            <div class="font-medium text-sm">
                                <a href="" class="hover:text-yellow-500">Phòng Đơn Vip</a>
                                <p class="text-red-500">2.500.000₫</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- food -->
        <div v-if="brand==='menu'" class="w-full">
            <div class="flex w-full bg-gray-100 h-14 px-5 ">
                <ul class="flex items-center gap-3 text-sm text-gray-500">
                    <li><a href="" class="hover:text-yellow-600">Trang chủ </a></li>
                    <li><a href="" class="hover:text-yellow-600">
                        <font-awesome-icon icon="fa-angle-right"/>
                        Món ăn
                    </a></li>
                    <li><a href="" class="text-yellow-600">
                        <font-awesome-icon icon="fa-angle-right"/>
                        Bún bò - heo
                    </a></li>
                </ul>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 w-[calc(100%-20px)] mx-auto my-5 lg:px-5 gap-5">
                <div class="lg:col-span-9">
                    <div class="flex flex-col md:grid md:grid-cols-2 gap-5">
                        <div class="w-full">
                            <img src="/Image/food/1.webp" alt="" class="w-full h-96 md:h-80">
                            <div class="flex gap-3">
                                <img src="/Image/food/1.webp" alt="" class="w-32 h-32 md:w-16 md:h-16 object-contain">
                                <img src="/Image/food/2.webp" alt="" class="w-32 h-32 md:w-16 md:h-16 object-contain">
                                <img src="/Image/food/3.webp" alt="" class="w-32 h-32 md:w-16 md:h-16 object-contain">
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-2 py-5 md:py-0">
                            <h1 class="uppercase text-2xl font-bold">Bún Bò - Heo</h1>
                            <p class="font-bold text-red-500 text-2xl">80.000₫</p>
                            <hr>
                            <p class="text-sm leading-6">Bún bò - heo ngon nóng hổi sẽ cung cấp bữa sáng tuyệt vời, đầy đủ dinh dưỡng, năng lượng cho một ngày dài. Sự hòa quyện vị ngọt tự nhiên của rau củ, thịt và gia vị sẽ giúp món mì thêm đậm đà, đượm vị.</p>
                            <hr>
                            <div class="flex gap-5">
                                <div class="flex">
                                    <input type="text" min="1" class="w-10 h-10 border-2 outline-none">
                                    <div class="text-xl">
                                        <div class="w-6 h-5 border-2 flex justify-center items-center cursor-pointer">+</div>
                                        <div class="w-6 h-5 border-2 flex justify-center items-center cursor-pointer">-</div>
                                    </div>
                                </div>
                                <button class="bg-yellow-500 text-white px-4 uppercase text-sm border border-yellow-500 hover:bg-white hover:text-yellow-500">THÊM VÀO GIỎ HÀNG</button>
                            </div>
                        </div>
                    </div>
                    <div class="my-2">
                        <div class="flex font-bold">
                            <div @click="CurrentTab='tab1'" :class="{'bg-yellow-500 text-white': CurrentTab === 'tab1'}" class=" ml-2 p-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Mô tả sản phẩm</div>
                            <div @click="CurrentTab='tab2'" :class="{'bg-yellow-500 text-white': CurrentTab === 'tab2'}" class=" p-2 ml-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Chính sách đổi trả</div>
                        </div>
                        <div v-if="CurrentTab === 'tab1'"  class="flex flex-col gap-2 border border-yellow-500 rounded-lg p-3 leading-6 text-sm text-gray-800">
                            <p>Bún bò - heo là một món ăn được rất nhiều người ưa chuộng thậm chí còn ghiền nặng bởi hương vị mà nó mang lại. Thưởng thức một bát Bún bò - heo vào một sáng thảnh thơi sau đó nhâm nhi chút trà đá thì chẳng còn gì tuyệt vời hơn cho một ngày cuối tuần.</p>
                            <strong>Bún bò - heo ăn nhiều có béo không?</strong>
                            <p>Với những “tín đồ” của Bún bò - heo, những ai đã và đang ghiền món ăn này mà lại là đối tượng đang có ý định giảm cân, xây dựng chế độ dinh dưỡng hợp lý sẽ có cùng thắc mắc rằng, ăn nhiều có béo không?</p>
                            <p>Theo các nghiên cứu đã chỉ ra rằng, trung bình một người phụ nữ sẽ cần khoảng 1300 calo và nam giới sẽ cần tới 1650 calo mỗi ngày để duy trì sự sống cho nên, nếu như lượng calo tiêu thụ trong 1 ngày vượt ngưỡng trên thì cơ thể sẽ béo lên đặc biệt là đối với những cá nhân có cơ địa hấp thụ tốt.</p>
                            <p>Việc bạn tiêu thụ 534 calo cho một bữa nhưng lại biết tiết chế lượng thức ăn ở những bữa khác trong ngày sẽ làm giảm nguy cơ tăng cân. Ngược lại, nếu như bạn ăn quá nhiều Bún bò - heo trong ngày và trong tuần sẽ có thể chính là nguyên nhân dẫn tới tình trạng thừa cân bởi lẽ, hầu hết tất cả những gì “quá” đều không tốt cho cơ thể.</p>
                            <p>Từ đây có thể đưa ra câu trả lời cho thắc mắc “Ăn nhiều có béo không?” rằng, nếu như bạn biết tiết chế lượng thức ăn mỗi ngày, ăn vừa phải, có thể 1 tuần chỉ nên thưởng thức 1 – 2 bát bún thì khả năng tăng cân là khó có thể xảy ra.</p>
                            <p>Ngược lại, nếu như ngày nào bạn cũng tiêu thụ hết 534 calo của 1 bát Bún bò - heo cùng với vô vàn lượng thức ăn giàu calo khác trong ngày và lười vận động thì chắc chắn sẽ béo. Tóm lại, ăn quá nhiều Bún bò - heo cùng với những thực phẩm nhiều calo khác trong ngày kèm theo lười vận động sẽ tăng khả năng tăng cân và đây là điều bạn nên lưu ý.</p>
                            <p>Chúc bạn có 1 bữa ăn ngon miệng nhé!.</p>
                        </div>
                        <div v-if="CurrentTab === 'tab2'"  class="border border-yellow-500 rounded-lg p-3 leading-8 text-sm text-gray-800">
                            <p>+ Sản phẩm lỗi, hỏng do quá trình sản xuất hoặc vận chuyện</p>
                            <p>+ Nằm trong chính sách đổi trả sản phẩm của Bean</p>
                            <p>+ Sản phẩm còn nguyên tem mác chưa qua sử dụng và chưa giặt là</p>
                            <p>+ Thời gian đổi trả nhỏ hơn 15 ngày kể từ ngày nhận hàng</p>
                            <p>+ Chi phí bảo hành về sản phẩm, vận chuyển khách hàng chịu chi phí</p>
                            <strong>Điều kiện đổi trả hàng</strong>
                            <p>Điều kiện về thời gian đổi trả: trong vòng 01 ngày kể từ khi nhận được hàng và phải liên hệ gọi ngay cho chúng tôi theo số điện thoại trên để được xác nhận đổi trả hàng.</p>
                            <strong>Điều kiện đổi trả hàng:</strong>
                            <p>- Sản phẩm gửi lại phải còn nguyên đai nguyên kiện</p>
                            <p>- Phiếu bảo hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn.</p>
                            <p>- Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy Hướng dẫn sử dụng và chưa qua sử dụng.</p>
                            <p>- Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí liên lạc tối đa tương đương 20% giá trị đơn hàng.</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="bg-yellow-500 text-white ml-2 w-44 font-bold p-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Sản phẩm liên quan</div>
                        <div class="flex w-full overflow-x-auto no-scrollbar md:grid md:grid-cols-3 gap-5 border border-yellow-500 rounded-lg p-3">
                            <div class="flex-shrink-0">
                                <ProductItem :brand="'menu'"/>
                            </div>
                            <div class="flex-shrink-0">
                                <ProductItem :brand="'menu'"/>
                            </div>
                            <div class="flex-shrink-0">
                                <ProductItem :brand="'menu'"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-3 ">
                    <div class="sticky top-1">
                        <div class="hidden lg:block">
                        <div class="bg-yellow-500 text-white ml-2 w-44 text-center font-bold p-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Danh mục sản phẩm</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 border border-yellow-500 rounded-lg p-3 ">
                            <ul class="">
                                <li class="flex p-2 "><a href="" class="w-full hover:text-yellow-500">Trang chủ</a></li>
                                <li class="flex p-2"><a href="" class="w-full hover:text-yellow-500">Về chúng tôi</a></li>
                                <li class="flex flex-col p-2 group"><a href="" class="w-full flex justify-between hover:text-yellow-500">
                                    Phòng
                                    <font-awesome-icon icon="caret-down"/></a>
                                    <ul class="hidden group-hover:block p-2">
                                        <li class="flex p-1"><a href="" class="w-full hover:text-yellow-500">Phòng đơn</a></li>
                                        <li class="flex p-1"><a href="" class="w-full hover:text-yellow-500">Phòng đôi</a></li>
                                        <li class="flex p-1"><a href="" class="w-full hover:text-yellow-500">Phòng vip</a></li>
                                    </ul>
                                </li>
                                <li class="flex flex-col p-2 group"><a href="" class="w-full flex justify-between hover:text-yellow-500">
                                    Ẩm thực
                                    <font-awesome-icon icon="caret-down"/></a>
                                    <ul class="hidden group-hover:block p-2">
                                        <li class="flex p-1"><a href="" class="w-full hover:text-yellow-500">Món ăn</a></li>
                                        <li class="flex p-1"><a href="" class="w-full hover:text-yellow-500">Đồ uống</a></li>
                                        <li class="flex p-1"><a href="" class="w-full hover:text-yellow-500">Bánh ngọt</a></li>
                                    </ul>
                                </li>
                                <li class="flex p-2 "><a href="" class="w-full hover:text-yellow-500">Dịch vụ</a></li>
                                <li class="flex p-2 "><a href="" class="w-full hover:text-yellow-500">Thư viện ảnh</a></li>
                                <li class="flex p-2 "><a href="" class="w-full hover:text-yellow-500">Liên hệ</a></li>                            
                            </ul>
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="bg-yellow-500 text-white ml-2 w-40 text-center  font-bold p-2 rounded-tr-xl rounded-tl-xl cursor-pointer">Có thể bạn thích</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 border border-yellow-500 rounded-lg p-3 ">
                            <div class="flex gap-3 border-b py-2">
                                <img src="/Image/roomvip/1.webp" alt="" class="w-24 h-16 object-contain">
                                <div class="font-medium text-sm">
                                    <a href="" class="hover:text-yellow-500">Phòng Đơn Vip</a>
                                    <p class="text-red-500">2.500.000₫</p>
                                </div>
                            </div>
                            <div class="flex gap-3 border-b py-2">
                                <img src="/Image/roomvip/1.webp" alt="" class="w-24 h-16 object-contain">
                                <div class="font-medium text-sm">
                                    <a href="" class="hover:text-yellow-500">Phòng Đơn Vip</a>
                                    <p class="text-red-500">2.500.000₫</p>
                                </div>
                            </div>
                            <div class="flex gap-3 border-b py-2">
                                <img src="/Image/roomvip/1.webp" alt="" class="w-24 h-16 object-contain">
                                <div class="font-medium text-sm">
                                    <a href="" class="hover:text-yellow-500">Phòng Đơn Vip</a>
                                    <p class="text-red-500">2.500.000₫</p>
                                </div>
                            </div>
                            <div class="flex gap-3 border-b py-2">
                                <img src="/Image/roomvip/1.webp" alt="" class="w-24 h-16 object-contain">
                                <div class="font-medium text-sm">
                                    <a href="" class="hover:text-yellow-500">Phòng Đơn Vip</a>
                                    <p class="text-red-500">2.500.000₫</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
    name:"ProductDetail",
    components:{
        ProductItem
    },
    data(){
        return{
            CurrentTab:'tab1',
            brand:this.$route.params.brand
        }
    },
    methods: {
        scrollLeft() {
        this.$refs.slider.scrollLeft -= this.$refs.slider.clientWidth;
        },
        scrollRight() {
        this.$refs.slider.scrollLeft += this.$refs.slider.clientWidth;
        }
  }
}
</script>