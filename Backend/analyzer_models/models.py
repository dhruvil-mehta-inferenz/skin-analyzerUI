from django.db import models


class UserInfo(models.Model):
    SOURCES = (
        ('WEB_PORTAL', 'WEB_PORTAL'),
        ('MOBILE_APP', 'MOBILE_APP'),
        ('BACKEND', 'BACKEND')
    )

    user_uuid = models.CharField(verbose_name='UUID',
                                 max_length=200, unique=True,
                                 null=False, blank=False
                                 )

    source = models.CharField(verbose_name='Request Source',
                              choices=SOURCES,
                              default='BACKEND',
                              max_length=50,
                              null=False, blank=False
                              )

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "User Info"
        verbose_name_plural = "User Info"

    def __str__(self):
        return str(self.pk) + ' | ' + str(self.user_uuid)


