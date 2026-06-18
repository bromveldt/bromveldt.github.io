---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title: Windows command-line snippets
description: PDF files
layout: simple
theme: slate
lang: en
permalink: /code/windows/
tags: [ bruno, Windows, code]
---

I often program in Windows 11 shell and Powershell. Apparently not often enough to remember :( Here are some notes I have made.


**Alt + Print Screen**: Copy active window to the clipboard

This is another keyboard shortcut that builds off of Print Screen. This shortcut with copy content as it appears in the active window on your desktop.

**Windows + Shift + S**: copy a specific portion of the Windows 11 desktop to the clipboard

This keyboard shortcut will unlock a tool that has been around Windows since Vista. The Snipping Tool is a tool that first appeared in Windows Vista in 2002 as a PowerToys tool.

#### To copy proxy settings of current user to WinHttp:

```
netsh winhttp import proxy source =ie
```

#### To reset the proxy to default settings:

```
netsh winhttp reset proxy
```

#### To show proxy settings of current user:

```
netsh winhttp show proxy
```

#### netsh

```
netsh interface ip show config
netsh interface ipv6 show address 
netsh advfirewall set currentprofile state
netsh advfirewall set currentprofile state off
netsh advfirewall set currentprofile state on

netsh interface show interface
netsh wlan show interface 

netsh lan
show interfaces - Zeigt Liste der aktuellen verkabelten Schnittstellen an.
show profiles  - Zeigt Liste der momentan auf dem Computer konfigurierten
                 Kabelnetzwerkprofile an.
show settings  - Zeigt aktuelle globale Einstellungen des verkabelten LANs an.
show tracing   - Zeigt an, ob die Ablaufverfolgung für ein verkabeltes LAN
                 aktiviert oder deaktiviert ist.
```

# open a firewall port
```
netsh advfirewall firewall
  add rule name="SQL Server"
  dir=in action=allow
  protocol=TCP localport=1434 
```

# add a dns server

```
netsh interface ip
  set dns "Local Area Connection"
  static 192.168.0.2
```

# add a second dns server

```
netsh interface ip
  add dnsserver "Local Area Connection"
  192.168.0.3 
```

# configure your network adapter to use DHCP and DNS
```
netsh interface ip
 set dns "Local Area Connection" dhcp 
```

https://becomethesolution.com/useful-netsh-commands-in-windows

C:\windows\System32\bitsadmin.exe /Util /SetIEProxy LocalSystem Manual_proxy http://<proxyserver>:<proxy port> "<Any bypasses to be added>"

#### How do I check in Windows how man CPU cores I have?

```
systeminfo | findstr /C:"Processor(s)"
1
```

or use wmic:
```
wmic cpu get NumberOfCores,NumberOfLogicalProcessors
NumberOfCores  NumberOfLogicalProcessors
10             12
```

#### Task List

```
tasklist /fo table /svc | findstr proxy
dnscrypt-proxy.exe           20548 dnscrypt-proxy

tasklist /fo table | findstr proxy
dnscrypt-proxy.exe           20548 Services                   0     16.872 K

tasklist | findstr proxy
dnscrypt-proxy.exe           20548 Services                   0     16.884 K

tasklist /FI "PID eq 1234"
```

#### Memory Diagnostics on Computer Restart

```
mdsched.exe
```

eventvwr.exe System > MemoryDiagnostics results

See https://www.supereasy.com/memory-test-for-windows-10-solved/

#### Windows Resource Protection system scan

```
sfc /scannow
```

```
Dism /Online /Cleanup-Image /CheckHealth
```

```
Dism /Online /Cleanup-Image /ScanHealth
```

```
DISM /Online /Cleanup-Image /RestoreHealth
```

#### Scheduled Tasks

schtasks.exet

To check a schedules task status:

```powershell
schtasks.exe /Query /TN "\Microsoft\Windows\PI\Secure-Boot-Update" /FO LIST /V
```

##### Start one service as soon as some other service is running

1) Start and Stop the Service to got the appropriate Events in the Eventlog.
2) `taskschd.msc` and create a new custom Task. As Trigger you can select the Events created before with the start and/or stop action.
3) As Action call your cmd/bat, whatever you want.
Hint: You also can export the Event in the XML Format and then import the XML Snippet into the Scheduled Task.

```powershell
Get-EventLog -LogName System | Where-Object { $_.EventID -eq 7036 } | Format-Table MachineName, TimeWritten, UserName, EventID, Message -AutoSize -Wrap
```

----

### Network

##### netsh 

```
netsh interface ipv4 show excludedportrange protocol=tcp
netsh int ipv4 show dynamicport tcp
```

##### netstat 

The -a switch shows all active connections and listening ports, 
    -n displays addresses and port numbers in numeric form,
and -o shows the process ID, also called the PID
```
netstat -ab # active connections with names

netstat -ano # process identifiers (PIDs) rather than names
netstat -ano | findstr :50080

netstat -ano | findstr LISTENING
netstat -ano | findstr :8080
netstat -ano | findstr :53
```

#### DNS Caching

To display the DNS cache entries, if any, if you wish to confirm if the DNS cache has been cleared:

```
ipconfig /displaydns
```

To turn off DNS caching for a particular session:

```
net stop dnscache
```

To turn on DNS caching for a particular session: 

```
net start dnscache
```

----
#### Flush DNS Cache

https://www.thewindowsclub.com/flush-windows-dns-cache

```
ipconfig /flushdns
```

You should be able to see a confirmation dialog window:

Windows IP Configuration. Successfully flushed the DNS Resolver Cache.


Once the requisite process is complete and existing cache data has been flushed, you may registers any DNS records that you or programs may have added to your Hosts file:

```
ipconfig /registerdns
```

To flush DNS Cache using PowerShell:

```powershell
Clear-DnsClientCache
```

#### How to refresh DNS cache every few hours automatically?

Take a backup of your registry before making any changes.
Open Registry Editor: regedit

Navigate to: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNSCache\Parameters

Right-click on an empty area, and create a new DWORD.

Set the Name as **MaxCacheTtl** and set the value in seconds. The default is 86400 seconds which is one day.

Repeat the same and create another DWORD with the name **MaxNegativeCacheTtl** and value as 5

This will make sure the local DNS cache is refreshed every few hours.

```
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNSCache\Parameters" /v MaxCacheTtl /t REG_DWORD /d 86400
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNSCache\Parameters" /v MaxNegativeCacheTtl /t REG_DWORD /d 5
```

----
### Windows Services

services.msc

Native PowerShell object pipeline: 

```powershell
Get-Service | Where-Object Status -EQ 'Running' 
```

Basic status: Status (Running/Stopped/Paused), StartType, Name, DisplayName; more info needs other cmdlets (Get-Service -ComputerName, Get-WmiObject, Get-CimInstance)

Start-Service/Stop-Service generally wait until the service reaches the target state (or timeout)

If you just want to ensure the service is running, otherwise you'd start it up:

```vim
@echo off
set "SvcName=MyServiceName"

sc query "%SvcName%" | findstr /I " STATE" | findstr /V "RUNNING" >nul
if errorlevel 1 (
    echo Service %SvcName% is running
) else (
    echo Service %SvcName% is not running, starting it...
    net start "%SvcName%"
)
```

To display SERVICE_NAME and DISPLAY_NAME side-by-side:

```vim
sc queryex type= service state= all | findstr /i "unbound"
SERVICE_NAME: unbound
DISPLAY_NAME: Unbound DNS validator
```

Make sure a service exists and inspect the service states

```vim
@echo off
set "SvcName=MyServiceName"

sc query "%SvcName%" | findstr /I " STATE" >nul
if errorlevel 1 (
    echo Service %SvcName% not found
    exit /b 1
)

for /F "tokens=3 delims=: " %%H in ('sc query "%SvcName%" ^| findstr " STATE"') do (
    if /I "%%H" NEQ "RUNNING" (
        echo Service %SvcName% is not running (state: %%H)
        rem ----- service not running: start it -----
        net start "%SvcName%"
        if errorlevel 1 (
            echo Failed to start %SvcName%
            exit /b 1
        )
        echo Service %SvcName% started
    ) else (
        echo Service %SvcName% is running
    )
)
```

#### DCOM Server

Open Services (Win + R, services.msc). Find DCOM Server Process Launcher and RPC Endpoint Mapper.

Ensure they are set to Automatic and are Running. Right-click, choose Restart.

```
sc query DcomLaunch | findstr /I " STATE"
        STATE              : 4  RUNNING
sc query RPCSS | findstr /I " STATE"
        STATE              : 4  RUNNING
```
----

#### Service Management via NSSM

```vim
$event = Get-WinEvent -FilterHashtable @{LogName='System '; ID=7034} -MaxEvents 1
[xml]$xml = $event.ToXml()
$xml.Event.EventData.Data  # Extract named data fields [web:11]

Get-WinEvent -FilterHashtable @{LogName='System'} -MaxEvents 1 | Get-Member

nssm install "MyScriptService"
# In GUI: Path = C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
# Arguments = -File "C:\path\to\script.ps1"
nssm start "MyScriptService"
nssm set "MyScriptService" Start AUTO
```

----

Here’s the exact filter to paste into **Event Viewer → Filter Current Log (XML tab)** to find service restart events (Event ID 7036 from the Service Control Manager):

```xml
<QueryList>
  <Query Id="0">
    <Select Path="System">
      *[System[Provider[@Name='Service Control Manager'] and (EventID=7036)]]
    </Select>
  </Query>
</QueryList>
```

Steps:
1. Open **Event Viewer** (`eventvwr.msc`).
2. Go to **Windows Logs → System**.
3. On the right, click **Filter Current Log…**.
4. Go to the **XML** tab and check **Edit query manually**.
5. Click **Yes** on the warning, then paste the XML above.
6. Click **OK**.

This will show all service start/stop/restart events like “The [service name] service entered the running/stopped state”. [wiert](https://wiert.me/2018/12/27/eventviewer-filtering-on-service-stopstart-events/)

If you prefer PowerShell instead, you can run:

```powershell
Get-EventLog -LogName System | Where-Object { $_.EventID -eq 7036 } |
Format-Table MachineName, TimeWritten, UserName, EventID, Message -AutoSize -Wrap
```
----

##### KEK certificate missing

A missing KEK (Key Exchange Key) certificate after a firmware update usually indicates a secure boot key mismatch in the BIOS/UEFI, often caused by outdated UEFI certificates not matching newer Windows bootloaders. To resolve this, ensure BIOS is set to default (which you have done), check for further BIOS updates, or temporarily disable Secure Boot if Windows cannot boot.

Potential Troubleshooting Steps:

Check UEFI Key Configuration: Enter the BIOS/UEFI setup (usually F2 or Del at boot) and look for a section named "Secure Boot" or "Key Management". Ensure the Secure Boot mode is set to "Standard" or "Windows".

Refresh Secure Boot Keys: Within the secure boot settings, select options to "Install Default Secure Boot Keys" or "Restore Factory Keys" to ensure the KEK and db keys are correctly populated.
Update BIOS/Firmware: Even if you just updated, check the Acer support website again for any immediate revisions (e.g., 1.08a, 1.09) that might fix this issue.
Check Windows Updates: If the system boots, install all pending Windows updates, as Microsoft often releases patches that update the required keys.
If the system functions normally, this error in the Event Viewer might be safely ignored, as it often appears temporarily during bootloader updates.
----

#### Restart the Clock Service

```
net stop w32time
w32tm.exe /unregister 
w32tm.exe /register 
net start w32time
```

----

#### View Network Connections
```
ncpa.cpl
```

To show only listening TCP ports, use a filter:

```powershell
Get-NetTCPConnection -State Listen
```

If you are checking a specific port, such as port 443, filter by LocalPort:

```powershell
Get-NetTCPConnection -LocalPort 443
```

if a development web server cannot bind to port 8080, this command can show whether another service is already listening on that port.

```powershell
Get-NetTCPConnection -State Listen | Select-Object LocalAddress,LocalPort,OwningProcess,@{Name="ProcessName";Expression={(Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue).ProcessName}}
```

If the process name is unclear, check its file path with:

```powershell
Get-Process -Id 1234 | Select-Object Id,ProcessName,Path
```

To list UDP endpoints, `Get-NetUDPEndpoint`

To filter for a specific UDP port, such as DNS on port 53, use:

```powershell
Get-NetUDPEndpoint -LocalPort 53
```

#### Firewall Rules
```
wf.msc
```
Click Inbound Rules.


#### ExecutionPolicy RemoteSigned

Als het huidige PowerShell-uitvoeringsbeleid het uitvoeren van TSS niet toestaat, voert u de volgende acties uit:

Stel het RemoteSigned uitvoeringsbeleid voor het procesniveau in door de cmdlet 

```
Set-ExecutionPolicy -scope Process -ExecutionPolicy RemoteSigned
```

Voer de cmdlet PS C:\> Get-ExecutionPolicy -Listuit om te controleren of de wijziging van kracht wordt.

Omdat de machtigingen op procesniveau alleen van toepassing zijn op de huidige PowerShell-sessie, gaat de toegewezen machtiging voor het procesniveau ook terug naar de eerder geconfigureerde status zodra het opgegeven PowerShell-venster waarin TSS wordt uitgevoerd is gesloten.
