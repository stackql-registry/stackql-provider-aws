--- 
title: usages
hide_title: false
hide_table_of_contents: false
keywords:
  - usages
  - meteringmarketplace
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.meteringmarketplace.usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#register_usage"><CopyableCode code="register_usage" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductCode"><code>ProductCode</code></a>, <a href="#parameter-PublicKeyVersion"><code>PublicKeyVersion</code></a></td>
    <td></td>
    <td>Paid container software products sold through Amazon Web Services Marketplace must integrate with the Amazon Web Services Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of RegisterUsage. RegisterUsage performs two primary functions: metering and entitlement. Entitlement: RegisterUsage allows you to verify that the customer running your paid software is subscribed to your product on Amazon Web Services Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with RegisterUsage is only required to guard against unauthorized use at container startup, as such a CustomerNotSubscribedException or PlatformNotSupportedException will only be thrown on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a CustomerNotSubscribedException, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running. Metering: RegisterUsage meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged for 10 tasks. Software metering is handled by the Amazon Web Services Marketplace metering control plane—your software is not required to perform metering-specific actions other than to call RegisterUsage to commence metering. The Amazon Web Services Marketplace metering control plane will also bill customers for running ECS tasks and Amazon EKS pods, regardless of the customer's subscription state, which removes the need for your software to run entitlement checks at runtime. For containers, RegisterUsage should be called immediately at launch. If you don’t register the container within the first 6 hours of the launch, Amazon Web Services Marketplace Metering Service doesn’t provide any metering guarantees for previous months. Metering will continue, however, for the current month forward until the container ends. RegisterUsage is for metering paid hourly container products. For Amazon Web Services Regions that support RegisterUsage, see RegisterUsage Region support.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="register_usage"
    values={[
        { label: 'register_usage', value: 'register_usage' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_usage">

Paid container software products sold through Amazon Web Services Marketplace must integrate with the Amazon Web Services Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of RegisterUsage. RegisterUsage performs two primary functions: metering and entitlement. Entitlement: RegisterUsage allows you to verify that the customer running your paid software is subscribed to your product on Amazon Web Services Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with RegisterUsage is only required to guard against unauthorized use at container startup, as such a CustomerNotSubscribedException or PlatformNotSupportedException will only be thrown on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a CustomerNotSubscribedException, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running. Metering: RegisterUsage meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged for 10 tasks. Software metering is handled by the Amazon Web Services Marketplace metering control plane—your software is not required to perform metering-specific actions other than to call RegisterUsage to commence metering. The Amazon Web Services Marketplace metering control plane will also bill customers for running ECS tasks and Amazon EKS pods, regardless of the customer's subscription state, which removes the need for your software to run entitlement checks at runtime. For containers, RegisterUsage should be called immediately at launch. If you don’t register the container within the first 6 hours of the launch, Amazon Web Services Marketplace Metering Service doesn’t provide any metering guarantees for previous months. Metering will continue, however, for the current month forward until the container ends. RegisterUsage is for metering paid hourly container products. For Amazon Web Services Regions that support RegisterUsage, see RegisterUsage Region support.

```sql
INSERT INTO aws.meteringmarketplace.usages (
ProductCode,
PublicKeyVersion,
Nonce,
region
)
SELECT 
'{{ ProductCode }}' /* required */,
{{ PublicKeyVersion }} /* required */,
'{{ Nonce }}',
'{{ region }}'
RETURNING
PublicKeyRotationTimestamp,
Signature
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usages
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usages resource.
    - name: ProductCode
      value: "{{ ProductCode }}"
      description: |
        Product code is used to uniquely identify a product in Amazon Web Services Marketplace. The product code should be the same as the one used during the publishing of a new product.
    - name: PublicKeyVersion
      value: {{ PublicKeyVersion }}
      description: |
        Public Key Version provided by Amazon Web Services Marketplace
    - name: Nonce
      value: "{{ Nonce }}"
      description: |
        (Optional) To scope down the registration to a specific running software instance and guard against replay attacks.
`}</CodeBlock>

</TabItem>
</Tabs>
