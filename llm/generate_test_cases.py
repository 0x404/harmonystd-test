import openai
import pandas
import numpy
from openai.error import RateLimitError
from tqdm import tqdm
from time import sleep

token = "sk-xxx"
model_engine = "gpt-3.5-turbo"

def generate_test(prompt):
    ok = False
    while not ok:
        try:
            res = openai.ChatCompletion.create(
                model=model_engine,
                messages=[
                    {"role": "user", "content": prompt},
                ],
            )
            generated_text = res["choices"][0]["message"]["content"].strip()
            print(generated_text)
            ok = True
        except RateLimitError:
            sleep(10)
        sleep(22)
    return generated_text



if __name__ == "__main__":
    openai.api_key = token
    df = pandas.read_csv("api_collections.csv")
    if "generated_test_case" not in df:
        df["generated_test_case"] = ""
    
    for index, row in tqdm(df.iterrows(), total=len(df)):
        if row["generated_test_case"] == "":
            df.at[index, "generated_test_case"] = generate_test(row["prompt"])
            df.to_csv("generated_tests.csv", index=False)
