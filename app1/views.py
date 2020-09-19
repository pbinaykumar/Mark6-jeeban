from datetime import datetime

from django.contrib.auth.models import User
from django.shortcuts import render,HttpResponseRedirect,HttpResponse,redirect
from django.urls import reverse

from .models import Document,client

import requests
from requests.auth import HTTPBasicAuth
import time

def home(request):
    if request.method =="POST":
        a=request.POST['input']
        b=request.POST['output']
        c=request.FILES['duc1']
        d1 = c.name
        x=Document(ducname=d1,duc=c,date = datetime.today())
        x.save()

        b=b.lower()
        d=x.duc.name

        e = d[::-1]
        f = len(e)

        g = 0
        for i in e:
            if i == '.':
                break
            else:
                g += 1
        m = e[0:g][::-1]

        if (m == a):
            print('okkkk')
            api_key = 'b0eb6fab08de0f4d30682c1f948496a0ade7697c'
            endpoint = "https://sandbox.zamzar.com/v1/jobs"
            source_file = "media//"+d
            target_format = b

            file_content = {'source_file': open(source_file, 'rb')}
            data_content = {'target_format': target_format}
            res = requests.post(endpoint, data=data_content, files=file_content, auth=HTTPBasicAuth(api_key, ''))
            output1 = res.json()
            print(output1)

            if 'id' in output1:

               id = output1['id']
               print(id)

               job_id = id
               endpoint = "https://sandbox.zamzar.com/v1/jobs/{}".format(job_id)
               time.sleep(12)
               response = requests.get(endpoint, auth=HTTPBasicAuth(api_key, ''))

               output2 = response.json()
               print(output2)
               if 'successful' in output2.values():

                  o = output2["target_files"][0]["name"]

                  file_id = str(output2["source_file"]["id"])
                  local_filename = o

                  endpoint = "https://sandbox.zamzar.com/v1/files/{}/content".format(file_id)

                  response = requests.get(endpoint, stream=True, auth=HTTPBasicAuth(api_key, ''))

                  try:
                      with open("media/All_Documents/Output//"+local_filename, 'wb') as f:
                          for chunk in response.iter_content(chunk_size=1024):
                              if chunk:
                                  f.write(chunk)
                                  f.flush()

                          print("File downloaded")

                  except IOError:
                      print("Error")

                  l = "media\All_Documents\Output\\"+o


                  return render(request, 'home.html', {'c': d1, 'o': o, 'l': l})
               else:
                  error = 'Something Is Wrong'
                  return render(request, 'home.html', {'s': 'start', 'c': d1, 'e': error})

            elif  "errors" in output1:
                error=output1['errors'][0]['message']
                if error == 'the size of file exceeds the maximum file size cap for the current plan':
                    error = 'Sorry!Your file size is more then 1mb.'
                else:
                    error = error
                return render(request, 'home.html', {'s': 'start', 'c': d1, 'e': error})
            else:
                error='Something Is Wrong'
                return render(request,'home.html',{'s':'start','c':d1,'e':error})
        else:
            error='Please provide same input format and your file format!'
            return render(request,'home.html',{'s':'start','e':error})
    else:
      return render(request,'home.html',{'s':'start'})

def forms(request):
    if request.method == 'POST':
        a=request.POST['name']
        b=request.POST['email']
        c=request.POST['subject']
        d=request.POST['message']
        x=client(name=a,email=b,subject=c,message=d,date = datetime.today())
        x.save()


        return render(request, 'home.html', {'s': 'start','a':'a'})
    else:
       return render(request,'home.html',{'s':'start',})

def privacy(request):
    return render(request,'Privacy_Policy.html')
def terms(request):
    return render(request,'Terms _Conditions.html')
def about(request):
    return render(request,'about.html')

def service(request):
    return render(request,'service.html')
def contact(request):
    return render(request,'contact.html')
def sitemap(request):
    return render(request,'sitemap.xml')
