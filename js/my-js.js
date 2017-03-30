window.onload = function() {
	var parent = document.getElementById("test-div");
	var update = document.getElementById("update");
	var add = document.getElementById("add");
	var addStyle = document.getElementById('add-style');
	var insert = document.getElementById("insert");
	var pt = document.getElementById('pt');
	var de = document.getElementById("delete");
	/**
	 * 修改文本
	 */
	update.onclick = function() {
		var js = document.getElementById("js");
		js.innerHTML = 'Android';
	}
	/**
	 * 添加文本
	 */
	add.onclick = function() {
		var h = document.createElement('p');
		h.id = 'html';
		h.style.color = 'red';
		h.style.fontSize = '20px';
		h.innerHTML = 'HTML';
		parent.appendChild(h);
	}
	/**
	 * 添加样式
	 */
	addStyle.onclick = function() {
		alert('修改样式');
		var d = document.createElement('style');
		d.setAttribute('type', 'text/css');
		d.innerHTML = '#test-div {width: 300px;height: 800px;margin-left: 30px;margin-top: 20px;overflow: hidden;}';
		document.getElementsByTagName('head')[0].appendChild(d);
	}
	/**
	 * 在指定位置进行插入
	 */
	insert.onclick = function() {
		var ph = document.createElement('p');
		ph.innerText = 'PHP';
		ph.id = 'ph';
		ph.style.color = 'blue';
		parent.insertBefore(ph,pt)
	}
	/**
	 * 删除指定的节点
	 */
	de.onclick = function() {
		var ios = document.getElementById("ios");
		var soi = parent.removeChild(ios);
		if(soi === ios){
			alert('删除成功！');
		}
	}
}