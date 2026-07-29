--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - kinesis
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

Creates, updates, deletes, gets or lists a <code>resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' }
    ]}
>
<TabItem value="get_resource_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>Details of the resource policy. This is formatted as a JSON string.</td>
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
    <td><a href="#get_resource_policy"><CopyableCode code="get_resource_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a policy attached to the specified data stream or consumer. Request patterns can be one of the following: Data stream pattern: arn:aws.*:kinesis:.*:\d&#123;12&#125;:.*stream/\S+ Consumer pattern: ^(arn):aws.*:kinesis:.*:\d&#123;12&#125;:.*stream\/&#91;a-zA-Z0-9_.-&#93;+\/consumer\/&#91;a-zA-Z0-9_.-&#93;+:&#91;0-9&#93;+</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceARN"><code>ResourceARN</code></a></td>
    <td></td>
    <td>Attaches a resource-based policy to a data stream or registered consumer. If you are using an identity other than the root user of the Amazon Web Services account that owns the resource, the calling identity must have the PutResourcePolicy permissions on the specified Kinesis Data Streams resource and belong to the owner's account in order to use this operation. If you don't have PutResourcePolicy permissions, Amazon Kinesis Data Streams returns a 403 Access Denied error. If you receive a ResourceNotFoundException, check to see if you passed a valid stream or consumer resource. Request patterns can be one of the following: Data stream pattern: arn:aws.*:kinesis:.*:\d&#123;12&#125;:.*stream/\S+ Consumer pattern: ^(arn):aws.*:kinesis:.*:\d&#123;12&#125;:.*stream\/&#91;a-zA-Z0-9_.-&#93;+\/consumer\/&#91;a-zA-Z0-9_.-&#93;+:&#91;0-9&#93;+ For more information, see Controlling Access to Amazon Kinesis Data Streams Resources Using IAM.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a policy for the specified data stream or consumer. Request patterns can be one of the following: Data stream pattern: arn:aws.*:kinesis:.*:\d&#123;12&#125;:.*stream/\S+ Consumer pattern: ^(arn):aws.*:kinesis:.*:\d&#123;12&#125;:.*stream\/&#91;a-zA-Z0-9_.-&#93;+\/consumer\/&#91;a-zA-Z0-9_.-&#93;+:&#91;0-9&#93;+</td>
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
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' }
    ]}
>
<TabItem value="get_resource_policy">

Returns a policy attached to the specified data stream or consumer. Request patterns can be one of the following: Data stream pattern: arn:aws.*:kinesis:.*:\d&#123;12&#125;:.*stream/\S+ Consumer pattern: ^(arn):aws.*:kinesis:.*:\d&#123;12&#125;:.*stream\/[a-zA-Z0-9_.-]+\/consumer\/[a-zA-Z0-9_.-]+:[0-9]+

```sql
SELECT
policy
FROM aws.kinesis.resource_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_policy"
    values={[
        { label: 'put_resource_policy', value: 'put_resource_policy' }
    ]}
>
<TabItem value="put_resource_policy">

Attaches a resource-based policy to a data stream or registered consumer. If you are using an identity other than the root user of the Amazon Web Services account that owns the resource, the calling identity must have the PutResourcePolicy permissions on the specified Kinesis Data Streams resource and belong to the owner's account in order to use this operation. If you don't have PutResourcePolicy permissions, Amazon Kinesis Data Streams returns a 403 Access Denied error. If you receive a ResourceNotFoundException, check to see if you passed a valid stream or consumer resource. Request patterns can be one of the following: Data stream pattern: arn:aws.*:kinesis:.*:\d&#123;12&#125;:.*stream/\S+ Consumer pattern: ^(arn):aws.*:kinesis:.*:\d&#123;12&#125;:.*stream\/[a-zA-Z0-9_.-]+\/consumer\/[a-zA-Z0-9_.-]+:[0-9]+ For more information, see Controlling Access to Amazon Kinesis Data Streams Resources Using IAM.

```sql
REPLACE aws.kinesis.resource_policies
SET 
ResourceARN = '{{ ResourceARN }}',
StreamId = '{{ StreamId }}',
Policy = '{{ Policy }}'
WHERE 
region = '{{ region }}' --required
AND ResourceARN = '{{ ResourceARN }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_policy"
    values={[
        { label: 'delete_resource_policy', value: 'delete_resource_policy' }
    ]}
>
<TabItem value="delete_resource_policy">

Delete a policy for the specified data stream or consumer. Request patterns can be one of the following: Data stream pattern: arn:aws.*:kinesis:.*:\d&#123;12&#125;:.*stream/\S+ Consumer pattern: ^(arn):aws.*:kinesis:.*:\d&#123;12&#125;:.*stream\/[a-zA-Z0-9_.-]+\/consumer\/[a-zA-Z0-9_.-]+:[0-9]+

```sql
DELETE FROM aws.kinesis.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
