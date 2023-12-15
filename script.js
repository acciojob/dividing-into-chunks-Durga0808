const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const ans=[];
	let i=0,j=0,sum=0;

	while(j<arr.length){
		sum+=arr[j];
		if(sum>n){
			ans.push(arr.slice(i,j));
			sum=arr[j];
			i=j;
		}
		j++;
	}
	ans.push(arr.slice(i,j));
	return ans;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
