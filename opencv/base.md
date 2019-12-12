# cv::DataType

no member type

```cpp
cv::Mat m = cv::Mat::eye(10, 10, cv::traits::Type<cv::Complexf>::value);
std::cout << m.at<cv::Complexf>(3, 3).re<<std::endl;
```

https://github.com/opencv/opencv/issues/10115

# MatIterator_

```cpp
const int n_mat_size = 3;
const int n_mat_sz[] = { n_mat_size ,n_mat_size ,n_mat_size };
cv::Mat n_mat(3, n_mat_sz, CV_32FC1);

cv::randu(n_mat, -1.0f, 1.0f);
cv::MatIterator_< float> it;
for (it = n_mat.begin<float>();it != n_mat.end<float>();it++) {
	std::cout << *it << std::endl;
}
```