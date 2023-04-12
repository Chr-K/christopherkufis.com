import time
import subprocess
p1 = subprocess.Popen("git rev-parse main",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE)
hash = p1.communicate()[0]
def p2(): subprocess.Popen("git add --all; git commit -m 'backend testing -auto';git push",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE).communicate()
p2()
p3 = subprocess.Popen("ssh root@christopherkufis.com",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE)
print(subprocess.Popen("git rev-parse origin/main",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE).communicate()[0])
print('\n')
print (hash)
if subprocess.Popen("git rev-parse origin/main",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE).communicate()[0] == hash:
    for x in range(6):
        print(x + 'comparing hashes')
        print(hash)
        print(subprocess.Popen("git rev-parse origin/main",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE).communicate()[0])
    if subprocess.Popen("git rev-parse origin/main",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE).communicate()[0] == hash:
           time.sleep(2)
    elif subprocess.Popen("git rev-parse origin/main",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE).communicate()[0] != hash:
         print(p3.communicate('cd /var/www/html/christopherkufis.com; git pull; npm run build;'.encode("utf-8")))            
elif subprocess.Popen("git rev-parse origin/main",shell=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE).communicate()[0] != hash:
       print(p3.communicate('cd /var/www/html/christopherkufis.com; git pull; npm run build;'.encode("utf-8")))
    

else:
   print('error')
