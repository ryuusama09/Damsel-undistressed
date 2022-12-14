# Generated by Django 4.0.3 on 2022-04-09 17:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('disaster', '0003_report_found_found'),
    ]

    operations = [
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('address', models.TextField(max_length=255)),
                ('contact', models.BigIntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='donation',
            name='organization',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='org_donation', to='disaster.organization'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='volunteer',
            name='organization',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='org_volunteer', to='disaster.organization'),
            preserve_default=False,
        ),
    ]
