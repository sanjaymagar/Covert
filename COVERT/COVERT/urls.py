from django.contrib import admin
from django.urls import path, include
# from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    # path('api/auth/', include('rest_auth.urls')),
    # path('api/auth/registration/', include('rest_auth.registration.urls')),
    path('', include('api.urls')),
    # path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
