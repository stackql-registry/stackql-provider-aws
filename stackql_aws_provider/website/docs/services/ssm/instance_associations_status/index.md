--- 
title: instance_associations_status
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_associations_status
  - ssm
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

Creates, updates, deletes, gets or lists an <code>instance_associations_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_associations_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.instance_associations_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_associations_status"
    values={[
        { label: 'describe_instance_associations_status', value: 'describe_instance_associations_status' }
    ]}
>
<TabItem value="describe_instance_associations_status">

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
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The association ID. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_name" /></td>
    <td><code>string</code></td>
    <td>The name of the association applied to the managed node. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_version" /></td>
    <td><code>string</code></td>
    <td>The version of the association applied to the managed node. (pattern: &lt;code&gt;(&#91;$&#93;LATEST)|(&#91;1-9&#93;&#91;0-9&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="detailed_status" /></td>
    <td><code>string</code></td>
    <td>Detailed status information about the association.</td>
</tr>
<tr>
    <td><CopyableCode code="document_version" /></td>
    <td><code>string</code></td>
    <td>The association document versions. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>An error code returned by the request to create the association.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the association ran.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_summary" /></td>
    <td><code>string</code></td>
    <td>Summary information about association execution.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The managed node ID where the association was created. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the association. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.:/&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_url" /></td>
    <td><code>object</code></td>
    <td>A URL for an S3 bucket where you want to store the results of this request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status information about the association.</td>
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
    <td><a href="#describe_instance_associations_status"><CopyableCode code="describe_instance_associations_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The status of the associations for the managed nodes.</td>
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
    defaultValue="describe_instance_associations_status"
    values={[
        { label: 'describe_instance_associations_status', value: 'describe_instance_associations_status' }
    ]}
>
<TabItem value="describe_instance_associations_status">

The status of the associations for the managed nodes.

```sql
SELECT
association_id,
association_name,
association_version,
detailed_status,
document_version,
error_code,
execution_date,
execution_summary,
instance_id,
name,
output_url,
status
FROM aws.ssm.instance_associations_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
