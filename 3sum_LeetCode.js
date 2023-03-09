// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
// TOO MUCH TIME SMH
//     let solutions = []
//     for (let x = 0; x<nums.length; x++){
//         for (let y = x+1; y<nums.length; y++){
//              for (let z = y+1; z<nums.length; z++){
//                  if((nums[x] + nums[y] + nums[z]) === 0){
//                      solutions.push([nums[x],nums[y],nums[z]].sort())
//                      //solutions = Array.from(new Set(solutions.map(JSON.stringify)), JSON.parse).sort()
//              }
//         }
//     }
// }

// solutions = solutions.sort()

// return Array.from(new Set(solutions.map(JSON.stringify)), JSON.parse).sort()


	nums.sort((a,b) => a-b)
	const result=[]

	if(nums.length < 3) return result

	for(let i=0; i< nums.length; i++){
		let left = i+1
		let right = nums.length-1
		if(i > 0 && nums[i] === nums[i-1]) continue
		while(left < right){
			let sum = nums[i] + nums[left] + nums[right]

			if(sum===0){
				let arr=[nums[i], nums[left], nums[right]]
				result.push(arr)
				left++
				while(nums[left] === nums[left-1] && left < right) left++
			}else if(sum > 0){
				right--
			}else{
				left++
			}
		}
	}

	return result
}