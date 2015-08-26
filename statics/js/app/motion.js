/* Zepto v1.1.4-1-gbd2327c - zepto event ajax form ie detect fx fx_methods touch gesture - zeptojs.com/license */
var Zepto = function() {
	function _(t) {
		return null == t ? String(t) : E[S.call(t)] || "object"
	}

	function A(t) {
		return "function" == _(t)
	}

	function L(t) {
		return null != t && t == t.window
	}

	function k(t) {
		return null != t && t.nodeType == t.DOCUMENT_NODE
	}

	function Z(t) {
		return "object" == _(t)
	}

	function D(t) {
		return Z(t) && !L(t) && Object.getPrototypeOf(t) == Object.prototype
	}

	function $(t) {
		return "number" == typeof t.length
	}

	function R(t) {
		return a.call(t, function(t) {
			return null != t
		})
	}

	function F(t) {
		return t.length > 0 ? n.fn.concat.apply([], t) : t
	}

	function z(t) {
		return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function I(t) {
		return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
	}

	function q(t, e) {
		return "number" != typeof e || c[z(t)] ? e : e + "px"
	}

	function B(t) {
		var e, n;
		return u[t] || (e = s.createElement(t), s.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t]
	}

	function H(t) {
		return "children" in t ? o.call(t.children) : n.map(t.childNodes, function(t) {
			return 1 == t.nodeType ? t : void 0
		})
	}

	function U(n, i, r) {
		for (e in i) r && (D(i[e]) || M(i[e])) ? (D(i[e]) && !D(n[e]) && (n[e] = {}), M(i[e]) && !M(n[e]) && (n[e] = []), U(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
	}

	function V(t, e) {
		return null == e ? n(t) : n(t).filter(e)
	}

	function X(t, e, n, i) {
		return A(e) ? e.call(t, n, i) : e
	}

	function Y(t, e, n) {
		null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
	}

	function W(e, n) {
		var i = e.className,
			r = i && i.baseVal !== t;
		return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
	}

	function J(t) {
		var e;
		try {
			return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t : e) : t
		} catch (i) {
			return t
		}
	}

	function G(t, e) {
		e(t);
		for (var n = 0, i = t.childNodes.length; i > n; n++) G(t.childNodes[n], e)
	}
	var t, e, n, i, P, C, r = [],
		o = r.slice,
		a = r.filter,
		s = window.document,
		u = {},
		f = {},
		c = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		l = /^\s*<(\w+|!)[^>]*>/,
		h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		d = /^(?:body|html)$/i,
		m = /([A-Z])/g,
		g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		v = ["after", "prepend", "before", "append"],
		y = s.createElement("table"),
		b = s.createElement("tr"),
		w = {
			tr: s.createElement("tbody"),
			tbody: y,
			thead: y,
			tfoot: y,
			td: b,
			th: b,
			"*": s.createElement("div")
		},
		x = /complete|loaded|interactive/,
		T = /^[\w-]*$/,
		E = {},
		S = E.toString,
		j = {},
		O = s.createElement("div"),
		N = {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		M = Array.isArray || function(t) {
			return t instanceof Array
		};
	return j.matches = function(t, e) {
		if (!e || !t || 1 !== t.nodeType) return !1;
		var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
		if (n) return n.call(t, e);
		var i, r = t.parentNode,
			o = !r;
		return o && (r = O).appendChild(t), i = ~j.qsa(r, e).indexOf(t), o && O.removeChild(t), i
	}, P = function(t) {
		return t.replace(/-+(.)?/g, function(t, e) {
			return e ? e.toUpperCase() : ""
		})
	}, C = function(t) {
		return a.call(t, function(e, n) {
			return t.indexOf(e) == n
		})
	}, j.fragment = function(e, i, r) {
		var a, u, f;
		return h.test(e) && (a = n(s.createElement(RegExp.$1))), a || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in w || (i = "*"), f = w[i], f.innerHTML = "" + e, a = n.each(o.call(f.childNodes), function() {
			f.removeChild(this)
		})), D(r) && (u = n(a), n.each(r, function(t, e) {
			g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
		})), a
	}, j.Z = function(t, e) {
		return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t
	}, j.isZ = function(t) {
		return t instanceof j.Z
	}, j.init = function(e, i) {
		var r;
		if (!e) return j.Z();
		if ("string" == typeof e)
			if (e = e.trim(), "<" == e[0] && l.test(e)) r = j.fragment(e, RegExp.$1, i), e = null;
			else {
				if (i !== t) return n(i).find(e);
				r = j.qsa(s, e)
			} else {
			if (A(e)) return n(s).ready(e);
			if (j.isZ(e)) return e;
			if (M(e)) r = R(e);
			else if (Z(e)) r = [e], e = null;
			else if (l.test(e)) r = j.fragment(e.trim(), RegExp.$1, i), e = null;
			else {
				if (i !== t) return n(i).find(e);
				r = j.qsa(s, e)
			}
		}
		return j.Z(r, e)
	}, n = function(t, e) {
		return j.init(t, e)
	}, n.extend = function(t) {
		var e, n = o.call(arguments, 1);
		return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
			U(t, n, e)
		}), t
	}, j.qsa = function(t, e) {
		var n, i = "#" == e[0],
			r = !i && "." == e[0],
			a = i || r ? e.slice(1) : e,
			s = T.test(a);
		return k(t) && s && i ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(s && !i ? r ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
	}, n.contains = s.documentElement.contains ? function(t, e) {
		return t !== e && t.contains(e)
	} : function(t, e) {
		for (; e && (e = e.parentNode);)
			if (e === t) return !0;
		return !1
	}, n.type = _, n.isFunction = A, n.isWindow = L, n.isArray = M, n.isPlainObject = D, n.isEmptyObject = function(t) {
		var e;
		for (e in t) return !1;
		return !0
	}, n.inArray = function(t, e, n) {
		return r.indexOf.call(e, t, n)
	}, n.camelCase = P, n.trim = function(t) {
		return null == t ? "" : String.prototype.trim.call(t)
	}, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function(t, e) {
		var n, r, o, i = [];
		if ($(t))
			for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);
		else
			for (o in t) n = e(t[o], o), null != n && i.push(n);
		return F(i)
	}, n.each = function(t, e) {
		var n, i;
		if ($(t)) {
			for (n = 0; n < t.length; n++)
				if (e.call(t[n], n, t[n]) === !1) return t
		} else
			for (i in t)
				if (e.call(t[i], i, t[i]) === !1) return t;
		return t
	}, n.grep = function(t, e) {
		return a.call(t, e)
	}, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		E["[object " + e + "]"] = e.toLowerCase()
	}), n.fn = {
		forEach: r.forEach,
		reduce: r.reduce,
		push: r.push,
		sort: r.sort,
		indexOf: r.indexOf,
		concat: r.concat,
		map: function(t) {
			return n(n.map(this, function(e, n) {
				return t.call(e, n, e)
			}))
		},
		slice: function() {
			return n(o.apply(this, arguments))
		},
		ready: function(t) {
			return x.test(s.readyState) && s.body ? t(n) : s.addEventListener("DOMContentLoaded", function() {
				t(n)
			}, !1), this
		},
		get: function(e) {
			return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length]
		},
		toArray: function() {
			return this.get()
		},
		size: function() {
			return this.length
		},
		remove: function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function(t) {
			return r.every.call(this, function(e, n) {
				return t.call(e, n, e) !== !1
			}), this
		},
		filter: function(t) {
			return A(t) ? this.not(this.not(t)) : n(a.call(this, function(e) {
				return j.matches(e, t)
			}))
		},
		add: function(t, e) {
			return n(C(this.concat(n(t, e))))
		},
		is: function(t) {
			return this.length > 0 && j.matches(this[0], t)
		},
		not: function(e) {
			var i = [];
			if (A(e) && e.call !== t) this.each(function(t) {
				e.call(this, t) || i.push(this)
			});
			else {
				var r = "string" == typeof e ? this.filter(e) : $(e) && A(e.item) ? o.call(e) : n(e);
				this.forEach(function(t) {
					r.indexOf(t) < 0 && i.push(t)
				})
			}
			return n(i)
		},
		has: function(t) {
			return this.filter(function() {
				return Z(t) ? n.contains(this, t) : n(this).find(t).size()
			})
		},
		eq: function(t) {
			return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
		},
		first: function() {
			var t = this[0];
			return t && !Z(t) ? t : n(t)
		},
		last: function() {
			var t = this[this.length - 1];
			return t && !Z(t) ? t : n(t)
		},
		find: function(t) {
			var e, i = this;
			return e = t ? "object" == typeof t ? n(t).filter(function() {
				var t = this;
				return r.some.call(i, function(e) {
					return n.contains(e, t)
				})
			}) : 1 == this.length ? n(j.qsa(this[0], t)) : this.map(function() {
				return j.qsa(this, t)
			}) : []
		},
		closest: function(t, e) {
			var i = this[0],
				r = !1;
			for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : j.matches(i, t));) i = i !== e && !k(i) && i.parentNode;
			return n(i)
		},
		parents: function(t) {
			for (var e = [], i = this; i.length > 0;) i = n.map(i, function(t) {
				return (t = t.parentNode) && !k(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
			});
			return V(e, t)
		},
		parent: function(t) {
			return V(C(this.pluck("parentNode")), t)
		},
		children: function(t) {
			return V(this.map(function() {
				return H(this)
			}), t)
		},
		contents: function() {
			return this.map(function() {
				return o.call(this.childNodes)
			})
		},
		siblings: function(t) {
			return V(this.map(function(t, e) {
				return a.call(H(e.parentNode), function(t) {
					return t !== e
				})
			}), t)
		},
		empty: function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck: function(t) {
			return n.map(this, function(e) {
				return e[t]
			})
		},
		show: function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = B(this.nodeName))
			})
		},
		replaceWith: function(t) {
			return this.before(t).remove()
		},
		wrap: function(t) {
			var e = A(t);
			if (this[0] && !e) var i = n(t).get(0),
				r = i.parentNode || this.length > 1;
			return this.each(function(o) {
				n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
			})
		},
		wrapAll: function(t) {
			if (this[0]) {
				n(this[0]).before(t = n(t));
				for (var e;
					(e = t.children()).length;) t = e.first();
				n(t).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			var e = A(t);
			return this.each(function(i) {
				var r = n(this),
					o = r.contents(),
					a = e ? t.call(this, i) : t;
				o.length ? o.wrapAll(a) : r.append(a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				n(this).replaceWith(n(this).children())
			}), this
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide: function() {
			return this.css("display", "none")
		},
		toggle: function(e) {
			return this.each(function() {
				var i = n(this);
				(e === t ? "none" == i.css("display") : e) ? i.show(): i.hide()
			})
		},
		prev: function(t) {
			return n(this.pluck("previousElementSibling")).filter(t || "*")
		},
		next: function(t) {
			return n(this.pluck("nextElementSibling")).filter(t || "*")
		},
		html: function(t) {
			return 0 in arguments ? this.each(function(e) {
				var i = this.innerHTML;
				n(this).empty().append(X(this, t, e, i))
			}) : 0 in this ? this[0].innerHTML : null
		},
		text: function(t) {
			return 0 in arguments ? this.each(function(e) {
				var n = X(this, t, e, this.textContent);
				this.textContent = null == n ? "" : "" + n
			}) : 0 in this ? this[0].textContent : null
		},
		attr: function(n, i) {
			var r;
			return "string" != typeof n || 1 in arguments ? this.each(function(t) {
				if (1 === this.nodeType)
					if (Z(n))
						for (e in n) Y(this, e, n[e]);
					else Y(this, n, X(this, i, t, this.getAttribute(n)))
			}) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
		},
		removeAttr: function(t) {
			return this.each(function() {
				1 === this.nodeType && Y(this, t)
			})
		},
		prop: function(t, e) {
			return t = N[t] || t, 1 in arguments ? this.each(function(n) {
				this[t] = X(this, e, n, this[t])
			}) : this[0] && this[0][t]
		},
		data: function(e, n) {
			var i = "data-" + e.replace(m, "-$1").toLowerCase(),
				r = 1 in arguments ? this.attr(i, n) : this.attr(i);
			return null !== r ? J(r) : t
		},
		val: function(t) {
			return 0 in arguments ? this.each(function(e) {
				this.value = X(this, t, e, this.value)
			}) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
				return this.selected
			}).pluck("value") : this[0].value)
		},
		offset: function(t) {
			if (t) return this.each(function(e) {
				var i = n(this),
					r = X(this, t, e, i.offset()),
					o = i.offsetParent().offset(),
					a = {
						top: r.top - o.top,
						left: r.left - o.left
					};
				"static" == i.css("position") && (a.position = "relative"), i.css(a)
			});
			if (!this.length) return null;
			var e = this[0].getBoundingClientRect();
			return {
				left: e.left + window.pageXOffset,
				top: e.top + window.pageYOffset,
				width: Math.round(e.width),
				height: Math.round(e.height)
			}
		},
		css: function(t, i) {
			if (arguments.length < 2) {
				var r = this[0],
					o = getComputedStyle(r, "");
				if (!r) return;
				if ("string" == typeof t) return r.style[P(t)] || o.getPropertyValue(t);
				if (M(t)) {
					var a = {};
					return n.each(M(t) ? t : [t], function(t, e) {
						a[e] = r.style[P(e)] || o.getPropertyValue(e)
					}), a
				}
			}
			var s = "";
			if ("string" == _(t)) i || 0 === i ? s = z(t) + ":" + q(t, i) : this.each(function() {
				this.style.removeProperty(z(t))
			});
			else
				for (e in t) t[e] || 0 === t[e] ? s += z(e) + ":" + q(e, t[e]) + ";" : this.each(function() {
					this.style.removeProperty(z(e))
				});
			return this.each(function() {
				this.style.cssText += ";" + s
			})
		},
		index: function(t) {
			return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function(t) {
			return t ? r.some.call(this, function(t) {
				return this.test(W(t))
			}, I(t)) : !1
		},
		addClass: function(t) {
			return t ? this.each(function(e) {
				i = [];
				var r = W(this),
					o = X(this, t, e, r);
				o.split(/\s+/g).forEach(function(t) {
					n(this).hasClass(t) || i.push(t)
				}, this), i.length && W(this, r + (r ? " " : "") + i.join(" "))
			}) : this
		},
		removeClass: function(e) {
			return this.each(function(n) {
				return e === t ? W(this, "") : (i = W(this), X(this, e, n, i).split(/\s+/g).forEach(function(t) {
					i = i.replace(I(t), " ")
				}), void W(this, i.trim()))
			})
		},
		toggleClass: function(e, i) {
			return e ? this.each(function(r) {
				var o = n(this),
					a = X(this, e, r, W(this));
				a.split(/\s+/g).forEach(function(e) {
					(i === t ? !o.hasClass(e) : i) ? o.addClass(e): o.removeClass(e)
				})
			}) : this
		},
		scrollTop: function(e) {
			if (this.length) {
				var n = "scrollTop" in this[0];
				return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
					this.scrollTop = e
				} : function() {
					this.scrollTo(this.scrollX, e)
				})
			}
		},
		scrollLeft: function(e) {
			if (this.length) {
				var n = "scrollLeft" in this[0];
				return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
					this.scrollLeft = e
				} : function() {
					this.scrollTo(e, this.scrollY)
				})
			}
		},
		position: function() {
			if (this.length) {
				var t = this[0],
					e = this.offsetParent(),
					i = this.offset(),
					r = d.test(e[0].nodeName) ? {
						top: 0,
						left: 0
					} : e.offset();
				return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
					top: i.top - r.top,
					left: i.left - r.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || s.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
				return t
			})
		}
	}, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(e) {
		var i = e.replace(/./, function(t) {
			return t[0].toUpperCase()
		});
		n.fn[e] = function(r) {
			var o, a = this[0];
			return r === t ? L(a) ? a["inner" + i] : k(a) ? a.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
				a = n(this), a.css(e, X(this, r, t, a[e]()))
			})
		}
	}), v.forEach(function(t, e) {
		var i = e % 2;
		n.fn[t] = function() {
			var t, o, r = n.map(arguments, function(e) {
					return t = _(e), "object" == t || "array" == t || null == e ? e : j.fragment(e)
				}),
				a = this.length > 1;
			return r.length < 1 ? this : this.each(function(t, u) {
				o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
				var f = n.contains(s.documentElement, o);
				r.forEach(function(t) {
					if (a) t = t.cloneNode(!0);
					else if (!o) return n(t).remove();
					o.insertBefore(t, u), f && G(t, function(t) {
						null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
					})
				})
			})
		}, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
			return n(e)[t](this), this
		}
	}), j.Z.prototype = n.fn, j.uniq = C, j.deserializeValue = J, n.zepto = j, n
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
	function(t) {
		function l(t) {
			return t._zid || (t._zid = e++)
		}

		function h(t, e, n, i) {
			if (e = p(e), e.ns) var r = d(e.ns);
			return (a[l(t)] || []).filter(function(t) {
				return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
			})
		}

		function p(t) {
			var e = ("" + t).split(".");
			return {
				e: e[0],
				ns: e.slice(1).sort().join(" ")
			}
		}

		function d(t) {
			return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
		}

		function m(t, e) {
			return t.del && !u && t.e in f || !!e
		}

		function g(t) {
			return c[t] || u && f[t] || t
		}

		function v(e, i, r, o, s, u, f) {
			var h = l(e),
				d = a[h] || (a[h] = []);
			i.split(/\s/).forEach(function(i) {
				if ("ready" == i) return t(document).ready(r);
				var a = p(i);
				a.fn = r, a.sel = s, a.e in c && (r = function(e) {
					var n = e.relatedTarget;
					return !n || n !== this && !t.contains(this, n) ? a.fn.apply(this, arguments) : void 0
				}), a.del = u;
				var l = u || r;
				a.proxy = function(t) {
					if (t = E(t), !t.isImmediatePropagationStopped()) {
						t.data = o;
						var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
						return i === !1 && (t.preventDefault(), t.stopPropagation()), i
					}
				}, a.i = d.length, d.push(a), "addEventListener" in e && e.addEventListener(g(a.e), a.proxy, m(a, f))
			})
		}

		function y(t, e, n, i, r) {
			var o = l(t);
			(e || "").split(/\s/).forEach(function(e) {
				h(t, e, n, i).forEach(function(e) {
					delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
				})
			})
		}

		function E(e, i) {
			return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(T, function(t, n) {
				var r = i[t];
				e[t] = function() {
					return this[n] = b, r && r.apply(i, arguments)
				}, e[n] = w
			}), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = b)), e
		}

		function S(t) {
			var e, i = {
				originalEvent: t
			};
			for (e in t) x.test(e) || t[e] === n || (i[e] = t[e]);
			return E(i, t)
		}
		var n, e = 1,
			i = Array.prototype.slice,
			r = t.isFunction,
			o = function(t) {
				return "string" == typeof t
			},
			a = {},
			s = {},
			u = "onfocusin" in window,
			f = {
				focus: "focusin",
				blur: "focusout"
			},
			c = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			};
		s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents", t.event = {
			add: v,
			remove: y
		}, t.proxy = function(e, n) {
			var a = 2 in arguments && i.call(arguments, 2);
			if (r(e)) {
				var s = function() {
					return e.apply(n, a ? a.concat(i.call(arguments)) : arguments)
				};
				return s._zid = l(e), s
			}
			if (o(n)) return a ? (a.unshift(e[n], e), t.proxy.apply(null, a)) : t.proxy(e[n], e);
			throw new TypeError("expected function")
		}, t.fn.bind = function(t, e, n) {
			return this.on(t, e, n)
		}, t.fn.unbind = function(t, e) {
			return this.off(t, e)
		}, t.fn.one = function(t, e, n, i) {
			return this.on(t, e, n, i, 1)
		};
		var b = function() {
				return !0
			},
			w = function() {
				return !1
			},
			x = /^([A-Z]|returnValue$|layer[XY]$)/,
			T = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
		t.fn.delegate = function(t, e, n) {
			return this.on(e, t, n)
		}, t.fn.undelegate = function(t, e, n) {
			return this.off(e, t, n)
		}, t.fn.live = function(e, n) {
			return t(document.body).delegate(this.selector, e, n), this
		}, t.fn.die = function(e, n) {
			return t(document.body).undelegate(this.selector, e, n), this
		}, t.fn.on = function(e, a, s, u, f) {
			var c, l, h = this;
			return e && !o(e) ? (t.each(e, function(t, e) {
				h.on(t, a, s, e, f)
			}), h) : (o(a) || r(u) || u === !1 || (u = s, s = a, a = n), (r(s) || s === !1) && (u = s, s = n), u === !1 && (u = w), h.each(function(n, r) {
				f && (c = function(t) {
					return y(r, t.type, u), u.apply(this, arguments)
				}), a && (l = function(e) {
					var n, o = t(e.target).closest(a, r).get(0);
					return o && o !== r ? (n = t.extend(S(e), {
						currentTarget: o,
						liveFired: r
					}), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
				}), v(r, e, u, s, a, l || c)
			}))
		}, t.fn.off = function(e, i, a) {
			var s = this;
			return e && !o(e) ? (t.each(e, function(t, e) {
				s.off(t, i, e)
			}), s) : (o(i) || r(a) || a === !1 || (a = i, i = n), a === !1 && (a = w), s.each(function() {
				y(this, e, a, i)
			}))
		}, t.fn.trigger = function(e, n) {
			return e = o(e) || t.isPlainObject(e) ? t.Event(e) : E(e), e._args = n, this.each(function() {
				"dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
			})
		}, t.fn.triggerHandler = function(e, n) {
			var i, r;
			return this.each(function(a, s) {
				i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = s, t.each(h(s, e.type || e), function(t, e) {
					return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
				})
			}), r
		}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
			t.fn[e] = function(t) {
				return t ? this.bind(e, t) : this.trigger(e)
			}
		}), ["focus", "blur"].forEach(function(e) {
			t.fn[e] = function(t) {
				return t ? this.bind(e, t) : this.each(function() {
					try {
						this[e]()
					} catch (t) {}
				}), this
			}
		}), t.Event = function(t, e) {
			o(t) || (e = t, t = e.type);
			var n = document.createEvent(s[t] || "Events"),
				i = !0;
			if (e)
				for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
			return n.initEvent(t, i, !0), E(n)
		}
	}(Zepto),
	function(t) {
		function l(e, n, i) {
			var r = t.Event(n);
			return t(e).trigger(r, i), !r.isDefaultPrevented()
		}

		function h(t, e, i, r) {
			return t.global ? l(e || n, i, r) : void 0
		}

		function p(e) {
			e.global && 0 === t.active++ && h(e, null, "ajaxStart")
		}

		function d(e) {
			e.global && !--t.active && h(e, null, "ajaxStop")
		}

		function m(t, e) {
			var n = e.context;
			return e.beforeSend.call(n, t, e) === !1 || h(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void h(e, n, "ajaxSend", [t, e])
		}

		function g(t, e, n, i) {
			var r = n.context,
				o = "success";
			n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), h(n, r, "ajaxSuccess", [e, n, t]), y(o, e, n)
		}

		function v(t, e, n, i, r) {
			var o = i.context;
			i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), h(i, o, "ajaxError", [n, i, t || e]), y(e, n, i)
		}

		function y(t, e, n) {
			var i = n.context;
			n.complete.call(i, e, t), h(n, i, "ajaxComplete", [e, n]), d(n)
		}

		function b() {}

		function w(t) {
			return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : a.test(t) ? "script" : s.test(t) && "xml") || "text"
		}

		function x(t, e) {
			return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
		}

		function T(e) {
			e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = x(e.url, e.data), e.data = void 0)
		}

		function E(e, n, i, r) {
			return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
				url: e,
				data: n,
				success: i,
				dataType: r
			}
		}

		function j(e, n, i, r) {
			var o, a = t.isArray(n),
				s = t.isPlainObject(n);
			t.each(n, function(n, u) {
				o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? j(e, u, i, n) : e.add(n, u)
			})
		}
		var i, r, e = 0,
			n = window.document,
			o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			a = /^(?:text|application)\/javascript/i,
			s = /^(?:text|application)\/xml/i,
			u = "application/json",
			f = "text/html",
			c = /^\s*$/;
		t.active = 0, t.ajaxJSONP = function(i, r) {
			if (!("type" in i)) return t.ajax(i);
			var f, h, o = i.jsonpCallback,
				a = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
				s = n.createElement("script"),
				u = window[a],
				c = function(e) {
					t(s).triggerHandler("error", e || "abort")
				},
				l = {
					abort: c
				};
			return r && r.promise(l), t(s).on("load error", function(e, n) {
				clearTimeout(h), t(s).off().remove(), "error" != e.type && f ? g(f[0], l, i, r) : v(null, n || "error", l, i, r), window[a] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
			}), m(l, i) === !1 ? (c("abort"), l) : (window[a] = function() {
				f = arguments
			}, s.src = i.url.replace(/\?(.+)=\?/, "?$1=" + a), n.head.appendChild(s), i.timeout > 0 && (h = setTimeout(function() {
				c("timeout")
			}, i.timeout)), l)
		}, t.ajaxSettings = {
			type: "GET",
			beforeSend: b,
			success: b,
			error: b,
			complete: b,
			context: null,
			global: !0,
			xhr: function() {
				return new window.XMLHttpRequest
			},
			accepts: {
				script: "text/javascript, application/javascript, application/x-javascript",
				json: u,
				xml: "application/xml, text/xml",
				html: f,
				text: "text/plain"
			},
			crossDomain: !1,
			timeout: 0,
			processData: !0,
			cache: !0
		}, t.ajax = function(e) {
			var n = t.extend({}, e || {}),
				o = t.Deferred && t.Deferred();
			for (i in t.ajaxSettings) void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
			p(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), T(n);
			var a = n.dataType,
				s = /\?.+=\?/.test(n.url);
			if (s && (a = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != a && "jsonp" != a) || (n.url = x(n.url, "_=" + Date.now())), "jsonp" == a) return s || (n.url = x(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, o);
			var E, u = n.accepts[a],
				f = {},
				l = function(t, e) {
					f[t.toLowerCase()] = [t, e]
				},
				h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
				d = n.xhr(),
				y = d.setRequestHeader;
			if (o && o.promise(d), n.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", u || "*/*"), (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(u)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
				for (r in n.headers) l(r, n.headers[r]);
			if (d.setRequestHeader = l, d.onreadystatechange = function() {
					if (4 == d.readyState) {
						d.onreadystatechange = b, clearTimeout(E);
						var e, i = !1;
						if (d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) {
							a = a || w(n.mimeType || d.getResponseHeader("content-type")), e = d.responseText;
							try {
								"script" == a ? (1, eval)(e) : "xml" == a ? e = d.responseXML : "json" == a && (e = c.test(e) ? null : t.parseJSON(e))
							} catch (r) {
								i = r
							}
							i ? v(i, "parsererror", d, n, o) : g(e, d, n, o)
						} else v(d.statusText || null, d.status ? "error" : "abort", d, n, o)
					}
				}, m(d, n) === !1) return d.abort(), v(null, "abort", d, n, o), d;
			if (n.xhrFields)
				for (r in n.xhrFields) d[r] = n.xhrFields[r];
			var S = "async" in n ? n.async : !0;
			d.open(n.type, n.url, S, n.username, n.password);
			for (r in f) y.apply(d, f[r]);
			return n.timeout > 0 && (E = setTimeout(function() {
				d.onreadystatechange = b, d.abort(), v(null, "timeout", d, n, o)
			}, n.timeout)), d.send(n.data ? n.data : null), d
		}, t.get = function() {
			return t.ajax(E.apply(null, arguments))
		}, t.post = function() {
			var e = E.apply(null, arguments);
			return e.type = "POST", t.ajax(e)
		}, t.getJSON = function() {
			var e = E.apply(null, arguments);
			return e.dataType = "json", t.ajax(e)
		}, t.fn.load = function(e, n, i) {
			if (!this.length) return this;
			var s, r = this,
				a = e.split(/\s/),
				u = E(e, n, i),
				f = u.success;
			return a.length > 1 && (u.url = a[0], s = a[1]), u.success = function(e) {
				r.html(s ? t("<div>").html(e.replace(o, "")).find(s) : e), f && f.apply(r, arguments)
			}, t.ajax(u), this
		};
		var S = encodeURIComponent;
		t.param = function(t, e) {
			var n = [];
			return n.add = function(t, e) {
				this.push(S(t) + "=" + S(e))
			}, j(n, t, e), n.join("&").replace(/%20/g, "+")
		}
	}(Zepto),
	function(t) {
		t.fn.serializeArray = function() {
			var n, e = [];
			return t([].slice.call(this.get(0).elements)).each(function() {
				n = t(this);
				var i = n.attr("type");
				"fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
					name: n.attr("name"),
					value: n.val()
				})
			}), e
		}, t.fn.serialize = function() {
			var t = [];
			return this.serializeArray().forEach(function(e) {
				t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
			}), t.join("&")
		}, t.fn.submit = function(e) {
			if (e) this.bind("submit", e);
			else if (this.length) {
				var n = t.Event("submit");
				this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
			}
			return this
		}
	}(Zepto),
	function(t) {
		"__proto__" in {} || t.extend(t.zepto, {
			Z: function(e, n) {
				return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
			},
			isZ: function(e) {
				return "array" === t.type(e) && "__Z" in e
			}
		});
		try {
			getComputedStyle(void 0)
		} catch (e) {
			var n = getComputedStyle;
			window.getComputedStyle = function(t) {
				try {
					return n(t)
				} catch (e) {
					return null
				}
			}
		}
	}(Zepto),
	function(t) {
		function e(t) {
			var e = this.os = {},
				n = this.browser = {},
				i = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
				r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
				o = !!t.match(/\(Macintosh\; Intel /),
				a = t.match(/(iPad).*OS\s([\d_]+)/),
				s = t.match(/(iPod)(.*OS\s([\d_]+))?/),
				u = !a && t.match(/(iPhone\sOS)\s([\d_]+)/),
				f = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
				c = t.match(/Windows Phone ([\d.]+)/),
				l = f && t.match(/TouchPad/),
				h = t.match(/Kindle\/([\d.]+)/),
				p = t.match(/Silk\/([\d._]+)/),
				d = t.match(/(BlackBerry).*Version\/([\d.]+)/),
				m = t.match(/(BB10).*Version\/([\d.]+)/),
				g = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
				v = t.match(/PlayBook/),
				y = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
				b = t.match(/Firefox\/([\d.]+)/),
				w = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
				x = !y && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
				T = x || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
			(n.webkit = !!i) && (n.version = i[1]), r && (e.android = !0, e.version = r[2]), u && !s && (e.ios = e.iphone = !0, e.version = u[2].replace(/_/g, ".")), a && (e.ios = e.ipad = !0, e.version = a[2].replace(/_/g, ".")), s && (e.ios = e.ipod = !0, e.version = s[3] ? s[3].replace(/_/g, ".") : null), c && (e.wp = !0, e.version = c[1]), f && (e.webos = !0, e.version = f[2]), l && (e.touchpad = !0), d && (e.blackberry = !0, e.version = d[2]), m && (e.bb10 = !0, e.version = m[2]), g && (e.rimtabletos = !0, e.version = g[2]), v && (n.playbook = !0), h && (e.kindle = !0, e.version = h[1]), p && (n.silk = !0, n.version = p[1]), !p && e.android && t.match(/Kindle Fire/) && (n.silk = !0), y && (n.chrome = !0, n.version = y[1]), b && (n.firefox = !0, n.version = b[1]), w && (n.ie = !0, n.version = w[1]), T && (o || e.ios) && (n.safari = !0, o && (n.version = T[1])), x && (n.webview = !0), e.tablet = !!(a || v || r && !t.match(/Mobile/) || b && t.match(/Tablet/) || w && !t.match(/Phone/) && t.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(r || u || f || d || m || y && t.match(/Android/) || y && t.match(/CriOS\/([\d.]+)/) || b && t.match(/Mobile/) || w && t.match(/Touch/)))
		}
		e.call(t, navigator.userAgent), t.__detect = e
	}(Zepto),
	function(t, e) {
		function w(t) {
			return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
		}

		function x(t) {
			return i ? i + t : t.toLowerCase()
		}
		var i, c, l, h, p, d, m, g, v, y, n = "",
			a = {
				Webkit: "webkit",
				Moz: "",
				O: "o"
			},
			s = window.document,
			u = s.createElement("div"),
			f = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
			b = {};
		t.each(a, function(t, r) {
			return u.style[t + "TransitionProperty"] !== e ? (n = "-" + t.toLowerCase() + "-", i = r, !1) : void 0
		}), c = n + "transform", b[l = n + "transition-property"] = b[h = n + "transition-duration"] = b[d = n + "transition-delay"] = b[p = n + "transition-timing-function"] = b[m = n + "animation-name"] = b[g = n + "animation-duration"] = b[y = n + "animation-delay"] = b[v = n + "animation-timing-function"] = "", t.fx = {
			off: i === e && u.style.transitionProperty === e,
			speeds: {
				_default: 400,
				fast: 200,
				slow: 600
			},
			cssPrefix: n,
			transitionEnd: x("TransitionEnd"),
			animationEnd: x("AnimationEnd")
		}, t.fn.animate = function(n, i, r, o, a) {
			return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a)
		}, t.fn.anim = function(n, i, r, o, a) {
			var s, x, S, u = {},
				T = "",
				E = this,
				j = t.fx.transitionEnd,
				P = !1;
			if (i === e && (i = t.fx.speeds._default / 1e3), a === e && (a = 0), t.fx.off && (i = 0), "string" == typeof n) u[m] = n, u[g] = i + "s", u[y] = a + "s", u[v] = r || "linear", j = t.fx.animationEnd;
			else {
				x = [];
				for (s in n) f.test(s) ? T += s + "(" + n[s] + ") " : (u[s] = n[s], x.push(w(s)));
				T && (u[c] = T, x.push(c)), i > 0 && "object" == typeof n && (u[l] = x.join(", "), u[h] = i + "s", u[d] = a + "s", u[p] = r || "linear")
			}
			return S = function(e) {
				if ("undefined" != typeof e) {
					if (e.target !== e.currentTarget) return;
					t(e.target).unbind(j, S)
				} else t(this).unbind(j, S);
				P = !0, t(this).css(b), o && o.call(this)
			}, i > 0 && (this.bind(j, S), setTimeout(function() {
				P || S.call(E)
			}, 1e3 * (i + a) + 25)), this.size() && this.get(0).clientLeft, this.css(u), 0 >= i && setTimeout(function() {
				E.each(function() {
					S.call(this)
				})
			}, 0), this
		}, u = null
	}(Zepto),
	function(t, e) {
		function s(n, i, r, o, a) {
			"function" != typeof i || a || (a = i, i = e);
			var s = {
				opacity: r
			};
			return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a)
		}

		function u(e, n, i, r) {
			return s(e, n, 0, i, function() {
				o.call(t(this)), r && r.call(this)
			})
		}
		var n = window.document,
			r = (n.documentElement, t.fn.show),
			o = t.fn.hide,
			a = t.fn.toggle;
		t.fn.show = function(t, n) {
			return r.call(this), t === e ? t = 0 : this.css("opacity", 0), s(this, t, 1, "1,1", n)
		}, t.fn.hide = function(t, n) {
			return t === e ? o.call(this) : u(this, t, "0,0", n)
		}, t.fn.toggle = function(n, i) {
			return n === e || "boolean" == typeof n ? a.call(this, n) : this.each(function() {
				var e = t(this);
				e["none" == e.css("display") ? "show" : "hide"](n, i)
			})
		}, t.fn.fadeTo = function(t, e, n) {
			return s(this, t, e, null, n)
		}, t.fn.fadeIn = function(t, e) {
			var n = this.css("opacity");
			return n > 0 ? this.css("opacity", 0) : n = 1, r.call(this).fadeTo(t, n, e)
		}, t.fn.fadeOut = function(t, e) {
			return u(this, t, null, e)
		}, t.fn.fadeToggle = function(e, n) {
			return this.each(function() {
				var i = t(this);
				i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
			})
		}
	}(Zepto),
	function(t) {
		function u(t, e, n, i) {
			return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
		}

		function f() {
			o = null, e.last && (e.el.trigger("longTap"), e = {})
		}

		function c() {
			o && clearTimeout(o), o = null
		}

		function l() {
			n && clearTimeout(n), i && clearTimeout(i), r && clearTimeout(r), o && clearTimeout(o), n = i = r = o = null, e = {}
		}

		function h(t) {
			return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
		}

		function p(t, e) {
			return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
		}
		var n, i, r, o, s, e = {},
			a = 750;
		t(document).ready(function() {
			var d, m, y, b, g = 0,
				v = 0;
			"MSGesture" in window && (s = new MSGesture, s.target = document.body), t(document).bind("MSGestureEnd", function(t) {
				var n = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
				n && (e.el.trigger("swipe"), e.el.trigger("swipe" + n))
			}).on("touchstart MSPointerDown pointerdown", function(i) {
				(!(b = p(i, "down")) || h(i)) && (y = b ? i : i.touches[0], i.touches && 1 === i.touches.length && e.x2 && (e.x2 = void 0, e.y2 = void 0), d = Date.now(), m = d - (e.last || d), e.el = t("tagName" in y.target ? y.target : y.target.parentNode), n && clearTimeout(n), e.x1 = y.pageX, e.y1 = y.pageY, m > 0 && 250 >= m && (e.isDoubleTap = !0), e.last = d, o = setTimeout(f, a), s && b && s.addPointer(i.pointerId))
			}).on("touchmove MSPointerMove pointermove", function(t) {
				(!(b = p(t, "move")) || h(t)) && (y = b ? t : t.touches[0], c(), e.x2 = y.pageX, e.y2 = y.pageY, g += Math.abs(e.x1 - e.x2), v += Math.abs(e.y1 - e.y2))
			}).on("touchend MSPointerUp pointerup", function(o) {
				(!(b = p(o, "up")) || h(o)) && (c(), e.x2 && Math.abs(e.x1 - e.x2) > 30 || e.y2 && Math.abs(e.y1 - e.y2) > 30 ? r = setTimeout(function() {
					e.el.trigger("swipe"), e.el.trigger("swipe" + u(e.x1, e.x2, e.y1, e.y2)), e = {}
				}, 0) : "last" in e && (30 > g && 30 > v ? i = setTimeout(function() {
					var i = t.Event("tap");
					i.cancelTouch = l, e.el.trigger(i), e.isDoubleTap ? (e.el && e.el.trigger("doubleTap"), e = {}) : n = setTimeout(function() {
						n = null, e.el && e.el.trigger("singleTap"), e = {}
					}, 250)
				}, 0) : e = {}), g = v = 0)
			}).on("touchcancel MSPointerCancel pointercancel", l), t(window).on("scroll", l)
		}), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
			t.fn[e] = function(t) {
				return this.on(e, t)
			}
		})
	}(Zepto),
	function(t) {
		function i(t) {
			return "tagName" in t ? t : t.parentNode
		}
		if (t.os.ios) {
			var n, e = {};
			t(document).bind("gesturestart", function(t) {
				{
					var r = Date.now();
					r - (e.last || r)
				}
				e.target = i(t.target), n && clearTimeout(n), e.e1 = t.scale, e.last = r
			}).bind("gesturechange", function(t) {
				e.e2 = t.scale
			}).bind("gestureend", function() {
				e.e2 > 0 ? (0 != Math.abs(e.e1 - e.e2) && t(e.target).trigger("pinch") && t(e.target).trigger("pinch" + (e.e1 - e.e2 > 0 ? "In" : "Out")), e.e1 = e.e2 = e.last = 0) : "last" in e && (e = {})
			}), ["pinch", "pinchIn", "pinchOut"].forEach(function(e) {
				t.fn[e] = function(t) {
					return this.bind(e, t)
				}
			})
		}
	}(Zepto); /*  |xGv00|77e077f7b7c13086af61d20e0a59d818 */
/*! motion v0.0.0 | (c) 2014, 2015/04/26 | loader page-slide | motion Foundation, Inc. */
! function() {
	! function() {
		! function() {
			if (!window.Motion) {
				var a = {
					version: "1.1",
					add: function(a, b) {
						for (var c = window, d = arguments.callee, e = null, f = (/^([\w\.]+)(?:\:([\w\.]+))?\s*$/.test(a), RegExp.$1.split(".")), g = RegExp.$2.split("."), a = f.pop(), h = /[A-Z]/.test(a.substr(0, 1)), i = function() {
								var a = arguments.callee.prototype.init;
								"function" == typeof a && arguments.callee.caller != d && a && a.apply(this, arguments)
							}, j = 0; j < f.length; j++) {
							var k = f[j];
							c = c[k] || (c[k] = {})
						}
						if ("" != g[0]) {
							e = window;
							for (var j = 0; j < g.length; j++)
								if (e = e[g[j]], !e) {
									e = null;
									break
								}
						}
						h && "function" == typeof b ? (e && (i.prototype = new e, i.prototype.superClass = e), c[a] = i, i.prototype.constructor = i, b.call(c[a].prototype)) : c[a] = b
					}
				};
				window.Motion = window.mo = a
			}
		}()
	}(),
	function() {
		Motion.add("mo.Base", function() {
			{
				var a = this;
				this.constructor
			}
			a.constructor = function() {}, a.on = function() {
				return box = Zepto(this), box.on.apply(box, arguments)
			}, a.off = function() {
				return box = Zepto(this), box.off.apply(box, arguments)
			}, a.trigger = function() {
				var a = Zepto(this);
				return a.triggerHandler.apply(a, arguments)
			}
		})
	}(),
	function() {
		Motion.add("mo.Loader:mo.Base", function() {
			var a = this,
				b = {
					empty: function() {},
					imgLoader: function(a, b) {
						var c = new Image,
							d = new Date;
						c.onload = c.onerror = function() {
							b(a, c, new Date - d), c.onload = null
						}, c.src = a
					},
					jsLoader: function() {
						var a = document.getElementsByTagName("script")[0],
							b = a.parentNode,
							c = /ded|co/,
							d = "onload",
							e = "onreadystatechange",
							f = "readyState";
						return function(g, h, i) {
							i = i || "gb2312";
							var j = document.createElement("script"),
								k = new Date;
							j.charset = i, j[d] = j[e] = function() {
								(!this[f] || c.test(this[f])) && (j[d] = j[e] = null, h && h(g, j, new Date - k), j = null)
							}, j.async = !0, j.src = g, b.insertBefore(j, a)
						}
					}(),
					cssLoader: function(a, b) {
						var c = document.head || document.getElementsByTagName("head")[0],
							d = new Date;
						node = document.createElement("link"), node.rel = "stylesheet", node.href = a, c.appendChild(node), b && b(a, node, new Date - d)
					},
					audioLoader: function(a, b) {
						var c = new Audio,
							d = new Date;
						$(c).bind("canplaythrough", function() {
							b(a, c, new Date - d)
						}), c.src = a, c.load()
					},
					getExt: function(a) {
						return a.match(/\.([^\.]*)$/)[0].substr(1).match(/^[a-zA-Z0-9]+/)[0]
					},
					getType: function(a) {
						var c = b.getExt(a),
							d = {
								img: ["png", "jpg", "gif"],
								css: ["css"],
								js: ["js"],
								audio: ["mp3", "ogg", "wav"]
							};
						for (var e in d)
							if (d[e].indexOf(c) > -1) return e;
						return !1
					}
				},
				c = this.constructor;
			a.constructor = function(a, b) {
				a && this.init(a, b)
			}, c.config = {
				onLoading: b.empty,
				onComplete: b.empty,
				loadType: 0,
				minTime: 0,
				dataAttr: "preload"
			}, a.init = function(a, d) {
				var e = this;
				if ("function" == typeof d) {
					var f = d;
					d = {
						onComplete: f
					}
				}
				e.config = Zepto.extend(!0, {}, c.config, d);
				var d = e.config;
				a = [].concat(a);
				var g = {},
					h = Array.prototype.slice.call(document.querySelectorAll("[data-" + d.dataAttr + "]"));
				Zepto(h).each(function(b, c) {
					var e = Zepto(c),
						f = e.attr("data-" + d.dataAttr);
					g[f] ? g[f].push(c) : (g[f] = [c], a.indexOf(f) < 0 && a.push(f))
				}), d.event && e.on(d.event);
				var i = a.length,
					j = 0;
				Zepto(a).each(function(a, b) {
					if ("object" == typeof b) {
						i--;
						for (var c in b) i++
					}
				});
				var k = (new Date).getTime(),
					l = function(a) {
						g[a] && Zepto.each(g[a], function(b, c) {
							c.removeAttribute("data-" + d.dataAttr);
							var e = c.tagName.toLowerCase();
							switch (e) {
								case "link":
									c.href = a;
									break;
								case "img":
								case "script":
								case "video":
									c.src = a;
									break;
								default:
									c.style.backgroundImage = "url(" + a + ")"
							}
						})
					},
					m = function(a, b, c, f) {
						var g = function() {
								if (d.onLoading(++j, i, a, b), e.trigger("loading", [j, i, a, b]), l(a), f([j, i, a, b]), j == i) {
									var c = (new Date).getTime() - k;
									d.onComplete(c), e.trigger("complete", [c])
								}
							},
							h = d.minTime - c;
						h > 0 ? setTimeout(g, h) : g()
					};
				if (a.length) {
					var n = function(a, c, d) {
						var e = function(a, c, d) {
							var e = b.getType(a),
								d = d || function() {},
								f = b[e + "Loader"];
							void 0 === f ? c(a) : f(a, function() {
								var a = Array.prototype.slice.call(arguments, 0);
								a.push(d), c.apply(null, a)
							})
						};
						if ("object" == typeof a)
							for (var f in a) ! function(a, b) {
								e(b, function() {
									Zepto(a).css("backgroundImage", 'url("' + b + '")');
									var d = Array.prototype.slice.call(arguments, 0);
									c.apply(null, d)
								}, d)
							}(f, a[f]);
						else e(a, c, d)
					};
					if (1 == d.loadType) {
						var o = 0;
						! function() {
							var b = arguments.callee;
							n(a[o], function() {
								m.apply(null, arguments)
							}, function() {
								o++, a[o] && b()
							})
						}()
					} else Zepto.each(a, function(a, b) {
						n(b, m)
					})
				} else d.onComplete(0), e.trigger("complete", [0])
			}
		})
	}(),
	function() {
		Motion.add("mo.Tab:mo.Base", function() {
			var a = this,
				b = {},
				c = this.constructor;
			c.config = {
				effect: "base",
				direction: "x",
				autoPlay: !1,
				playTo: 0,
				switchTo: window.undefined,
				type: "touchend",
				currentClass: "current",
				link: !1,
				stay: 2e3,
				delay: 200,
				touchDis: 20,
				lazy: window.undefined,
				merge: !1,
				degradation: "base",
				animateTime: 300,
				event: {},
				easing: "swing",
				title: {
					delay: 0
				},
				controlDisabed: !1
			}, c.effect = {}, a.init = function(a) {
				this.config = Zepto.extend(!0, {}, c.config, a);
				var d = this,
					a = d.config,
					e = Zepto(a.target);
				if (!(e.length <= 1)) {
					this.constructor.instances ? this.constructor.instances.push(this) : this.constructor.instances = [this], Zepto.extend(d, {
						target: e,
						controller: null,
						prevPage: window.undefined,
						curPage: window.undefined,
						container: e.parent(),
						prevBtn: Zepto(a.prevBtn),
						nextBtn: Zepto(a.nextBtn),
						isPlaying: a.autoPlay
					});
					for (var f in a) {
						var g = /^on(.+)/.exec(f);
						g && g[1] && (a.event[g[1]] = a[f])
					}
					c.effect[a.effect].beforechange && (c.effect[a.effect].mobeforechange = c.effect[a.effect].beforechange, delete c.effect[a.effect].beforechange), d.on(c.effect[a.effect]), d.on(a.event), d.trigger("beforeinit") !== !1 && (b.initDOM.call(d), b.attach.call(d), d.trigger("init") !== !1 && (a.switchTo !== window.undefined ? d.switchTo(a.switchTo) : d.playTo(a.playTo), a.autoPlay && d.play()))
				}
			}, b.initDOM = function() {
				var a = this,
					b = a.config;
				if (a.wrap = a.container, a.container = a.wrap.parent(), b.controller !== !1) {
					if (b.controller = Zepto(b.controller), b.controller.length < 1) {
						for (var c = Zepto('<ul class="controller">'), d = "", e = 0; e < a.target.length; e++) d += "<li>" + (e + 1) + "</li>";
						c.html(d), a.container.append(c), b.controller = c.children()
					}
					a.controller = b.controller
				}
				var f = a.target.find("script");
				f.each(function(a, b) {
					b = Zepto(b), /^\s*document\.write\([^\)]+\)[\s;]*$/.test(b.html()) && b.remove()
				});
				var g = b.title.dataSrc || a.target,
					h = b.title.dataProp || "title",
					i = Zepto(b.title.dataWrap);
				g = Zepto(g), i.length > 0 && g.attr(h) && (a.titleWrap = i, a.titleData = [], g.each(function(b, c) {
					a.titleData.push(Zepto(c).attr(h))
				})), a.cssPrefix = "", a.propPrefix = "";
				var j = {
						webkit: "webkit",
						Moz: "moz",
						ms: "ms"
					},
					k = document.createElement("div");
				for (var l in j)
					if (void 0 !== k.style[l + "Transform"]) {
						a.cssPrefix = "-" + j[l] + "-", a.propPrefix = l;
						break
					}
			}, b.attach = function() {
				var a = this,
					c = a.config;
				a.controller && Zepto.each(a.controller, function(b, d) {
					var d = Zepto(d);
					d.on(c.type, function() {
						a.playTo(b)
					}), c.link || Zepto(d).on("touchend", function(a) {
						a.preventDefault()
					})
				}), a.nextBtn && Zepto(a.nextBtn).on("touchend", function(b) {
					a.next(), b.preventDefault()
				}), a.prevBtn && Zepto(a.prevBtn).on("touchend", function(b) {
					a.prev(), b.preventDefault()
				}), a.wrap.on("touchstart", function() {
					a.isPlaying && b.clearTimer.call(a)
				}), Zepto("body").on("touchend", function() {
					a.isPlaying && b.setTimer.call(a)
				}), c.touchMove && b.touchMove.call(a)
			}, a.playTo = function(a) {
				{
					var c, d = this,
						e = d.config;
					d.curPage !== window.undefined
				}
				if (d._outBound = function(a) {
						if (a >= d.target.length && (a %= d.target.length), 0 > a) {
							var b = a % d.target.length;
							a = 0 === b ? 0 : b + d.target.length
						}
						return a
					}, d.prevPage = d.curPage, c = d.curPage, a = d.curPage = d._outBound(a), d.controller && a !== c) {
					var f = d.controller[a],
						g = d.controller[c];
					f && Zepto(f).addClass(d.config.currentClass), g && Zepto(g).removeClass(d.config.currentClass)
				}
				a !== c && (d.target.eq(a).addClass(d.config.currentClass), d.target.eq(c).removeClass(d.config.currentClass)), d.titleWrap && window.setTimeout(function() {
					d.titleWrap.html(d.titleData[d.curPage] || "")
				}, e.title.delay);
				var h = Zepto(d.target[d.curPage]);
				if (e.lazy === window.undefined) {
					var i = h.children();
					1 === i.length && "textarea" == i[0].tagName.toLowerCase() && (e.lazy = !0)
				}
				e.lazy === !0 && h.length > 0 && !h.data("parsed") && b.lazyload(h), d.trigger("beforechange", [d.curPage]) !== !1 && d.trigger("mobeforechange")
			}, a.next = function() {
				this.playTo(this.curPage + 1)
			}, a.prev = function() {
				this.playTo(this.curPage - 1)
			}, b.setTimer = function() {
				var a = this,
					c = a.config;
				a.timer && b.clearTimer.call(a), a.timer = window.setInterval(function() {
					var b = a.curPage + 1;
					a.playTo(b)
				}, c.stay)
			}, b.clearTimer = function() {
				window.clearInterval(this.timer)
			}, a.play = function() {
				var a = this;
				b.setTimer.call(a), a.isPlaying = !0, a.trigger("play")
			}, a.stop = function() {
				var a = this;
				b.clearTimer.call(a), a.isPlaying = !1, a.trigger("stop")
			}, a.switchTo = function(a) {
				var b = this.config.animateTime;
				this.config.animateTime = 0, this.playTo(a), this.config.animateTime = b
			}, c.extend = function(a, b) {
				var d = {};
				Zepto.isPlainObject(a) ? d = a : d[a] = b, Zepto.extend(c.effect, d)
			}, b.lazyload = function(a) {
				var b = a.children("textarea");
				1 === b.length && (a.html(b.eq(0).val()), a.data("parsed", !0))
			}, b.touchMove = function() {
				var a, b, c, d, e, f, g, h, i, j, k, l, m, n = this,
					o = n.config;
				o.touchMove && n.wrap.on("touchstart", function(f) {
					d = i = f.touches[0].pageX, e = j = f.touches[0].pageY, n.trigger("touchstart", [d, e]) !== !1 && (n.wrap.on("touchmove", a), n.wrap.on("touchend", b), c = "")
				}), a = function(a) {
					var b = a.touches[0].pageX,
						p = a.touches[0].pageY;
					f = b - d, g = p - e, k = b - i, l = p - j, i = b, j = p, "x" == o.direction ? (h = f, m = k) : (h = g, m = l), c || (c = Math.abs(f / g) > 1 ? "x" : "y"), o.direction == c && (a.preventDefault(), a.stopPropagation(), n.trigger("touchmove", [h, m, a]))
				}, b = function() {
					if (!c || o.direction == c) {
						(void 0 === h || isNaN(h)) && (h = 0), n.wrap.off("touchmove", a), n.wrap.off("touchend", b);
						var d = !0;
						if (n.trigger("touchend", [h]) !== !1) {
							if (!h || Math.abs(h) < o.touchDis || !d) return void n.playTo(n.curPage);
							if (h > 0) var e = n.curPage - 1 < 0 ? 0 : n.curPage - 1;
							else var e = n.curPage + 1 >= n.target.length ? n.target.length - 1 : n.curPage + 1;
							n.playTo(e), h = 0
						}
					}
				}
			}, c.extend("base", {
				init: function() {
					var a = this;
					config = a.config, Zepto.each(a.target, function(b, c) {
						a.target[config.playTo][0] != c && Zepto(c).hide()
					})
				},
				beforechange: function() {
					var a = this,
						b = a.prevPage === window.undefined ? null : a.target[a.prevPage],
						c = a.target[a.curPage];
					b && Zepto(b).hide(), Zepto(c).show(), a.trigger("change", [a.curPage])
				}
			})
		})
	}(),
	function() {
		Motion.add("mo.PageSlide:mo.Tab", function() {
			var a = this,
				b = this.constructor;
			a.init = function(a) {
				this.config = Zepto.extend(!0, {}, b.config, a), this.superClass.call(this, this.config)
			}, b.config = {
				touchMove: !0,
				direction: "y",
				effect: "slide",
				controller: !1
			}, mo.Tab.extend("slide", {
				init: function() {
					var a = this,
						b = a.config;
					if (a.container.css({
							position: "relative",
							overflow: "hidden"
						}), a.container.css("-webkit-backface-visibility", "hidden"), "x" == b.direction) {
						a.target.css("float", "left");
						var c = 0;
						a.target.each(function(a, b) {
							c += Zepto(b)[0].offsetWidth
						}), 0 >= c && (c = document.documentElement.offsetWidth * a.target.length), a.wrap.css("width", b.wrapWidth || c + "px"), a.animProp = "translateX", a.offsetProp = "offsetLeft"
					} else a.animProp = "translateY", a.offsetProp = "offsetTop"
				},
				touchmove: function(a, b, c) {
					var d = this;
					if (1 != d.moving) {
						var e = {},
							f = /\(([\d-]*).*\)/.exec(d.wrap.css(d.propPrefix + "Transform")),
							g = f ? 1 * f[1] : 0;
						e[d.cssPrefix + "transform"] = d.animProp + "(" + (g + c) + "px)", d.wrap.css(e, 0)
					}
				},
				touchend: function(a, b) {
					var c = this,
						d = c.target[c.curPage].getBoundingClientRect(),
						e = window.innerHeight;
					return 0 > b && d.bottom > e || b > 0 && d.top < 0 ? !1 : void 0
				},
				beforechange: function() {
					var a = this,
						b = a.config,
						c = (a.prevPage === window.undefined ? 0 : a.prevPage, a.curPage),
						d = {};
					d[a.animProp] = -a.target[c][a.offsetProp] + "px", a.moving = !0, a.wrap.animate(d, b.animateTime, b.easing, function() {
						a.moving = !1, a.trigger("change", [a.curPage])
					})
				}
			}), mo.Tab.extend("roll", {
				init: function() {
					var a = this,
						b = a.config,
						c = a.cssPrefix,
						d = a.wrap.offset(),
						e = "x" == b.direction ? d.width : d.height,
						f = "x" == b.direction ? "rotateY" : "rotateX",
						g = 360 / a.target.length,
						h = Math.round(e / 2 / Math.tan(Math.PI / a.target.length));
					a.theta = g, a.radius = h, a.rotateFn = f, a.container.css(c + "perspective", "200px"), a.container.css(c + "backface-visibility", "hidden");
					var i = {
						position: "relative"
					};
					i[c + "transform-style"] = "preserve-3d", i[c + "transform"] = "translateZ(-" + h + "px)", i[c + "transform-origin"] = "50% 50% -" + h + "px", a.wrap.css(i);
					for (var j = 0; j < a.target.length; j++) {
						var k = {
							position: "absolute",
							left: 0,
							top: 0
						};
						k[c + "transform"] = f + "(-" + 360 * j / a.target.length + "deg) translateZ(" + h + "px)", a.target.eq(j).css(k)
					}
				},
				touchmove: function(a, b) {
					var c = this;
					if (1 != c.moving) {
						var d = c.curPage * c.theta - b / 5;
						c.wrap.css(c.cssPrefix + "transform", c.rotateFn + "(" + d + "deg) translateZ(-" + c.radius + "px)"), a.preventDefault()
					}
				},
				beforechange: function() {
					var a = this,
						b = a.config,
						c = a.curPage * a.theta,
						d = {};
					d[a.cssPrefix + "transform"] = a.rotateFn + "(" + c + "deg) translateZ(-" + a.radius + "px)", a.moving = !0, a.wrap.animate(d, b.animateTime, b.easing, function() {
						a.moving = !1, a.trigger("change", [a.curPage])
					})
				}
			}), mo.Tab.extend("scale", {
				init: function() {
					{
						var a = this,
							b = a.config,
							c = (a.cssPrefix, a.wrap.offset()),
							d = "x" == b.direction ? c.width : c.height;
						"x" == b.direction ? "rotateY" : "rotateX", 360 / a.target.length, Math.round(d / 2 / Math.tan(Math.PI / a.target.length))
					}
					a.wrap.css({
						position: "relative",
						overflow: "hidden"
					}), a.target.each(function(a, b) {
						b = Zepto(b)
					}), "x" == b.direction ? (a.animProp = "translateX", a.offsetProp = "offsetLeft") : (a.animProp = "translateY", a.offsetProp = "offsetTop")
				},
				touchmove: function(a, b, c) {
					var d = this;
					if (1 != d.moving) {
						var e = {},
							f = d.target.eq(d.curPage),
							g = /\(([\d-]*).*\)/.exec(d.wrap.css(d.propPrefix + "Transform")),
							h = g ? 1 * g[1] : 0;
						e[d.cssPrefix + "transform"] = d.animProp + "(" + (h + c) + "px)", b > 0 ? f.css(d.cssPrefix + "transform-origin", "50% 0%") : f.css(d.cssPrefix + "transform-origin", "50% 100%"), d.wrap.css(e, 0);
						var i = 1 - Math.abs(b / Zepto(window).height());
						a.preventDefault();
						var j = {};
						j[d.cssPrefix + "transform"] = "scaleX(" + i + ") scaleY(" + i + ")", f.css(j)
					}
				},
				touchend: function() {},
				beforechange: function() {
					var a = this,
						b = a.config,
						c = a.target.eq(a.curPage),
						d = a.prevPage === window.undefined ? null : a.target.eq(a.prevPage),
						e = {};
					if (e[a.cssPrefix + "transform"] = "translateY(-" + c[0].offsetTop + "px)", d) {
						var f = {};
						f[a.cssPrefix + "transform"] = "scaleX(0.2) scaleY(0.2)", f[a.cssPrefix + "backface-visibility"] = "hidden", d.animate(f, b.animateTime, b.easing, function() {
							d.css(a.cssPrefix + "transform", "scaleX(1) scaleY(1)")
						})
					}
					var g = {};
					g[a.cssPrefix + "transform"] = "scaleX(1) scaleY(1)", g[a.cssPrefix + "backface-visibility"] = "hidden", c.animate(g, b.animateTime, b.easing, function() {}), a.moving = !0, a.wrap.animate(e, b.animateTime, b.easing, function() {
						a.moving = !1, a.trigger("change", [a.curPage])
					})
				},
				change: function() {}
			}), mo.Tab.extend("xx", {
				init: function() {
					var a = this,
						b = a.config,
						c = a.wrap.offset();
					a.wrap.css({
						position: "relative",
						overflow: "hidden"
					}), a.target.css({
						position: "absolute"
					}), "x" == b.direction ? (a.animProp = "translateX", a.offset = c.width) : (a.animProp = "translateY", a.offset = c.height), a._launch = function(b) {
						a.target.css("zIndex", "1");
						var c = {};
						c[a.cssPrefix + "transform"] = a.animProp + "(" + b.data("oriPos") + "px)", c.zIndex = "3", b.css(c), b.data("hasReady", !0)
					}
				},
				touchmove: function(a, b) {
					var c = this;
					if (1 != c.moving) {
						if (c._targetObj === window.undefined) {
							var d, e;
							0 > b ? (d = c._outBound(c.curPage + 1), e = c.offset) : (d = c._outBound(c.curPage - 1), e = -c.offset), c._targetObj = c.target.eq(d), c._targetObj.data("oriPos", e), c._launch(c._targetObj), c.target.eq(c.curPage).css("zIndex", "2")
						}
						var f = {};
						f[c.cssPrefix + "transform"] = c.animProp + "(" + (b + c._targetObj.data("oriPos")) + "px)", c._targetObj.css(f)
					}
				},
				touchend: function(a, b) {
					var c = this,
						d = c.config;
					if (Math.abs(b) < c.config.touchDis) {
						//console.log(c._targetObj);
						var e = {};
						e[c.animProp] = "0px", c._targetObj.animate(e, d.animateTime, d.easing, function() {
							c.moving = !1, c._targetObj.data("hasReady", !1), delete c._targetObj
						})
					}
				},
				beforechange: function() {
					var a = this,
						b = a.config,
						c = {};
					if (a._targetObj === window.undefined) {
						var d;
						d = a.prevPage !== window.undefined && a.curPage < a.prevPage ? -a.offset : a.offset, a._targetObj = a.target.eq(a.curPage), a._targetObj.data("oriPos", d), a._launch(a._targetObj), a.target.eq(a.prevPage).css("zIndex", "2")
					}
					c[a.animProp] = "0px", a._targetObj.animate(c, b.animateTime, b.easing, function() {
						a.moving = !1, a._targetObj.data("hasReady", !1), delete a._targetObj, a.trigger("change", [a.curPage])
					})
				},
				change: function() {}
			})
		})
	}()
}(); /*  |xGv00|c1e9e7c759e1de8cc5f726f85781c3e2 */