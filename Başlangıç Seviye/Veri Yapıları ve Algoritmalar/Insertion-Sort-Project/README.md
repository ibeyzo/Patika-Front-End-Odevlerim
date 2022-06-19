###INSERTION SORT PROJECT

**[22, 27, 16, 2, 18, 6]**

**1. Yukarıdaki verilen dizinin sort türüne göre aşamalarını yazınız.**

**Cevap:** 

1. 22<27 --> [22, 27, 16, 2, 18, 6]
2. 16<27 --> [22, 16, 27, 2, 18, 6]


    16<22--> [16, 22, 27, 2, 18, 6]
3. 2<27 --> [16, 22, 2, 27, 18, 6]


    2<22 --> [16, 2, 22, 27, 18, 6]


    2<16 --> [2, 16, 22, 27, 18, 6]


4. 18<27 --> [2, 16, 22, 18, 27, 6]


    18<22 --> [2, 16, 18, 22, 27, 6]
5. 6<27 --> [2, 16, 18, 22, 6, 27]


    6<22 --> [2, 16, 18, 6, 22, 27]


    6<18 --> [2, 16, 6, 18, 22, 27]


    6<16 --> [2, 6, 16, 18, 22, 27]

**Big-O gösterimini yazınız**

**Cevap:**

* n*(n+1)/2= O(n²)

**3.Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.**

**Cevap:**

* Best Case: O(n)
* Average Case: O(n²)
* Worst Case: O(n²)

**4.Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.**

**Cevap:**

* Average Case

**5. [7, 3, 5, 8, 2, 9, 4, 15, 6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.**

1. 3<7 --> [3, 7, 5, 8, 2, 9, 4, 15, 6]
2. 5<7 --> [3, 5, 7, 8, 2, 9, 4, 15, 6]
3. 2<8 --> [3, 5, 7, 2, 8, 9, 4, 15, 6]


    2<7 --> [3, 5, 2, 7, 8, 9, 4, 15, 6]


    2<5 --> [3, 2, 5, 7, 8, 9, 4, 15, 6]


    2<3 --> [2, 3, 5, 7, 8, 9, 4, 15, 6]
4. 4<9 --> [2, 3, 5, 7, 8, 4, 9, 15, 6]


    4<8 --> [2, 3, 5, 7, 4, 8, 9, 15, 6]


    4<7 --> [2, 3, 5, 4, 7, 8, 9, 15, 6]

    
    4<5 --> [2, 3, 4, 5, 7, 8, 9, 15, 6]