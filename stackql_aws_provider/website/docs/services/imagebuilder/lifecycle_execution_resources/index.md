--- 
title: lifecycle_execution_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_execution_resources
  - imagebuilder
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

Creates, updates, deletes, gets or lists a <code>lifecycle_execution_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_execution_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.lifecycle_execution_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_lifecycle_execution_resources"
    values={[
        { label: 'list_lifecycle_execution_resources', value: 'list_lifecycle_execution_resources' }
    ]}
>
<TabItem value="list_lifecycle_execution_resources">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The account that owns the impacted resource.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>The action to take for the identified resource.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ending timestamp from the lifecycle action that was applied to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="imageUris" /></td>
    <td><code>array</code></td>
    <td>For an impacted container image, this identifies a list of URIs for associated container images distributed to ECR repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the lifecycle execution resource is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>Identifies the impacted resource. The resource ID depends on the type of resource, as follows. Image Builder image resources: Amazon Resource Name (ARN) Distributed AMIs: AMI ID Container images distributed to an ECR repository: image URI or SHA Digest</td>
</tr>
<tr>
    <td><CopyableCode code="snapshots" /></td>
    <td><code>array</code></td>
    <td>A list of associated resource snapshots for the impacted resource if it’s an AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The starting timestamp from the lifecycle action that was applied to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>The runtime state for the lifecycle execution.</td>
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
    <td><a href="#list_lifecycle_execution_resources"><CopyableCode code="list_lifecycle_execution_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List resources that the runtime instance of the image lifecycle identified for lifecycle actions.</td>
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
    defaultValue="list_lifecycle_execution_resources"
    values={[
        { label: 'list_lifecycle_execution_resources', value: 'list_lifecycle_execution_resources' }
    ]}
>
<TabItem value="list_lifecycle_execution_resources">

List resources that the runtime instance of the image lifecycle identified for lifecycle actions.

```sql
SELECT
accountId,
action,
endTime,
imageUris,
region,
resourceId,
snapshots,
startTime,
state
FROM aws.imagebuilder.lifecycle_execution_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
