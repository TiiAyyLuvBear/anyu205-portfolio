# Portfolio browser test

From the repository root, with Microsoft Edge installed, run these commands in PowerShell.

```powershell
python -m venv .venv
. .\.venv\Scripts\Activate.ps1
python -m pip install playwright
python tests/test_portfolio.py
```

The test starts a temporary local server and checks mobile navigation, all five project detail pages, image loading, keyboard access to video placeholders, reduced motion, and the desktop project grid.
