<?php

class About extends Controller
{
    public function index($nama = "Meyla", $pekerjaan = "siswa")
    {
        $data["nama"] = $nama;
        $data["pekerjaan"] = $pekerjaan;
        $data["judul"] = "about me";
        $this->view('templates/header', $data);
        $this->view('about/index', $data);
        $this->view('templates/footer');
    }
    public function page()
    {
        $data["judul"] = "WELCOME TO MY PAGES";
        $this->view('templates/header', $data);
        $this->view('about/page', $data);
        $this->view('templates/footer', $data);
    }
}