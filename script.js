// Quick Access Modal Functions
const modal = document.getElementById('quickAccessModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Close modal when clicking X
closeModal.addEventListener('click', () => {
    closeModalHandler();
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalHandler();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        closeModalHandler();
    }
});

function openModal(title, content) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModalHandler() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Handle Register Button
function handleRegister() {
    // Redirect to Stiqr app registration page
    window.open('https://app.stiqr.id/', '_blank');
}

// Handle WhatsApp Button
function handleWhatsApp() {
    const phoneNumber = '6282118383415'; // Ganti dengan nomor WhatsApp Stiqr yang sebenarnya
    const message = encodeURIComponent('Halo, saya tertarik dengan aplikasi Stiqr. Bisa info lebih lanjut?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Optional: Show confirmation
    const content = `
        <div style="text-align: center; padding: 2rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📱</div>
            <h3 style="color: #27AE60; margin-bottom: 1rem;">Membuka WhatsApp...</h3>
            <p style="color: #2C3E50; margin-bottom: 1.5rem;">Jika WhatsApp tidak terbuka otomatis, klik tombol di bawah:</p>
            <a href="${whatsappUrl}" target="_blank" style="display: inline-block; padding: 1rem 2rem; background: #27AE60; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: background 0.3s;" onmouseover="this.style.background='#219A52'" onmouseout="this.style.background='#27AE60'">BUKA WHATSAPP</a>
        </div>
    `;
    openModal('Chat WhatsApp', content);
}

// Handle Demo Button
function handleDemo() {
    const content = `
        <div style="text-align: center; padding: 1rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🎬</div>
            <h3 style="color: #FF6B35; margin-bottom: 1rem;">Demo Stiqr - 30 Detik</h3>
            <div style="background: #F5F5F5; border-radius: 12px; padding: 2rem; margin-bottom: 1.5rem; min-height: 200px; display: flex; align-items: center; justify-content: center;">
                <div>
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">▶️</div>
                    <p style="color: #7F8C8D;">Video demo akan dimuat di sini</p>
                    <p style="color: #7F8C8D; font-size: 0.9rem; margin-top: 0.5rem;">Ganti dengan embed video YouTube/Vimeo</p>
                </div>
            </div>
            <p style="color: #2C3E50; margin-bottom: 1.5rem; line-height: 1.6;">
                Dalam 30 detik, Anda akan melihat bagaimana Stiqr memudahkan transaksi bisnis Anda:
            </p>
            <ul style="text-align: left; color: #2C3E50; margin-bottom: 1.5rem; padding-left: 1.5rem;">
                <li style="margin-bottom: 0.5rem;">Cara membuat transaksi dengan cepat</li>
                <li style="margin-bottom: 0.5rem;">Mengirim link pembayaran ke pelanggan</li>
                <li style="margin-bottom: 0.5rem;">Melihat rekap penjualan otomatis</li>
                <li>Menggunakan fitur Open Bill untuk kuliner</li>
            </ul>
            <button onclick="handleRegister()" style="padding: 1rem 2rem; background: #4A90E2; color: white; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background 0.3s;" onmouseover="this.style.background='#357ABD'" onmouseout="this.style.background='#4A90E2'">DAFTAR SEKARANG</button>
        </div>
    `;
    openModal('Demo 30 Detik', content);
}

// Smooth scroll animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.left-section > *, .right-section');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add hover effect to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

