import graphene
import content.schema
import content.models

class Query(content.schema.Query,graphene.ObjectType):
    pass



class Mutation(content.schema.Mutation,graphene.ObjectType):
    pass
schema = graphene.Schema(query=Query,mutation=Mutation)
