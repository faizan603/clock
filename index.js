setInterval(() => {
  d  = new date();
   htime = d.gethours();
   mtime = d.getminutes(); 
   stime = d.getseconds();
   hrotation = 30*htime + mtime/2;
   Mrotation = 6*mtime
   srotation = 6*stime
}, 1000);