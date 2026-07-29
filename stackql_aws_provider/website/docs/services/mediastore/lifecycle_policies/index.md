--- 
title: lifecycle_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_policies
  - mediastore
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

Creates, updates, deletes, gets or lists a <code>lifecycle_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediastore.lifecycle_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lifecycle_policy"
    values={[
        { label: 'get_lifecycle_policy', value: 'get_lifecycle_policy' }
    ]}
>
<TabItem value="get_lifecycle_policy">

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
    <td><CopyableCode code="lifecycle_policy" /></td>
    <td><code>string</code></td>
    <td>The object lifecycle policy that is assigned to the container. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_lifecycle_policy"><CopyableCode code="get_lifecycle_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the object lifecycle policy that is assigned to a container.</td>
</tr>
<tr>
    <td><a href="#put_lifecycle_policy"><CopyableCode code="put_lifecycle_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerName"><code>ContainerName</code></a>, <a href="#parameter-LifecyclePolicy"><code>LifecyclePolicy</code></a></td>
    <td></td>
    <td>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect. For information about how to construct an object lifecycle policy, see Components of an Object Lifecycle Policy.</td>
</tr>
<tr>
    <td><a href="#delete_lifecycle_policy"><CopyableCode code="delete_lifecycle_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.</td>
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
    defaultValue="get_lifecycle_policy"
    values={[
        { label: 'get_lifecycle_policy', value: 'get_lifecycle_policy' }
    ]}
>
<TabItem value="get_lifecycle_policy">

Retrieves the object lifecycle policy that is assigned to a container.

```sql
SELECT
lifecycle_policy
FROM aws.mediastore.lifecycle_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_lifecycle_policy"
    values={[
        { label: 'put_lifecycle_policy', value: 'put_lifecycle_policy' }
    ]}
>
<TabItem value="put_lifecycle_policy">

Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect. For information about how to construct an object lifecycle policy, see Components of an Object Lifecycle Policy.

```sql
REPLACE aws.mediastore.lifecycle_policies
SET 
ContainerName = '{{ ContainerName }}',
LifecyclePolicy = '{{ LifecyclePolicy }}'
WHERE 
region = '{{ region }}' --required
AND ContainerName = '{{ ContainerName }}' --required
AND LifecyclePolicy = '{{ LifecyclePolicy }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lifecycle_policy"
    values={[
        { label: 'delete_lifecycle_policy', value: 'delete_lifecycle_policy' }
    ]}
>
<TabItem value="delete_lifecycle_policy">

Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.

```sql
DELETE FROM aws.mediastore.lifecycle_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
