/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/componentes/listagem/listagem-cliente.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/cliente.js":
/*!****************************!*\
  !*** ./src/api/cliente.js ***!
  \****************************/
/*! exports provided: listarClientes, deletaCliente, detalhaCliente, editaCliente, cadastrarClientes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listarClientes\", function() { return listarClientes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletaCliente\", function() { return deletaCliente; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detalhaCliente\", function() { return detalhaCliente; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editaCliente\", function() { return editaCliente; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cadastrarClientes\", function() { return cadastrarClientes; });\nconst listarClientes = () => {\n    return fetch('http://localhost:4000/clientes')\n    .then( resposta => { \n      return resposta.json()\n    })\n    .then( json => { \n      return json \n    })\n}\n\nconst cadastrarClientes = (nome, cpf) =>  {\n  const json = JSON.stringify({\n    nome: nome,\n    cpf: cpf\n  })\n  return fetch('http://localhost:4000/clientes/cliente',{\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: json\n  })\n  .then( resp => { \n    return resp.body\n  })\n} \n\nconst deletaCliente = id => {\n  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\n    method: \"DELETE\",\n})}\n\n\nconst detalhaCliente = id => { \n  return fetch(`http://localhost:4000/clientes/cliente/${id}`,{\n    method: 'GET'\n  }) \n  .then(resposta => {\n    return resposta.json()\n  })\n}\n\nconst editaCliente = (id, cpf, nome) => {\n  const json = JSON.stringify({\n    nome: nome,\n    cpf: cpf\n  })\n  return fetch(`http://localhost:4000/clientes/cliente/${id}`,{\n    method: 'PUT',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: json\n  })\n}\n\n\n\n\n//# sourceURL=webpack:///./src/api/cliente.js?");

/***/ }),

/***/ "./src/componentes/listagem/listagem-cliente.js":
/*!******************************************************!*\
  !*** ./src/componentes/listagem/listagem-cliente.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_cliente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/cliente.js */ \"./src/api/cliente.js\");\n\n\nconst removeCliente = (id) => {\n  if(confirm(\"Deseja deletar o cliente ?\")){\n    Object(_api_cliente_js__WEBPACK_IMPORTED_MODULE_0__[\"deletaCliente\"])(id)\n    window.location.reload()\n  }\n}\n\nconst corpoTabela = document.querySelector(\"[data-conteudo-tabela]\");\n\nconst exibeCliente = (cpf, nome, id) => {\n    const linha = document.createElement('tr');\n\n    const conteudoLinha = `\n    <td>${cpf}</td>\n    <td>${nome}</td>\n    <button type=\"button\" class=\"btn btn-danger\" onclick=\"removeCliente(${id})\">Excluir</button>\n    <a href=\"./componentes/edita/edita-clientes.html?id=${id}\">\n    <button type=\"\"button class=\"btn btn-info\">Editar</button>\n    </a>\n    \n    \n`\n  \n    linha.innerHTML = conteudoLinha;\n    return linha;\n  };\n  \n  Object(_api_cliente_js__WEBPACK_IMPORTED_MODULE_0__[\"listarClientes\"])().then( exibe => {\n  exibe.forEach(indice => {\n    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))\n  })\n }\n\n )\n  \n  \n \n\n\n\n//# sourceURL=webpack:///./src/componentes/listagem/listagem-cliente.js?");

/***/ })

/******/ });