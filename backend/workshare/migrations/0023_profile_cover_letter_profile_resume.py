# Generated by Django 4.1.5 on 2023-04-20 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workshare', '0022_alter_notification_type_jobapplication'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='cover_letter',
            field=models.FileField(blank=True, upload_to='documents/'),
        ),
        migrations.AddField(
            model_name='profile',
            name='resume',
            field=models.FileField(blank=True, upload_to='documents/'),
        ),
    ]
