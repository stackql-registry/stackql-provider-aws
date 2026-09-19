--- 
title: data_automations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_automations
  - bedrock_data_automation_runtime
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

Creates, updates, deletes, gets or lists a <code>data_automations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_automations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_data_automation_runtime.data_automations" /></td></tr>
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
    <td><a href="#invoke_data_automation"><CopyableCode code="invoke_data_automation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputConfiguration"><code>inputConfiguration</code></a>, <a href="#parameter-dataAutomationProfileArn"><code>dataAutomationProfileArn</code></a></td>
    <td></td>
    <td>Sync API: Invoke data automation.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="invoke_data_automation"
    values={[
        { label: 'invoke_data_automation', value: 'invoke_data_automation' }
    ]}
>
<TabItem value="invoke_data_automation">

Sync API: Invoke data automation.

```sql
EXEC aws.bedrock_data_automation_runtime.data_automations.invoke_data_automation 
@region='{{ region }}' --required 
@@json=
'{
"inputConfiguration": "{{ inputConfiguration }}", 
"dataAutomationConfiguration": "{{ dataAutomationConfiguration }}", 
"blueprints": "{{ blueprints }}", 
"dataAutomationProfileArn": "{{ dataAutomationProfileArn }}", 
"encryptionConfiguration": "{{ encryptionConfiguration }}", 
"outputConfiguration": "{{ outputConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
