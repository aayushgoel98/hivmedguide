#### HIVmedfinder ####

Deployed at: [http://hivmedfinder.surge.sh/](http://hivmedfinder.surge.sh/)

A quick reference for HIV/AIDS medication for new and low-income patients and their families, including comprehensive cost assistance resources.

The goal of this website is to provide the user with simplified information regarding HIV medications, their intended usage and potential side effects, and means of accessing medications and ongoing care for low-income or no-insurance patients. The target audience is HIV positive patients who are (i) newly-diagnosed, (ii) beginning a new medication regimen, and/or (iii) low-income, or have financial difficulty accessing medical care and medication. A secondary audience would be HIV+ patients with stable diagnoses, and friends and family of HIV+ patients.

The descriptive text for each medication is called from the AIDSinfo.nih.gov API in order to ensure accuracy and quality of information. The drug images are called from the openFDA API. The GoodRx API is implemented to assist no-insurance patients in locating the cheapest supplier for their prescription. The AIDS.gov and Google Maps APIs are used in conjunction so that the user can input their zipcode and receive a map and list of the five closest low-income/low-cost HIV/AIDS clinics. Finally, the interactions are sourced from the National Institute of Health's RxNav API.

#### Technologies ####

jQuery  
HTML  
CSS  
Ajax  

#### Implementation ####

The primary challenge for this project was juggling each of the six APIs in a manner that extracted the minimum pertinent information and made it presentable for the user. Some of the APIs have not been updated/maintained in a long time, and one of them returned a 26,000 line JSON (the only response it offered), so I built a parser to cut the data down to a manageable size. 
