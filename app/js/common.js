$(document).ready(function(){
	$('.field-value').each(function(){
		$('<span class="validation"></span>').appendTo($(this))
	})

function customValidate(id)
{
    var regex = /^[a-zA-Z ]{2,30}$/;
    var ctrl =  document.getElemetnById(id);

    if (regex.test(ctrl.value)) {
        return true;
        console.log('ok')
    }
    else {
        return false;
        console.log('xyu')
    }
}



	$("#personal_info").validate({
		debug: true,
		// errorElement: 'span',
		focusInvalid: true,
		rules: {
			lname: {
				required: true
				// minlength: 6,
				// pattern: "[A-Za-zА-Яа-яЁё]"
				
				// submitHandler: function(){
				// 	console.log('Имя введено')
				// }
			},
			fname: {
				required: true
			},
			pname: {
				required: true
			},
			datebirth: {
				required: true
			},
			telnum: {
				required: true
			},
			email: {
				required: true,
				submitHandler: function(){
					// this.parent().find('.validation').addClass('valid');
					console.log('1')
				}
				// ,
				// errorPlacement: function(error, element){
				// 	error.appendTo(element);
				// }
			},
		},
		messages: {
			lname: "Введите фамилию корретно",
			fname: "Введите имя корретно",
			pname: "Введите отчество корретно",
			datebirth: "Введите дату рождения",
			telnum: "Введите номер телефона",
			email: "Введите Email корретно"
		},
		submitHandler: function() {
			// $("body").css('background','red')
			console.log('Всё прошло успешно')
		}
	});

	// $('.datepicker').datepicker({
	// 	minViewMode: 2
	// });
});