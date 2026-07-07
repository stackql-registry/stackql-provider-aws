--- 
title: delivery_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_sources
  - logs
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

Creates, updates, deletes, gets or lists a <code>delivery_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delivery_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.delivery_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_delivery_source"
    values={[
        { label: 'get_delivery_source', value: 'get_delivery_source' },
        { label: 'describe_delivery_sources', value: 'describe_delivery_sources' }
    ]}
>
<TabItem value="get_delivery_source">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the delivery source. (pattern: &lt;code&gt;&#91;\w-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies this delivery source.</td>
</tr>
<tr>
    <td><CopyableCode code="deliverySourceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The map of key-value pairs that configure the delivery source.</td>
</tr>
<tr>
    <td><CopyableCode code="logType" /></td>
    <td><code>string</code></td>
    <td>The type of log that the source is sending. For valid values for this parameter, see the documentation for the source service. (pattern: &lt;code&gt;&#91;\w&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArns" /></td>
    <td><code>array</code></td>
    <td>This array contains the ARN of the Amazon Web Services resource that sends logs and is represented by this delivery source. Currently, only one ARN can be in the array.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that is sending logs. (pattern: &lt;code&gt;&#91;\w_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the delivery source. A delivery source can have the status ACTIVE or INACTIVE. Note: This value is defined for selective log types. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the status of the delivery source. A status reason of RESOURCE_DELETED indicates that the resource associated with the delivery source has been deleted. Note: This value is defined for selective log types. (RESOURCE_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that have been assigned to this delivery source.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_delivery_sources">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the delivery source. (pattern: &lt;code&gt;&#91;\w-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies this delivery source.</td>
</tr>
<tr>
    <td><CopyableCode code="deliverySourceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The map of key-value pairs that configure the delivery source.</td>
</tr>
<tr>
    <td><CopyableCode code="logType" /></td>
    <td><code>string</code></td>
    <td>The type of log that the source is sending. For valid values for this parameter, see the documentation for the source service. (pattern: &lt;code&gt;&#91;\w&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArns" /></td>
    <td><code>array</code></td>
    <td>This array contains the ARN of the Amazon Web Services resource that sends logs and is represented by this delivery source. Currently, only one ARN can be in the array.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that is sending logs. (pattern: &lt;code&gt;&#91;\w_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the delivery source. A delivery source can have the status ACTIVE or INACTIVE. Note: This value is defined for selective log types. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the status of the delivery source. A status reason of RESOURCE_DELETED indicates that the resource associated with the delivery source has been deleted. Note: This value is defined for selective log types. (RESOURCE_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that have been assigned to this delivery source.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

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
    <td><a href="#get_delivery_source"><CopyableCode code="get_delivery_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves complete information about one delivery source.</td>
</tr>
<tr>
    <td><a href="#describe_delivery_sources"><CopyableCode code="describe_delivery_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of the delivery sources that have been created in the account.</td>
</tr>
<tr>
    <td><a href="#put_delivery_source"><CopyableCode code="put_delivery_source" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-logType"><code>logType</code></a></td>
    <td></td>
    <td>Creates or updates a logical delivery source. A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray for sending traces. To configure logs delivery between a delivery destination and an Amazon Web Services service that is supported as a delivery source, you must do the following: Use PutDeliverySource to create a delivery source, which is a logical object that represents the resource that is actually sending the logs. Use PutDeliveryDestination to create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination. If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination. Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery. You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported &#91;V2 Permissions&#93; in the table at Enabling logging from Amazon Web Services services. If you use this operation to update an existing delivery source, all the current delivery source parameters are overwritten with the new parameter values that you specify.</td>
</tr>
<tr>
    <td><a href="#delete_delivery_source"><CopyableCode code="delete_delivery_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a delivery source. A delivery is a connection between a logical delivery source and a logical delivery destination. You can't delete a delivery source if any current deliveries are associated with it. To find whether any deliveries are associated with this delivery source, use the DescribeDeliveries operation and check the deliverySourceName field in the results.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_delivery_source"
    values={[
        { label: 'get_delivery_source', value: 'get_delivery_source' },
        { label: 'describe_delivery_sources', value: 'describe_delivery_sources' }
    ]}
>
<TabItem value="get_delivery_source">

Retrieves complete information about one delivery source.

```sql
SELECT
name,
arn,
deliverySourceConfiguration,
logType,
resourceArns,
service,
status,
statusReason,
tags
FROM aws.logs.delivery_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_delivery_sources">

Retrieves a list of the delivery sources that have been created in the account.

```sql
SELECT
name,
arn,
deliverySourceConfiguration,
logType,
resourceArns,
service,
status,
statusReason,
tags
FROM aws.logs.delivery_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_delivery_source"
    values={[
        { label: 'put_delivery_source', value: 'put_delivery_source' }
    ]}
>
<TabItem value="put_delivery_source">

Creates or updates a logical delivery source. A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray for sending traces. To configure logs delivery between a delivery destination and an Amazon Web Services service that is supported as a delivery source, you must do the following: Use PutDeliverySource to create a delivery source, which is a logical object that represents the resource that is actually sending the logs. Use PutDeliveryDestination to create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination. If you are delivering logs cross-account, you must use PutDeliveryDestinationPolicy in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination. Use CreateDelivery to create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery. You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination. Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from Amazon Web Services services. If you use this operation to update an existing delivery source, all the current delivery source parameters are overwritten with the new parameter values that you specify.

```sql
REPLACE aws.logs.delivery_sources
SET 
name = '{{ name }}',
resourceArn = '{{ resourceArn }}',
logType = '{{ logType }}',
tags = '{{ tags }}',
deliverySourceConfiguration = '{{ deliverySourceConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND resourceArn = '{{ resourceArn }}' --required
AND logType = '{{ logType }}' --required
RETURNING
deliverySource;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_delivery_source"
    values={[
        { label: 'delete_delivery_source', value: 'delete_delivery_source' }
    ]}
>
<TabItem value="delete_delivery_source">

Deletes a delivery source. A delivery is a connection between a logical delivery source and a logical delivery destination. You can't delete a delivery source if any current deliveries are associated with it. To find whether any deliveries are associated with this delivery source, use the DescribeDeliveries operation and check the deliverySourceName field in the results.

```sql
DELETE FROM aws.logs.delivery_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
