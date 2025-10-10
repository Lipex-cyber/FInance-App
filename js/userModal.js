function openUserModal() {
    document.getElementById("userModal").style.display = "flex";
    }

    function closeUserModal() {
    document.getElementById("userModal").style.display = "none";
    }

    document.addEventListener('click', function(event) {
    const modal = document.getElementById('userModal');
    const content = document.querySelector('.user-modal-content');
    const isUserButton = event.target.closest('.btn-menu');

    if (modal.style.display === 'flex' && !content.contains(event.target) && !isUserButton) {
        modal.style.display = 'none';
    }
});