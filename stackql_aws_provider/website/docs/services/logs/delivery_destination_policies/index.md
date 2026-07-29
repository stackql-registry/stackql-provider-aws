--- 
title: delivery_destination_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_destination_policies
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

Creates, updates, deletes, gets or lists a <code>delivery_destination_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delivery_destination_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.delivery_destination_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_delivery_destination_policy"
    values={[
        { label: 'get_delivery_destination_policy', value: 'get_delivery_destination_policy' }
    ]}
>
<TabItem value="get_delivery_destination_policy">

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
    <td><CopyableCode code="delivery_destination_policy" /></td>
    <td><code>string</code></td>
    <td>The contents of the delivery destination policy.</td>
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
    <td><a href="#get_delivery_destination_policy"><CopyableCode code="get_delivery_destination_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the delivery destination policy assigned to the delivery destination that you specify. For more information about delivery destinations and their policies, see PutDeliveryDestinationPolicy.</td>
</tr>
<tr>
    <td><a href="#put_delivery_destination_policy"><CopyableCode code="put_delivery_destination_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deliveryDestinationName"><code>deliveryDestinationName</code></a>, <a href="#parameter-deliveryDestinationPolicy"><code>deliveryDestinationPolicy</code></a></td>
    <td></td>
    <td>Creates and assigns an IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. To configure the delivery of logs from an Amazon Web Services service in another account to a logs delivery destination in the current account, you must do the following: Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource. Create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination. Use this operation in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination. Create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery. Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported &#91;V2 Permissions&#93; in the table at Enabling logging from Amazon Web Services services. The contents of the policy must include two statements. One statement enables general logs delivery, and the other allows delivery to the chosen destination. See the examples for the needed policies.</td>
</tr>
<tr>
    <td><a href="#delete_delivery_destination_policy"><CopyableCode code="delete_delivery_destination_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a delivery destination policy. For more information about these policies, see PutDeliveryDestinationPolicy.</td>
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
    defaultValue="get_delivery_destination_policy"
    values={[
        { label: 'get_delivery_destination_policy', value: 'get_delivery_destination_policy' }
    ]}
>
<TabItem value="get_delivery_destination_policy">

Retrieves the delivery destination policy assigned to the delivery destination that you specify. For more information about delivery destinations and their policies, see PutDeliveryDestinationPolicy.

```sql
SELECT
delivery_destination_policy
FROM aws.logs.delivery_destination_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_delivery_destination_policy"
    values={[
        { label: 'put_delivery_destination_policy', value: 'put_delivery_destination_policy' }
    ]}
>
<TabItem value="put_delivery_destination_policy">

Creates and assigns an IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. To configure the delivery of logs from an Amazon Web Services service in another account to a logs delivery destination in the current account, you must do the following: Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see PutDeliverySource. Create a delivery destination, which is a logical object that represents the actual delivery destination. For more information, see PutDeliveryDestination. Use this operation in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination. Create a delivery by pairing exactly one delivery source and one delivery destination. For more information, see CreateDelivery. Only some Amazon Web Services services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from Amazon Web Services services. The contents of the policy must include two statements. One statement enables general logs delivery, and the other allows delivery to the chosen destination. See the examples for the needed policies.

```sql
REPLACE aws.logs.delivery_destination_policies
SET 
deliveryDestinationName = '{{ deliveryDestinationName }}',
deliveryDestinationPolicy = '{{ deliveryDestinationPolicy }}'
WHERE 
region = '{{ region }}' --required
AND deliveryDestinationName = '{{ deliveryDestinationName }}' --required
AND deliveryDestinationPolicy = '{{ deliveryDestinationPolicy }}' --required
RETURNING
policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_delivery_destination_policy"
    values={[
        { label: 'delete_delivery_destination_policy', value: 'delete_delivery_destination_policy' }
    ]}
>
<TabItem value="delete_delivery_destination_policy">

Deletes a delivery destination policy. For more information about these policies, see PutDeliveryDestinationPolicy.

```sql
DELETE FROM aws.logs.delivery_destination_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
