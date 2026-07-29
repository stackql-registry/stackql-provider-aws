--- 
title: managed_resource_visibilities
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_resource_visibilities
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

Creates, updates, deletes, gets or lists a <code>managed_resource_visibilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_resource_visibilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.managed_resource_visibilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_resource_visibility"
    values={[
        { label: 'get_managed_resource_visibility', value: 'get_managed_resource_visibility' }
    ]}
>
<TabItem value="get_managed_resource_visibility">

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
    <td><CopyableCode code="default_visibility" /></td>
    <td><code>string</code></td>
    <td>The default visibility setting for managed resources. A value of hidden indicates that managed resources are not included in Describe operation responses by default. A value of visible indicates that managed resources are included by default.</td>
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
    <td><a href="#get_managed_resource_visibility"><CopyableCode code="get_managed_resource_visibility" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves the managed resource visibility configuration for the account. The response indicates whether managed resources are hidden or visible by default.</td>
</tr>
<tr>
    <td><a href="#modify_managed_resource_visibility"><CopyableCode code="modify_managed_resource_visibility" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DefaultVisibility"><code>DefaultVisibility</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the managed resource visibility configuration for the account. Use this operation to control whether managed resources are hidden or visible by default. Visibility settings are account-wide and affect all IAM principals uniformly. Hidden resources remain fully operational and billable.</td>
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
<tr id="parameter-DefaultVisibility">
    <td><CopyableCode code="DefaultVisibility" /></td>
    <td><code>string</code></td>
    <td>The default visibility setting for managed resources. Valid values: hidden | visible.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_managed_resource_visibility"
    values={[
        { label: 'get_managed_resource_visibility', value: 'get_managed_resource_visibility' }
    ]}
>
<TabItem value="get_managed_resource_visibility">

Retrieves the managed resource visibility configuration for the account. The response indicates whether managed resources are hidden or visible by default.

```sql
SELECT
default_visibility
FROM aws.ec2.managed_resource_visibilities
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_managed_resource_visibility"
    values={[
        { label: 'modify_managed_resource_visibility', value: 'modify_managed_resource_visibility' }
    ]}
>
<TabItem value="modify_managed_resource_visibility">

Modifies the managed resource visibility configuration for the account. Use this operation to control whether managed resources are hidden or visible by default. Visibility settings are account-wide and affect all IAM principals uniformly. Hidden resources remain fully operational and billable.

```sql
UPDATE aws.ec2.managed_resource_visibilities
SET 
-- No updatable properties
WHERE 
DefaultVisibility = '{{ DefaultVisibility }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
default_visibility;
```
</TabItem>
</Tabs>
