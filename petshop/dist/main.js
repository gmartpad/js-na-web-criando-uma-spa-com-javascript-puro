/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/cliente.js":
/*!****************************!*\
  !*** ./src/api/cliente.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listarClientes\": () => /* binding */ listarClientes,\n/* harmony export */   \"deletaCliente\": () => /* binding */ deletaCliente,\n/* harmony export */   \"detalhaCliente\": () => /* binding */ detalhaCliente,\n/* harmony export */   \"editaCliente\": () => /* binding */ editaCliente,\n/* harmony export */   \"cadastrarClientes\": () => /* binding */ cadastrarClientes\n/* harmony export */ });\nconst listarClientes = () => {\n    return fetch('http://localhost:4000/clientes')\n    .then( resposta => { \n      return resposta.json()\n    })\n    .then( json => { \n      return json \n    })\n}\n\nconst cadastrarClientes = (nome, cpf) =>  {\n  const json = JSON.stringify({\n    nome: nome,\n    cpf: cpf\n  })\n  return fetch('http://localhost:4000/clientes/cliente',{\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: json\n  })\n  .then( resp => { \n    return resp.body\n  })\n} \n\nconst deletaCliente = id => {\n  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\n    method: \"DELETE\",\n})}\n\n\nconst detalhaCliente = id => { \n  return fetch(`http://localhost:4000/clientes/cliente/${id}`,{\n    method: 'GET'\n  }) \n  .then(resposta => {\n    return resposta.json()\n  })\n}\n\nconst editaCliente = (id, cpf, nome) => {\n  const json = JSON.stringify({\n    nome: nome,\n    cpf: cpf\n  })\n  return fetch(`http://localhost:4000/clientes/cliente/${id}`,{\n    method: 'PUT',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: json\n  })\n}\n\n\n\n\n//# sourceURL=webpack://petshop/./src/api/cliente.js?");

/***/ }),

/***/ "./src/componentes/listagem/listagem-cliente.js":
/*!******************************************************!*\
  !*** ./src/componentes/listagem/listagem-cliente.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_cliente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/cliente.js */ \"./src/api/cliente.js\");\n\n\nconst removeCliente = (id) => {\n  if(confirm(\"Deseja deletar o cliente ?\")){\n    (0,_api_cliente_js__WEBPACK_IMPORTED_MODULE_0__.deletaCliente)(id)\n    window.location.reload()\n  }\n}\n\nconst corpoTabela = document.querySelector(\"[data-conteudo-tabela]\");\n\nconst exibeCliente = (cpf, nome, id) => {\n    const linha = document.createElement('tr');\n\n    const conteudoLinha = `\n    <td>${cpf}</td>\n    <td>${nome}</td>\n    <button type=\"button\" class=\"btn btn-danger\" onclick=\"removeCliente(${id})\">Excluir</button>\n    <a href=\"./componentes/edita/edita-clientes.html?id=${id}\">\n    <button type=\"\"button class=\"btn btn-info\">Editar</button>\n    </a>\n    \n    \n`\n  \n    linha.innerHTML = conteudoLinha;\n    return linha;\n  };\n  \n  (0,_api_cliente_js__WEBPACK_IMPORTED_MODULE_0__.listarClientes)().then( exibe => {\n  exibe.forEach(indice => {\n    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))\n  })\n }\n\n )\n  \n  \n \n\n\n\n//# sourceURL=webpack://petshop/./src/componentes/listagem/listagem-cliente.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/componentes/listagem/listagem-cliente.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;