from flask_restful import reqparse

# Nutrition base arguments
nutrition_base_args_parser = reqparse.RequestParser()
nutrition_base_args_parser.add_argument("water", type=float, help="Invalid water", required=True)
nutrition_base_args_parser.add_argument("energy", type=int, help="Invalid energy", required=True)
nutrition_base_args_parser.add_argument("protein", type=float, help="Invalid protein", required=True)
nutrition_base_args_parser.add_argument("fat", type=float, help="Invalid fat", required=True)
nutrition_base_args_parser.add_argument("carbohydrate", type=float, help="Invalid carbohydrate", required=True)
nutrition_base_args_parser.add_argument("fiber", type=float, help="Invalid fiber")
nutrition_base_args_parser.add_argument("sugar", type=float, help="Invalid sugar")
nutrition_base_args_parser.add_argument("saturatedFattyAcid", type=float, help="Invalid saturatedFattyAcid")
nutrition_base_args_parser.add_argument("transFattyAcid", type=float, help="Invalid transFattyAcid")
nutrition_base_args_parser.add_argument("cholesterol", type=float, help="Invalid cholesterol")
nutrition_base_args_parser.add_argument("vitaminA", type=float, help="Invalid vitaminA")
nutrition_base_args_parser.add_argument("vitaminC", type=float, help="Invalid vitaminC")
nutrition_base_args_parser.add_argument("calcium", type=float, help="Invalid calcium")
nutrition_base_args_parser.add_argument("iron", type=float, help="Invalid iron")
nutrition_base_args_parser.add_argument("potassium", type=float, help="Invalid potassium")
nutrition_base_args_parser.add_argument("sodium", type=float, help="Invalid sodium")