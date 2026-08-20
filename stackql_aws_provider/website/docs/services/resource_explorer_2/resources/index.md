--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - resource_explorer_2
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_explorer_2.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resources"
    values={[
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="list_resources">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="cfn_resource_type" /></td>
    <td><code>string</code></td>
    <td>The CloudFormation resource type identifier for the resource, such as AWS::EC2::Instance or AWS::S3::Bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="last_reported_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that Resource Explorer last queried this resource and updated the index with the latest information about the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="owning_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td>A structure with additional type-specific details about the resource. These properties can be added by turning on integration between Resource Explorer and other Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region in which the resource was created and exists.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that owns the resource and is responsible for creating and updating it.</td>
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
    <td><a href="#list_resources"><CopyableCode code="list_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of resources and their details that match the specified criteria. This query must use a view. If you don’t explicitly specify a view, then Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation.</td>
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
    defaultValue="list_resources"
    values={[
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="list_resources">

Returns a list of resources and their details that match the specified criteria. This query must use a view. If you don’t explicitly specify a view, then Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation.

```sql
SELECT
arn,
cfn_resource_type,
last_reported_at,
owning_account_id,
properties,
region,
resource_type,
service
FROM aws.resource_explorer_2.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
