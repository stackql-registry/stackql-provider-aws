--- 
title: enforced_guardrail_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - enforced_guardrail_configurations
  - bedrock
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

Creates, updates, deletes, gets or lists an <code>enforced_guardrail_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enforced_guardrail_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.enforced_guardrail_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#put_enforced_guardrail_configuration"><CopyableCode code="put_enforced_guardrail_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-guardrailInferenceConfig"><code>guardrailInferenceConfig</code></a></td>
    <td></td>
    <td>Sets the account-level enforced guardrail configuration.</td>
</tr>
<tr>
    <td><a href="#delete_enforced_guardrail_configuration"><CopyableCode code="delete_enforced_guardrail_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the account-level enforced guardrail configuration.</td>
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
<tr id="parameter-config_id">
    <td><CopyableCode code="config_id" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the account enforced configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="put_enforced_guardrail_configuration"
    values={[
        { label: 'put_enforced_guardrail_configuration', value: 'put_enforced_guardrail_configuration' }
    ]}
>
<TabItem value="put_enforced_guardrail_configuration">

Sets the account-level enforced guardrail configuration.

```sql
REPLACE aws.bedrock.enforced_guardrail_configurations
SET 
configId = '{{ configId }}',
guardrailInferenceConfig = '{{ guardrailInferenceConfig }}'
WHERE 
region = '{{ region }}' --required
AND guardrailInferenceConfig = '{{ guardrailInferenceConfig }}' --required
RETURNING
configId,
updatedAt,
updatedBy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_enforced_guardrail_configuration"
    values={[
        { label: 'delete_enforced_guardrail_configuration', value: 'delete_enforced_guardrail_configuration' }
    ]}
>
<TabItem value="delete_enforced_guardrail_configuration">

Deletes the account-level enforced guardrail configuration.

```sql
DELETE FROM aws.bedrock.enforced_guardrail_configurations
WHERE config_id = '{{ config_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
