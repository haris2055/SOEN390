# Generated by Django 4.1.5 on 2023-01-27 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workshare", "0004_profile_education_profile_email"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile",
            name="city",
            field=models.CharField(default="", max_length=255),
        ),
    ]
