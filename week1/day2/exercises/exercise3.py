#q1
brand={
    "name":"Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona" ,
    "type_of_clothes":["men", "women", "children", "home" ],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
         "France":"blue",
         "Spain":"red",
         "US":["pink", "green"]
    }
}
#q2
brand["number_stores"]=2
#q3
print("Zaras clients are : ")
for type__clo in brand["type_of_clothes"]:
    print(type__clo)
#q4
brand["country_creation"]="Spain"

#q5
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

#q6

del(brand["creation_date"])
#q7
print(f"the last competitor is : {brand["international_competitors"][-1]}")
#q8
print ("The major clothes colors in USA are : ")
for clothe in brand["major_color"]["US"]:
    print (clothe)
#q9
print(f"the amount of key value pairs is : {len(brand)}")
#10
print ("the key of dictionary are : ")
for key in brand:
    print(key)
#11
more_on_zara={"creation_date": 1975,"number_stores": 10000}
#12
brand.update(more_on_zara)
#13
print(brand["number_stores"])
#what happen its changed the value of this key by the value of the same key from more_on_zara dictionary 