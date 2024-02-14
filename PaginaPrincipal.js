document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('paginaPrincipal').addEventListener('click', function() {
        document.getElementById('principal').style.display = 'block';
        document.getElementById('portatil').style.display = 'none';
        document.getElementById('pcSobremesa').style.display = 'none';
        document.getElementById('movil').style.display = 'none';
    });

    document.getElementById('portatiles').addEventListener('click', function() {
        document.getElementById('portatil').style.display = 'block';
        document.getElementById('principal').style.display = 'none';
        document.getElementById('pcSobremesa').style.display = 'none';
        document.getElementById('movil').style.display = 'none';
    });

    // Nuevo listener para 'PC de sobremesa'
    document.getElementById('pcs').addEventListener('click', function() {
        document.getElementById('pcSobremesa').style.display = 'block';
        document.getElementById('principal').style.display = 'none';
        document.getElementById('portatil').style.display = 'none';
        document.getElementById('movil').style.display = 'none';
    });

    // Nuevo listener para 'Móviles'
    document.getElementById('moviles').addEventListener('click', function() {
        document.getElementById('movil').style.display = 'block';
        document.getElementById('principal').style.display = 'none';
        document.getElementById('portatil').style.display = 'none';
        document.getElementById('pcSobremesa').style.display = 'none';
    });
});


