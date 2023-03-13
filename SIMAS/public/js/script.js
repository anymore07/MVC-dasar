$(function() {

    $('.tombolTambahData').on('click', function(){
        $('#formModalLabel').html('Tambah Data Siswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('.modal-body form').attr('action', 'http://localhost/simas/public/siswa')
    })
    
    $('.tampilModalEdit').on('click', function() {
        $('#formModalLabel').html('Edit Data Siswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/simas/public/siswa/ubah');

        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost/simas/public/siswa/getUbah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#nis').val(data.nis);
                $('#kelas').val(data.kelas);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });


    });

});