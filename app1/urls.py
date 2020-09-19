from django.urls import path
from .import views
urlpatterns = [
    path('',views.home,name='homepage' ),
    path('home',views.home,name='homepage'),
    path('another_conversion',views.home,name='conversion page'),
    path('forms',views.forms,name='forms'),
    path('Privacy_Policy.html',views.privacy,name='Privacy Policy'),
    path('Privacy_Policy', views.privacy, name='Privacy Policy'),
    path('Terms_&_Conditions',views.terms,name='terms_conditions'),
    path('about',views.about,name='about'),
    path('services',views.service,name='service'),
    path('contact',views.contact,name='service'),
    path('sitemap.xml',views.sitemap,name='sm pg')
]
