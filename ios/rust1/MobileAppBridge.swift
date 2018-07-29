//
//  MobileAppBridge.swift
//  mobile_app
//
//  Created by Marek Kotewicz on 18/08/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation

@objc(MobileAppBridge)

class MobileAppBridge: NSObject {
	@objc func sayHelloWorld(_ name: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
		var name_ptr = name.asPtr()
		let result_rust_str = hello_world(&name_ptr)
		let result_rust_str_ptr = rust_string_ptr(result_rust_str)
		let result = String.fromStringPtr(ptr: result_rust_str_ptr!.pointee)
		rust_string_ptr_destroy(result_rust_str_ptr)
		rust_string_destroy(result_rust_str)
		resolve(result)
	}

	@objc func testholochain(_ name: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
		print("In testholochain function.")
		let dna = holochain_dna_create()
		print("Created holochain DNA")
		let holochain = holochain_new(dna)
		print("Created holochain with result:")
		print(holochain)
		let startresult = holochain_start(holochain)
		resolve(startresult)
	}
}
