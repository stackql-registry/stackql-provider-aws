--- 
title: selling_system_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - selling_system_settings
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists a <code>selling_system_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="selling_system_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.selling_system_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_selling_system_settings"
    values={[
        { label: 'get_selling_system_settings', value: 'get_selling_system_settings' }
    ]}
>
<TabItem value="get_selling_system_settings">

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
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Specifies the catalog in which the settings are defined. Acceptable values include AWS for production and Sandbox for testing environments. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_snapshot_job_role_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the ARN of the IAM Role used for resource snapshot job executions. (pattern: &lt;code&gt;(?=.&#123;0,2048&#125;$)arn:aws:iam::\d&#123;12&#125;:role/(&#91;-+=,.@_a-zA-Z0-9&#93;+/)*&#91;-+=,.@_a-zA-Z0-9&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_selling_system_settings"><CopyableCode code="get_selling_system_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the currently set system settings, which include the IAM Role used for resource snapshot jobs.</td>
</tr>
<tr>
    <td><a href="#put_selling_system_settings"><CopyableCode code="put_selling_system_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the currently set system settings, which include the IAM Role used for resource snapshot jobs.</td>
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
    defaultValue="get_selling_system_settings"
    values={[
        { label: 'get_selling_system_settings', value: 'get_selling_system_settings' }
    ]}
>
<TabItem value="get_selling_system_settings">

Retrieves the currently set system settings, which include the IAM Role used for resource snapshot jobs.

```sql
SELECT
catalog,
resource_snapshot_job_role_arn
FROM aws.partnercentral_selling.selling_system_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_selling_system_settings"
    values={[
        { label: 'put_selling_system_settings', value: 'put_selling_system_settings' }
    ]}
>
<TabItem value="put_selling_system_settings">

Updates the currently set system settings, which include the IAM Role used for resource snapshot jobs.

```sql
REPLACE aws.partnercentral_selling.selling_system_settings
SET 
Catalog = '{{ Catalog }}',
ResourceSnapshotJobRoleIdentifier = '{{ ResourceSnapshotJobRoleIdentifier }}'
WHERE 
region = '{{ region }}' --required
RETURNING
catalog,
resource_snapshot_job_role_arn;
```
</TabItem>
</Tabs>
