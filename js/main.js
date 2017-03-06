var test;
var codebook = {
	deviceList: {
		0: {
			dId: '6163',
			manufacturer: 'Samsung',
			model: 'Galaxy A3 2017',
			upfrontPrice: '29',
			monthlyPrice: '95',
			tariff: 'Bez Granica L+',
			isAvailable: true,
			category: 'mobile',
			colors: {
				0: {
					image: 'img/6163-vprBig-black.png',
					hexColor: '#434343',
					isDefault: true
				},
				1: {
					image: 'img/6163-vprBig-grey.png',
					hexColor: '#bfbfbf',
					isDefault: false
				}
			}
		},
		1: {
			dId: '6144',
			manufacturer: 'Samsung',
			model: 'Galaxy A5 2017',
			upfrontPrice: '269',
			monthlyPrice: '120',
			tariff: 'Bez Granica L+',
			isAvailable: true,
			category: 'mobile',
			colors: {
				0: {
					id: 'grey',
					image: 'img/6144-vprBig-grey.png',
					hexColor: '#bfbfbf',
					isDefault: true
				},
				1: {
					image: 'img/6144-vprBig-black.png',
					hexColor: '#434343',
					isDefault: false
				}
			} 
		},
		2: {
			dId: '5882',
			manufacturer: 'Samsung',
			model: 'Galaxy A5 2017',
			upfrontPrice: '269',
			monthlyPrice: '120',
			tariff: 'Bez Granica L+',
			isAvailable: true,
			category: 'mobile',
			colors: {
				0: {
					id: 'grey',
					image: 'http://static.vip.hr/hwdb/images/uploaded/VPR_picture_big/2424381_5882-vprBig.png',
					hexColor: '#bfbfbf',
					isDefault: true
				},
				1: {
					image: 'http://static.vip.hr/hwdb/images/uploaded/VPR_picture_big/2424381_5882-vprBig.png',
					hexColor: '#434343',
					isDefault: false
				}
			} 
		},
		3: {
			dId: '5843',
			manufacturer: 'Samsung',
			model: 'Galaxy A5 2017',
			upfrontPrice: '269',
			monthlyPrice: '120',
			tariff: 'Bez Granica L+',
			isAvailable: true,
			category: 'mobile',
			colors: {
				0: {
					id: 'grey',
					image: 'http://static.vip.hr/hwdb/images/uploaded/VPR_picture_big/2424442_5843-vprBig.png',
					hexColor: '#bfbfbf',
					isDefault: true
				},
				1: {
					image: 'http://static.vip.hr/hwdb/images/uploaded/VPR_picture_big/2424442_5843-vprBig.png',
					hexColor: '#434343',
					isDefault: false
				}
			} 
		},
		4: {
			dId: '12419',
			manufacturer: 'Samsung',
			model: 'Galaxy A5 2017',
			upfrontPrice: '269',
			monthlyPrice: '120',
			tariff: 'Bez Granica L+',
			isAvailable: true,
			category: 'mobile',
			colors: {
				0: {
					id: 'grey',
					image: 'http://static.vip.hr/hwdb/images/uploaded/VPR_picture_big/2424634_12419_vprBig180x360.png',
					hexColor: '#bfbfbf',
					isDefault: true
				},
				1: {
					image: 'http://static.vip.hr/hwdb/images/uploaded/VPR_picture_big/2424442_5843-vprBig.png',
					hexColor: '#434343',
					isDefault: false
				}
			} 
		}
	}
};
var Util = {
    sortArrayFromLowerToHigher: function (sort) {
        /*sort = [8, 4, 1, 14, 17, 22, 13, 200, 150, 2, 2, 4];*/
        for (var i = 0; i < sort.length; i++) {
            for (var y = 0; y < sort.length; y++) {
                if (sort[i] > sort[i+y]) {
                    var tmp = sort[i];
                    sort[i] = sort[i+y];
                    sort[i+y] = tmp;
                }
            }
            console.log(sort);
        }
    },
    clearObj: function(obj) {
        if((this.objectSize(obj) > 0) ||
            (this.objectSize(obj) === undefined)) {
            obj = {};
            return obj;
        }
    },
    /* todo */
    createObj: function(keyList, valueList) {
        var i = 0;
        var res = {};
        for(i; i < this.objectSize(objPropVal); i++) {
            obj['prop1'] = '';
        }
    },
    objectSize: function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                size++;
            }
        }
        return size;
    },
    beautifyNum: function(number) {
        var i = 0;
        var arr = [];
        var res = [''];
        var self = this;
        number = number.toString();
        return {
            init: function() {
                return this.makeArrDivisibleByThree();
            },
            makeArrDivisibleByThree: function() {
                if((number.length % 3) !== 0) {
                    for(i; i < (3 - (number.length % 3)); i++) {
                        arr[i] = '';
                    }
                }
                i = 0;
                for(i; i < number.length; i++) {
                    arr.push(number.substr(i, 1));
                }
                i = 0;
                return this.setDotsBetweenDividedArrs();    
            },
            setDotsBetweenDividedArrs: function() {
                for(i; i < arr.length; i++) {
                    if(((i % 3) === 0) &&
                        (i > 0)) {
                        if(arr[i-1] != '-') {
                            res.push('.');
                        }
                        res.push(arr[i]);
                    } else {
                        res.push(arr[i]);
                    }
                }
                res = res.join('');
                return res;
            }
        }
    },
};
var fns = function() {
	return {
		init: function() {
			this.showdeviceLists().init();
		},
		showdeviceLists: function() {
			return {
				init: function() {
					this.setMarkup();
					this.changeColorAndImage();
					this.centerGeneratedColors();
					this.toggleColorPaletteAndFocusDefocusDevicesOnHover();
				},
				setMarkup: function() {
					var i = 0,
						container = $('<div class="t1" />'),
						tmp;
					for(i; i < Util.objectSize(codebook.deviceList); i++) {
						if(codebook.deviceList[i].isAvailable) {
							tmp = '<div id="' + codebook.deviceList[i].dId + '" class="col-md-3 col-sm-4 text-center skin-marginBottom-1 deviceListItem overrideCss">' + 
									'<a>' + 
										'<div class="grid-color-palette">' + 
											'<div>' + 
												'<div id="manufacturer' + codebook.deviceList[i].dId + '" class="skin-fontSize-2 skin-fontWeight-1">' + 
													codebook.deviceList[i].manufacturer + 
												'</div>' + 
												'<div id="model' + codebook.deviceList[i].dId + '" class="skin-fontSize-3 skin-fontWeight-2">' + 
													codebook.deviceList[i].model + 
												'</div>' + 
											'</div>' + 
											'<div>' + 
												this.generateColors(i) +
											'</div>' + 
											'<div>' + 
												'<div class="skin-upfrontMonthlyWidth-1">' +
													'<div class="skin-paddingTop-1">' +
														'<span id="upfrontPrice' + codebook.deviceList[i].dId + '" class="skin-fontSize-1 skin-fontWeight-1">' + 
															Util.beautifyNum(codebook.deviceList[i].upfrontPrice).init() + 
														'</span>' + 
														' kn odmah' +
													'</div>' + 
													'<div class="skin-marginTop-1 skin-paddingTop-1 skin-borderTop-1">' +
														'<span id="monthlyPrice' + codebook.deviceList[i].dId + '" class="skin-fontSize-4 skin-fontWeight-1">' + 
															'+ ' + codebook.deviceList[i].monthlyPrice + 
														'</span>' + 
														' kn / mj.' +
													'</div>' + 
													'<div class="skin-tariff">' + 
														codebook.deviceList[i].tariff + 
													'</div>' + 
												'</div>' + 
											'</div>' + 
										'</div>' + 
									'</a>' + 
								'</div>';
							container.append(tmp);
						}
					}
					$('#showDevices').addClass('overflowXHidden').append(container);
				},
				generateColors: function(item) {
					var i = 0,
						tmp = [];
					tmp.push('<div id="colorPalette" class="skin-color-palette visHidden">');
						for(i; i < Util.objectSize(codebook.deviceList[item].colors); i++) {
							if(Util.objectSize(codebook.deviceList[item].colors) > 1) {
								if(codebook.deviceList[item].colors[i].isDefault) {
									tmp.push('<div>' +
										'<div class="skin-marginBottom-2 changeColorAndImage" style="position: relative">' + 
											'<div class="item activeColor" hexColor="' + codebook.deviceList[item].colors[i].hexColor + '" style="background-color:' +  
												codebook.deviceList[item].colors[i].hexColor + ';">' + 
											'</div>' + 
										'</div>' +
									'</div>');
								} else {
									tmp.push('<div>' + 
										'<div class="skin-marginBottom-2 changeColorAndImage">' + 
											'<div class="item" hexColor="' + codebook.deviceList[item].colors[i].hexColor + '" style="background-color:' +  
												codebook.deviceList[item].colors[i].hexColor + ';">' + 
											'</div>' + 
										'</div>' +
									'</div>');
								}
							}
						}
						i = 0;
					tmp.push('</div>');
					for(i; i < Util.objectSize(codebook.deviceList[item].colors); i++) {
						if(codebook.deviceList[item].colors[i].isDefault) {
							tmp.push('<img class="skin-paddingTop-1 deviceImage" src="' + codebook.deviceList[item].colors[i].image + '" />');
						}
					}
					i = 0;
					tmp = tmp.join('');
					return tmp;
				},
				changeColorAndImage: function() {
					var doChange = function(obj) {
						var deviceId = $(obj.currentTarget).parents().eq(1).next().attr('src').split('-')[0].split('/')[1]
							i = 0
							y = 0;
						for(i; i < Util.objectSize(codebook.deviceList); i++) {
							if(codebook.deviceList[i].dId == deviceId) {
								for(y; y < Util.objectSize(codebook.deviceList[i].colors); y++) {
									if(new RegExp(codebook.deviceList[i].colors[y].hexColor).test($(obj.currentTarget).find('.item').attr('hexColor'))) {
										$(obj.currentTarget).parents().eq(1).next().attr('src', codebook.deviceList[i].colors[y].image);
										$('#' + deviceId + ' .activeColor').removeClass('activeColor');
										$(obj.currentTarget).find('.item').addClass('activeColor');
									}
								}
							}
						}
					};
					$('.changeColorAndImage').on('mouseover', function(e) {
						doChange(e);	
					}).on('click', function(e) {
						doChange(e);
					});
				},
				centerGeneratedColors: function() {
					var elem = $('.deviceListItem'),
						deltaEqualTopBottomMargin;
					elem.on('mouseover', function(e) {
						deltaEqualTopBottomMargin = (($(e.currentTarget).find('img').outerHeight() - $(e.currentTarget).find('#colorPalette').outerHeight()) / 2);
						$(e.currentTarget).find('#colorPalette').css('margin-top', deltaEqualTopBottomMargin + 'px');
						deltaEqualTopBottomMargin = '';
					});
				},
				toggleColorPaletteAndFocusDefocusDevicesOnHover: function() {
					var elem = $('.deviceListItem'),
						self = this;
					elem.on('mouseover', function(e) {
						var i = 0,
							x = 0;
						e.preventDefault();
						for(i; i < elem.length; i++) {
							if(elem.eq(i).attr('id') !== e.currentTarget.id) {
								elem.eq(i).addClass('skin-opacity-1 skin-height-1');
								elem.eq(i).attr('style', 'height:' + $(e.currentTarget).outerHeight() + 'px');
							} else {
								elem.eq(i).find('.skin-color-palette').removeClass('visHidden');
							}
						}
					}).on('mouseleave', function(e){
						var i = 0;
						e.preventDefault();
						for(i; i < elem.length; i++) {
							if(elem.eq(i).attr('id') !== e.currentTarget.id) {
								elem.eq(i).removeClass('skin-opacity-1 skin-height-1').removeAttr('style');
								elem.eq(i).removeAttr('style');
								$(e.currentTarget).find('.skin-color-palette').addClass('visHidden');
							}
						}
					});
				}
			}
		}
	};
}
$(document).ready(function(){
	fns().init();
});