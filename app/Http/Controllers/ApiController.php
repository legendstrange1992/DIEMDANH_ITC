<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Giangviens;
class ApiController extends Controller
{
    public function GetDanhSachMonDay(Request $req){
        $giangviens = Giangviens::where([['email','=',$req->email],['matkhau','=',$req->matkhau]])->get();
        if(count($giangviens) != 0){
            $data = $giangviens->toArray();
            return $this->respond($data[0]['monday'],200,'Đăng Nhập Thành Công');
        }
        return $this->respond(null,404,'Đăng Nhập Thành không Công');
    }
}
