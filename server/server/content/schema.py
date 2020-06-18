import graphene

from django.core.mail import EmailMessage
from graphene_django.types import DjangoObjectType
from .models import *



class AttentionType(DjangoObjectType):
	class Meta:
		model = Attention


class Board_PageType(DjangoObjectType):
	class Meta:
		model = Board_Page

class FooterType(DjangoObjectType):
	class Meta:
		model = Footer


class HomeType(DjangoObjectType):
	class Meta:
		model = Home

class TagType(DjangoObjectType):
	class Meta:
		model = Tag


class MeetingType(DjangoObjectType):
	class Meta:
		model = Meeting

class MemoType(DjangoObjectType):
	class Meta:
		model = Memo

class ContactType(DjangoObjectType):
	class Meta:
		model = Contact



class Query(object):
	attention = graphene.List(AttentionType)
	board_page = graphene.List(Board_PageType)
	footer = graphene.List(FooterType)
	home = graphene.List(HomeType)
	memo = graphene.List(MemoType)

	all_tags = graphene.List(TagType)
	all_meetings = graphene.List(MeetingType)

	def resolve_attention(self, info, **kwargs):
		return Attention.objects.filter(active=True).all()  

	def resolve_board_page(self, info, **kwargs):
		return Board_Page.objects.filter(active=True).all()

	def resolve_footer(self, info, **kwargs):
		return Footer.objects.filter(active=True).all()

	def resolve_home(self, info, **kwargs):
		return Home.objects.filter(active=True).all()

	def resolve_memo(self, info, **kwargs):
		return Memo.objects.filter(active=True).all()

	def resolve_all_tags(self, info, **kwargs):
		# We can easily optimize query count in the resolve method
		return Tag.objects.select_related('page').filter(active=True).all()

	def resolve_all_meetings(self, info, **kwargs):
		# We can easily optimize query count in the resolve method
		return Meeting.objects.select_related('board_page').filter(active=True).all()


class ContactMutation(graphene.Mutation):
	contact = graphene.Field(ContactType)
	
	class Arguments:
		name = graphene.String(required=True)
		email = graphene.String(required=True)
		subject = graphene.String(required=True)
		body = graphene.String(required=True)


	def mutate(self,info,name,email,subject,body):
		try:
			contact = Contact.objects.get(email=email)
		except Contact.DoesNotExist:
			contact = Contact(email=email)
		contact.name = name
		contact.email = email
		message ='''
				FROM: {name} @{email}
				SUBJECT: {subject}
				MESSAGE:
				{body}
				'''.format(name=name,email=email,subject=subject,body=body)
		email = EmailMessage(
			subject,
			message,
			email,
			['470.sugar.hill@gmail.com'],
			reply_to=[email]
		)
		email.send()
		contact.save()
		
		return ContactMutation(contact=contact)


class Mutation(graphene.ObjectType):
	contact = ContactMutation.Field()



















