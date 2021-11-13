# Generated by Django 3.2.7 on 2021-10-16 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_auto_20210920_1113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='address',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='birthdate',
            field=models.DateField(blank=True, default='2000-01-01'),
        ),
        migrations.AlterField(
            model_name='client',
            name='contact_number',
            field=models.CharField(blank=True, max_length=13),
        ),
        migrations.AlterField(
            model_name='client',
            name='education_level',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='status',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='client',
            name='verification_code',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
