(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documentos\Distribuidora morazan\sistema-Distribuidora-Moran\src\main.ts */"zUnb");


/***/ }),

/***/ "6aTl":
/*!*******************************************************!*\
  !*** ./src/app/services/create-pdf-boleta.service.ts ***!
  \*******************************************************/
/*! exports provided: CreatePdfBoletaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePdfBoletaService", function() { return CreatePdfBoletaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);




pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__["pdfMake"].vfs;
class CreatePdfBoletaService {
    constructor() { }
    generatePDF(datos) {
        const documentDefinition = {
            content: [
                {
                    columns: [
                        {
                            image: 'data:image/png;base64,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',
                            width: 60,
                            alignment: 'left'
                        },
                        {
                            text: 'DISTRIBUIDORA MORAZÁN S.A.\nBOLETA PAGO SALARIO DEL 01 AL 30 ABRIL 2024',
                            style: 'header'
                        }
                    ]
                },
                {
                    text: '\nFECHA: 30/04/2024\n\n',
                    style: 'subheader'
                },
                {
                    style: 'table',
                    table: {
                        headerRows: 1,
                        widths: [110, 180, 110, 110],
                        body: [
                            [
                                { text: 'CÓDIGO:', style: 'headertext' }, { text: '56230:', style: 'headertext2' },
                                { text: 'No. DE NIT:', style: 'headertext' }, { text: '55371906:', style: 'headertext2' }
                            ],
                            [
                                { text: 'NOMBRE:', style: 'headertext' }, { text: datos.nombre, style: 'headertext2' },
                                { text: 'No. DPI:', style: 'headertext' }, { text: '1942099621612:', style: 'headertext2' }
                            ],
                            [
                                { text: 'CARGO:', style: 'headertext' }, { text: 'Auxiliar de Entrega:', style: 'headertext2' },
                                { text: 'SUCURSAL:', style: 'headertext' }, { text: 'Chimaltenango:', style: 'headertext2' }
                            ],
                            [
                                { text: 'DÍAS DEVENGADOS:', style: 'headertext' }, { text: '30', style: 'headertext2' },
                                { text: 'FECHA DE BAJA:', style: 'headertext' }, { text: ' :', style: 'headertext2' }
                            ]
                        ]
                    },
                    layout: 'noBorders'
                },
                {
                    style: 'table',
                    table: {
                        headerRows: 0,
                        widths: [300, '*'],
                        body: [
                            [
                                { text: 'DESCRIPCIÓN', style: 'tableHeader' },
                                { text: 'QUETZALES', style: 'tableHeader' }
                            ],
                            ['Salario Devengado', 'Q3,227.82'],
                            ['Bonificación Dcto 37-2001', 'Q1,531.68'],
                            ['Pago Asueto', 'Q0.00'],
                            ['Otras Bonificaciones', 'Q0.00'],
                            ['Pago Variable', 'Q0.00'],
                            ['Pagos Pendientes', 'Q0.00'],
                            [{ text: 'TOTAL INGRESOS', style: 'totalHeader' }, 'Q4,759.50'],
                            ['Descuento IGSS', 'Q155.90'],
                            ['Impuesto Sobre la Renta', 'Q13.28'],
                            ['Pago Variable 80% aplica', 'Q0.00'],
                            ['Descuento Préstamo Salarial', 'Q0.00'],
                            ['Descuento de Faltantes en Liquidaciones y Bodegas', 'Q0.00'],
                            ['Descuento por Equipo y Flota', 'Q0.00'],
                            ['Descuento Autoconsumo', 'Q0.00'],
                            ['Anticipo Quincenal', 'Q0.00'],
                            ['Otros Descuentos', 'Q0.00'],
                            ['Descuento de Ausencias Injustificadas', 'Q0.00'],
                            ['Descuento Anticipo Bonificación', 'Q0.00'],
                            ['Embargos Salariales', 'Q0.00'],
                            ['Boleta de Control', 'Q0.00'],
                            [{ text: 'TOTAL DESCUENTOS', style: 'totalHeader' }, 'Q169.19'],
                            [{ text: 'NETO RECIBIDO', style: 'totalHeader' }, 'Q4,590.31']
                        ]
                    }
                },
                {
                    text: 'HAGO CONSTAR QUE HE RECIBIDO A MI ENTERA SATISFACCIÓN LAS CANTIDADES ARRIBA DETALLADAS Y ESTOY DE ACUERDO CON LOS DESCUENTOS REALIZADOS POR DISTRIBUIDORA MORAZÁN, S.A.',
                    margin: [0, 10, 0, 20]
                },
                {
                    columns: [
                        { text: 'F. ____________________________\n' + datos.nombre,
                            alignment: 'center'
                        }
                    ]
                }
            ],
            styles: {
                header: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center'
                },
                subheader: {
                    fontSize: 12,
                    bold: true
                },
                table: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 11,
                    color: 'black'
                },
                totalHeader: {
                    bold: true,
                    fontSize: 12,
                    color: 'black',
                    alignment: 'right'
                },
                headertext: {
                    bold: true
                },
                headertext2: {
                    fontSize: 11,
                    alignment: 'left'
                }
            }
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__["createPdf"](documentDefinition).open();
    }
}
CreatePdfBoletaService.ɵfac = function CreatePdfBoletaService_Factory(t) { return new (t || CreatePdfBoletaService)(); };
CreatePdfBoletaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreatePdfBoletaService, factory: CreatePdfBoletaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePdfBoletaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBLgKCglXGE5dox_WNiT5BBNq4UEJ9GvQo',
        authDomain: "sistema-distribuidora-moran.firebaseapp.com",
        projectId: "sistema-distribuidora-moran",
        storageBucket: "sistema-distribuidora-moran.appspot.com",
        messagingSenderId: "122309507300",
        appId: "1:122309507300:web:7bdb101291dedbadbc54f1"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "StNR":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "JcrP");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-upload.service */ "sXm/");
/* harmony import */ var _services_create_pdf_boleta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/create-pdf-boleta.service */ "6aTl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UploadComponent_table_11_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_table_11_tr_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const datos_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.generatePDF(datos_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Generar PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const datos_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](datos_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](datos_r2.correo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](datos_r2.salario);
} }
function UploadComponent_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Salario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UploadComponent_table_11_tr_14_Template, 12, 4, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data);
} }
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__["pdfMake"].vfs;
class UploadComponent {
    constructor(fileUploadService, CreatePdfBoletaService) {
        this.fileUploadService = fileUploadService;
        this.CreatePdfBoletaService = CreatePdfBoletaService;
        this.selectedFile = null;
        this.data = [];
    }
    ngOnInit() {
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const bstr = e.target.result;
                const wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](bstr, { type: 'binary' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                this.data = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws);
                console.log(this.data);
            };
            reader.readAsBinaryString(this.selectedFile);
        }
    }
    uploadFile() {
        if (this.selectedFile) {
            this.fileUploadService.uploadFile(this.selectedFile).then(() => {
                alert('File uploaded and processed successfully');
            }).catch(error => {
                console.error(error);
                alert('Error uploading file');
            });
        }
        else {
            alert('Please select a file first');
        }
    }
    generatePDF(datos) {
        console.log(datos);
        this.CreatePdfBoletaService.generatePDF(datos);
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_file_upload_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_create_pdf_boleta_service__WEBPACK_IMPORTED_MODULE_5__["CreatePdfBoletaService"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], decls: 12, vars: 1, consts: [["type", "file", 3, "change"], [3, "click"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], ["class", "table table-hover", 4, "ngIf"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload Excel File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_3_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_4_listener() { return ctx.uploadFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_6_listener() { return ctx.generatePDF("verde"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Generar PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UploadComponent_table_11_Template, 15, 1, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload',
                templateUrl: './upload.component.html',
                styleUrls: ['./upload.component.css']
            }]
    }], function () { return [{ type: _file_upload_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"] }, { type: _services_create_pdf_boleta_service__WEBPACK_IMPORTED_MODULE_5__["CreatePdfBoletaService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'sistema-Distribuidora-Moran';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthService {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    login(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }
    logout() {
        return this.afAuth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }
    isAuthenticated() {
        return this.afAuth.authState;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "sXm/":
/*!****************************************!*\
  !*** ./src/app/file-upload.service.ts ***!
  \****************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/functions */ "RgrY");




class FileUploadService {
    constructor(storage, functions) {
        this.storage = storage;
        this.functions = functions;
    }
    uploadFile(file) {
        const filePath = `uploads/${file.name}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        return task.snapshotChanges().toPromise().then(() => {
            return fileRef.getDownloadURL().toPromise();
        }).then(downloadURL => {
            return this.functions.httpsCallable('processFile')({ url: downloadURL }).toPromise();
        });
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_functions__WEBPACK_IMPORTED_MODULE_2__["AngularFireFunctions"])); };
FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }, { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_2__["AngularFireFunctions"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");






const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    login() {
        this.authService.login(this.email, this.password).then(() => {
            this.router.navigate(['/upload']);
        }).catch(error => {
            console.error(error);
            alert('Invalid credentials');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 2, consts: [[1, "container-fluid"], [1, "page", "login-page"], [1, "container", "d-flex", "align-items-center"], [1, "form-holder", "has-shadow"], [1, "row"], [1, "col-lg-6"], [1, "info", "d-flex", "align-items-center"], [1, "content"], [1, "logo"], [1, "col-lg-6", "bg-white"], [1, "form", "d-flex", "align-items-center"], [1, "col-md-12", "text-center"], ["src", "../assets/imagenes/logo_alta_resolucion.png", "alt", "", 2, "width", "50%", "margin-bottom", "45px"], ["method", "post", "novalidate", "novalidate", 1, "form-validate", 3, "ngSubmit"], [1, "form-group"], ["type", "email", "id", "inputEmail", "placeholder", "Nombre de Usuario", "name", "first", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "inputPassword", "placeholder", "Contrase\u00F1a", "name", "password", 1, "form-control", 2, "margin-top", "20px", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 2, "margin-top", "20px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Distribuidora Moaraz\u00E1n S.A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_17_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map