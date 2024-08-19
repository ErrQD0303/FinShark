@echo off
REM Check if the correct number of arguments are provided
if "%~1"=="" (
    echo Please provide a directory name as an argument.
    exit /b 1
)

REM Set the target directory based on the flag
if "%~2"=="-p" (
    set "TARGET_DIR=src\Pages\%~1"
) else (
    set "TARGET_DIR=src\Components\%~1"
)

REM Create the directory
mkdir "%TARGET_DIR%"

REM Create the .tsx and .css files
echo tsrafce> "%TARGET_DIR%\%~1.tsx"
type nul > "%TARGET_DIR%\%~1.css"

REM Notify the user
echo Component "%~1" created successfully

REM Open the .tsx file in Visual Studio Code
code "%TARGET_DIR%\%~1.tsx"