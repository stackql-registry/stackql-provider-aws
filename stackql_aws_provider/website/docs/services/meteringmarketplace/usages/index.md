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
<tr>
    <td><a href="#batch_meter_usage"><CopyableCode code="batch_meter_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UsageRecords"><code>UsageRecords</code></a></td>
    <td></td>
    <td>Amazon Web Services Marketplace is introducing Concurrent Agreements, enabling buyers to make multiple purchases per Amazon Web Services account. Starting June 1, 2026, new SaaS products must use CustomerAWSAccountId (instead of CustomerIdentifier), LicenseArn (instead of ProductCode) to support this feature. BatchMeterUsage does not support CustomerIdentifier for new integrations. Existing integrations continue to work. Review the new integration for Concurrent Agreements here. For additional implementation details, see BatchMeterUsage code example with LicenseArn in the Amazon Web Services Marketplace Seller Guide. To post metering records for customers, SaaS applications call BatchMeterUsage, which is used for metering SaaS flexible consumption pricing (FCP). Identical requests are idempotent and can be retried with the same records or a subset of records. Each BatchMeterUsage request is for only one product. If you want to meter usage for multiple products, you must make multiple BatchMeterUsage calls. Usage records should be submitted in quick succession following a recorded event. Usage records aren't accepted 24 hours or more after an event. At the end of each billing cycle, a 6-hour grace period applies. We accept usage records for the previous billing month until 06:00 UTC on the first day of the next month. For example, you must submit March usage records before 06:00 UTC on April 1. On April 1 at 05:00 UTC, you can still submit records for March 31 (within the 6-hour grace period). After 06:00 UTC on April 1, March records are rejected regardless of the normal 24-hour submission window. After this grace period, we return a TimestampOutOfBoundsException error. BatchMeterUsage can process up to 25 UsageRecords at a time, and each request must be less than 1 MB in size. Optionally, you can have multiple usage allocations for usage data that's split into buckets according to predefined tags. BatchMeterUsage returns a list of UsageRecordResult objects, which have each UsageRecord. It also returns a list of UnprocessedRecords, which indicate errors on the service side that should be retried. For Amazon Web Services Regions that support BatchMeterUsage, see BatchMeterUsage Region support. For an example of BatchMeterUsage, see BatchMeterUsage code example in the Amazon Web Services Marketplace Seller Guide.</td>
</tr>
<tr>
    <td><a href="#meter_usage"><CopyableCode code="meter_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductCode"><code>ProductCode</code></a>, <a href="#parameter-Timestamp"><code>Timestamp</code></a>, <a href="#parameter-UsageDimension"><code>UsageDimension</code></a></td>
    <td></td>
    <td>As a seller, your software hosted in the buyer's Amazon Web Services account uses this API action to emit metering records directly to Amazon Web Services Marketplace. You must use the following buyer Amazon Web Services account credentials to sign the API request. For Amazon EC2 deployments, your software must use the IAM role for Amazon EC2 to sign the API call for MeterUsage API operation. For Amazon EKS deployments, your software must use IAM roles for service accounts (IRSA) to sign the API call for the MeterUsage API operation. Using EKS Pod Identity, the node role, or long-term access keys is not supported. For Amazon ECS deployments, your software must use Amazon ECS task IAM role to sign the API call for the MeterUsage API operation. Using the node role or long-term access keys are not supported. For Amazon Bedrock AgentCore Runtime deployments, your software must use the AgentCore Runtime execution role to sign the API call for the MeterUsage API operation. Long-term access keys are not supported. The handling of MeterUsage requests varies between Amazon Bedrock AgentCore Runtime and non-Amazon Bedrock AgentCore deployments. For non-Amazon Bedrock AgentCore Runtime deployments, you can only report usage once per hour for each dimension. For AMI-based products, this is per dimension and per EC2 instance. For container products, this is per dimension and per ECS task or EKS pod. You can't modify values after they're recorded. If you report usage before a current hour ends, you will be unable to report additional usage until the next hour begins. The Timestamp request parameter is rounded down to the hour and used to enforce this once-per-hour rule for idempotency. For requests that are identical after the Timestamp is rounded down, the API is idempotent and returns the metering record ID. For Amazon Bedrock AgentCore Runtime deployments, you can report usage multiple times per hour for the same dimension. You do not need to aggregate metering records by the hour. You must include an idempotency token in the ClientToken request parameter. If using an Amazon SDK or the Amazon Web Services CLI, you must use the latest version which automatically includes an idempotency token in the ClientToken request parameter so that the request is processed successfully. The Timestamp request parameter is not rounded down to the hour and is not used for duplicate validation. Requests with duplicate Timestamps are aggregated as long as the ClientToken is unique. If you submit records more than six hours after events occur, the records won't be accepted. The timestamp in your request determines when an event is recorded. You can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define or allow the customer to define. For Amazon Web Services Regions that support MeterUsage, see MeterUsage Region support for Amazon EC2 and MeterUsage Region support for Amazon ECS and Amazon EKS.</td>
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
public_key_rotation_timestamp,
signature
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


## Lifecycle Methods

<Tabs
    defaultValue="batch_meter_usage"
    values={[
        { label: 'batch_meter_usage', value: 'batch_meter_usage' },
        { label: 'meter_usage', value: 'meter_usage' }
    ]}
>
<TabItem value="batch_meter_usage">

Amazon Web Services Marketplace is introducing Concurrent Agreements, enabling buyers to make multiple purchases per Amazon Web Services account. Starting June 1, 2026, new SaaS products must use CustomerAWSAccountId (instead of CustomerIdentifier), LicenseArn (instead of ProductCode) to support this feature. BatchMeterUsage does not support CustomerIdentifier for new integrations. Existing integrations continue to work. Review the new integration for Concurrent Agreements here. For additional implementation details, see BatchMeterUsage code example with LicenseArn in the Amazon Web Services Marketplace Seller Guide. To post metering records for customers, SaaS applications call BatchMeterUsage, which is used for metering SaaS flexible consumption pricing (FCP). Identical requests are idempotent and can be retried with the same records or a subset of records. Each BatchMeterUsage request is for only one product. If you want to meter usage for multiple products, you must make multiple BatchMeterUsage calls. Usage records should be submitted in quick succession following a recorded event. Usage records aren't accepted 24 hours or more after an event. At the end of each billing cycle, a 6-hour grace period applies. We accept usage records for the previous billing month until 06:00 UTC on the first day of the next month. For example, you must submit March usage records before 06:00 UTC on April 1. On April 1 at 05:00 UTC, you can still submit records for March 31 (within the 6-hour grace period). After 06:00 UTC on April 1, March records are rejected regardless of the normal 24-hour submission window. After this grace period, we return a TimestampOutOfBoundsException error. BatchMeterUsage can process up to 25 UsageRecords at a time, and each request must be less than 1 MB in size. Optionally, you can have multiple usage allocations for usage data that's split into buckets according to predefined tags. BatchMeterUsage returns a list of UsageRecordResult objects, which have each UsageRecord. It also returns a list of UnprocessedRecords, which indicate errors on the service side that should be retried. For Amazon Web Services Regions that support BatchMeterUsage, see BatchMeterUsage Region support. For an example of BatchMeterUsage, see BatchMeterUsage code example in the Amazon Web Services Marketplace Seller Guide.

```sql
EXEC aws.meteringmarketplace.usages.batch_meter_usage 
@region='{{ region }}' --required 
@@json=
'{
"UsageRecords": "{{ UsageRecords }}", 
"ProductCode": "{{ ProductCode }}"
}'
;
```
</TabItem>
<TabItem value="meter_usage">

As a seller, your software hosted in the buyer's Amazon Web Services account uses this API action to emit metering records directly to Amazon Web Services Marketplace. You must use the following buyer Amazon Web Services account credentials to sign the API request. For Amazon EC2 deployments, your software must use the IAM role for Amazon EC2 to sign the API call for MeterUsage API operation. For Amazon EKS deployments, your software must use IAM roles for service accounts (IRSA) to sign the API call for the MeterUsage API operation. Using EKS Pod Identity, the node role, or long-term access keys is not supported. For Amazon ECS deployments, your software must use Amazon ECS task IAM role to sign the API call for the MeterUsage API operation. Using the node role or long-term access keys are not supported. For Amazon Bedrock AgentCore Runtime deployments, your software must use the AgentCore Runtime execution role to sign the API call for the MeterUsage API operation. Long-term access keys are not supported. The handling of MeterUsage requests varies between Amazon Bedrock AgentCore Runtime and non-Amazon Bedrock AgentCore deployments. For non-Amazon Bedrock AgentCore Runtime deployments, you can only report usage once per hour for each dimension. For AMI-based products, this is per dimension and per EC2 instance. For container products, this is per dimension and per ECS task or EKS pod. You can't modify values after they're recorded. If you report usage before a current hour ends, you will be unable to report additional usage until the next hour begins. The Timestamp request parameter is rounded down to the hour and used to enforce this once-per-hour rule for idempotency. For requests that are identical after the Timestamp is rounded down, the API is idempotent and returns the metering record ID. For Amazon Bedrock AgentCore Runtime deployments, you can report usage multiple times per hour for the same dimension. You do not need to aggregate metering records by the hour. You must include an idempotency token in the ClientToken request parameter. If using an Amazon SDK or the Amazon Web Services CLI, you must use the latest version which automatically includes an idempotency token in the ClientToken request parameter so that the request is processed successfully. The Timestamp request parameter is not rounded down to the hour and is not used for duplicate validation. Requests with duplicate Timestamps are aggregated as long as the ClientToken is unique. If you submit records more than six hours after events occur, the records won't be accepted. The timestamp in your request determines when an event is recorded. You can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define or allow the customer to define. For Amazon Web Services Regions that support MeterUsage, see MeterUsage Region support for Amazon EC2 and MeterUsage Region support for Amazon ECS and Amazon EKS.

```sql
EXEC aws.meteringmarketplace.usages.meter_usage 
@region='{{ region }}' --required 
@@json=
'{
"ProductCode": "{{ ProductCode }}", 
"Timestamp": "{{ Timestamp }}", 
"UsageDimension": "{{ UsageDimension }}", 
"UsageQuantity": {{ UsageQuantity }}, 
"DryRun": {{ DryRun }}, 
"UsageAllocations": "{{ UsageAllocations }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
