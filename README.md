
<div>
  <div>
     <a href="https://www.linkedin.com/in/romuloderoci/" > <img src="http://www.linkedin.com/img/webpromo/btn_viewmy_160x33.png" width="160" height="33" border="0" alt="View User Name’s profile on LinkedIn"></a>
  </div>
</div>


# Telnet Tester

Telnet Tester is a telnet server that read clients input and reply with pre determined outputs given in a file 

# Getting started:
1. Download & Install Nodejs (be smart, use pkg manager :stuck_out_tongue_closed_eyes: : https://nodejs.org/en/download/package-manager/)
2. checkout this repository in any place: git clone https://github.com/rderoci/telnet-tester.git
3. Access project folder
4. from any terminal, execute:
    ```js
    $ npm link
    $ npm build
    ```
5. Check if all ok with:
    ```js
    $ ett --help
    ```
5. Finally create a telnet server with:
    ```js
    $ ett -o <fileabsolutepath>
    ```
6. "fileabsolutepath" should looks like https://raw.githubusercontent.com/rderoci/telnet-tester/master/commands.out.

# How it works:
Once you execute...
```js
$ ett -o <fileabsolutepath>
```
...a telnet server will be created on port **4001** and will be ready to accept commands.
Each command received will return a response from "fileabsolutepath", in this file should be declared how many simulated commands responses you need, each response must be inside parentheses "()".

# Example:
```js
$ ett -o /rderoci/telnet-tester/master/commands.out
```
*In another CLI, connect to telnet server:*
```sh
telnet localhost 4001
login: rderoci
password: 123
swa-abc-123# INPUTING FIRST COMMAND
                           ^ error
%30 : erro qualquer
swa-abc-123# INPUTING ANOTHER COMMAND
swa-abc-123# INPUTING LAST COMMAND
```

