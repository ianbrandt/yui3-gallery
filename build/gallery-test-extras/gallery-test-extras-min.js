YUI.add("gallery-test-extras",function(b){var a=1/Math.log(10);b.mix(b.Assert,{areWithinEpsilon:function(c,f,e){if(b.Lang.isUndefined(e)){e=1e-9;}if(c!==0){var d=Math.pow(10,Math.floor(Math.log(Math.abs(c))*a));c/=d;f/=d;}b.Assert.isTrue(Math.abs(c-f)<=e,"Values should be within "+e+"\nExpected: "+c+" (number)\nActual:"+f+" (number)\n-----");},complexWithinEpsilon:function(c,e,d){b.Assert.areWithinEpsilon(c.r,e.r,d);b.Assert.areWithinEpsilon(c.i,e.i,d);}});},"gallery-2011.06.29-20-12",{requires:["test"],optional:["gallery-complexnumber"]});