const testCases = [
    {
        name: 'cpp : hello world',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    cout << "hello world";\n' +
                'return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : print stdin',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n\n' +
                'using namespace std;\n' +
                'int main(){\n\n' +
                '    int a;\n' +
                '    while(cin >> a){\n' +
                '        cout << a << endl;\n' +
                '    }\n' +
                '    return 0;\n\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },

    },
    {
        name: 'nodejs : hello world',
        reqObject: {
            language: 'nodejs',
            script: 'console.log(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : print stdin',
        reqObject: {
            language: 'nodejs',
            script:
                'process.stdin.setEncoding(\'utf8\'); \n ' +
                'process.stdin.on(\'data\', (input) => { \n ' +
                '  console.log(input); \n ' +
                ' \n ' +
                '}); \n ',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : hello world',
        reqObject: {
            language: 'python',
            script: 'print(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : print stdin',
        reqObject: {
            language: 'python',
            script:
                'try:\n' +
                '    while(True):\n' +
                '        line = input()\n' +
                '        if not line:\n' +
                '            break\n' +
                '        print(line)\n' +
                'except EOFError:\n' +
                '    pass',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : hello world',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n\n' +
                '    printf("hello world");\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : print stdin',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    int number;\n' +
                '    while (scanf("%d", &number) == 1) {\n' +
                '        printf("%d\\n", number);\n' +
                '    } \n' +
                '    return 0;\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        System.out.println("hello world");\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        while (scanner.hasNextInt()) {\n' +
                '            int number = scanner.nextInt();\n' +
                '            System.out.println(number);\n' +
                '        } \n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print hello world',
        reqObject: {
            language: 'ruby',
            script:
                'print "hello world"',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'lua : print hello world',
        reqObject: {
            language: 'lua',
            script:
                'print("hello world")',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'lua : Number negative or Positive',
        reqObject: {
            language: 'lua',
            script:
                `value = io.read("*n")
                    if( value > 0 )
                    then
                    print("The given value is positive" )
                    elseif(a < 0)
                    then
                    print("The given value is negative" )
                    else
                    print("The given value is zero")
                    end`,
            stdin: 10,
        },
        expectedResponse: {
            val: 'The given value is positive',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : Reverse a string',
        reqObject: {
            language: 'go',
            script:
                `package main
                import "fmt"
                func main() {
                    fmt.Print("Enter text: ")
                    var input string
                    fmt.Scanln(&input)
                    runes := []rune(input)
                    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
                        runes[i], runes[j] = runes[j], runes[i]
                    }
                    reversed := string(runes)
                    fmt.Print(reversed)
                }`,
            stdin: 'qwe',
        },
        expectedResponse: {
            val: 'ewq',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : Check if given string is Palindrome',
        reqObject: {
            language: 'go',
            script:
                `package main
                import "fmt"
                func main() {
                    fmt.Print("Enter text: ")
                    var input string
                    fmt.Scanln(&input)
                    runes := []rune(input)
                    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
                        runes[i], runes[j] = runes[j], runes[i]
                    }
                    reversed := string(runes)
                    if input == reversed {
                    fmt.Print("Given Stirng is Palindrome")
                    } else {
                    fmt.Print("Given String is not Palindrome")
                    }
                }`,
            stdin: 'sahas',
        },
        expectedResponse: {
            val: 'Given Stirng is Palindrome',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'rust : Even or Odd',
        reqObject: {
            language: 'rust',
            script:
                `use std::io; 
                fn main() {
                    let mut input = String::new(); 
                    io::stdin().read_line(&mut input)
                        .expect("Failed to read line");
                        let number: i32 = match input.trim().parse() {
                        Ok(num) => num,
                        Err(_) => {
                            println!("Invalid input, please enter a valid integer.");
                            return;
                        }
                    };
                    if number % 2 == 0 {
                        println!("even");
                    } else {
                        println!("odd");
                    }
                }
                `,
            stdin: 7,
        },
        expectedResponse: {
            val: 'odd',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'rust : Is divisible?',
        reqObject: {
            language: 'rust',
            script:
                `use std::io; 
                fn main() {
                    let mut input = String::new(); 
                    io::stdin().read_line(&mut input)
                        .expect("Failed to read line");
                        let dividend: i32 = match input.trim().parse() {
                        Ok(num) => num,
                        Err(_) => {
                            println!("Invalid input, please enter a valid integer.");
                            return;
                        }
                    };
                let mut input2 = String::new();
                io::stdin().read_line(&mut input2)
                    .expect("Failed to read line");
                let divisor: i32 = match input2.trim().parse() {
                    Ok(num) => num,
                    Err(_) => {
                        println!("Invalid input for the second number, please enter a valid integer.");
                        return;
                    }
                };
                    if dividend % divisor == 0 {
                        println!("divible");
                    } else {
                        println!("not divisible");
                    }
                }
                `,
            stdin: `10
                    5`,
        },
        expectedResponse: {
            val: 'divisible',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print stdin',
        reqObject: {
            language: 'ruby',
            script:
                'user_input = gets.chomp\n' +
                'puts user_input',
            stdin: '10\n',
        },
        expectedResponse: {
            val: '10\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'TLE test',
        reqObject: {
            language: 'nodejs',
            script: 'for(let i=0 ; ; ){i++}',
        },
        expectedResponse: {
            val: 'Time limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test',
        reqObject: {
            language: 'python',
            script: 'one_gb_data = bytearray(1000 * 1024 * 1024)',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 2',
        reqObject: {
            language: 'python',
            script:
                'import time\n' +
                'def consume_memory(target_mb, duration_sec):\n' +
                '    float_size = 8\n' +
                '    floats_per_mb = (1024 * 1024) // float_size\n' +
                '    total_floats = target_mb * floats_per_mb\n' +
                '    iterations = int(duration_sec / 0.1)\n' +
                '    floats_per_iteration = total_floats // iterations\n' +
                '    memory_hog = []\n' +
                '    for _ in range(iterations):\n' +
                '        memory_hog.extend([0.0] * floats_per_iteration)\n' +
                '        time.sleep(0.1)\n' +
                'consume_memory(1000, 1)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 3',
        reqObject: {
            language: 'python',
            script:
                'a = [100]\n' +
                'for i in a:\n' +
                '    a.append(i)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'OPEN AI test promptv1',
        reqObject: {
            language: 'promptv1',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    {
        name: 'OPEN AI test promptv2',
        reqObject: {
            language: 'promptv2',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },

]

const ques = [
    {
        id: 0,
        name: 'standard input',
        desc: 'You are required to get standard input from language of your choice',
        total: 1,
        exp: {
            input: {
                desc: {
                    type: 'string',
                    value: 'Hello World',
                },
            },
            output: {
                desc: {
                    type: 'string',
                    value: 'Hello World',
                },
            },
        },
    },
    {
        id: 1,
        name: 'Check if number is Odd or even',
        desc: 'You are required to get standard input from language of your choice',
        total: 1,
        exp: {
            input: {
                desc: {
                    type: 'number',
                    value: '10',
                },
            },
            output: {
                desc: {
                    type: 'number',
                    value: '10',
                },
            },
        },
    },
    {
        id: 2,
        name: 'Sum of an array',
        desc: 'Given an integer array print its sum',
        total: 1,
        exp: {
            input: {
                desc: {
                    type: 'array : number',
                    value: '[1,2,3,4,5]',
                },
            },
            output: {
                desc: {
                    type: 'number',
                    value: '15',
                },
            },
        },
    },
    {
        id: 3,
        name: 'Reverse a string',
        desc: 'Given a string, reverse it',
        total: 1,
        exp: {
            input: {
                desc: {
                    type: 'string',
                    value: 'niez',
                },
            },
            output: {
                desc: {
                    type: 'string',
                    value: 'zein',
                },
            },
        },
    },
    {
        id: 4,
        name: 'Calculate even sum',
        desc: 'Given an integer array return the sum of only even numbers',
        total: 1,
        exp: {
            input: {
                desc: {
                    type: 'array: number',
                    value: '[1,2,3,4,5,6,7]',
                },
            },
            output: {
                desc: {
                    type: 'number',
                    value: '12',
                },
            },
        },
    },
]
module.exports = { testCases, ques }
