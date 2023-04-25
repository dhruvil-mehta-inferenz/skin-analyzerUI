from django.contrib import admin
from .models import UserInfo


class UserInfoAdmin(admin.ModelAdmin):
    fields = ['user_uuid', 'source',
              'created', 'modified']

    list_display = ['id', 'user_uuid', 'source',
                    'created', 'modified']

    search_fields = ['id', 'user_uuid',
                     'source']

    list_filter = ['source']

    readonly_fields = ['created', 'modified']

    list_per_page = 10


admin.site.register(UserInfo, UserInfoAdmin)
