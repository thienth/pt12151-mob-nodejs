1 tạo database lab4
2 tạo bảng category 
3 tạo bảng post
4 tạo project expressjs (lab4)
5 tạo connect đến db
6 xử lý code cho trang chủ localhost:3000 
	6.1 lấy dữ liệu từ bảng category ra ngoài
	6.2 truyền dữ liệu ra ngoài view (cate/index.ejs)
	6.3 tạo vòng for để hiển thị thông tin các bản ghi đã lấy ra 
	thành dạng bảng
7 xử lý code cho trang tạo mới danh mục localhost:3000/add-category
	7.1 hiển thị view (cate/add.ejs) - chứa form	
	7.2 khi submit cái form thì sẽ đưa về trang 
	localhost:3000/save-add-category
8 Xử lý code cho trang lưu thêm danh mục 
	localhost:3000/save-add-category
	8.1 lấy dữ liệu từ body của request
	8.2 tạo biến sql để lưu câu lệnh insert into.... 
	vào bảng category với dữ liệu lấy được
	8.3 Thực thi câu lệnh trên với mysql và điều hướng website 
	về trang chủ localhost:3000
9 xử lý code cho trang cập nhật danh mục 
	localhost:3000/update-category/:id
	9.1 lấy giá trị của tham số id trên url
	9.2 dựa vào giá trị id đó lấy ra dữ liệu từ cơ sở dữ liệu bảng category
	9.3 hiển thị view và dữ liệu vừa lấy đc ra (cate/update.ejs)
	7.2 khi submit cái form thì sẽ đưa về trang 
	localhost:3000/save-update-category
10 Xử lý code cho trang cập nhật thông tin danh mục 
	localhost:3000/save-update-category
	8.1 lấy dữ liệu từ body của request
	8.2 tạo biến sql để lưu câu lệnh update table set .... 
	vào bảng category với dữ liệu lấy được
	8.3 Thực thi câu lệnh trên với mysql và điều hướng website 
	về trang chủ localhost:3000
11 xử lý code trang xoá danh mục 
	localhost:3000/delete-cate/:id
	11.1 Lấy id từ trên url xuống
	11.2 thực hiện xoá hết bài viết 
	thuộc về danh mục có id tương ứng
	11.3 xoá danh mục và điều hướng về trang chủ


*** đối với bảng post làm tương tự 
nhưng có thêm 1 lưu ý khi thực hiện thêm hoặc cập nhật
bài viết thì nên tạo 1 thẻ select để người dùng có thể chọn
1 danh mục đã có sẵn chữ k nên để người ta viết số vào




