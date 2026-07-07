--- 
title: q_personalization_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - q_personalization_configurations
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>q_personalization_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="q_personalization_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.q_personalization_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_q_personalization_configuration"
    values={[
        { label: 'describe_q_personalization_configuration', value: 'describe_q_personalization_configuration' }
    ]}
>
<TabItem value="describe_q_personalization_configuration">

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
    <td><CopyableCode code="PersonalizationMode" /></td>
    <td><code>string</code></td>
    <td>A value that indicates whether personalization is enabled or not. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_q_personalization_configuration"><CopyableCode code="describe_q_personalization_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a personalization configuration.</td>
</tr>
<tr>
    <td><a href="#update_q_personalization_configuration"><CopyableCode code="update_q_personalization_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PersonalizationMode"><code>PersonalizationMode</code></a></td>
    <td></td>
    <td>Updates a personalization configuration.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account account that contains the personalization configuration that the user wants to update.</td>
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
    defaultValue="describe_q_personalization_configuration"
    values={[
        { label: 'describe_q_personalization_configuration', value: 'describe_q_personalization_configuration' }
    ]}
>
<TabItem value="describe_q_personalization_configuration">

Describes a personalization configuration.

```sql
SELECT
PersonalizationMode,
RequestId,
Status
FROM aws.quicksight.q_personalization_configurations
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_q_personalization_configuration"
    values={[
        { label: 'update_q_personalization_configuration', value: 'update_q_personalization_configuration' }
    ]}
>
<TabItem value="update_q_personalization_configuration">

Updates a personalization configuration.

```sql
UPDATE aws.quicksight.q_personalization_configurations
SET 
PersonalizationMode = '{{ PersonalizationMode }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND PersonalizationMode = '{{ PersonalizationMode }}' --required
RETURNING
PersonalizationMode,
RequestId,
Status;
```
</TabItem>
</Tabs>
