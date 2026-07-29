--- 
title: addresses_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - addresses_attributes
  - ec2
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

Creates, updates, deletes, gets or lists an <code>addresses_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addresses_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.addresses_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_addresses_attribute"
    values={[
        { label: 'describe_addresses_attribute', value: 'describe_addresses_attribute' }
    ]}
>
<TabItem value="describe_addresses_attribute">

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
    <td><CopyableCode code="allocation_id" /></td>
    <td><code>string</code></td>
    <td>&#91;EC2-VPC&#93; The allocation ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ptr_record" /></td>
    <td><code>string</code></td>
    <td>The pointer (PTR) record for the IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="ptr_record_update" /></td>
    <td><code>string</code></td>
    <td>The updated PTR record for the IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="public_ip" /></td>
    <td><code>string</code></td>
    <td>The public IP address.</td>
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
    <td><a href="#describe_addresses_attribute"><CopyableCode code="describe_addresses_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllocationId"><code>AllocationId</code></a>, <a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the attributes of the specified Elastic IP addresses. For requirements, see Using reverse DNS for email applications.</td>
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
<tr id="parameter-AllocationId">
    <td><CopyableCode code="AllocationId" /></td>
    <td><code>array</code></td>
    <td>&#91;EC2-VPC&#93; The allocation IDs.</td>
</tr>
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The attribute of the IP address.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_addresses_attribute"
    values={[
        { label: 'describe_addresses_attribute', value: 'describe_addresses_attribute' }
    ]}
>
<TabItem value="describe_addresses_attribute">

Describes the attributes of the specified Elastic IP addresses. For requirements, see Using reverse DNS for email applications.

```sql
SELECT
allocation_id,
ptr_record,
ptr_record_update,
public_ip
FROM aws.ec2.addresses_attributes
WHERE region = '{{ region }}' -- required
AND AllocationId = '{{ AllocationId }}'
AND Attribute = '{{ Attribute }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
