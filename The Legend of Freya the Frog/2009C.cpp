#include <iostream>
#include <fstream>
#include <algorithm>
#include <cmath>
#include <iomanip>

using namespace std;

void solve()
{
    long long x, y, k;
    cin >> x >> y >> k;

    long long stepsX = (x + k - 1) / k;
    long long stepsY = (y + k - 1) / k;

    if (stepsX > stepsY)
    {
        cout << (stepsX * 2 - 1) << "\n";

        return;
    }

    cout << (stepsY * 2) << "\n";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

#ifndef ONLINE_JUDGE
    ifstream in("input.txt");
    if (in.good())
    {
        (void)freopen("input.txt", "r", stdin);
    }
#endif

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}