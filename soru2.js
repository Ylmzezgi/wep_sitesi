const chk = document.querySelector('#chk');
const navbar = document.querySelector('.navbar')
const img = document.querySelector('.img')


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


const ad = document.querySelector('#ad')
const soyad = document.querySelector('#soyad')
const email = document.querySelector('#email')
const no = document.querySelector('#no')
const info = document.querySelector('#info')
const send = document.querySelector('#send')

send.addEventListener('click',function(){
	alert(`AD: ${ad.value} 
	SOYAD: ${soyad.value} 
	EMAİL: ${email.value}
	NO: ${no.value} 
	INFO: ${info.value}` )

	ad.value=''
	soyad.value=''
	email.value=''
	no.value=''
	info.value=''
})
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	navbar.classList.toggle('dark')
});
