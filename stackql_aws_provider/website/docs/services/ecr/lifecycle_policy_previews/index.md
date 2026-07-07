--- 
title: lifecycle_policy_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_policy_previews
  - ecr
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

Creates, updates, deletes, gets or lists a <code>lifecycle_policy_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_policy_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.lifecycle_policy_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lifecycle_policy_preview"
    values={[
        { label: 'get_lifecycle_policy_preview', value: 'get_lifecycle_policy_preview' }
    ]}
>
<TabItem value="get_lifecycle_policy_preview">

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
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>The type of action to be taken.</td>
</tr>
<tr>
    <td><CopyableCode code="appliedRulePriority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the applied rule.</td>
</tr>
<tr>
    <td><CopyableCode code="imageDigest" /></td>
    <td><code>string</code></td>
    <td>The sha256 digest of the image manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="imagePushedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="imageTags" /></td>
    <td><code>array</code></td>
    <td>The list of tags associated with this image.</td>
</tr>
<tr>
    <td><CopyableCode code="storageClass" /></td>
    <td><code>string</code></td>
    <td>The storage class of the image. (ARCHIVE, STANDARD)</td>
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
    <td><a href="#get_lifecycle_policy_preview"><CopyableCode code="get_lifecycle_policy_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the results of the lifecycle policy preview request for the specified repository.</td>
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
    defaultValue="get_lifecycle_policy_preview"
    values={[
        { label: 'get_lifecycle_policy_preview', value: 'get_lifecycle_policy_preview' }
    ]}
>
<TabItem value="get_lifecycle_policy_preview">

Retrieves the results of the lifecycle policy preview request for the specified repository.

```sql
SELECT
action,
appliedRulePriority,
imageDigest,
imagePushedAt,
imageTags,
storageClass
FROM aws.ecr.lifecycle_policy_previews
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
