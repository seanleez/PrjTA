Xem file README này bằng [Open Preview to the Side] hoặc trên github. để có format 

# import nè
- **@folder/\*** : là import từ các sup-folder hoặc các files từ folder cha này
- **@folder** : là import trực tiếp từ folder này. tức là folder này có 1 file **index.ts** *export* tất cả mọi thứ ra

# vì sao phải import như trên?
- những file component/pages implement UI thì thường sẽ có style hoặc type đi kèm với folder đó. Vì vậy cần đóng gói tụi nó vào 1 folder để dễ quản lí. Và folder đó phải có 1 file index.ts để export UI ra ngoài. => cấu trúc import sẽ là: **@folder/\***
   - ví dụ có 1 UI liên quan đến module Abc, mình sẽ tạo 1 folder tên Abc, folder này chứa file UI Abc.tsx và type.ts và index.scss. 
   - cú pháp: ```import { Abc } from '@components/modules/Abc'```
- đối với những file định nghĩa hooks hoặc utils hoặc service hoặc slices thì tụi nó có rất nhiều và đơn giản chỉ có 1 file mà thôi. nên là nếu đóng gói tụi nó, mỗi file bằng 1 folder thì rất phiền. nên ko cần đóng gói. => sẽ import trực tiếp từ folder gốc: **@folder/\***
    - ví dụ có 3 services (users, posts, points) tụi nó sẽ nằm trong /services. mình muốn dùng hàm getUserInfor của users thì như sau
    - cú pháp import: ```import { getUserInfor } from '@service/users'```

- import trực tiếp thì có nghĩa ở folder cha nó file index export ra rồi. 

# tech:
- redux toolkit (**có cái này k cần axios nữa**)
- formik + yub

# Quy tắc:
- **hạn chế type ANY** nhiều nhất có thể
- gặp cái nào lặp lại nhiều lần (vd: type, function) => **đẩy ra common**