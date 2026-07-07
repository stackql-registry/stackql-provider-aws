--- 
title: application_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - application_policies
  - serverlessrepo
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

Creates, updates, deletes, gets or lists an <code>application_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.serverlessrepo.application_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_policy"
    values={[
        { label: 'get_application_policy', value: 'get_application_policy' }
    ]}
>
<TabItem value="get_application_policy">

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
    <td><CopyableCode code="Statements" /></td>
    <td><code>array</code></td>
    <td>An array of policy statements applied to the application.</td>
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
    <td><a href="#get_application_policy"><CopyableCode code="get_application_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the policy for the application.</td>
</tr>
<tr>
    <td><a href="#put_application_policy"><CopyableCode code="put_application_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the permission policy for an application. For the list of actions supported for this operation, see Application Permissions .</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application_policy"
    values={[
        { label: 'get_application_policy', value: 'get_application_policy' }
    ]}
>
<TabItem value="get_application_policy">

Retrieves the policy for the application.

```sql
SELECT
Statements
FROM aws.serverlessrepo.application_policies
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_application_policy"
    values={[
        { label: 'put_application_policy', value: 'put_application_policy' }
    ]}
>
<TabItem value="put_application_policy">

Sets the permission policy for an application. For the list of actions supported for this operation, see Application Permissions .

```sql
REPLACE aws.serverlessrepo.application_policies
SET 
Statements = '{{ Statements }}'
WHERE 
application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Statements;
```
</TabItem>
</Tabs>
