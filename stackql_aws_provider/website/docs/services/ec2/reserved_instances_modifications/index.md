--- 
title: reserved_instances_modifications
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_instances_modifications
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

Creates, updates, deletes, gets or lists a <code>reserved_instances_modifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_instances_modifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.reserved_instances_modifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_instances_modifications"
    values={[
        { label: 'describe_reserved_instances_modifications', value: 'describe_reserved_instances_modifications' }
    ]}
>
<TabItem value="describe_reserved_instances_modifications">

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
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent. For more information, see Ensuring Idempotency.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The time when the modification request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_date" /></td>
    <td><code>string</code></td>
    <td>The time for the modification to become effective.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_results" /></td>
    <td><code>string</code></td>
    <td>Contains target configurations along with their corresponding new Reserved Instance IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_instances_ids" /></td>
    <td><code>string</code></td>
    <td>The IDs of one or more Reserved Instances.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_instances_modification_id" /></td>
    <td><code>string</code></td>
    <td>A unique ID for the Reserved Instance modification.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Reserved Instances modification request.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The reason for the status.</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string</code></td>
    <td>The time when the modification request was last updated.</td>
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
    <td><a href="#describe_reserved_instances_modifications"><CopyableCode code="describe_reserved_instances_modifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReservedInstancesModificationId"><code>ReservedInstancesModificationId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the modifications made to your Reserved Instances. If no parameter is specified, information about all your Reserved Instances modification requests is returned. If a modification ID is specified, only information about the specific modification is returned. For more information, see Modify Reserved Instances in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. client-token - The idempotency token for the modification request. create-date - The time when the modification request was created. effective-date - The time when the modification becomes effective. modification-result.reserved-instances-id - The ID for the Reserved Instances created as part of the modification request. This ID is only available when the status of the modification is fulfilled. modification-result.target-configuration.availability-zone - The Availability Zone for the new Reserved Instances. modification-result.target-configuration.availability-zone-id - The ID of the Availability Zone for the new Reserved Instances. modification-result.target-configuration.instance-count - The number of new Reserved Instances. modification-result.target-configuration.instance-type - The instance type of the new Reserved Instances. reserved-instances-id - The ID of the Reserved Instances modified. reserved-instances-modification-id - The ID of the modification request. status - The status of the Reserved Instances modification request (processing | fulfilled | failed). status-message - The reason for the status. update-date - The time when the modification request was last updated.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-ReservedInstancesModificationId">
    <td><CopyableCode code="ReservedInstancesModificationId" /></td>
    <td><code>array</code></td>
    <td>IDs for the submitted modification request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_instances_modifications"
    values={[
        { label: 'describe_reserved_instances_modifications', value: 'describe_reserved_instances_modifications' }
    ]}
>
<TabItem value="describe_reserved_instances_modifications">

Describes the modifications made to your Reserved Instances. If no parameter is specified, information about all your Reserved Instances modification requests is returned. If a modification ID is specified, only information about the specific modification is returned. For more information, see Modify Reserved Instances in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
client_token,
create_date,
effective_date,
modification_results,
reserved_instances_ids,
reserved_instances_modification_id,
status,
status_message,
update_date
FROM aws.ec2.reserved_instances_modifications
WHERE region = '{{ region }}' -- required
AND ReservedInstancesModificationId = '{{ ReservedInstancesModificationId }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>
