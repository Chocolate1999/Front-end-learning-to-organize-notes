## matlab 工具函数 —— normalize（归一化数据）

```c
function [Samples2]=normalize(Samples)
[M,N] = size(Samples);

Samples2 = zeros(M,N); %初始化Samples2数组（M*N）
for i=1:N
    allAtr = Samples(:,i);
    STD = std(allAtr);    % 求标准差
    MEAN = mean(allAtr);  % 求均值
    x = (allAtr-MEAN)/STD;
    Samples2(:,i)=x;
end
end
```

```c
学如逆水行舟，不进则退
```
