---
title: 'test'
date: '2022-12-18'
---
test
```
useEffect(() => {
    if (theme === 'dark') {
        document.querySelector('body').classList.add(('dark'))
    } else {
        document.querySelector('body').classList.remove('dark')
    }
}, [theme])
```
