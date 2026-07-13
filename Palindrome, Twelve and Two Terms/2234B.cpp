#include <iostream>
#include <fstream>

using namespace std;

void solve()
{
    long long n;
    cin >> n;

    if (n == 10)
    {
        cout << -1 << endl;
        return;
    }

    if (n % 12 == 10)
    {
        cout << "22 " << (n - 22) << endl;
        return;
    }

    cout << (n % 12) << " " << (n - (n % 12)) << endl;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    ifstream infile("input.txt");
    if (infile.good())
    {
        freopen("input.txt", "r", stdin);
    }

    int t;
    if (cin >> t)
    {
        while (t--)
        {
            solve();
        }
    }
    return 0;
}